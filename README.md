# Book My Hotel
Live demo: https://book-my-hotel-5o42.onrender.com/

A hotel booking application built with the **MERN** stack, designed to provide a robust, scalable, and feature-rich experience. This project uses **TypeScript** for type safety, **Tailwind CSS** for styling, and several advanced tools and libraries for functionality, security, and testing.

## Features

- **MERN Stack**: MongoDB, Express.js, React.js, and Node.js form the foundation of the app.
- **Tailwind CSS**: For responsive, modern, and clean UI design.
- **TypeScript**: Enforces type safety and ensures scalability.
- **React Query**: Simplifies server state management, enabling caching and fetching with ease.
- **React Hook Form**: For building dynamic, optimized, and secure forms.
- **Cloudinary**: Handles image uploads and storage efficiently.
- **Stripe Integration**: Enables secure payments directly from the app.
- **JWT Authentication**: Secured user login using JWT (JSON Web Token) and HTTP cookies.
- **Advanced Features**:
  - Searching, sorting, and filtering of hotels.
  - Image uploading for hotel listings.
  - Advanced form validation and input management.
- **Automated Testing**: Robust end-to-end (e2e) tests powered by **Playwright** to ensure bulletproof functionality.
- **Deployment**: Hosted live using **Render**.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, TypeScript
- **Backend**: Node.js, Express.js, MongoDB
- **Payments**: Stripe API
- **Image Management**: Cloudinary
- **Testing**: Playwright for automated e2e testing
- **Deployment**: Render

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/anik-saha-2001/book-my-hotel.git
   cd book-my-hotel
   ```
2. Install dependencies:
  ```bash
  npm install
  ```
3. Set up environment variables for MongoDB, Cloudinary, and Stripe:
  - MONGO_URI: MongoDB connection string.
  - CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET: Cloudinary credentials.
  - STRIPE_SECRET_KEY: Stripe API key.
4. Run the development server:
  ```bash
  cd backend
  npm run dev
  ```
5. Run the frontend in new terminal
   ```bash
   cd frontend
   npm run dev
   ```

## Testing

Automated e2e tests ensure that the app is robust and scalable. Run Playwright tests with:
  ```bash
  cd backend
  npm run e2e
  ```
Also run the frontend.

## If u like this project please don't forget to give a ⭐
