// variables
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");


// functions
var getUserRepos = function(user) {
   // format the github api url
   var apiUrl = "https://api.github.com/users/" + user + "/repos";

   // make a request to the url
   fetch(apiUrl).then(function(response){
      response.json().then(function(data) {
         console.log(data);
      });
   });
}


// event handlers
var formSubmitHandler = function(event) {
   event.preventDefault();

   // get value from input field
   var username = nameInputEl.value.trim();

   if (username) {
      getUserRepos(username);
      nameInputEl.value = "";
   }
   else {
      alert("Please enter a GitHub username");
   }
}


// event listeners
userFormEl.addEventListener("submit", formSubmitHandler);