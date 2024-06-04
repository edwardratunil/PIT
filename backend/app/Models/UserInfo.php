<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    protected $fillable = ['user_id', 'first_name', 'last_name', 'address', 'birthdate', 'gender'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
