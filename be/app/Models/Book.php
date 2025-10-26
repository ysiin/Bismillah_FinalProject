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
        'cover_image',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    protected $appends = ['cover_image_url'];

    public function getCoverImageUrlAttribute()
    {
        return $this->cover_image ? asset('storage/' . $this->cover_image) : null;
    }
}
