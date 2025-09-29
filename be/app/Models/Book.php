<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'title',
        'author',
        'publisher',
        'year_published',
        'isbn',
        'category_id',
        'total_copies',
        'available_copies'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    
}
