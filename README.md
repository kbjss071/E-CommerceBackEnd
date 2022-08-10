# E-CommerceBackEnd

## A Link to walkthrough video
https://drive.google.com/file/d/1QL7mDN8wEfVMF8XznqPVSopfMgBS-hXU/view
  

## Description
  
For a simple ecommerce backend development, api routes, sequelized models, and seeds data are implemented.

## Table of Contents 
  
- [Installation](#installation)
  
- [Usage](#usage)
  
- [Contributing](#contribution)
  
- [Questions](#questions)
  
## Installation
  
Run the following command in order to install necessary dependencies:
 
```
npm i
```

## Usage

- When the database name, MySQL username, and MySQL password are passed to an enviroment varaible file,
    - an user should be able to connect to a database using Sequelize
- When the user enters schema and seed commands,
    - a developement database is created and is seeded with test data
- When the user enters the command to invoke the application
    - the server of the application is started and the Sequelize models are synced to the MySQL database.
- When the user opens API GET routes in Insomnia Core for categories, products, or tags,
    - the data for each of these routes is displayed in a formatted JSON.
- When the user tests API POST, PUT, DELETE routes in Insomnia Core,
    - the user is able to successfully create, update , and delete data in my database.
  
<hr>

### Category Requests
- `GET` /api/categories/ - finds all categories data in the database
- `GET` /api/categories/:id - finds one category data by the given id
- `POST` /api/categories/ - creates a new category
- `PUT` /api/categories/:id - updates a category by the given id
- `DELETE` /api/categories/:id - delete a category by the given id

### Product Requests
- `GET`  /api/products - finds all products data in the database
- `GET` /api/products - finds one product data by the given id
- `POST` /api/products - creates a new product
- `PUT` /api/products - updates a product by the given id
- `DELETE` /api/products - delete a product by the given id

### Tag Requests
- `GET`  /api/tags - finds all tags data in the database
- `GET` /api/tags - finds one tag data by the given id
- `POST` /api/tags - creates a new tag
- `PUT` /api/tags - updates a tag by the given id
- `DELETE` /api/tags - delete a tag by the given id
  
    
## Contribution
  
No contribution is needed.

## Questions
  
If you have any questions about the repo, open an issue or contact me directly at my email address kbjss071@gmail.com.
  
More of my works can be found at my GitHub account [kbjss071](https://github.com/kbjss071/).