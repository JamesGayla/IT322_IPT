<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index()
    {
        return Item::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric|min:0',
            'quantity' => 'nullable|integer|min:0',
        ]);

        $item = Item::create($data);

        return response()->json($item, 201);
    }

    public function show(Item $item)
    {
        return $item;
    }

    public function update(Request $request, Item $item)
    {
        $data = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric|min:0',
            'quantity' => 'nullable|integer|min:0',
        ]);

        $item->update($data);

        return $item;
    }

    public function destroy(Item $item)
    {
        $item->delete();

        return response()->json(['message' => 'Item deleted successfully'], 200);
    }
}
