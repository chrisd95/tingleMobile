


  // Set the date we're counting down to
  var countDownDate = new Date("Mar 17, 2018 15:37:25").getTime();

  // Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  //distance between now and countdown
  var distance = countDownDate - now;

  //calculations for , days, hours, minutes, seconds

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days;
  //document.getElementById("countdown1").innerHTML = hours;
  //document.getElementById("countdown2").innerHTML = minutes;
  //document.getElementById("countdown3").innerHTML = seconds;


  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }

}, 1000);

