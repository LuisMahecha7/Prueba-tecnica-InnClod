<?PHP

use App\Http\Controllers\ClientProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

//Se genera una ruta, siguiendo al convencion restfull, se crean todos los metodos para 'user'
Route::apiResource('users', UserController::class);
Route::post('/login', [UserController::class, 'login']);
Route::apiResource('products', ProductController::class);
Route::get('/products', [ProductController::class, 'index']);
Route::apiResource('clientProduct', ClientProductController::class);
Route::get('/clientProduct', [ClientProductController::class, 'index']);
//Laravel ofece una ruta para solicitar datos de un usuario autenticado.
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json($request->user());
});
Route::apiResource('orders', OrderController::class);
Route::get('/orders', [OrderController::class, 'index']);
Route::apiResource('OrderDetail', OrderDetailController::class);
Route::get('/OrderDetail', [OrderDetailController::class, 'index']);
