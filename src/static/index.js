var life = 3;
var lifecouter = document.querySelector(".lifecouter");
var second = 1;
var timer = document.querySelector(".timer");
var point = 0;
var score = document.querySelector(".point");
const btnstart = document.querySelector("#btnStart");

const btnreset = document.querySelector("#btnReset");
btnreset.addEventListener("click", function() {
  disableButtonStart();
  backlightTimerOff();
  resetGame();
  backlightLifeOff();
});

function createTable() {
  var size = 5;
  var itemCounter = 0;
  var table = document.createElement("table");
  table.className = "container";
  for (var i = 0; i < size; i++) {
    var tr = document.createElement("tr");
    tr.className = "row justify-content-center";
    for (var j = 0; j < size; j++) {
      var td = document.createElement("td");
      if (i % 2 == j % 2) {
        td.className = "btn btn-sq-lg btn-primary item";
        td.id = itemCounter++;
      } else {
        td.className = "btn btn-sq-lg btn-primary item";
        td.id = itemCounter++;
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
  document.getElementById("main").appendChild(table);
}
createTable();

randomCellOn = false;

function randomCell() {
  if (randomCellOn === false) return;
  var random = Math.floor(
    Math.random() * document.getElementsByClassName("item").length
  );
  var cell = document.getElementById(random);
  document.getElementsByClassName("item").length == random;
  if (cell) {
    addGreen = setTimeout(function() {
      cell.classList.add("green");
      cell.classList.remove("item");
    }, 0);
    removeGreen = setTimeout(function() {
      if (cell.classList.contains("green")) {
        life--;
        lifecouter.innerHTML = life;
        alert("straciłeś życie");
      }
      cell.classList.remove("green");
      cell.classList.add("item");
    }, 2000);
  }
}

gemeOn = false;

function startGame() {
  gameOn = true;
  randomCellOn = true;
  intervalstart = (interval = setInterval(function() {
    randomCell();
    if (timer.innerHTML >= "60") {
      timerOn = false;
      clearTimeout(addGreen);
      clearTimeout(removeGreen);
    }
    if (timer.innetHTML >= "60") {
      clearInterval(interval);
    }
  }, 3000));
}

btnstart.addEventListener("click", function() {
  startGame();
  updateStatus();
  backlightTimerOn();
  btnreset.addEventListener("click", function() {
    clearInterval(time);
  });
  this.disabled = true;
  startTime();
});

function startTime() {
  time = setInterval(
    function() {
      let i = 0;
      second++;
      timer.innerHTML = second + " sek";
      if (second == 60){
         clearInterval(time);
         gemeOn = false;
        clearInterval(interval);
        clearTimeout(addGreen);
        clearTimeout(removeGreen);
      }
    },
    1000
  );
}

function updateStatus() {
  document.body.onclick = function(e) {
    if (gameOn === false) return;
    if (window.event) {
      e = event.srcElement;
    } else {
      e = e.target;
    }
    if (e.className && e.className.indexOf("green") != -1) {
      e.classList.remove("green");
      point++;
      score.innerHTML = point;
    }
    if (e.className && e.className.indexOf("item") != -1) {
      backlightLifeOn();
      if (life > 0) life--;
      lifecouter.innerHTML = life;
      alert("straciłeś życie");
    }
    if (life <= 0) {
      stopTimer();
      randomCellOn = false;
    }
  };
}

function stopTimer() {
  second = 0;
  var timer = document.querySelector(".timer");
  timer.innerHTML = "0 sek";
  clearInterval(time);
}

function resetGame() {
  randomCellOn = false;
  gameOn = false;
  point = 0;
  life = 3;
  stopTimer();
  score.innerHTML = "0";
  lifecouter.innerHTML = "3";
  clearInterval(interval);
  clearTimeout(addGreen);
  clearTimeout(removeGreen);
  var cell = document.querySelector(".green");
  if (cell.classList.contains("green")) {
    cell.classList.remove("green");
  }
}

function disableButtonStart() {
  btnstart.disabled = false;
}

function backlightTimerOn() {
  document.getElementById("timer").classList.add("badge-success");
  document.getElementById("timer").classList.remove("badge-secondary");
}
function backlightTimerOff() {
  document.getElementById("timer").classList.remove("badge-success");
  document.getElementById("timer").classList.add("badge-secondary");
}

function backlightLifeOn() {
  document.getElementById("lifecouter").classList.add("badge-danger");
  document.getElementById("lifecouter").classList.remove("badge-secondary");
}
function backlightLifeOff() {
  document.getElementById("lifecouter").classList.remove("badge-danger");
  document.getElementById("lifecouter").classList.add("badge-secondary");
}
