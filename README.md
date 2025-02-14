# Qantas coding challenge

# Project Overview

A user of Qantas Hotels would like to see a list of hotels that can be sorted by price.

# Technologies

- React.js (Vite) + JSX
- ESLint & Prettier for code formatting
- Redux Toolkit for state management
- Vitest for testing

# Installation and Setup

1. Clone the git repo, https://github.com/Aiswarya-Rahul/qantas-app.git
2. Install dependencies: npm install OR yarn install
3. Start app in dev mode: npm run dev,
   for prod: npm run build
   npm run start

# Solution approach

- Divided the application into 5 components: App, Layout, Header, HotelList and HotelCard
- Used PropsTypes for type checking
- Used Redux Toolkit for centralised state management.
- Used CSS Modules for styling components, and media query for making it responsive.
- Sort functionality is handled in a generic function, that can be easily extended for other parameters.
- The hotels are sorted by price in ascending order on load of the page.

# Trade-offs

- Hardcoded location as Sydney.
- Use of Type Script for strict type checking
- Use of Story Book for writing stories about components and do accessibility testing.

# Improvements

- Use of Tailwind.css for styling
- Make location configurable
- Use useMemo to avoid unnecessary renders for hotel count
- Prevent unnecessary re-renders of Header and HotelList using React.memo
- Use of pagination with the help of React Window to limit the number of hotels
- Load HotelList component lazily, with the help of Suspense and Lazy loading
- Move Fetch Logic to Redux Middleware (Thunk)
