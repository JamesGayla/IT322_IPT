<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    // GET /api/items - List all items
    public function index()
    {
        $items = Item::all();
        return response()->json($items);
    }

    // POST /api/items - Create a new item
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $item = Item::create($validated);

        return response()->json($item, 201);
    }

    // GET /api/items/{id} - Get a single item
    public function show($id)
    {
        $item = Item::findOrFail($id);
        return response()->json($item);
    }

    // PUT/PATCH /api/items/{id} - Update an item
    public function update(Request $request, $id)
    {
        $item = Item::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
        ]);

        $item->update($validated);

        return response()->json($item);
    }

    // DELETE /api/items/{id} - Delete an item
    public function destroy($id)
    {
        $item = Item::findOrFail($id);
        $item->delete();

        return response()->json(['message' => 'Item deleted successfully']);
    }
}