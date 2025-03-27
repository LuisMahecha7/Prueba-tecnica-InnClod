Prueba tecnica InnClod

1. Clone(descargue) el proyecto, ya sea por medio de los links, que encontrará en la opción Code, en la vista, del repositorio compartido,
   ofrece varias opciones para descargarlo, SSH y HTTPS deberá copiar el link, según sea la configuración realizada, para la conexión con GitHub
   también ofrece la opción de descargar un archivo .ZIP el cual moverá a la ubicación donde ejecutara el proyecto, allí descomprime el archivo y
   tendrá la carpeta principal del proyecto(Prueba-tecnica-InnClod-main), dentro de esta carpeta encontrará dos carpetas más.

    1.1. frontend(Angular): Es bajo la cual se está realizando, el diseño de la interfaz y vista principal de la aplicación, costa por ahora,
    de un formulario dónde el usuario deberá ingresar: nombre, correo y contraseña, para que se habilite el botón para registrarse, al dar clic será dirigido,
    a una vista donde encontrara el formulario de inicio de sesión, igualmente acá ingresara nuevamente el correo y contraseña con la cual realizo el registro.
    Solo después de la correcta validación de credenciales el backend retorna un mensaje de Credenciales correctas bienvenido, además genera un token para autenticar la sesión y
    proteger la navegacion entre las vistas.

    Al iniciar sesión,encontraremos la vista pricipal del proyecto donde se podra visualizar un mensaje saludando al usuario autenticado, se le agrego al usuario una columna rol, el caul,
    les brindara accesos a diferentes opciones, ej: un usuario admin ingresa al sistema y podra asiganr productos en diferentes cantidades a nombre de cualquier usuario que se encuentre
    registrado en el sistema, mientras que un usuario con rol user, solo podra generar ordenes que se asignan al dueño de la cuenta.


    Pasos para instalar dependencias y ejecutar la aplicacion Angular:
    vamos aejecutar una cmd o terminal y nos ubicamos dentro de la carpeta frontend, navegando entre carpetas con el comando 'cd', cuando nos encontremos en la ruta base de la carpeta frontend
    vamos a ejecutar los siguientes comandos: npm install, instalara todas las dependencias necesarias para que el proyecto se ejecute

     cd frontend
     
     ng serve





     Observaciones:

     se agrego el archivo del backend .env, donde se definen la configuracion de credenciales para la ejecucion de la base de datos, por seguridadeste archivo no se sube al repositorio
     para no exponer datos sensibles, pero se agrego para facilitar el inicio de la app.
    










    Tecnologías utilizadas

    Laravel: v12.3.0

    Node.js: v22.13.1

    Angular: v17.x

    Base de datos: MySQL 8.x









    

    consiste(la vista principal) de un formulario para el registro de usuarios y administración validacion de autentucación
      para el ingreso  y backend(Laravel)
   
      una terminal la carpeta donde descargara el proyecto
      para lo anterior, debe tener instalado y configurado git, 
   

3. Se debe ingesar a la carpeta  pricipal y ubicar la carpeta frontend(Angular) y backend(Laravel)
4. validar el archivo

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



        1. Se creo el programa enfocado a un usuario 'admin, con las opciones Habilitadas

        :
            1. Un usuario admin, si puede seleccionar un cliente aparte de él para generar ordenes nuevas a nombre de ese cliente,
                a diferencia del user normal, este solo podra generar ordenes para él mismo.
