// MAKE A TABLE

function createTable() {
  var size = 5;
  var itemCounter = 0;
  var table = document.createElement("table");
  var main = document.getElementsByClassName("main");
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

// RANDOM ITEM

var life = 3;
var lifecouter = document.querySelector(".lifecouter");
var second = 1;
var timer = document.querySelector(".timer");
var point = 0;
var score = document.querySelector(".point");

function startGame() {
  var intervalstart = (interval = setInterval(function() {
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
    if (timer.innerHTML >= "60") {
      clearTimeout(addGreen);
      clearTimeout(removeGreen);
    }
    if (timer.innetHTML >= "60") {
      clearInterval(interval);
    }
  }, 3000));
}

// TIMER WITH DISABLE BUTTON

const btnstart = document.querySelector("#btnStart");
btnstart.addEventListener("click", function() {
  startGame();
  updateStatus();
  btnreset.addEventListener("click", function() {
    clearInterval(time);
  });
  this.disabled = true;
  let i = 0;
  time = setInterval(
    function() {
      timer.innerHTML = second + " sek";
      second++;
      i++;
      if (i >= 60) {
        this.disabled = false;
        clearInterval(time);
        clearInterval(interval);
        clearTimeout(addGreen);
        clearTimeout(removeGreen);
      }
    }.bind(this),
    1000
  );
});

// CLICK BUTTON ADD POINT / LOSE LIFE

function updateStatus() {
  document.body.onclick = function(e) {
    //when the document body is clicked
    if (window.event) {
      e = event.srcElement; //assign the element clicked to e (IE 6-8)
    } else {
      e = e.target; //assign the element clicked to e
    }
    if (e.className && e.className.indexOf("green") != -1) {
      e.classList.remove("green");
      //if the element has a class name, and that is 'green' then...
      point++;
      score.innerHTML = point;
    }
    if (e.className && e.className.indexOf("item") != -1) {
      //if the element has a class name, and that is 'item' then...
      life--;
      lifecouter.innerHTML = life;
      alert("straciłeś życie");
    }
    if (lifecouter.innerHTML <= 0) {
      // btnstart.disabled = false;
      clearInterval(interval);
      clearTimeout(addGreen);
      clearTimeout(removeGreen);
    }
  };
}

// RESET

const btnreset = document.querySelector("#btnReset");
btnreset.addEventListener("click", function() {
  resetGame();
  function resetGame() {
    btnstart.disabled = false;
    clearInterval(interval);
    clearTimeout(addGreen);
    clearTimeout(removeGreen);
    second = 0;
    point = 0;
    life = 3;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 sek";
    score.innerHTML = "0";
    lifecouter.innerHTML = "3";
    var cell = document.querySelector(".green");
    cell.classList.remove("green");
  }
});
