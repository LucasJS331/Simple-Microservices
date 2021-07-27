# 💼 Simple-Microservices 💼
<p align="center">
  Microserviços simples criado com Express e mongoDB
</p>

<p align="center">
  <img src="https://media.giphy.com/media/3o6fJgGmyjIruc35u0/giphy.gif"/>
</p>

## Book Endpoints:

## GET/ books

Essa EndPoint é responsavel por retornar todos os livros cadastrados 

### Parametros:

Nenhum

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber a listagem de todos os livros
```
 [
    {
        "_id": "60fee1b8dadfec239039bf8e",
        "author": "Robert Prates",
        "title": "the segno",
        "publisher": "Frontal",
        "__v": 0
    },
    {
        "_id": "60ff4a917b51611a5c1b0ecd",
        "author": "Otavio Kobe",
        "title": "the luke",
        "publisher": "Frontal",
        "__v": 0
    }
]
```


## GET/ book/ID

Essa EndPoint é responsavel por retornar um livro especifico! 

### Parametros:

Id: é preciso indicar o ID no final da endpoint.

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber os dados do livro escolhido.
```
{
        "_id": "60fee1b8dadfec239039bf8e",
        "author": "Robert Prates",
        "title": "the segno",
        "publisher": "Frontal",
        "__v": 0
    }
```

## POST/ book

Essa EndPoint é responsavel por registrar um novo livro! 

### Parametros:

*title: titulo do livro

*author: autor do livro

*publisher: editora do livro

*numberPages: numero de páginas

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber um sinal de sucesso!
```
{sucesso: "o livro foi cadastrado com sucesso!"}
```

## Customer Endpoints:
## GET/ customers

Essa EndPoint é responsavel por retornar todos os clientes cadastrados 

### Parametros:

Nenhum

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber a listagem de todos os clientes
```
[
    {
        "_id": "60fef3fe8e4333313cc3e3e2",
        "name": "lucas",
        "age": "33",
        "adress": "Rua lorem ipsulum",
        "__v": 0
    },
    {
        "_id": "60ff43de6e1f1a0330a6774a",
        "name": "Carlos",
        "age": 21,
        "adress": "Rua ipsulum dolor",
        "__v": 0
    }
]
 
```

## GET/ customer/ID

Essa EndPoint é responsavel por retornar um cliente especifico! 

### Parametros:

Id: é preciso indicar o ID no final da endpoint.

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber os dados do cliente escolhido.
```
 {
        "_id": "60fef3fe8e4333313cc3e3e2",
        "name": "lucas",
        "age": "33",
        "adress": "Rua lorem ipsulum",
        "__v": 0
    },
```

## POST/ customer

Essa EndPoint é responsavel por registrar um novo cliente! 

### Parametros:

*name: nome do cliente

*age: idade do cliente

*adress: endereço do cliente

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber um sinal de sucesso!
```
{sucesso: "o cliente foi cadastrado com sucesso!"}
```

### Order Endpoints
## GET/ order

Essa EndPoint é responsavel por retornar todos os pedidos cadastrados 

### Parametros:

Nenhum

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber a listagem de todos os pedidos
```
 [
    {
        "_id": "60ff291f03a42617e877910e",
        "bookID": "60fee1b8dadfec239039bf8e",
        "customerID": "60fef3fe8e4333313cc3e3e2",
        "deliveryDate": "2021-07-30T00:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "60ff298203a42617e8779110",
        "bookID": "f34l44ldadfedç3023br3a",
        "customerID": "60fef3fe8e4333313cc3e3e2",
        "deliveryDate": "2021-07-30T00:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "60ff37bb7f9462127869bb07",
        "bookID": "60fee1b8dadfec239039bf8e",
        "customerID": "33lacbeu719axkl3048ab",
        "initialDate": "2021-07-27T00:00:00.000Z",
        "deliveryDate": "2021-07-30T00:00:00.000Z",
        "__v": 0
    }
]
```


## GET/ order/ID

Essa EndPoint é responsavel por retornar um pedido especifico! 

### Parametros:

Id: é preciso indicar o ID no final da endpoint.

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber os dados do pedido escolhido.
```
{
        "_id": "60ff291f03a42617e877910e",
        "bookID": "60fee1b8dadfec239039bf8e",
        "customerID": "60fef3fe8e4333313cc3e3e2",
        "deliveryDate": "2021-07-30T00:00:00.000Z",
        "__v": 0
    },
```

## POST/ order

Essa EndPoint é responsavel por registrar um novo pedido! 

### Parametros:

*bookID: id do livro

*customerID: id do cliente

*initialDate: data de inicio

*deliveryDate: data de entrega

### Respostas:

### Ok! 200

Caso esta resposta acontença você ira receber um sinal de sucesso!
```
{sucesso: "o pedido foi cadastrado com sucesso!"}
```
## Como usar:

Cada microserviço roda em uma porta diferente, utilize o comando npm install e também utilize o comando npm run dev em cada um deles!

```
~ npm install

~ npm run dev
```
