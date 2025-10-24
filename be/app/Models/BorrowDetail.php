<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BorrowDetail extends Model
{
    protected $table = 'borrow_details';
    protected $fillable = ['borrow_id', 'book_id', 'due_date', 'returned_at'];

    public function book()
    {
        return $this->belongsTo(Book::class, 'book_id');
    }
}
