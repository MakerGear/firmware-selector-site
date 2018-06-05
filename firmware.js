
function addEventListener(){
    //top section
    if(document.getElementById('ard1').addEventListener("click", arduino, false));
    else if(document.getElementById('ard2').addEventListener("click", arduino2, false));
    else if(document.getElementById('revE').addEventListener("click", revE, false));
    else if(document.getElementById('revEdual').addEventListener("click", dual, false));
    //selector direction arrows
    else if(document.getElementById('stp1').addEventListener("click", step1, false)); 
    else if(document.getElementById('stp1B').addEventListener("click", stepBack, false));
    else if(document.getElementById('stp1F').addEventListener("click", function(){move('forward')}, false));
    else if(document.getElementById('stp2B').addEventListener("click", move, false));
    else if(document.getElementById('stp2F').addEventListener("click", function(){move('forward')}, false));
    else if(document.getElementById('stp3B').addEventListener("click", move, false));
    else if(document.getElementById('stp3F').addEventListener("click", function(){move('forward')}, false));
    else if(document.getElementById('stp4B').addEventListener("click", move, false));
    else if(document.getElementById('stp4F').addEventListener("click", function(){move('forward')}, false));
    else if(document.getElementById('stp5B').addEventListener("click", move, false));
    //get firmware
    else if(document.getElementById('match').addEventListener("click", matchConfig, false)); 
}
//gets RevE download
function revE() {
    var answer = confirm("Please click to download RevE firmware.");

    if (answer) {
        window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip";
    } else answer = false;
}

//gets RevE Dual download
function dual() {
    var answer = confirm("Please click to download RevE Dual firmware.");

    if (answer) {
        window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V101%20-%20Dual.zip";
    } else answer = false;
}

//Gets Arduino 1.5.5 Windows

function arduino() {
    var answer = confirm("Please click to download Arduino 1.5.5.\r\n Contributions are voluntary");

    if (answer) {
        window.location = "https://www.arduino.cc/download_handler.php?f=/arduino-1.5.5-r2-windows.zip";
    } else answer = false;
}

//Gets Arduino 1.5.5 MAC

function arduino2() {
    var answer = confirm("Please click to download Arduino 1.5.5.\r\n Contributions are voluntary");

    if (answer) {
        window.location = "https://www.arduino.cc/download_handler.php?f=/arduino-1.5.5-macosx.zip";
    } else answer = false;
}

//shows and hides selector divs

function step1() {

    document.getElementById("1").style.display = "block";
}


var step = 1;


function move(direction) {

    if (direction == undefined) {

        console.log("move function called without direction returning")
        return
    } else if (direction == "forward") {


        if (step >= 5) {
            return
        } else {
            step = step + 1;

        }

        document.getElementById(step).style.display = "block";
        document.getElementById(step - 1).style.display = "none";


    } else {

        console.log(step)


        if (step <= 1) {
            return
        } else {
            (step = step - 1);

        }
        document.getElementById(step).style.display = "block";
        document.getElementById(step + 1).style.display = "none";
    }

}

//hides step 1
function stepBack() {

    document.getElementById("1").style.display = "none"

}

//variables for matchconfig()        

//24v Black Z motor (Rev c and D)
    //V4 (single)section:
var v4bm = [0, 0, 1, 0, 0]; //Base Model V4 black_z. zmin
var v4v1 = [0, 0, 1, 0, 1]; //Viki1
var v4v2 = [0, 0, 1, 0, 2]; //Viki2
var v4gt = [0, 0, 1, 0, 3]; //Geetech

//V4 dual section:
var v4dbm = [0, 0, 1, 1, 0]; //V4 Dual Base Model
var v4dv1 = [0, 0, 1, 1, 1]; //Viki1 not supported
var v4dv2 = [0, 0, 1, 1, 2]; //Viki2 not supported
var v4dgt = [0, 0, 1, 1, 3]; // Geetech not supported

//V3b section:
var v3bbm = [0, 0, 0, 2, 0]; //Base model
var v3bv1 = [0, 0, 0, 2, 1]; //Viki1
var v3bv2 = [0, 0, 0, 2, 2]; //Viki2
var v3bgt = [0, 0, 0, 2, 3]; //Geetech

//Silver z motor section 
//Silver V3b section:	
var sv3bbm = [1, 0, 1, 2, 0]; //Base Model:
var sv3bv1 = [1, 0, 1, 2, 1]; //Viki1
var sv3bv2 = [1, 0, 1, 2, 2]; //Viki2
var sv3bgt = [1, 0, 1, 2, 3]; //Geetech

//Silver V4 section:
var sv4bm = [1, 0, 1, 0, 0]; //Base Model:
var sv4v1 = [1, 0, 1, 0, 1]; //Viki1
var sv4v2 = [1, 0, 1, 0, 2]; //Viki2
var sv4gt = [1, 0, 1, 0, 3]; //Geetech

