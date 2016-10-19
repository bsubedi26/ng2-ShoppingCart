# ng2-ShoppingCart
Shopping Cart implementation using angular 2

***Installation***

npm install -g angular-cli

***Usage***

No server: ng serve

Server Running: ng serve --proxy-config proxy.conf.json

When back end is required, the proxying support of webpack's dev server is used to highjack certain urls and send them to a backend server. For this application, express is used as the server.

For example, if the express server is running on http://localhost:3000/ and we want all API calls to http://localhost:4200/ (port angular2 is running on) to go to that server, the express server should be running simultaneously as the angular 2 application.
