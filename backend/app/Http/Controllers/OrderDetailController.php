<?php

namespace App\Http\Controllers;

use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(OrderDetail::all());
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
        $request->validate([
            'order_id' => 'required|numeric',
            'product_id' => 'required|array', // Ahora acepta un array
            'product_id.*' => 'numeric', // Cada elemento del array debe ser un número
            'quantity' => 'required|array', // También debe ser un array de cantidades
            'quantity.*' => 'numeric' // Cada cantidad debe ser un número
        ]);

        $orderDetails = [];

        foreach ($request->product_id as $index => $productId) {
            $orderDetails[] = OrderDetail::create([
                'order_id' => $request->order_id,
                'product_id' => $productId,
                'quantity' => $request->quantity[$index] ?? 1 // Usa la cantidad correspondiente
            ]);
        }

        return response()->json([
            'message' => 'Detalles de la orden registrados exitosamente',
            'order_details' => $orderDetails
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(OrderDetail $orderDetail)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrderDetail $orderDetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OrderDetail $orderDetail)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderDetail $orderDetail)
    {
        //
    }
}
