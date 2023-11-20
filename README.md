# E-Commerce-Back-End

## Description
This is the back-end for an E-Commerce application. It provides functionality to manage products, categories, and tags in a database.

## Table of Contents
- Installation
- Usage
- Contributing
- Tests
- License
- Contact Info

## Installation
To run the E-Commerce-Back-End App, follow these steps:
- Step 1: Clone the repository to your local machine.
    - git clone git@github.com:joellopez95/E-Commerce-Back-End.git
- Step 2: Navigate to the project directory : cd e-Commerce-Back-End
- Step 3: Install the necessary dependencies using `npm install`.
- Step 4: Do an `npm run seed`, to seed the data to server.
- Step 5: Run the application using `node server.js`.

Note: Ensure that you have set up the MySQL database and updated the connection details in the `server.js` file before running the application.

## Usage
The E-Commerce-Back-End application is designed to provide a seamless experience for managing products, categories, and tags in an e-commerce database. Here's how you can use the application:

1. **Setup Database:**
   - Ensure that you have set up a MySQL database for the application.
   - Update the database connection details in the `server.js` file.

2. **Install Dependencies:**
   - Run the following command to install the necessary dependencies:
     ```bash
     npm install
     ```
3. **Seed Data:**
   - Seed the database with sample data using the following command:
     ```bash
     npm run seed
     ```

4. **Run the Application:**
   - Start the server by running:
     ```bash
     node server.js
     ```
   - The application will be accessible at `http://localhost:3001`.

5. **API Endpoints:**
   - Interact with the following API endpoints using Insomnia.
     - Manage Products:
       - `GET /api/products`: Retrieve all products.
       - `GET /api/products/:id`: Retrieve a specific product by ID.
       - `POST /api/products`: Create a new product.
       - `PUT /api/products/:id`: Update a product by ID.
       - `DELETE /api/products/:id`: Delete a product by ID.
     - Manage Categories:
       - `GET /api/categories`: Retrieve all categories.
       - `GET /api/categories/:id`: Retrieve a specific category by ID.
       - `POST /api/categories`: Create a new category.
       - `PUT /api/categories/:id`: Update a category by ID.
       - `DELETE /api/categories/:id`: Delete a category by ID.
     - Manage Tags:
       - `GET /api/tags`: Retrieve all tags.
       - `GET /api/tags/:id`: Retrieve a specific tag by ID.
       - `POST /api/tags`: Create a new tag.
       - `PUT /api/tags/:id`: Update a tag by ID.
       - `DELETE /api/tags/:id`: Delete a tag by ID.

6. **Video Tutorial:**
   - For a visual guide on using the E-Commerce-Back-End application, refer to the provided video tutorial.

## Contributing
- W3-Schools
- Sentry
- Mozilla Developer
- Jeremy Henry (Bootcamp Instructor)

## Tests
N/A
## License
N/A

## Contact Info
- GitHub: [joellopez95](https://github.com/joellopez95)
- Email: jolopez.satx@gmail.com