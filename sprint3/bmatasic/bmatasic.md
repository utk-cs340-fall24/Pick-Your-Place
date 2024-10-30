# Sprint 2

Name: Bella Matasic
GitHub ID: bellamatasic
Group Name: Pick Your Place

### What you planned to do

- AJAX Server Client Side Email Connection [#35](https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/35)
- Backend Research to Connect Server to PHP [#3](https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/3)
- Fix PHP Template [#34](https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/34)

### What you did not do

- AJAX Server Side Email Connection
- Connecting the JQUERY object to PHP file through AJAX
- Setuping up email port for emails to be sent from

### What problems you encountered

- Manually installed PHP and JSON to import composser and then figured out another way around this problem since hydra does not allow sudo commands
- Manually installed PHPMailer
- When trying to setup server connection, could not create an App Password in gmail account since depreciated September 30, 2024
- Workaround with App Password requires an organization to have Google Workspace Account to meet Google's requirements for SMPT Server access
- Found out Google Workspace has sunset SMPT on 09/24/2024
- Moved to AWS Platfrom to setup AWS Basic Free Plan and finding out how to send emails programmatically through Amazon SES SMTP
- Had to find a work around to send and email with AWS without custom domain
- Tested and found out that with AWS I need to add a composer.json file

### Issues you worked on

- AJAX Server Client Side Email Connection [#35](https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/35)
- Backend Research to Connect Server to PHP [#3](https://github.com/utk-cs340-fall24/Pick-Your-Place/issues/3)

### Files you worked on

- src/components/export-button.html
- src/components/export-button.css
- src/components/export-button.js
- src/components/ReadMe.md
- src/components/send-email.php
- src/components/sendEmail.php
- src/us.html

### What you accomplished

- Did a large amount of research on mail service
- Manually installed PHPMailer
- Created a gmail account for out project
- Signed up for AWS Basic Free Plan
- Had to learn Amazon Simple Service
- Setup SES account
- Sending email with AWS SES without custom domain
- Created an email address identity
- Tested sending emails in Amazon SES with the simulator
- Created SMPT credentials
- Varified STARTTLS Port
- Learned sending emails programmatically through the Amazon SES SMTP interface
- The main portion of this was spent on setting up AWS SES and following documentation. Which involved understanding the platform created, email verfication, subdomain emails, setting up the database, configuring the server locations and ports, finding a way to get out of the sandbox environment without having a domain which is required for verfication, and testing port connnection.
