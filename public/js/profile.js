$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get('/api/user_data').then(data => {
    console.log(data);
    $('#first').text(data.first_name);
    $('#last').text(data.last_name);
    $('#useremail').text(data.email);
  });
});