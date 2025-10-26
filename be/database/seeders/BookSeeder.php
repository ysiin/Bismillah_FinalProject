<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $novel = Category::where('name', 'Novel')->first();
        $tech = Category::where('name', 'Teknologi')->first();
        $business = Category::where('name', 'Bisnis')->first();


        $books = [
            [
                'title' => 'Laskar Pelangi',
                'author' => 'Andrea Hirata',
                'description' => 'Kisah inspiratif anak-anak Belitung dalam mengejar pendidikan.',
                'isbn' => '9786020324783',
                'publisher' => 'Bentang Pustaka',
                'year_published' => 2005,
                'category_id' => $novel->id,
                'total_copies' => 10,
                'available_copies' => 8,
                'total_pages' => 529,
                'ratings' => 4.7,
            ],
            [
                'title' => 'Pemrograman Web Modern',
                'author' => 'Agus Saputra',
                'description' => 'Panduan lengkap pengembangan web dengan Laravel dan React.',
                'isbn' => '9786230021342',
                'publisher' => 'Informatika',
                'year_published' => 2022,
                'category_id' => $tech->id,
                'total_copies' => 12,
                'available_copies' => 10,
                'total_pages' => 420,
                'ratings' => 4.8,
            ],
            [
                'title' => 'Rich Dad Poor Dad',
                'author' => 'Robert T. Kiyosaki',
                'description' => 'Buku motivasi keuangan paling populer sepanjang masa.',
                'isbn' => '9786020314227',
                'publisher' => 'Gramedia',
                'year_published' => 2017,
                'category_id' => $business->id,
                'total_copies' => 15,
                'available_copies' => 12,
                'total_pages' => 336,
                'ratings' => 4.9,
            ],
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}
