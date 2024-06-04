<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    protected $fillable = ['user_post_id', 'user_id', 'like'];

    public function userPost()
    {
        return $this->belongsTo(UserPost::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
