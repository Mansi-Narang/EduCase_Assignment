# PopX Mobile App UI - React & Tailwind CSS

## Project Overview

This project is a mobile-first implementation of the PopX application UI, built using React and Tailwind CSS. The application consists of several key screens that form a complete user flow for account registration, authentication, and profile management.

## Screens

1. **Welcome Screen** - Initial landing page with options to create an account or login
2. **Create Account Form** - Registration form for new users
3. **Sign-in Screen** - Authentication page for existing users
4. **Account Settings** - User profile and account management page

## Technical Stack

- **React** - Frontend library for building user interfaces
- **Tailwind CSS v4** - Utility-first CSS framework for styling
- **JavaScript** - Programming language

## Mobile-First Design

This project is specifically designed for mobile devices only. All components are:
- Constrained to a maximum width appropriate for mobile phones (max-w-sm)
- Centered horizontally to display properly on all devices
- Optimized for touch interaction and mobile viewing

## Components

### 1. Welcome Page (`PopXSignupPage`)
- Welcome message with brief introduction
- Two action buttons: "Create Account" and "Already Registered? Login"
- Content positioned at the bottom of the screen for easy thumb access

### 2. Create Account Form (`CreateAccountForm`)
- Form for collecting user information:
  - Full Name (required)
  - Phone number (required)
  - Email address (required)
  - Password (required)
  - Company name
- "Are you an Agency?" radio button selection
- Form submission button

### 3. Sign-in Form (`SigninForm`)
- Simple authentication form with:
  - Email address input
  - Password input
  - Login button

### 4. Account Settings (`AccountSettings`)
- Profile display with:
  - User avatar with edit indicator
  - User name and email
  - User bio/description
- Clean, sectioned layout with appropriate spacing

## Installation & Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Usage

Navigate between screens:
- From Welcome page → Create Account or Sign-in
- From Create Account → Account Settings (after successful registration)
- From Sign-in → Account Settings (after successful authentication)

## Notes

- All forms include proper validation and state management
- The UI is designed to match the provided design mockups exactly
- Placeholder text and images are used where appropriate
- The application is strictly designed for mobile phone viewing

## Future Improvements

- Add form validation with error messages
- Implement actual authentication flow
- Add profile image upload functionality
- Create navigation between screens
- Implement dark mode option