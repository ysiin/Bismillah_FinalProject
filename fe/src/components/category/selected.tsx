import { getCategories } from "@/axios/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/selected-menu";
import { useEffect, useState } from "react";
import type { Category } from "../home/category-section";
import type { Book } from "@/page/home";

interface SelectedMenuProps {
  placeholder: string;
  books: Book[];
  onValueChange: (value: string) => void;
  value: string;
}

export function SelectedMenu({
  placeholder,
  books,
  onValueChange,
  value,
}: SelectedMenuProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const getTitles = Array.from(new Set(books.map((book) => book.title)));
  const getCategory = Array.from(
    new Set(categories.map((category) => category.name))
  );

  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger className="w-[180px] shadow shadow-black/30 bg-[#D4E2FF] cursor-pointer">
        <SelectValue
          placeholder={placeholder}
          className="text-gray-100 cursor-pointer"
        />
      </SelectTrigger>
      <SelectContent className="bg-[#D4E2FF] shadow shadow-black/30 ">
        {placeholder === "Title"
          ? getTitles.map((title, index) => (
              <SelectItem
                value={title}
                key={index}
                className="hover:bg-[#0054FD] hover:text-white cursor-pointer"
              >
                {title}
              </SelectItem>
            ))
          : getCategory.map((category, index) => (
              <SelectItem
                value={category}
                key={index}
                className="hover:bg-[#0054FD] hover:text-white cursor-pointer"
              >
                {category}
              </SelectItem>
            ))}
      </SelectContent>
    </Select>
  );
}
