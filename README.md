<div align="center">

# 📚 BookNest

### Online Book Borrowing Platform

**A seamless, modern platform to explore, borrow, and manage books — built with secure authentication and a fully responsive library experience.**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![BetterAuth](https://img.shields.io/badge/BetterAuth-6366F1?style=flat&logo=auth0&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

</div>

---

## Overview

**BookNest** digitizes the traditional library experience. Users can browse a full catalog of books, filter by category, dive into detailed book pages, and borrow titles digitally — all wrapped in a clean, gallery-style UI with secure authentication and profile management across mobile, tablet, and desktop.

---

## ✨ Key Features

- 📖 **Book Catalog** — Browse a responsive grid of books with cover image, title, and category at a glance
- 🔍 **Search & Filter** — Instantly search by title and filter the full collection using a category sidebar (Story / Tech / Science)
- 📘 **Book Details** — Click into any book (protected route) to see author, description, and live copy availability
- 🔐 **Authentication** — Secure login / registration with email-password and Google social login, plus protected routes for details and profile pages
- 👤 **Profile Management** — View and update your account name and profile image after signing in
- 📚 **Borrow Flow** — Borrow directly from the details page, with confirmation toasts and login redirects for guests
- 📱 **Fully Responsive** — Polished, modern UI that adapts seamlessly across all screen sizes

---

## Tech Stack

| Category               | Technology                                 |
| ---------------------- | ------------------------------------------ |
| **Frontend Framework** | Next.js (App Router)                       |
| **UI Library**         | React                                      |
| **Styling**            | Tailwind CSS + DaisyUI / HeroUI            |
| **Authentication**     | BetterAuth (Email/Password + Google OAuth) |
| **Database**           | MongoDB                                    |
| **Icons**              | Lucide React                               |
| **Data Source**        | JSON / MongoDB collection                  |
| **Deployment**         | Vercel                                     |

---

## 📦 NPM Packages Used

| Package                                   | Purpose                             |
| ----------------------------------------- | ----------------------------------- |
| `next`                                    | React framework & app routing       |
| `react` / `react-dom`                     | Core UI library                     |
| `tailwindcss`                             | Utility-first styling               |
| `daisyui` / `heroui`                      | Prebuilt UI components              |
| `better-auth`                             | Authentication & session management |
| `mongodb` / `mongoose`                    | Database connectivity               |
| `react-hot-toast` / `sonner`              | Toast notifications                 |
| `lucide-react`                            | Icon set                            |
| `animate.css` / `react-spring` / `swiper` | UI animations & interactions        |

---

## 🔗 Live Demo

- **Live URL:** [Add your live URL here](#)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A MongoDB connection string

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/booknest.git

# 2. Navigate into the project
cd booknest

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env.local

# 5. Start the development server
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see BookNest in action.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_auth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Building for Production

```bash
npm run build
```

---

## 🧩 Challenge Features

- [ ] Category sidebar filter on All Books page
- [ ] Profile update (name & image) via BetterAuth
- [ ] Third-party animation library integration (Animate.css / React Spring / Swiper.js)

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m 'Add some feature'`
4. **Push** to your branch: `git push origin feature/your-feature-name`
5. **Open** a Pull Request

> For major changes, please open an issue first to discuss your proposal.

---

<div align="center">

Built with ❤️ · Happy reading! 📖

</div>
