<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Borrow extends Model
{
    protected $table = 'borrows';
    protected $fillable = ['user_id', 'borrowed_date'];

    public function details()
    {
        return $this->hasMany(BorrowDetail::class, 'borrow_id');
    }
}
