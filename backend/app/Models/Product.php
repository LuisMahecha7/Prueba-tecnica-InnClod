<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'stock',
        'price'
    ];

    /**
     * Relación muchos a muchos con usuarios a través de client_products.
     */
    public function users()
    {
        return $this->belongsToMany(User::class, 'client_products')
                    ->withTimestamps();
    }

    /**
     * Un producto puede aparecer en muchos detalles de orden.
     */
    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }
}