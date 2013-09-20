$(document).ready(function() {
  if (($('.session').html()) != "true") {
    $(".modal").modal({
      show: true,
      keyboard: false,
      backdrop: 'static'
    });
  }
});

// if the user is not logged into our site
//     then the modal pops up and they are prompted to log in
//     button on modal takes them to different page, they log in
//     they are redirected to the original static page
// else the user can see the page