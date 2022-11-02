# NEST API IN8

### Link para aplicação [indev-api.onrender.com/docs](https://indev-api.onrender.com/docs)

#### API em NEST para para participar do processo seletivo IN8

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

Este é o projeto do módulo quatro do curso de Desenvolvimento Full Stack da Blue Edtech.

Para esta aplicação foi desenvolvida uma API para cadastro de pssoas em um formulário.
Este apresenta fundamentos em NestJS e Prisma e documentação de projetos

## Scripts disponíveis

Na pasta raíz do projeto podem ser executados os seguintes comandos:

## Clone o repositório:

```
$ git clone https://github.com/santos95mat/indev_api.git
```

## Instalando as dependências:

```
$ yarn
```

## Executando o projeto

### Produção

```
yarn start
```

### Desenvolvimento

```
yarn start:dev
```



Para conseguir trabalhar com o banco de dados você deverá criar um arquivo .env e adicionar uma url de conexão com seu Postgres local com a chave DATABASE_URL.

```
DATABASE_URL="postgresql://yourUser:0000000@localhost:PORT/database"
```


Acesse [http://localhost:3333](http://localhost:3333) para visualizá-lo em seu navegador de forma local

---
>
>> ## Autor
>>
>>- [Matheus Rodrigues Santos](https://github.com/santos95mat)

## Licença

- MIT License (MIT)


## Execução


## Funcionalidades

Para acessar a lista de endpoints e funcionalidades da aplicação, acesse nossa documentação do [Swagger](https://indev-api.onrender.com/docs), lá você poderá testar todas as rotas.

> ## comandos úteis:
>
> > - nest g resource {nome} --no-spec
>
> > - yarn prisma generate
> > - yarn prisma db push
>
> ---

---
