This is a twitter-like site for dogs.


* [x] create client folder
* [x] make index.html
* [x] make use of getSkeleton CDN as  https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css

* [x] make the header of the page
* [x] live serve the page on the localhost
* [x] make form with class .woffer
    * [x] form should contain the following field
            [x] name
            [x] content
            [x] submit button

* [x] make client.js file in order to work with the form data
* [x] get the form object form the DOM
* [x] after getting the form element addeventListenter "submit" to the form
* [x] make use of FormData() to access the data from the form.
* [x] console.log the form data
* [x] make the form non visible and loading.gif visible to indicate action


********* Make the server *********

* [x] make use of fetch() method to send the data to the server
* [x] resolve the cross origin resourse sharing( cors ) error in the server-side
* [x] make use of  dataFetched function to render the data from the server in the html.
    * [x] if ther is any error form  the server render it in the div.error object reference.
    * [x] else render all the data from the server in reverse order.
  