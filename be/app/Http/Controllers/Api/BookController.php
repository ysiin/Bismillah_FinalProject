<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Repositories\BookRepository;



/**
 * @OA\Tag(
 *     name="Books",
 *     description="API endpoints for managing books"
 * )
 */

class BookController extends Controller
{

    /**
     * @OA\Get(
     *     path="/api/books",
     *     tags={"Books"},
     *     summary="Get all books",
     *     @OA\Response(response=200, description="Success"),
     *     @OA\Response(response=500, description="Failed to fetch books")
     * )
     */


    protected $bookRepository;

    public function __construct(BookRepository $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    public function index()
    {
        try {
            $books = $this->bookRepository->getAllBooks();

            return response()->json([
                'success' => true,
                'data' => $books,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch books',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * @OA\Post(
     *     path="/api/books",
     *     tags={"Books"},
     *     summary="Create a new book",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"title","author","isbn","category_id","total_copies","available_copies"},
     *             @OA\Property(property="title", type="string", example="Belajar Laravel untuk Pemula"),
     *             @OA\Property(property="author", type="string", example="Yaa Siin"),
     *             @OA\Property(property="description", type="string", example="Panduan lengkap belajar Laravel"),
     *             @OA\Property(property="isbn", type="string", example="9786020329585"),
     *             @OA\Property(property="publisher", type="string", example="Gramedia"),
     *             @OA\Property(property="year_published", type="integer", example=2024),
     *             @OA\Property(property="category_id", type="integer", example=1),
     *             @OA\Property(property="total_copies", type="integer", example=10),
     *             @OA\Property(property="available_copies", type="integer", example=8),
     *             @OA\Property(property="total_pages", type="integer", example=250),
     *             @OA\Property(property="ratings", type="integer", example=5)
     *         )
     *     ),
     *     @OA\Response(response=201, description="Book created successfully"),
     *     @OA\Response(response=500, description="Failed to create book")
     * )
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'author' => 'required|string|max:255',
                'description' => 'nullable|string',
                'isbn' => 'required|string|max:13|unique:books,isbn',
                'publisher' => 'nullable|string|max:255',
                'year_published' => 'nullable|integer|min:1000|max:' . date('Y'),
                'category_id' => 'required|integer|exists:categories,id',
                'total_copies' => 'required|integer|min:1',
                'available_copies' => 'required|integer|min:0|max:' . $request->total_copies,
                'total_pages' => 'nullable|integer|min:1',
                'ratings' => 'nullable|integer|min:1|max:5',
                'cover_image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            ]);

            $book = $this->bookRepository->createBook($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Book created successfully',
                'data' => $book
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create book',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/books/{id}",
     *     tags={"Books"},
     *     summary="Get book by ID",
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Success"),
     *     @OA\Response(response=404, description="Book not found")
     * )
     */
    public function show(string $id)
    {
        try {
            $book = $this->bookRepository->getBookById($id);
            return response()->json([
                'success' => true,
                'data' => $book
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Book not found',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch book',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * @OA\Put(
     *     path="/api/books/{id}",
     *     tags={"Books"},
     *     summary="Update book by ID",
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="title", type="string", example="Laravel Advanced Guide"),
     *             @OA\Property(property="author", type="string", example="Yaa Siin"),
     *             @OA\Property(property="description", type="string", example="Update konten buku Laravel"),
     *             @OA\Property(property="isbn", type="string", example="9786020329585"),
     *             @OA\Property(property="publisher", type="string", example="Gramedia Pustaka Utama"),
     *             @OA\Property(property="year_published", type="integer", example=2025),
     *             @OA\Property(property="category_id", type="integer", example=2),
     *             @OA\Property(property="total_copies", type="integer", example=12),
     *             @OA\Property(property="available_copies", type="integer", example=9),
     *             @OA\Property(property="total_pages", type="integer", example=280),
     *             @OA\Property(property="ratings", type="integer", example=4)
     *         )
     *     ),
     *     @OA\Response(response=200, description="Book updated successfully"),
     *     @OA\Response(response=404, description="Book not found"),
     *     @OA\Response(response=500, description="Failed to update book")
     * )
     */
    public function update(Request $request, string $id)
    {
        try {
            $book = $this->bookRepository->updateBook($id, $request->all());

            return response()->json([
                'success' => true,
                'message' => 'Book updated successfully',
                'data' => $book
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Book not found',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update book',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * @OA\Delete(
     *     path="/api/books/{id}",
     *     tags={"Books"},
     *     summary="Delete book by ID",
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Book deleted successfully"),
     *     @OA\Response(response=404, description="Book not found"),
     *     @OA\Response(response=500, description="Failed to delete book")
     * )
     */
    public function destroy(string $id)
    {
        try {
            $this->bookRepository->deleteBook($id);
            return response()->json([
                'success' => true,
                'message' => 'Book deleted successfully'
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Book not found',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete book',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
