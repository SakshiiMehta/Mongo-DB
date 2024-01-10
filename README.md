Server>> Storing certain book data >> User Register >>Subscriber

This is a book record management API server for the library system or management of certain records or books.

Fine System:
User: 02/01/24-02/03/24
03/03/24 => Rs 50

## Subscription types

3 months subscription (Basic)
6 months subscription (Standard)
12 months subscription (Premium)

If the subscription type is standard && if the subscription date id 02/01/2024 => then subscription valid till 02/06/2024

within subscription date >> if we miss the renewal >> 50/- day
Subscription date is also missed >> also missed the renewal >> 100+50/- day

# Routes and Endpoints

## /users

POST: Create a new user
GET: Get all the user info

## /users/{id}

GET: Get a user by id
PUT: Update a user by their ID
DELETE: Delete the user by ID (check if he/she still have an issued book) && (is there any fine to be paid)

## /users/subscription-detail/{id}

GET: Get user subscription details >> Date of Subscription >> Valid till >> Fine?

## /books

GET: Get all the books
POST: Create / Add a new book

## /books/{id}

GET: Get a book by ID
PUT: Update a book by ID

## /books/issued

GET: Get all issued boooks

## /books/issued/with fine

GET: Get all the issued books with their fine

## npm init

## npm i nodemon --save-dev // save dev for devellopers dependency so tha we don't have to kill the server manually and clients will not do nay changes in the server

## npm run dev

MVC Arch => Controllers

> > M: Modal (combination of View and COntroller=> depicts the structure of MongoDB)
> > V: View (Frontend (reactJs))
> > C: Controllers:Brain or logical part of a route
> > books.controllers.js
> > users.controllers.js

Schema >> Below is the representation of table
id: String (datatype)
name: String
age: number
gender: char || varchar(15)

V/S

Modal >> Modals have the value of the particular fields and schema have the conditions for the values
id: 123
name: DevTown
age: 23
gender:'M'

Foreign Key:

> > Refrential Integrity
> > eg:
> > Users Table Books Table
> > issuedBook: 2(Foreign Key) issuedBook: 2 (Primary Key)

DTO (Data Transfer Object) => Transfering info of obj to another obj
var obj1 : {
name
age
id
gender
}

var obj2: {
name
age
id
gender

}
