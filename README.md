# 📚 EduShelf - Library Management System

A modern, responsive library management system built with React, TypeScript, and Vite. EduShelf allows users to efficiently manage books, track inventory, and handle borrowing operations with an intuitive user interface.

## ✨ Features

### 📖 Book Management

- **Add New Books**: Create new book entries with complete details (title, author, genre, ISBN, description, copies)
- **View All Books**: Browse comprehensive book catalog with search and filter capabilities
- **Edit Books**: Update book information and manage inventory
- **Delete Books**: Remove books from the system with confirmation
- **Book Details**: View detailed information about individual books

### 📋 Borrowing System

- **Borrow Books**: Easy book borrowing with availability tracking
- **Borrow Summary**: View comprehensive statistics of borrowed books
- **Availability Status**: Real-time tracking of book availability
- **Inventory Management**: Automatic copy count updates

### 🎨 User Experience

- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Toast Notifications**: Real-time feedback for user actions
- **Loading States**: Smooth loading indicators and error handling

## 🛠️ Tech Stack

### Frontend

- **React 19.1.0** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Icons** - Icon library

### State Management

- **Redux Toolkit** - Efficient state management
- **RTK Query** - Data fetching and caching
- **React Redux** - React bindings for Redux

### UI/UX

- **React Hot Toast** - Toast notifications
- **Responsive Design** - Mobile-friendly interface
- **Custom Components** - Reusable UI components

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── shared/         # Shared components (Navbar, Footer)
│   └── UI/             # Page-specific UI components
│       └── Home/       # Home page components
├── layout/             # Layout components
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── AllBooks.tsx    # Book catalog
│   ├── AddBooks.tsx    # Add new book form
│   ├── BorrowSummery.tsx # Borrowing statistics
│   └── SigleBooksDetails.tsx # Individual book details
├── redux/              # State management
│   ├── api/            # API configuration
│   ├── store.ts        # Redux store
│   └── hook.ts         # Typed hooks
├── router/             # Routing configuration
├── assets/             # Static assets
└── types.ts            # TypeScript type definitions
```



## 🔌 API Integration

The application connects to a backend API for data persistence:

- **Base URL**: `https://library-management-server-seven-green.vercel.app/api`
- **Local Development**: `http://localhost:7000/api`

### API Endpoints

- `GET /books` - Fetch all books
- `POST /books` - Add new book
- `PUT /books/:id` - Update book
- `DELETE /books/:id` - Delete book
- `GET /books/:id` - Get single book
- `POST /borrow` - Borrow book
- `GET /borrow` - Get borrow summary

## 🚀 Getting Started

1. Clone the repository: `git clone https://github.com/RakibHossen678/library-Management`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build for production: `npm run build`
5. Start the production server: `npm run preview`





