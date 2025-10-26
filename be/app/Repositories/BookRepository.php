<?php

namespace App\Repositories;

use App\Models\Book;
use Exception;

class BookRepository
{
    /**
     * Fetch all books with their categories.
     *
     * @return array
     */
    public function getAllBooks()
    {
        try {
            $books = Book::with('category')->get();

            return $books->map(function ($book) {
                return [
                    'id' => $book->id,
                    'title' => $book->title,
                    'author' => $book->author,
                    'isbn' => $book->isbn,
                    'category' => $book->category ? $book->category->name : null,
                    'publisher' => $book->publisher,
                    'year_published' => $book->year_published,
                    'total_copies' => $book->total_copies,
                    'available_copies' => $book->available_copies,
                    'ratings' => $book->ratings,
                ];
            });
        } catch (Exception $e) {
            throw new Exception('Failed to fetch books: ' . $e->getMessage());
        }
    }


    public function getBookById($id)
    {
        try {
            $book = Book::with('category')->findOrFail($id);

            return [
                'id' => $book->id,
                'title' => $book->title,
                'author' => $book->author,
                'isbn' => $book->isbn,
                'category' => $book->category ? $book->category->name : null,
                'publisher' => $book->publisher,
                'year_published' => $book->year_published,
                'total_copies' => $book->total_copies,
                'available_copies' => $book->available_copies,
                'ratings' => $book->ratings,
            ];
        } catch (Exception $e) {
            throw new Exception('Failed to fetch book: ' . $e->getMessage());
        }
    }

    public function createBook(array $data)
    {
        try {
            $book = Book::create($data);
            return $book;
        } catch (Exception $e) {
            throw new Exception('Failed to create book: ' . $e->getMessage());
        }
    }

    public function updateBook($id, array $data)
    {
        try {
            $book = Book::findOrFail($id);
            $book->update($data);
            return $book;
        } catch (Exception $e) {
            throw new Exception('Failed to update book: ' . $e->getMessage());
        }
    }


    public function deleteBook($id)
    {
        try {
            $book = Book::findOrFail($id);
            $book->delete();
            return true;
        } catch (Exception $e) {
            throw new Exception('Failed to delete book: ' . $e->getMessage());
        }
    }
}
