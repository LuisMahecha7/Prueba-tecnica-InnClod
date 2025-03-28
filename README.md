Prueba tecnica InnClod

1. Clone(descargue) el proyecto, desde el repositorio de GitHub compartido, ya sea por medio de, SSH o HTTPS
   copie el link, según sea la configuración realizada en el pc, para la conexión con GitHub
   también ofrece la opción de descargar un archivo .ZIP el cual moverá a la ubicación que prefiera, al descomprimir el archivo,
   tendrá la carpeta principal del proyecto(Prueba-tecnica-InnClod-main), en la cual encontrará dos carpetas más.

    1.1. Configuración del Frontend (Angular):
    Es bajo la cual se está realizando, el diseño de la interfaz y vista principal de la aplicación, 
    se encarga de enviar peticiones al backend y procesar los datos de las respuestas, la vista principal al iniciar la app, 
    muestra un formulario de registro el cual habilita el boón de registrarse al ser completado de manera correcta(nombre, correo y contraseña)
    al dar clic será dirigido, al formulario de inicio de sesión, el cual debe diligenciar de manera correcta las credenciales del registro.
   
    Solo después de la correcta validación de credenciales el backend retorna un mensaje de exito y bienvenida,
    además genera un token para autenticar la sesión y proteger la navegación entre las vistas.

    Al iniciar sesión,encontraremos la vista pricipal del proyecto donde se podra visualizar un mensaje saludando al usuario autenticado,
    a nivel de base de datos se agrego columna rol, a la tabla users, para ofrecer opciones de acuerdo al rol, ej: un usuario admin-
    ingresa al sistema y podra seleccionar productos y la cantidad que requiera y asiganar ordenes a nombre de cualquier usuario,
    registrado en el sistema, mientras que un usuario con rol user, solo podra generar ordenes para si mismo.


    Pasos para instalar dependencias y ejecutar la aplicacion Angular:
    Despues de descargar y descomprimir el proyecto, vamos a ejecutar una cmd o terminal y nos ubicamos dentro de la carpeta frontend,
    al esta ubicados en la ruta base de la carpeta frontend vamos a ejecutar los siguientes comandos: npm install, instalara todas las dependencias-
    necesarias para que el proyecto se ejecute, despues ejecutamos ng serve, para iniciar el servidor y al acceder en el navegador a la ruta:
    http://localhost:4200/ podremos ver el formulario de registro, de la aplicación


    Observaciones:
    
     se agrego el archivo del backend .env, donde se definen la configuracion de credenciales para la ejecucion de la base de datos,
     por seguridadeste archivo no se sube al repositorio para no exponer datos sensibles, pero se agrego para facilitar el inicio de la app.


     1.2. Configuración del Backend (Laravel):
     El backend se encarga de exponer mediante routes, endpoints ya configurados donde recibe y procesa peticiones del frontend retornando respuestas adecuadas,
     asi mismo se asocia la inteaccion cercana con la base de datos, da estructura al esquema de la db mediante modelos y estructura validaciones mediante controladores,
     Laravel maneja el patron de arquitectura MVC, modelo, vista controlador.

     Pasos para instalar dependencias y configurar Laravel:
     Similar a con angular nos ubicamos desde la terminal en la ruta base de la carpeta backend y ejecutamos los siguientes comandos:
     - composer install  : instala las dependencias necesarias para la ejecucion del proyecto.
     - php artisan serve : para iniciar el sevicio de backend

     Nota: Como el archivo .env ya se incluye en el proyecto, no requiere de configuración la db. Ademas para la ejecucion del backend,
     se requiere haber iniciado el servidor local de apache Xampp e ingresar en el navegador a la ruta: http://localhost/phpmyadmin/
     estando ahi, va ha crear la base de datos con el nombre: db_prueba_InnClod con la configuración: utf8mb4_general_ci,
     despues seleccione la base de datos creada, y en el menú superior ingresa a la opcion SQL y ahi copia y pega el contenido del archivo: db_prueba_InnClod.sql,
     el cual se encuentra en la carpeta backend, en la ruta base, por ultimo ejecuta la consulta o control y enter, asi cargara datos en la db.
     Ahora puede iniciar sesion, con usuarios y productos cargados en la db.



     Tecnologías utilizadas

     Laravel: v12.3.0

     Node.js: v22.13.1

     Angular: v17.x

     Base de datos: MySQL 8.x
