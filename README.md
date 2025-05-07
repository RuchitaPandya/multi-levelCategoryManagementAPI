# Multi-Level Category Management API

A Node.js + Express.js + TypeScript + MongoDB API for managing nested categories in a tree structure. Includes JWT-based authentication and Jest tests.

---

## 🔧 Features

- ✅ User registration and login using JWT
- ✅ Create, update, delete, and fetch nested categories
- ✅ Tree structure response for category hierarchy
- ✅ Reassign subcategories on deletion
- ✅ Recursive status update (active/inactive)
- ✅ Jest + Supertest integration tests
- ✅ MongoMemoryServer mocking for isolated tests
- ✅ Optimized MongoDB indexing and queries
- ✅ Optional Docker support

---

## 🚀 Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT (Authentication)
- Jest + Supertest
- Docker (optional)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/category-management-api.git
cd category-management-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
```bash
Create a .env file in the root directory:

PORT=5000
MONGO_URI=mongodb://localhost:27017/categoryDB
JWT_SECRET=your_jwt_secret
```

### 4. Run the Server
```bash
npm run dev```

### 5. Run Tests
```bash 
npm run test```
