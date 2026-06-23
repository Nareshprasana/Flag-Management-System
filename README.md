# Feature Flag Management System

## Overview

Feature Flag Management System is a multi-tenant application that allows organizations to manage and control feature flags independently.

The system consists of:

* Backend API (Node.js + Express.js + MongoDB)
* Super Admin Portal (Next.js)
* Organization Admin Portal (Next.js)
* End User Feature Checker (Next.js)

Each organization can create, update, enable, disable, and delete feature flags while maintaining complete tenant isolation.

---

## Features

### Super Admin

* Secure Login
* Create Organizations
* View Organizations
* Multi-Tenant Management

### Organization Admin

* Signup & Login
* JWT Authentication
* Create Feature Flags
* View Feature Flags
* Enable/Disable Feature Flags
* Delete Feature Flags

### End User

* Check Feature Availability
* Organization Specific Feature Resolution

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

### Frontend

* Next.js (App Router)
* React.js
* Tailwind CSS
* Axios

---

## Project Structure

```text
Feature-Flag-Management-System

├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   ├── utils
│   │   └── config
│
├── super-admin-app
│
├── admin-app
│
└── user-app
```

---

## Authentication & Authorization

### Super Admin

* Login using predefined credentials
* Manage organizations
* Access organization data

### Organization Admin

* Signup under an organization
* Login with JWT authentication
* Manage feature flags for their organization only

### Tenant Isolation

Every feature flag is associated with an organization.

Organization administrators can only access feature flags belonging to their own organization.

---

## API Endpoints

### Authentication

| Method | Endpoint               | Description               |
| ------ | ---------------------- | ------------------------- |
| POST   | /api/super-admin/login | Super Admin Login         |
| POST   | /api/auth/signup       | Organization Admin Signup |
| POST   | /api/auth/login        | Organization Admin Login  |

### Organizations

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/organizations |
| GET    | /api/organizations |

### Feature Flags

| Method | Endpoint               |
| ------ | ---------------------- |
| POST   | /api/feature-flags     |
| GET    | /api/feature-flags     |
| PUT    | /api/feature-flags/:id |
| DELETE | /api/feature-flags/:id |

### Feature Check

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/check-feature |

---

## Database Models

### Organization

```javascript
{
  name: String,
  createdAt: Date
}
```

### User

```javascript
{
  email: String,
  password: String,
  role: String,
  organizationId: ObjectId
}
```

### FeatureFlag

```javascript
{
  key: String,
  enabled: Boolean,
  organizationId: ObjectId
}
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/feature_flags

JWT_SECRET=your-secret-key

SUPER_ADMIN_EMAIL=admin@byepo.com

SUPER_ADMIN_PASSWORD=admin123
```

---

## Installation & Setup

### Backend

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

### Super Admin App

```bash
cd super-admin-app

npm install

npm run dev
```

Runs on:

```text
http://localhost:3000
```

---

### Organization Admin App

```bash
cd admin-app

npm install

npm run dev
```

Runs on:

```text
http://localhost:3001
```

---

### End User App

```bash
cd user-app

npm install

npm run dev
```

Runs on:

```text
http://localhost:3002
```

---

## Security Features

* JWT Authentication
* Password Hashing using bcrypt
* Role-Based Access Control
* Protected Routes
* Tenant Isolation
* Secure API Access

---

## Future Improvements

* Organization Code Based Lookup
* Feature Rollout Percentage
* Audit Logs
* Environment Based Flags (Development / Staging / Production)
* Feature Flag Scheduling
* Analytics Dashboard
* User Permissions

---

## Engineering Decisions

### Why JWT?

JWT enables stateless authentication and simplifies authorization across multiple frontend applications.

### Why Multi-Tenant Architecture?

Feature flags must remain isolated between organizations to ensure security and scalability.

### Why MongoDB?

MongoDB provides flexible schema management and fast development for feature flag systems.

---

## Author

Developed as part of the Byepo Technologies Software Developer Assessment.
