const MAX_STEPS = 10;
var step = 1;
function move() {
  var bar = document.getElementById("progress-bar-fill");
  step++;
  if (step > MAX_STEPS)
    step = 1;

  idealWidth = (100.0/MAX_STEPS) * step;
  width = (100.0/MAX_STEPS) * (step - 1);
  
  var animation = setInterval(() => {
    if (width > idealWidth) {
      clearInterval(animation);
    }
    else {
      bar.style.width = width++ + "%";
    }
  }, 10);
}
move();
