# API REST FULL


## Comenzando 🚀

### Link de la aplicacion Online

__ https://compassionate-minsky-8b02f9.netlify.app/ __

_Crear cuenta con el siguiente endpoint_

```
https://apiecommerce-2021.herokuapp.com/api/1.0/user/singup
{
    "name": "Joel",
    "lastName":"Flores Zopiyactle",
    "age": 25,
    "address":"Mixtla de Altamirano",
    "country":"Mexico",
    "email":"joelfzop@gmail.com",
    "password":"12345678",
    "phone": 2781141310
}

```

_Registrar un nuevo producto

```
https://apiecommerce-2021.herokuapp.com/api/1.0/product

{
  "name": "Mouse",
  "category": "Electronica",
  "price": 2300,
  "urlImage": "www.google.com/img/laptop.png"
}
```


### Lista de endpoints de manera Local 📋

_Registrar un nuevo usuario_

```
http://localhost:3000/api/1.0/user/singup
{
    "name": "Joel",
    "lastName":"Flores Zopiyactle",
    "age": 25,
    "address":"Mixtla de Altamirano",
    "country":"Mexico",
    "email":"joel12@gmail.com",
    "password":"12345678",
    "phone": 2781141310
}

```


_Iniciar sesión_

```
http://localhost:3000/api/1.0/user/singin
{
    "email": "joel@gmail.com",
    "password": "12345678"
}
```

_Registrar tienda_

```
http://localhost:3000/api/1.0/shop/
{
    "name": "Developer Stack",
    "address": "mixtla de Altamirano, Ver, Calle Benito Juarez, Colonia Centro"
}
```

_Registrar nuevo producto_

```
http://localhost:3000/api/1.0/product
{
  "name": "Mouse",
    "category": "Electronica",
    "price": 2300,
    "urlImage": "www.google.com/img/laptop.png"
}
```

_Obtener todos los productos_

```
http://localhost:3000/api/1.0/product/
```

_Registrar un  carrito de compra (Recibe un Token para registar una compra)_

```
http://localhost:3000/api/1.0/cart-shop
{
    "user_id": "61975db10e7bc188b8bb3dfb",
    "products": [
        {"product_id":"61975dde0e7bc188b8bb3dff"}
    ],
    "shop_id": "61975dc70e7bc188b8bb3dfd"
}

```

