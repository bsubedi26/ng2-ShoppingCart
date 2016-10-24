# ng2-ShoppingCart
Shopping Cart implementation using angular 2

***Installation***

You need to have the angular-cli installed globally to access ng commands

npm install -g angular-cli

***Usage***

No server: ng serve

Server Running: ng serve --proxy-config proxy.conf.json

When back end is required, the proxying support of webpack's dev server is used to highjack certain urls and send them to a backend server. For this application, express is used as the server.

For example, if the express server is running on http://localhost:3000/ and we want all API calls to http://localhost:4200/ (port angular2 is running on) to go to that server, the express server should be running simultaneously as the angular 2 application.

![Alt text](/assets/img/screenshots/cart.png?raw=true "Optional Title")
![Alt text](/assets/img/screenshots/details.png?raw=true "Optional Title")
![Alt text](/assets/img/screenshots/main.png?raw=true "Optional Title")
