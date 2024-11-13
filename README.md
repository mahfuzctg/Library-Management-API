# Library Management System API

The **Library Management System API** is a robust backend API designed to manage library operations, allowing efficient handling of book inventory, member management, and borrowing activities. This API supports a variety of CRUD operations for books, members, and borrow records, with additional features for borrowing and returning books, as well as tracking overdue books.

## Live URL

- **Deployed API Link**: [Library-Management-System-API](https://libary-management-api.vercel.app/)

## Technology Stack

The following technologies and packages are used in the development of this API:

- **Node.js**: Server runtime environment
- **Express.js**: Web application framework for routing and middleware
- **Prisma ORM**: Object-Relational Mapper for interacting with the PostgreSQL database
- **PostgreSQL**: Relational database system
- **TypeScript**: Type-safe JavaScript to reduce errors and increase maintainability
- **Zod**: TypeScript-first schema validation for robust and secure data handling

## Setup Instructions

### 1. Clone the Repository

To get started with the Library Management System API, clone the repository to your local machine:

```bash
git clone https://github.com/mahfuzctg/Library-Management-API.git
cd Library-Management-API
```

## 2. Install Dependencies

After cloning the repository, install the required npm dependencies:

```
npm install
```

## 3. Database Setup

Configure PostgreSQL and Prisma ORM for database interaction.

Update the .env file with your database connection URL:

DATABASE_URL="postgresql://username:password@host:port/database"

## 4. Run Migrations

Run the Prisma migration to set up the database schema:
npx prisma migrate dev 5. Run the Application

## Start the development server:

npm run dev
The server will be running at http://localhost:5000.

Key Features & Functionality

## 1. Book CRUD Operations

#### Create Book: POST /api/books

Add a new book to the library.

#### Read All Books: GET /api/books

Retrieve a list of all books in the library.

#### Read Book by ID: GET /api/books/:bookId

Retrieve details of a specific book by its bookId.

#### Update Book: PUT /api/books/:bookId

Update the details of a specific book by its bookId.

#### Delete Book: DELETE /api/books/:bookId

Remove a book from the library by its bookId.

## 2. Member CRUD Operations

Create Member: POST /api/members
Add a new member to the library system.

Read All Members: GET /api/members
Retrieve a list of all members.

Read Member by ID: GET /api/members/:memberId
Retrieve details of a specific member by their memberId.

Update Member: PUT /api/members/:memberId
Update member details by their memberId.

Delete Member: DELETE /api/members/:memberId
Remove a member from the system by their memberId.

## 3. Borrow & Return Books

Borrow a Book: POST /api/borrow
Borrow a book. This creates a record of the borrowing activity, linking the member to the book.

Return a Book: POST /api/return
Return a borrowed book and mark the record as completed.

## 4. Overdue Borrow List

## Track Overdue Books:

### GET /api/borrow/overdue

Retrieve a list of books that are overdue for return.

## API Error Handling

All API errors are handled consistently, and appropriate HTTP status codes are returned.
Custom error messages are included in the response body to help identify the issue.

## Contribution

Feel free to fork the repository, make improvements, and submit pull requests.
All contributions are welcome!
