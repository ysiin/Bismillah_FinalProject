<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('books', function (Blueprint $table) {
            $table->string('cover_image')->nullable()->after('ratings');
            // kamu bisa ganti 'after("title")' dengan kolom lain sesuai posisi yang diinginkan
        });
    }

    public function down(): void
    {
        Schema::table('books', function (Blueprint $table) {
            $table->dropColumn('cover_image');
        });
    }
};
