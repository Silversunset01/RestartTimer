//==============COUNTDOWN TO NEXT RESTART===================
var x = setInterval(function() {

    var min = 16;
    var sec = 0;
    var now = new Date();
    var testhrs = new Date().getUTCHours();
    var testmins = new Date().getUTCMinutes();

    if (testmins > min) {var rsthrs = testhrs +2;}		//UTC hour is odd but after ##:16 restart is +2hr, 16m
    else {var rsthrs = testhrs;};	//UTC hour is odd but before ##:16 restart is current hr, 16m

		//Create nextrestart variable based on current time
    var nextrestart = new Date(); nextrestart.setUTCHours(rsthrs,min,sec);

		//Calculate time until next restart
    var rstime = nextrestart - now

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((rstime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((rstime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((rstime % (1000 * 60)) / 1000);

    document.getElementById("restart").innerHTML = ( (hours < 10 ) ? "0" : "" ) + hours + ":" + ( (minutes < 10) ? "0" : "" ) + minutes + ":" + ( (seconds < 10) ? "0" : "" ) + seconds

}, 1000);
