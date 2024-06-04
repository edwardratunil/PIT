<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['user_post_id', 'user_id', 'comment'];

    public function userPost()
    {
        return $this->belongsTo(UserPost::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
