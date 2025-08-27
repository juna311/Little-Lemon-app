# Little Lemon Restaurant - Booking App

A modern React-based restaurant booking application for Little Lemon, featuring a booking form with date/time selection, form validation, and a confirmation page.


## Demo
![Little Lemon Booking App Demo](./demo.gif)

*The demo shows: form filling, date/time selection, validation, and booking confirmation*

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Booking Form**: Date, time, guest count, and occasion selection
- **Form Validation**: Real-time validation with disabled submit button until all fields are complete
- **Dynamic Time Slots**: Available times update based on selected date
- **Booking Confirmation**: Dedicated confirmation page with booking details
- **Accessibility**: ARIA labels and screen reader support
- **Modern UI**: Clean, restaurant-themed design with Little Lemon branding

## Tech Stack

- **Frontend**: React 19.1
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useReducer)
- **Styling**: CSS3 with custom properties
- **Testing**: Jest & React Testing Library

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/juna311/Little-Lemon-app
cd Little-Lemon-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Testing

Run the test suite:
```bash
npm test
```

The project includes unit tests for:
- Booking form functionality
- State management with useReducer
- API integration
- Component rendering
