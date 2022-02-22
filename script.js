//COUNTDOWN TIMER SCRIPT

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);


    const url = "https://history.openweathermap.org/data/2.5/history?q=" + "provo" + ",US&units=imperial" + "&APPID=9bbdd6483c03348e4689f88f1b69b70a";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {

        let results = "";


           console.log(json.name);
           results += '<div class = "row">';
           results += '<h2>';

          results += '<h3> Historical Temperature August 20th:' + json.main.temp + " 86&deg;F</h3>"
          results += '</div>';
          
          
        
          var weatherresult = document.getElementById("historical");
          weatherresult.innerHTML = results;
      });