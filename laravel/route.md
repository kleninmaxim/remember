## Route Example
```php
Route::controller(AuthController::class)->group(function () {
    Route::post('/registration', 'registration');
    Route::post('/authentication', 'authentication')->middleware(UserToken::class);
});
```