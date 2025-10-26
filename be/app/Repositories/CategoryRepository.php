<?php

namespace App\Repositories;

use App\Models\Category;
use Exception;

class CategoryRepository
{
    /**
     * Fetch all categories.
     *
     * @return array
     */
    public function getAllCategories()
    {
        try {
            $categories = Category::all();

            return $categories->map(function ($category) {
                return [
                    'id' => $category->id,
                    'name' => $category->name,
                ];
            });
        } catch (Exception $e) {
            throw new Exception('Failed to fetch categories: ' . $e->getMessage());
        }
    }

    public function getCategoryById($id)
    {
        try {
            $category = Category::findOrFail($id);

            return [
                'id' => $category->id,
                'name' => $category->name,
            ];
        } catch (Exception $e) {
            throw new Exception('Failed to fetch category: ' . $e->getMessage());
        }
    }

    public function createCategory(array $data)
    {
        try {
            $category = Category::create($data);
            return $category;
        } catch (Exception $e) {
            throw new Exception('Failed to create category: ' . $e->getMessage());
        }
    }

    public function updateCategory($id, array $data)
    {
        try {
            $category = Category::findOrFail($id);
            $category->update($data);
            return $category;
        } catch (Exception $e) {
            throw new Exception('Failed to update category: ' . $e->getMessage());
        }
    }

    public function deleteCategory($id)
    {
        try {
            $category = Category::findOrFail($id);
            $category->delete();
            return true;
        } catch (Exception $e) {
            throw new Exception('Failed to delete category: ' . $e->getMessage());
        }
    }
}
