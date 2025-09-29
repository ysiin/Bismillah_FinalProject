<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            ['id' => 1, 'title' => 'Belajar PHP pake AI', 'author' => 'Mr. A', 'category' => 'Teknologi'],
            ['id' => 2, 'title' => 'Aku ingin menjadi manusia hebat', 'author' => 'Yantoek', 'category' => 'Fiksi'],
            ['id' => 3, 'title' => 'Laravel untuk Pemula', 'author' => 'Budi Santoso', 'category' => 'Teknologi'],
            ['id' => 4, 'title' => 'Pemrograman JavaScript Modern', 'author' => 'Dewi Lestari', 'category' => 'Teknologi'],
            ['id' => 5, 'title' => 'Misteri Kota Tua', 'author' => 'Andi Pratama', 'category' => 'Fiksi'],
            ['id' => 6, 'title' => 'Algoritma dan Struktur Data', 'author' => 'Rina Widya', 'category' => 'Teknologi'],
            ['id' => 7, 'title' => 'Psikologi Remaja', 'author' => 'Hendra Gunawan', 'category' => 'Psikologi'],
            ['id' => 8, 'title' => 'Petualangan di Gunung Merapi', 'author' => 'Sari Melati', 'category' => 'Fiksi'],
            ['id' => 9, 'title' => 'Machine Learning Dasar', 'author' => 'Faisal Ahmad', 'category' => 'Teknologi'],
            ['id' => 10, 'title' => 'Ekonomi Mikro Teori dan Praktik', 'author' => 'Rudi Hartono', 'category' => 'Ekonomi'],
            ['id' => 11, 'title' => 'Desain UI/UX Modern', 'author' => 'Putri Cahaya', 'category' => 'Teknologi'],
            ['id' => 12, 'title' => 'Sejarah Peradaban Dunia', 'author' => 'Ahmad Zulkarnain', 'category' => 'Sejarah'],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return response()->json([
            'message' => 'Book created successfully',
            'data' => $request->all()
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $books = [
            [
                'id' => 1,
                'title' => 'Belajar PHP pake AI',
                'author' => 'Mr. A',
                'description' => 'Buku tentang belajar PHP dengan bantuan AI.',
                'isbn' => '978-1234567890',
                'publisher' => 'Diks Tech Publisher',
                'year_published' => 2023,
                'category_id' => 1,
                'total_copies' => 10,
                'available_copies' => 7,
                'total_pages' => 350,
                'ratings' => 4,
            ],
            [
                'id' => 2,
                'title' => 'Aku ingin menjadi manusia hebat',
                'author' => 'Yantoek',
                'description' => 'Novel inspiratif tentang perjalanan hidup.',
                'isbn' => '978-9876543210',
                'publisher' => 'Fiksi Nusantara',
                'year_published' => 2022,
                'category_id' => 2,
                'total_copies' => 5,
                'available_copies' => 3,
                'total_pages' => 280,
                'ratings' => 5,
            ],
            [
                'id' => 3,
                'title' => 'Laravel untuk Pemula',
                'author' => 'Budi Santoso',
                'description' => 'Panduan lengkap belajar Laravel dari nol.',
                'isbn' => '978-1111111111',
                'publisher' => 'Tekno Media',
                'year_published' => 2021,
                'category_id' => 1,
                'total_copies' => 8,
                'available_copies' => 6,
                'total_pages' => 400,
                'ratings' => 4,
            ],
            [
                'id' => 4,
                'title' => 'Pemrograman JavaScript Modern',
                'author' => 'Dewi Lestari',
                'description' => 'Mengenal ES6+ dan praktik terbaik JavaScript.',
                'isbn' => '978-2222222222',
                'publisher' => 'Code Publisher',
                'year_published' => 2020,
                'category_id' => 1,
                'total_copies' => 12,
                'available_copies' => 10,
                'total_pages' => 500,
                'ratings' => 5,
            ],
            [
                'id' => 5,
                'title' => 'Misteri Kota Tua',
                'author' => 'Andi Pratama',
                'description' => 'Cerita misteri di sebuah kota tua.',
                'isbn' => '978-3333333333',
                'publisher' => 'Fiksi Nusantara',
                'year_published' => 2019,
                'category_id' => 2,
                'total_copies' => 7,
                'available_copies' => 4,
                'total_pages' => 320,
                'ratings' => 3,
            ],
            [
                'id' => 6,
                'title' => 'Algoritma dan Struktur Data',
                'author' => 'Rina Widya',
                'description' => 'Dasar algoritma untuk mahasiswa IT.',
                'isbn' => '978-4444444444',
                'publisher' => 'Edu Publisher',
                'year_published' => 2021,
                'category_id' => 1,
                'total_copies' => 6,
                'available_copies' => 5,
                'total_pages' => 420,
                'ratings' => 4,
            ],
            [
                'id' => 7,
                'title' => 'Psikologi Remaja',
                'author' => 'Hendra Gunawan',
                'description' => 'Membahas perkembangan psikologi remaja.',
                'isbn' => '978-5555555555',
                'publisher' => 'Psiko Press',
                'year_published' => 2018,
                'category_id' => 3,
                'total_copies' => 9,
                'available_copies' => 6,
                'total_pages' => 250,
                'ratings' => 4,
            ],
            [
                'id' => 8,
                'title' => 'Petualangan di Gunung Merapi',
                'author' => 'Sari Melati',
                'description' => 'Novel petualangan anak-anak.',
                'isbn' => '978-6666666666',
                'publisher' => 'Fiksi Nusantara',
                'year_published' => 2020,
                'category_id' => 2,
                'total_copies' => 10,
                'available_copies' => 8,
                'total_pages' => 300,
                'ratings' => 5,
            ],
            [
                'id' => 9,
                'title' => 'Machine Learning Dasar',
                'author' => 'Faisal Ahmad',
                'description' => 'Pengenalan konsep machine learning.',
                'isbn' => '978-7777777777',
                'publisher' => 'AI Publisher',
                'year_published' => 2023,
                'category_id' => 1,
                'total_copies' => 15,
                'available_copies' => 12,
                'total_pages' => 480,
                'ratings' => 5,
            ],
            [
                'id' => 10,
                'title' => 'Ekonomi Mikro Teori dan Praktik',
                'author' => 'Rudi Hartono',
                'description' => 'Konsep dasar ekonomi mikro.',
                'isbn' => '978-8888888888',
                'publisher' => 'Ekonomi Press',
                'year_published' => 2019,
                'category_id' => 4,
                'total_copies' => 11,
                'available_copies' => 9,
                'total_pages' => 360,
                'ratings' => 3,
            ],
            [
                'id' => 11,
                'title' => 'Desain UI/UX Modern',
                'author' => 'Putri Cahaya',
                'description' => 'Prinsip desain antarmuka modern.',
                'isbn' => '978-9999999999',
                'publisher' => 'Design Media',
                'year_published' => 2021,
                'category_id' => 1,
                'total_copies' => 8,
                'available_copies' => 5,
                'total_pages' => 280,
                'ratings' => 4,
            ],
            [
                'id' => 12,
                'title' => 'Sejarah Peradaban Dunia',
                'author' => 'Ahmad Zulkarnain',
                'description' => 'Menjelajahi sejarah peradaban besar dunia.',
                'isbn' => '978-1010101010',
                'publisher' => 'History Press',
                'year_published' => 2017,
                'category_id' => 5,
                'total_copies' => 14,
                'available_copies' => 10,
                'total_pages' => 600,
                'ratings' => 5,
            ],
        ];

        $book = collect($books)->firstWhere('id', (int)$id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        return response()->json($book);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return response()->json([
            'message' => "Book with ID {$id} updated",
            'data' => $request->all()
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return response()->json([
            'message' => "Book with ID {$id} deleted"
        ]);
    }
}
