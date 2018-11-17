Development of a Web User Interface for Cloudfoundry (CF) using AngularJS. Cloudfoundry is an open source platform that can be used to deploy and run your apps.

CF provides the User Account and Authentication (UAA) platform to provide tokens for authentication and authorization. UAA servers support access control as OAuth2 services and can store user informations internally. UAA defines different user roles, such as admin, manager, developer, or auditor, and grants them different sets of privileges to run CF. Only an admin user has access to all available functions provided by the API. Manager users have access only to all read operations.

Cloud Foundry defines different roles and permissions. A user can have one or more roles. The combination of these roles defines the user's overall permissions in the org and within specific spaces in that org.

The project is using Grunt to make a compilation of files, bcryptsjs was used to test encoding and decoding authentication tokens. Currently, we are testing the application with two Cloudfoundry endpoints provided by IBM Bluemix and Pivotal Web Services.