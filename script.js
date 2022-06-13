var pig_1_lifes = 100;
var pig_2_lifes = 100;
var pig_1_position = 0;
var pig_2_position = 0;
function punch_1(event) {
  if (event.key == "s") {
    document.getElementById("span_1").style.display = "inline";
    window.setTimeout(punch_1_hide, 250);
    if (check_collision() == true) {
      pig_2_lifes = pig_2_lifes - 20;
      document.getElementById("2").value = pig_2_lifes;
    }
  }
}

function punch_1_hide() {
  document.getElementById("span_1").style.display = "none";
}

function punch_2(event) {
  if (event.key == ";") {
    document.getElementById("span_2").style.display = "inline";
    window.setTimeout(punch_2_hide, 250);
    if (check_collision() == true) {
      pig_1_lifes = pig_1_lifes - 20;
      document.getElementById("1").value = pig_1_lifes;
    }
  }
}

function punch_2_hide() {
  document.getElementById("span_2").style.display = "none";
}

function move_pig_1_1(event) {
  if (event.key == "a") {
    pig_1_position = pig_1_position - 5;
    document.getElementById("pig_1").style.left = pig_1_position + "px";
    check_collision();
  }
}
function move_pig_1_2(event) {
  if (event.key == "d") {
    pig_1_position = pig_1_position + 5;
    document.getElementById("pig_1").style.left = pig_1_position + "px";
    check_collision();
  }
}
function move_pig_2_1(event) {
  if (event.key == "l") {
    pig_2_position = pig_2_position + 5;
    document.getElementById("pig_2").style.right = pig_2_position + "px";
    check_collision();
  }
}
function move_pig_2_2(event) {
  if (event.key == "'") {
    pig_2_position = pig_2_position - 5;
    document.getElementById("pig_2").style.right = pig_2_position + "px";
    check_collision();
  }
}

function check_collision() {
  if (Math.abs(window.innerWidth - pig_1_position - pig_2_position) <= 600) {
    return true;
  } else {
    return false;
  }
}
document.addEventListener("keypress", punch_1);
document.addEventListener("keypress", punch_2);
document.addEventListener("keypress", move_pig_1_1);
document.addEventListener("keypress", move_pig_1_2);
document.addEventListener("keypress", move_pig_2_1);
document.addEventListener("keypress", move_pig_2_2);