//V4 Dual section:
var sv4dbm = [1, 0, 1, 1, 0]; //Base Model
var sv4dv1 = [1, 0, 1, 1, 1]; //Viki1 not supported
var sv4dv2 = [1, 0, 1, 1, 2]; //Viki2 not supported
var sv4dgt = [1, 0, 1, 1, 3]; //Geetech not supported

//Rev.E section    
//Rev.E section
var revEbm = [0, 0, 0, 0, 0]; //Rev.E Base Model
var revEv1 = [0, 0, 0, 0, 1]; //Viki1
var revEv2 = [0, 0, 0, 0, 2]; //Viki2
var revEgt = [0, 0, 0, 0, 3]; //Geetech

//Rev.E Dual section
var revEdbm = [0, 0, 0, 1, 0];
var revEdv1 = [0, 0, 0, 1, 1];
var revEdv2 = [0, 0, 0, 1, 2];
var revEdgt = [0, 0, 0, 1, 3];

// Nonstandard configs
var sv4Zm = [1, 0, 0, 0, 0]; //Silver,V4,Zmax
var bv3bgt = [0, 0, 1, 2, 3]; //Black,V3b,Geetech




//gets user input from selector         
function matchConfig() {


    var zmotor = document.getElementById("z_motor");
    var s1 = parseInt(zmotor.selectedIndex);

    var psupply = document.getElementById("p_supply");
    var s2 = parseInt(psupply.selectedIndex);

    var endstop = document.getElementById("z_stop");
    var s3 = parseInt(endstop.selectedIndex);

    var hotend = document.getElementById("hotend");
    var s4 = parseInt(hotend.selectedIndex);

    var lcd = document.getElementById("lcd");
    var s5 = parseInt(lcd.selectedIndex);

    var userConfig = [s1, s2, s3, s4, s5];

    var masterArray = [v4bm, v4v1, v4v2, v4gt, v4dbm, v4dv1, v4dv2, v4dgt, v3bbm, v3bv1, v3bv2, v3bgt,
                   sv3bbm, sv3bv1, sv3bv2, sv3bgt, sv4bm, sv4v1, sv4v2, sv4gt, sv4dbm, sv4dv1, sv4dv2, sv4dgt,
                   revEbm, revEv1, revEv2, revEgt, revEdbm, revEdv1, revEdv2, revEdgt, sv4Zm, bv3bgt];

    var match;

    for (var a = 0; a < masterArray.length; a++) {

        var pass = true;

        for (var b = 0; b < userConfig.length; b++) {

            if (masterArray[a][b] !== userConfig[b]) {

                pass = false;

            }
        }
        if (pass == true) {
            match = a;
        }
    }


    //run test:

    var answer;
    if (match == 0) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin-11-30-2015.zip";
        } else answer = false;
    } else if (match == 1) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip";
        } else answer = false;
    } else if (match == 2) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 3) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2%20Marlin%20-%20Geeetech%20LCD%20-%20Black%20Z%20Motor%20-%2010-19-2015.zip";
        } else answer = false;
    } else if (match == 4) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2_Dual_Extruder_Marlin_Black_Z_Motor.zip";
        } else answer = false;
    } else if (match == 5) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 6) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 7) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 8) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin-11-30-2015.zip";
        } else answer = false;
    } else if (match == 9) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip";
        } else answer = false;

    } else if (match == 10) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 11) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 12) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin24r2.zip";
        } else answer = false;
    } else if (match == 13) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_942013.zip";
        } else answer = false;
    } else if (match == 14) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 15) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = " http://makergear.wikidot.com/local--files/m2-lcd-panel/M2_Marlin_RRDSC_v1.0.zip";
        } else answer = false;
    } else if (match == 16) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = " http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin-01-14-2016-OriginalZMotor.zip";
        } else answer = false;
    } else if (match == 17) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip";
        } else answer = false;
    } else if (match == 18) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 19) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wikidot.com/local--files/m2-lcd-panel/M2_Marlin_RRDSC_v1.0.zip";
        } else answer = false;
    } else if (match == 20) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2_Dual_Extruder_Marlin.zip";
        } else answer = false;
    } else if (match == 21) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 22) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 23) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 24) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip";
        } else answer = false;
    } else if (match == 25) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 26) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 27) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip";
        } else answer = false;
    } else if (match == 28) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V101%20-%20Dual.zip";
        } else answer = false;
    } else if (match == 29) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V104%20-%20Dual%20-%20Viki.zip";
        } else answer = false;
    } else if (match == 30) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 31) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V101%20-%20Dual.zip";
        } else answer = false;
    } else if (match == 32) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        } else answer = false;
    } else if (match == 33) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
        }
    } else

        alert("Please contact support@makergear.com");

}


//Magnify Images
$(".zoom1").elevateZoom({
    zoomWindowPosition: 10
});

$(".zoom2").elevateZoom({
    zoomWindowPosition: 2
});
