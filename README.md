# Taller-API-Rest-
Desarrollo de backend para el consumo de servicios

instalación de las dependencias para la configuración del editor

npm i nodemon -D //Modulo que se encarga de subir el servidor y en caso de que se presente un cambio no tener que bajar el servidor y volverlo a subir.

npm i express //Modulo express es una implementacion de node que nos permite configurar el servidor.

npm i mongoose -S //Modulo que nos permite interactuar con la BD

Ejecución automática del servidor: npm run start

En la carpeta drivers se especifica la conexión cin la base de datos de mongoDB, tener en cuenta la ruta en su pc.

Rutas para el consumo de la API
se encuentran dentro de la carpeta routes

'/getProduct' Usando metodo GET podemos obtener la lista de los productos

'/newProduct' Usando metodo POST podemos crear un producto de acuerdo a los atributos establecidos

'/deleteProduct/:idProduct' Usando metodo DELETE podemos eliminar un producto de acurdo a su ID

'/:idProduct' Usando metodo GET podemos obtener el producto de acuerdo al ID.

'/updateProduct/:idProduct' Usando metodo PUT podemos modificar el producto especificando el ID del producto a modificar

'getBill' Usando metodo GET podemos obtener la lista de las faturas

'/newBill' Usando metodo POST podemos crear una factura de acuerdo a los atributos establecidos

'/updateBill/:number' Usando metodo PUT podemos modificar el detalle especificando la variable de la factura a modificar

'/deleteBill/:number' Usando metodo DELETE podemos eliminar una factura de acuerdo a su numero de identificacion

NOTA DEL DESARROLLADOR: La agregación de los productos dentro de la base de datos no funciona correctamente, por lo tanto solo la funcionalidad de agregar facturas (Bill) es la que se hace correctamente.
