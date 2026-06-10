# Naksh Zafran - Imperial Saffron Website

A complete full-stack website for Naksh Zafran, featuring premium saffron products.

## Project Structure

```
Zafran Naksh/
├── public/                # Frontend files
│   ├── index.html         # Main HTML file
│   ├── css/
│   │   └── style.css      # All styles
│   └── js/
│       └── app.js         # All frontend logic
├── backend/
│   └── server.js          # Express.js backend server
├── database/
│   └── init.js            # Database initialization script
├── package.json           # Project dependencies and scripts
└── README.md              # This file
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Initialize the Database

```bash
npm run init-db
```

This will create `database/naksh-zafran.db` and populate it with sample products.

### 3. Start the Server

```bash
npm start
```

The website will be available at `http://localhost:3000`


## Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Product Catalog**: Browse all saffron products with filtering and search
- **Shopping Cart**: Add items to cart
- **Order Placement**: Submit orders via form or WhatsApp
- **Health Benefits**: Learn about saffron's health benefits
- **Blog/Journal**: Read articles about saffron
- **FAQ Section**: Answers to common questions
- **Contact Page**: Get in touch with Naksh Zafran


## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/orders` - Create a new order
- `POST /api/newsletter` - Subscribe to newsletter


## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Database**: SQLite3
