<?PHP
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

//Se genera una ruta, siguiendo al convencion restfull, se crean todos los metodos para 'user'
Route::apiResource('users', UserController::class);
Route::post('/login', [UserController::class, 'login']);
