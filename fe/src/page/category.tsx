import { getBooks, getCategories } from "@/axios/api";
import HeaderCategory from "@/components/category/header-category";
import HeaderSection from "@/components/header-section";
import { useEffect, useState, useMemo } from "react";
import type { Book } from "./home";
import BodyCategory from "@/components/category/body-category";

interface Category {
  id: number;
  name: string;
}

export default function Category() {
  const [books, setBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYears, setSelectedYears] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksData, categoriesData] = await Promise.all([
          getBooks(),
          getCategories(),
        ]);
        setBooks(booksData);
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const categoryMap = useMemo(() => {
    return categories.reduce((map, category) => {
      map[category.id] = category.name;
      return map;
    }, {} as Record<number, string>);
  }, [categories]);

  const filteredBooks = useMemo(() => {
    let tempBooks = [...books];

    if (searchQuery) {
      tempBooks = tempBooks.filter((book) => {
        const categoryName = categoryMap[book.category_id] || "";
        return (
          categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.publisher.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    }

    if (isFilterApplied) {
      if (selectedYears) {
        tempBooks = tempBooks.filter(
          (book) => String(book.year_published) === selectedYears
        );
      }
      if (selectedCategoryName) {
        const categoryId = categories.find(
          (c) => c.name === selectedCategoryName
        )?.id;
        if (categoryId) {
          tempBooks = tempBooks.filter(
            (book) => book.category_id === categoryId
          );
        }
      }
    }

    return tempBooks;
  }, [
    books,
    searchQuery,
    selectedYears,
    selectedCategoryName,
    isFilterApplied,
    categories,
    categoryMap,
  ]);

  const handleFilterClick = () => {
    setIsFilterApplied(true);
  };

  const handleResetFilters = () => {
    setSelectedYears("");
    setSelectedCategoryName("");
    setIsFilterApplied(false);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setIsFilterApplied(false);
  };

  return (
    <>
      <header className="w-full h-28">
        <HeaderSection handleSearch={() => {}} searchQuery="" />
      </header>
      <div className="flex flex-col gap-10 bg-[#EAEFF4] h-[88.3%] p-10">
        <HeaderCategory
          handleSearch={handleSearchChange}
          searchQuery={searchQuery}
          selectedYears={selectedYears}
          selectedCategory={selectedCategoryName}
          setSelectedYears={setSelectedYears}
          setSelectedCategory={setSelectedCategoryName}
          handleFilter={handleFilterClick}
          handleResetFilters={handleResetFilters}
        />
        <BodyCategory books={filteredBooks} />
      </div>
    </>
  );
}
