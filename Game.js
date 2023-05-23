function Gametime()
{
var currTime = 10;
var i = 1;
do
{
    setTimeout(function() {
        document.getElementById("timer").innerHTML = " Time Starts In 10 seconds " + currTime;
        currTime = currTime - 1;
    } ,  1000 * i);
    i += 1;
    } while (i<12);
}