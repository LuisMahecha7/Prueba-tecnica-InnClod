1. Se debe clonar el proyecto desde el repositorio

1. se debe iniciar el servicio(servidor) del frontend angular localhost 4200
    Nos ubicamos desde la terminal en la carpeta, front y ejecutamos el comando 'ng serve'
2. Se debe iniciar el servicio de php artisan serve(Describir como)
3. se debe iniciar el servicio de phpmyadmin xammp, para la base de datos
4.

Instruccciones,
Despues de clonar el proyecto desde el repositorio de GitHub,

    1. Ingresar por terminal a la ubicacion del proyecto 'prueba-tecnica', ahi deberan estar 2 carpetas,
        backend y frontend(Se debe ingresar a cada carpeta por separado para, instalar dependencias)

        En el navegador en la ruta: http://localhost:4200/, encontraremos el formulario de registro, el cual despues de completarlo y-
        dar clic en registrarse, lo registrara exitosamente y lo redirige al inicio de sesión( debera ingresar correo y contraseña con los que se registro)-
        SI la validacion es correcta lo redireccionara a la vista principal, donde el usuario podra



        1. El primer usuario autenticado tendra, permisos de administrador, los demas seran usuarios normales, o puede actualizar los permisos,
        para acceder a la vista donde solo un usuario con role = 'admin', puede acceder al menu de configuracion y cracion de productos de productos

        Datos atener en cuenta:
            1. Un usuario admin, si puede seleccionar un cliente aparte de él para generar ordenes nuevas a nombre de ese cliente,
                a diferencia del user normal, este solo podra generar ordenes para él mismo.