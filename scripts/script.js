//Deze functie zorgt ervoor dat de systeemtijd in de body weergegeven wordt 
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

function checkTime(i) 
{
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

/*Deze else if statement laat een afbeelding van een zon zien tussen 7 uur sochtends en 
11 uur 's avonds. Om 11 uur verandert deze afbeelding in een maan, tot en met 6 uur 's ochtends*/
if (t <= 6 || t >= 23) 
  {
    document.getElementById('dagofnacht').src = "images/maan.jpg";
  } 
  else if (t >= 7 && t <= 22) 
  {
    document.getElementById('dagofnacht').src = "images/zon.jpg";
  } 
}