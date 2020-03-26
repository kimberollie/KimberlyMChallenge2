function updateTime()
{
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('klok').innerHTML = h + ":" + m + ":" + s;

  var t = new Date().getHours();

  if (t <= 6 || t >= 23) 
  {
    document.getElementById('dagofnacht').src = "images/maan.jpg";
  } 
  else if (t >= 7 && t <= 22) 
  {
    document.getElementById('dagofnacht').src = "images/zon.jpg";
  } 
}

function checkTime(i) 
{
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
