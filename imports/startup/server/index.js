// This defines a starting set of data to be loaded if the app is loaded with an empty db.

// This file configures the Accounts package to define the UI of the reset password email.
//import '../imports/startup/server/reset-password-email.js';

// Set up some rate limiting and other important security settings.
//import '../imports/startup/server/security.js';

// This defines all the collections, publications and methods that the application provides
// as an API to the client.
import '/imports/api/server.js';
import './fixtures.js';
process.env.MAIL_URL = "smtp://postmaster@aiatech.ir:a0985d40a546c66a9bdbcfa5f5269042@smtp.mailgun.org:587";
Accounts.emailTemplates.siteName = "AIATECH";
Accounts.emailTemplates.from = "AIATECH MAIL SERVICE <info@aiatech.ir>";
