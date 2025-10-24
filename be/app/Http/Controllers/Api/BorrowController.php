<?php

namespace App\Http\Controllers\Api;
use App\Models\Borrow;
use App\Models\BorrowDetail;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BorrowController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    // Tambahkan relasi 'category' setelah 'book'
    $borrows = Borrow::with(['details.book.category'])->get();

    return response()->json($borrows);
}

public function store(Request $request)
{
    $request->validate([
        'user_id' => 'required|integer',
        'books' => 'required|array',
        'books.*.book_id' => 'required|integer',
        'books.*.due_date' => 'required|date'
    ]);

    DB::beginTransaction();

    try {
        $borrow = Borrow::create([
            'user_id' => $request->user_id,
            'borrowed_date' => now(),
        ]);

        foreach ($request->books as $book) {
            BorrowDetail::create([
                'borrow_id' => $borrow->id,
                'book_id' => $book['book_id'],
                'due_date' => $book['due_date'],
            ]);
        }

        DB::commit();

        // Di sini juga load relasi sampai kategori
        return response()->json([
            'message' => 'Peminjaman berhasil dibuat',
            'borrow' => $borrow->load('details.book.category')
        ], 201);

    } catch (\Exception $e) {
        DB::rollBack();
        return response()->json(['error' => $e->getMessage()], 500);
    }
}

}
