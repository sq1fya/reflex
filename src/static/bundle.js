startTimer();

      let colors = {
        1: "red",
        2: "blue",
        3: "orange"
      };

      $("a").each(function() {
        let cell = $(this).html();
        if (colors.hasOwnProperty(cell)) {
          $(this).css("background", colors[cell]);
        }
      });

      // TIMER
      var second = 0,
        minute = 0;
      hour = 0;
      var timer = document.querySelector(".timer");
      var interval;
      function startTimer() {
        interval = setInterval(function() {
          timer.innerHTML = second + "sek";
          second++;
          if (second == 60) {
            console.log("koniec czasu");
            second = 0;
            clearInterval(this)
          }
        }, 100);
      }