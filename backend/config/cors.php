<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'], // Permite todas las URLs
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'], // Permite todos los headers
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
