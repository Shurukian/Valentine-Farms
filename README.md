# Online Farmers Market App with Authentication

Valentine Farms is an app for an online farmers market, completed with user
authenication, posting items, editing existing items and deleting any existing
items requiring user authentication. This could be used by anyone who is
looking to buy or sell things at a farmers market.

## Important Links

* [Heroku Hosted Deployed API](http://radiant-sierra-98996.herokuapp.com)
* [Back-End Repo](https://github.com/Shurukian/Valentine-Farms)
* [Deployed Front-End](https://shurukian.github.io/Valentine-Farms-client/)
* [Front-End Repo](https://github.com/Shurukian/Valentine-Farms-client)

## Technologies Used

Front-End
* HTML/CSS
* Boostrap
* JQuery

Back-End

* Javascript
* Express
* MongoDB Atlas
* Mongoose

## User Stories

* As a user I will be able to sign up for an account with an email and password
* As a user I will be able to log into my account with and email and password
* As a user I will be able to change my current password and new password
* As a user I will be able to log out
* As a user I will be able to (create a new resource) post an item for sale
* As a user I will be able to update the listed (resource) item.
* As a user I will be able to see a single/multiple (resources) item(s).
* As a user I will be able to delete an (resource) item.

## Wireframe and ERD

![Farmers Market Wireframe](https://i.imgur.com/gZRijJY.png)

![User and Product ERD](https://i.imgur.com/1jQCPMq.jpg)

## Planning and Development

I started off with an idea to make Farmers Markets more available. Having
access to them online would allow people to buy and sell items that they would
normally find at a farmers market, without always having to go to them.
I want the application to follow along the same lines as a Facebook or
instagram feed, allowing the application to be used in different environments.
The Front-End repo can be found [here](https://github.com/Shurukian/Valentine-Farms)

### Unsolved Problems and Future Development

I would like my feed to auto-generate the listed products for all users so that
anyone new to the site would be able to see the products. I there needs to be
an additonal attribute within the Products Schema for the price of a product.
There also needs to be an update for the date within the modal showing it like
a normal date rather than a string, while the isOrganic will show as a boolean.
And finally, within the second phase of the app I would like to implement the
ability to add photos on the creation of a product.
