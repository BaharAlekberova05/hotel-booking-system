🏨 Hotel Trip Planner

A sleek, step-by-step hotel booking app built with React.js and Tailwind CSS. Plan your multi-day trips by selecting destinations, hotels, and meals, while the app enforces board type rules and calculates daily & total costs automatically.

🚀 Quick Start
Prerequisites

Node.js v18+

npm or yarn

Installation
# Clone the repo
git clone <repository-url>
cd hotel-booking-system

# Install dependencies
npm install

# Start the app
npm run dev

🛠 Tech Stack & Why
Technology	Why It Was Used
React.js	Fast, component-based UI rendering and state management.
Formik + Yup	Smooth form handling with validation for multi-step inputs.
Tailwind CSS	Quick, responsive styling with a clean, modern look.
useState / Props	Lightweight state management for multi-step flow.
Lucide React	Consistent, minimalistic icons across the app.
🏗 Architecture & Flow

Step 1 – Trip Setup

Select citizenship, destination, start date, number of days, and board type.

Step 2 – Daily Planning

Pick hotel per day and meals according to board type rules.

Daily total price automatically updates.

Board Rules:

FB: Lunch & dinner selectable

HB: Only one meal per day

NB: Meals disabled

Step 3 – Summary & Checkout

Review full booking with daily and total costs.

Confirm booking → resets app for new bookings.

📌 Current Features

Multi-step form with validation

Dynamic daily cost calculation

Responsive UI for mobile and desktop

Interactive step indicator showing current step and completed steps

Clear meal selection rules enforcement

📝 Known Limitations & Future Enhancements

Limitations:

Hardcoded data for hotels, meals, and countries

No backend or persistent storage yet

Future Ideas:

Save bookings in localStorage or backend

PDF export of booking summary

Multi-currency support

Add animations, transitions, and more interactive UX

TypeScript migration and unit tests for maintainability

🎨 Design Philosophy

Clean card-based layout for each day

Hover & selected states improve clarity

Step indicator for smooth navigation

Tailwind colors with soft blue highlights for clarity and accessibility

Responsive typography and spacing for mobile-first experience