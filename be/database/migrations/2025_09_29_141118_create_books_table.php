<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('author')->nullable();
            $table->string('description')->nullable();
            $table->string('isbn', 20)->unique();
            $table->string('publisher', 150)->nullable();
            $table->year('year_published')->nullable();
            $table->foreignId('category_id')->constrained('categories')->onDelete('set null');
            $table->integer('total_copies')->default(1);
            $table->integer('available_copies')->default(1);
            $table->integer('total_pages')->nullable();
            $table->tinyInteger('ratings')->default(0);
            $table->string('cover_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
