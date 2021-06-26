# Este proyecto esta creado co react

A continuación, tenemos una secuencia de comnados a utilizar antes de subir el server web

## npm i

Instalar dependencias del proyecto:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo. \ Abra [http: // localhost: 3000http: // localhost: 3000) o en su defecto numero ip:3000 para verla en el navegador.

### `npm test`

Inicia pruebas render de los componetes

### `npm run build`

Construye la aplicación para producción en la carpeta build

## componentes

index=> inicio de la aplicación
App=> Componente donde montamos los dos componenets principales ShippingAddress y SummaryOrder
componetes=> Carpeta contenedora de los compenentes
CustomImputs=>Custom imput y select que se pueden reutilizar
hooks=>Carpeta con custom hooks ejemplo sumaryOrder calcular el total de la orden
ShippingAddress=>Contien el formulario para crear direcciones
  FormAddress=> Contenedor de loscampos del formulario
SummaryOrder=>Muestra el resumen del carrito
  ListItems=> Obtiene la lsita de productos
  Item=> Muestra la info de los productos
  
  ### Screenshot
 <style>
    .container{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
</style>
<div> <img src="../screenshot/imagen-destok.PNG" alt=""></div>
<div class="container">
  <div> <img src="" alt="../screenshot/imagen-destok.PNG"></div>
<div> <img src="../screenshot/imagen-orden-mobile.jpeg" alt=""></div>
</div>

