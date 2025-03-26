<?php

namespace App\Http\Controllers;

use App\Models\ClientProduct;
use Illuminate\Http\Request;

class ClientProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(ClientProduct::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user_id = $request->user_id;
        $product_ids = $request->product_id; // Aquí llega como array

        if (is_array($product_ids)) {
            foreach ($product_ids as $product_id) {
                $clientproduct = ClientProduct::firstOrCreate([
                    'user_id' => $user_id,
                    'product_id' => $product_id
                ]);
            }
        } else {
            $clientproduct = ClientProduct::create([
                'user_id' => $user_id,
                'product_id' => $product_ids
            ]);
        }

        return response()->json(['message' => 'Solicitud registrada con exíto', 'client_product' => $clientproduct ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ClientProduct $clientProduct)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ClientProduct $clientProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ClientProduct $clientProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ClientProduct $clientProduct)
    {
        //
    }
}
