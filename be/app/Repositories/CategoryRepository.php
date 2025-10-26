<?php

namespace App\Repositories;

use App\Models\Category;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CategoryRepository
{
    /**
     * Fetch all categories.
     *
     * @return \Illuminate\Support\Collection
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

    /**
     * Fetch category by ID.
     *
     * @param int $id
     * @return array
     * @throws ModelNotFoundException
     */
    public function getCategoryById($id)
    {
        try {
            $category = Category::findOrFail($id);

            return [
                'id' => $category->id,
                'name' => $category->name,
            ];
        } catch (ModelNotFoundException $e) {
            throw $e;
        } catch (Exception $e) {
            throw new Exception('Failed to fetch category: ' . $e->getMessage());
        }
    }

    /**
     * Create a new category.
     */
    public function createCategory(array $data)
    {
        try {
            return Category::create($data);
        } catch (Exception $e) {
            throw new Exception('Failed to create category: ' . $e->getMessage());
        }
    }

    /**
     * Update category by ID.
     */
    public function updateCategory($id, array $data)
    {
        try {
            $category = Category::findOrFail($id);
            $category->update($data);
            return $category;
        } catch (ModelNotFoundException $e) {
            throw $e;
        } catch (Exception $e) {
            throw new Exception('Failed to update category: ' . $e->getMessage());
        }
    }

    /**
     * Delete category by ID.
     */
    public function deleteCategory($id)
    {
        try {
            $category = Category::findOrFail($id);
            $category->delete();
            return true;
        } catch (ModelNotFoundException $e) {
            throw $e;
        } catch (Exception $e) {
            throw new Exception('Failed to delete category: ' . $e->getMessage());
        }
    }
}
