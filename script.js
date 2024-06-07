function h_to_hms(h) {
  var x = h * 3600;
  var hh = Math.floor(x / 3600);
  if (hh < 10) hh = "0" + hh;
  var y = x % 3600;
  var mm = Math.floor(y / 60);
  if (mm < 10) mm = "0" + mm;
  var ss = Math.round(y % 60);
  if (ss < 10) ss = "0" + ss;
  return hh + ":" + mm + ":" + ss;
}

setInterval(function () {
  var date = new Date();
  var localTime = date.toLocaleTimeString("it-IT", {
    timeZone: "Europe/Rome",
  });
  document.querySelector("p.time").innerText = localTime;
}, 100);
