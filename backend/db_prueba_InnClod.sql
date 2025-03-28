-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 28-03-2025 a las 13:25:06
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_prueba_InnClod`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `client_products`
--

CREATE TABLE `client_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `client_products`
--

INSERT INTO `client_products` (`id`, `user_id`, `product_id`, `created_at`, `updated_at`) VALUES
(35, 101, 57, '2025-03-28 15:58:40', '2025-03-28 15:58:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `created_at`, `updated_at`) VALUES
(51, 94, '2025-03-28 16:31:05', '2025-03-28 16:31:05'),
(52, 94, '2025-03-28 16:31:12', '2025-03-28 16:31:12'),
(53, 108, '2025-03-28 16:38:08', '2025-03-28 16:38:08'),
(54, 108, '2025-03-28 16:38:17', '2025-03-28 16:38:17'),
(55, 91, '2025-03-28 16:40:28', '2025-03-28 16:40:28'),
(56, 92, '2025-03-28 16:40:47', '2025-03-28 16:40:47'),
(57, 107, '2025-03-28 16:41:07', '2025-03-28 16:41:07'),
(58, 93, '2025-03-28 16:50:34', '2025-03-28 16:50:34'),
(59, 93, '2025-03-28 16:51:59', '2025-03-28 16:51:59'),
(60, 96, '2025-03-28 16:52:32', '2025-03-28 16:52:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `order_details`
--

INSERT INTO `order_details` (`id`, `order_id`, `product_id`, `quantity`, `created_at`, `updated_at`) VALUES
(25, 51, 54, 1, '2025-03-28 16:31:12', '2025-03-28 16:31:12'),
(26, 51, 55, 1, '2025-03-28 16:31:12', '2025-03-28 16:31:12'),
(27, 53, 54, 1, '2025-03-28 16:38:17', '2025-03-28 16:38:17'),
(28, 54, 54, 1, '2025-03-28 16:40:28', '2025-03-28 16:40:28'),
(29, 55, 56, 1, '2025-03-28 16:40:47', '2025-03-28 16:40:47'),
(30, 58, 54, 1, '2025-03-28 16:50:34', '2025-03-28 16:50:34'),
(31, 58, 55, 1, '2025-03-28 16:50:34', '2025-03-28 16:50:34'),
(32, 59, 54, 1, '2025-03-28 16:51:59', '2025-03-28 16:51:59'),
(33, 59, 55, 1, '2025-03-28 16:51:59', '2025-03-28 16:51:59'),
(34, 60, 56, 14, '2025-03-28 16:52:32', '2025-03-28 16:52:32'),
(35, 60, 54, 4, '2025-03-28 16:52:32', '2025-03-28 16:52:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(133, 'App\\Models\\User', 106, 'auth_token', '65cc2b332b56a06b9cd2709bdc560452d52d4cffbcdcc8f6e2f313e9c433a6cf', '[\"*\"]', NULL, NULL, '2025-03-28 15:18:52', '2025-03-28 15:18:52'),
(134, 'App\\Models\\User', 108, 'auth_token', '907460a5e30aeb2ca23ba6c6dbb6165e6553fde7b881f51423c850da78a2a604', '[\"*\"]', NULL, NULL, '2025-03-28 16:09:43', '2025-03-28 16:09:43'),
(135, 'App\\Models\\User', 109, 'auth_token', '97d0821ec9082bd8e64000e6fa1eb90a81de34c2e9f01b076ea53467320b683a', '[\"*\"]', NULL, NULL, '2025-03-28 17:24:20', '2025-03-28 17:24:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `stock`, `price`, `created_at`, `updated_at`) VALUES
(54, 'Laptop Dell XPS 15', 10, 1500.00, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(55, 'iPhone 15 Pro', 20, 1099.99, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(56, 'Monitor LG UltraGear', 25, 300.00, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(57, 'Teclado Razer BlackWidow', 30, 120.00, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(58, 'Mouse Logitech MX Master 3', 40, 99.99, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(59, 'Audífonos Sony WH-1000XM5', 15, 399.99, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(60, 'Smartwatch Apple Watch Ultra', 18, 799.00, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(61, 'Cámara Nikon D750', 12, 1600.00, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(62, 'Impresora Epson EcoTank', 10, 250.00, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(63, 'Tarjeta Gráfica RTX 4090', 5, 2000.00, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(64, 'Disco SSD NVMe 2TB', 22, 220.00, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(65, 'Memoria RAM Corsair 32GB', 16, 180.00, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(66, 'Silla Gamer Secretlab', 14, 450.00, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(67, 'Router Asus ROG Rapture', 19, 350.00, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(68, 'Procesador AMD Ryzen 9 7950X', 8, 700.00, '2025-03-28 10:11:51', '2025-03-28 10:11:51'),
(69, 'Papel Fil', 30, 25000.00, '2025-03-28 15:22:14', '2025-03-28 15:22:14'),
(70, 'Camara Reflex', 30, 2500000.00, '2025-03-28 15:59:25', '2025-03-28 15:59:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `created_at`, `updated_at`) VALUES
(91, 'Juan Pérez', 'juan.perez@example.com', 'hashed_password_1', 'admin', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(92, 'María López', 'maria.lopez@example.com', 'hashed_password_2', 'user', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(93, 'Carlos Rodríguez', 'carlos.rodriguez@example.com', 'hashed_password_3', 'user', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(94, 'Ana Gómez', 'ana.gomez@example.com', 'hashed_password_4', 'user', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(95, 'Pedro Sánchez', 'pedro.sanchez@example.com', 'hashed_password_5', 'admin', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(96, 'Laura Torres', 'laura.torres@example.com', 'hashed_password_6', 'user', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(97, 'Miguel Herrera', 'miguel.herrera@example.com', 'hashed_password_7', 'user', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(98, 'Lucía Ramírez', 'lucia.ramirez@example.com', 'hashed_password_8', 'user', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(99, 'Diego Fernández', 'diego.fernandez@example.com', 'hashed_password_9', 'user', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(100, 'Sofía Castro', 'sofia.castro@example.com', 'hashed_password_10', 'user', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(101, 'Fernando Reyes', 'fernando.reyes@example.com', 'hashed_password_11', 'admin', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(102, 'Gabriela Vargas', 'gabriela.vargas@example.com', 'hashed_password_12', 'user', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(103, 'Ricardo León', 'ricardo.leon@example.com', 'hashed_password_13', 'user', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(104, 'Patricia Mendoza', 'patricia.mendoza@example.com', 'hashed_password_14', 'user', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(105, 'Javier Silva', 'javier.silva@example.com', 'hashed_password_15', 'admin', '2025-03-28 10:11:50', '2025-03-28 10:11:50'),
(106, 'Julietha Lorena', 'juliethalorena@hotmail.com', '$2y$12$VrEd5DjLQCxHkEcnmCyyQusCteFFSimx86ypZePCaqzSNDx2huWWS', 'user', '2025-03-28 15:18:26', '2025-03-28 15:18:26'),
(107, 'Ivan Andres', 'ivanandreslopez@gmail.com', '$2y$12$2Z7ZhbUfjdHYV.j7vx8T3uUDfWllnn9z.QQ6At8tKVYblzlhV.Lh2', 'user', '2025-03-28 15:59:57', '2025-03-28 15:59:57'),
(108, 'Juan Dario Gomez', 'juandariogomez@gmail.com', '$2y$12$eusd3fyJdaO19iSz9G2Xb.8BKrOhG0zzu4DkAjkwyWC15c2p9P3E6', 'user', '2025-03-28 16:09:12', '2025-03-28 16:09:12'),
(109, 'pedro marino', 'pedromarino@gmail.com', '$2y$12$KBN7CfEhhPhXDIjoncBvEe/wWFYv68O9YPmGQ/z0It0t9CVyNEwRW', 'user', '2025-03-28 17:24:13', '2025-03-28 17:24:13');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `client_products`
--
ALTER TABLE `client_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_products_user_id_foreign` (`user_id`),
  ADD KEY `client_products_product_id_foreign` (`product_id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_details_order_id_foreign` (`order_id`),
  ADD KEY `order_details_product_id_foreign` (`product_id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `client_products`
--
ALTER TABLE `client_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `client_products`
--
ALTER TABLE `client_products`
  ADD CONSTRAINT `client_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `client_products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_details_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;