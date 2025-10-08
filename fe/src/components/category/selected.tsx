interface SelectedMenuProps {
  placeholder: string;
  books: Book[];
}
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

export function SelectedMenu({ placeholder, books }: SelectedMenuProps) {
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
    <Select>
      <SelectTrigger className="w-[180px] shadow shadow-black/30 bg-[#D4E2FF] cursor-pointer">
        <SelectValue placeholder={placeholder} className="text-gray-100" />
      </SelectTrigger>
      <SelectContent className="bg-[#D4E2FF] shadow shadow-black/30">
        {placeholder === "Title"
          ? getTitles.map((title, index) => (
              <SelectItem value={title} key={index}>
                {title}
              </SelectItem>
            ))
          : getCategory.map((category, index) => (
              <SelectItem value={category} key={index}>
                {category}
              </SelectItem>
            ))}
      </SelectContent>
    </Select>
  );
}
