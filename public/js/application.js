$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

// if the user is not logged into our site
//     then the modal pops up and they are prompted to log in
//     button on modal takes them to different page, they log in
//     they are redirected to the original static page
// else the user can see the page