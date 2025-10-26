Cura Appointment Booking Cypress Tests::
This repository contains Cypress end-to-end (E2E) tests for the Cura Appointment Booking Demo Site. The tests automate the process of booking an appointment, including login, form filling, and verification of the booking confirmation.

1.Clone the Repository
//git clone <your-repo-url>
//cd <your-repo-directory>

2.Install Dependencies
npm install

3.Run Cypress Tests
npx cypress open

4.Run tests in headless mode:
npx cypress run

📝 Test Overview

The test suite covers the following scenarios:
-Visit the Cura Appointment Booking Site
-Navigates to the homepage and clicks the "Make Appointment" button.
-Login
-Enters valid credentials and logs in.
-Book an Appointment
-Selects facility, checks hospital readmission, chooses a healthcare program, enters a visit date, adds a comment, and submits the appointment.
-Verify Appointment
-Confirms that the appointment was successfully booked by checking for a confirmation message.

📂 File Structure
cypress/
  └── integration/
      └── cura_appointment_booking_spec.js   # Main test file
  └── fixtures/
  └── support/
package.json
README.md
