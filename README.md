Prueba tecnica InnClod

1. Clone(descargue) el proyecto, ya sea por medio de los links, que encontrará en la opción Code, en la vista, del repositorio compartido,
   ofrece varias opciones para descargarlo, SSH y HTTPS deberá copiar el link, según sea la configuración realizada, para la conexión con GitHub
   también ofrece la opción de descargar un archivo .ZIP el cual moverá a la ubicación donde ejecutara el proyecto, allí descomprime el archivo y
   tendrá la carpeta principal del proyecto(Prueba-tecnica-InnClod-main), dentro de esta carpeta encontrará dos carpetas más.

    1.1. Configuración del Frontend (Angular):
    Es bajo la cual se está realizando, el diseño de la interfaz y vista principal de la aplicación, asi mismo se envian peticiones al backend y
    procesan los datos de las respuestas, la vista principal al iniciar la app, muestra un formulario dónde el usuario deberá ingresar: nombre, correo y contraseña,
    para que se habilite el botón para registrarse, al dar clic será dirigido, a una vista donde encontrara el formulario de inicio de sesión, igualmente acá ingresara nuevamente el correo y
    contraseña con la cual realizo el registro.
   
    Solo después de la correcta validación de credenciales el backend retorna un mensaje de exito y bienvenida, además genera un token para autenticar la sesión y
    proteger la navegacion entre las vistas.

    Al iniciar sesión,encontraremos la vista pricipal del proyecto donde se podra visualizar un mensaje saludando al usuario autenticado, se le agrego al usuario una columna rol, el caul,
    les brindara accesos a diferentes opciones, ej: un usuario admin ingresa al sistema y podra seleccionar productos y su cantidad solicitada y asiganr ordenes a nombre de cualquier usuario,
    registrado en el sistema, mientras que un usuario con rol user, solo podra generar ordenes que se asignan directamente al dueño de la cuenta.


    Pasos para instalar dependencias y ejecutar la aplicacion Angular:
    Despues de descargar y descomprimir el proyecto, vamos a ejecutar una cmd o terminal y nos ubicamos dentro de la carpeta frontend, navegando entre carpetas con el comando 'cd', cuando nos
    encontremos en la ruta base de la carpeta frontend vamos a ejecutar los siguientes comandos: npm install, instalara todas las dependencias necesarias para que el proyecto se ejecute,
    despues ejecutamos ng serve, para iniciar el servidor y al acceder en el navegador a la ruta: http://localhost:4200/ podremos ver el formulario de registro

     

    Observaciones:
    

     se agrego el archivo del backend .env, donde se definen la configuracion de credenciales para la ejecucion de la base de datos, por seguridadeste archivo no se sube al repositorio
     para no exponer datos sensibles, pero se agrego para facilitar el inicio de la app.


     1.2. Configuración del Backend (Laravel):
     El backend se encarga de exponer mediante routes, endpoints ya configurados donde recibe y procesa peticiones del frontend, retornando una respuesta adecuada,
     el backend se encarga de la inteaccion cercana con la base de datos, asi mismo controla el esquema de la db mediante modelos y estructura validaciones mediante controladores,
     Laravel maneja el patron de arquitectura MVC, modelo, vista controlador.
     Pasos para instalar dependencias y configurar Laravel: Similar a con angular nosubicamos en terminal en el interior o ruta base de la carpeta backend y alli ejecutamos en la terminal
     composer install: instala las dependencias necesarias para la ejecucion del proyecto, despues ejecuta: php artisan serve, para iniciar el sevicio de backend

     Nota: Como el .env ya está en el repositorio, el usuario no necesita configurarlo. Ademas para la ejecucion del backend, se requiere haber inicado el servidor de apache Xampp e ingresar,
     al navegador a la ruta: http://localhost/phpmyadmin/   estando ahi va ha crear la base de datos con el nombre: db_prueba_InnClod con la configuración: utf8mb4_general_ci, despues ve a la
     opcion importar y carga el archivo con la data para el esquema de la db.




     Tecnologías utilizadas

     Laravel: v12.3.0

     Node.js: v22.13.1

     Angular: v17.x

     Base de datos: MySQL 8.x









    


