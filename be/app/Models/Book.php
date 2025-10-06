<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'title',
        'author',
        'description',
        'publisher',
        'year_published',
        'isbn',
        'category_id',
        'total_copies',
        'available_copies',
        'total_pages',
        'ratings',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    
}
