# Villa Paradiso 🏡

A modern booking and property management platform for **Villa Paradiso**.

The project is built as a full-stack application with a customer-facing website and an admin dashboard for managing bookings, guests, payments, availability, gallery and reviews.

> 🚧 **Status:** In development

---

## ✨ Overview

**Villa Paradiso** is a portfolio project designed to simulate a real-world vacation villa booking platform.

The application consists of two main parts:

* 🌴 **Guest Website** — browse the villa, check availability and make reservations
* 🛠️ **Admin Dashboard** — manage bookings, guests, availability, payments and villa content

The initial version focuses on a **single villa**, with the architecture designed to allow future expansion to multiple properties.

---

## 🚀 Features

### Guest Website

* Villa presentation
* Photo gallery
* Villa amenities
* Availability search
* Booking flow
* Guest information
* Booking confirmation
* Reviews

### Admin Dashboard

* Dashboard with booking and revenue statistics
* Booking management
* Calendar and availability management
* Guest management
* Payment management
* Gallery management
* Review management
* Villa settings

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* MUI
* Zustand
* TanStack Query
* React Hook Form
* Zod
* Day.js
* i18next

### Backend

* Node.js
* Express
* Prisma

### Database

* PostgreSQL

### Testing

* Vitest
* React Testing Library
* Playwright

### Development

* ESLint
* Prettier
* Docker *(planned)*

---

## 🏗️ Architecture

```text
                    Villa Paradiso
                          │
             ┌────────────┴────────────┐
             │                         │
        Guest Website             Admin Dashboard
             │                         │
             └────────────┬────────────┘
                          │
                   React Frontend
                          │
                TanStack Query + ky
                          │
                     REST API
                          │
                  Node.js + Express
                          │
                       Prisma
                          │
                     PostgreSQL
```

---

## 📁 Project Structure

```text
villa-paradiso/
│
├── frontend/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── features/
│       ├── hooks/
│       ├── layouts/
│       ├── pages/
│       │   ├── admin/
│       │   └── user/
│       ├── providers/
│       ├── router/
│       ├── services/
│       ├── store/
│       ├── types/
│       └── utils/
│
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   └── src/
│       ├── config/
│       ├── middleware/
│       ├── modules/
│       ├── app.ts
│       └── server.ts
│
├── package.json
└── README.md
```

---

## 🗄️ Core Entities

The initial database model includes:

```text
Villa
Guest
Booking
Payment
BlockedDate
GalleryImage
Review
User
```

The application is intentionally designed around a single property initially, with the possibility of supporting multiple villas in the future.

---

## 🔑 Main Booking Flow

```text
Select dates
      ↓
Check availability
      ↓
Enter guest details
      ↓
Review booking
      ↓
Payment
      ↓
Booking confirmation
```

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* PostgreSQL

### Installation

Clone the repository:

```bash
git clone https://github.com/nikolnikolova00/villa-paradiso.git
cd villa-paradiso
```

Install dependencies for the whole workspace:

```bash
npm install
```

### Environment Variables

Create a `.env` file in `backend/` based on `.env.example`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/villa_paradiso"
PORT=4000
```

### Database

Run Prisma migrations:

```bash
npm run db:migrate
```

Generate the Prisma Client (also runs automatically on install):

```bash
npm run db:generate
```

### Run the application

Run the backend and frontend together:

```bash
npm run dev
```

Or run them individually:

```bash
npm run dev:backend
npm run dev:frontend
```

The backend runs at `http://localhost:4000` and the frontend at `http://localhost:5173`.

---

## 🧪 Testing

Run unit and component tests:

```bash
npm run test
```

Run end-to-end tests:

```bash
npm run test:e2e
```

---

## 📌 Roadmap

* [x] Project setup
* [ ] Authentication
* [ ] Villa management
* [ ] Guest management
* [ ] Booking management
* [ ] Availability calendar
* [ ] Payment management
* [ ] Gallery management
* [ ] Reviews
* [ ] Admin dashboard
* [ ] Guest booking flow
* [ ] Testing
* [ ] Docker setup
* [ ] Deployment
* [ ] Multi-property support

---

## 🎯 Future Improvements

The initial release is focused on a single villa.

Future versions may introduce:

* Multiple properties
* Property-specific administrators
* Advanced roles and permissions
* Online payments with Stripe
* Email notifications
* Automated booking confirmations
* Invoice generation
* Multi-language support
* Multi-currency support
* Analytics and advanced reporting

---

## 👩‍💻 Author

**Nikol Nikolova**

Frontend Developer | React | TypeScript

---

## 📄 License

This project is created for educational and portfolio purposes.
