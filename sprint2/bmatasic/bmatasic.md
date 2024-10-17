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

- src/components/ExportButton/amazon-ses-smtp-sample.php
- src/components/ExportButton/export-button.css
- src/components/ExportButton/export-button.html
- src/components/ExportButton/export-button.js
- src/components/ExportButton/PHPMailer-master/COMMITMENT
- src/components/ExportButton/PHPMailer-master/composer.json
- src/components/ExportButton/PHPMailer-master/.editorconfig
- src/components/ExportButton/PHPMailer-master/get_oauth_token.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-af.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-ar.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-as.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-az.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-ba.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-be.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-bg.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-bn.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-ca.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-cs.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-da.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-de.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-el.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-eo.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-es.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-et.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-fa.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-fi.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-fo.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-fr.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-gl.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-he.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-hi.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-hr.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-hu.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-hy.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-id.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-it.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-ja.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-ka.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-ko.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-ku.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-lt.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-lv.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-mg.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-mn.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-ms.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-nb.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-nl.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-pl.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-pt_br.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-pt.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-ro.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-ru.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-si.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-sk.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-sl.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-sr_latn.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-sr.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-sv.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-tl.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-tr.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-uk.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-ur.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-vi.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-zh_cn.php
- src/components/ExportButton/PHPMailer-master/language/phpmailer.lang-zh.php
- src/components/ExportButton/PHPMailer-master/LICENSE
- src/components/ExportButton/PHPMailer-master/README.md
- src/components/ExportButton/PHPMailer-master/SECURITY.md
- src/components/ExportButton/PHPMailer-master/- src/DSNConfigurator.php
- src/components/ExportButton/PHPMailer-master/- src/Exception.php
- src/components/ExportButton/PHPMailer-master/- src/OAuth.php
- src/components/ExportButton/PHPMailer-master/- src/OAuthTokenProvider.php
- src/components/ExportButton/PHPMailer-master/- src/PHPMailer.php
- src/components/ExportButton/PHPMailer-master/- src/POP3.php
- src/components/ExportButton/PHPMailer-master/- src/SMTP.php
- src/components/ExportButton/PHPMailer-master/VERSION
- src/components/ExportButton/ReadMe.md
- src/components/ExportButton/sendEmail.php
- src/policies/ses-smtp-user.20241014-090135_credentials.csv
- src/policies/user-group-policy.json

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
