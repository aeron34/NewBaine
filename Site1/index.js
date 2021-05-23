var timer = new Timer();
var count = document.getElementById('values');

timer.start({countdown: true, startValues: {seconds: 30}});

count.innerHTML = timer.getTimeValues().toString();

timer.addEventListener('secondsUpdated', function (e) {
    console.log(timer.getTimeValues().toString())

    count.innerHTML = timer.getTimeValues().toString();
});

timer.addEventListener('targetAchieved', function (e) {
    count.innerHTML = 'KABOOM!!';
});

/*
  import at top:

  <script src="https://cdn.jsdelivr.net/npm/easytimer@1.1.1/dist/easytimer.min.js"></script>



  put below 'are you ready...':

  <div id="countdownExample">
      <p id="values"></p>
  </div>

  put at the bottom of body:
    <script src='index.js'></script>
*/
