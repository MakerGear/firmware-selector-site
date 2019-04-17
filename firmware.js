
function addEventListener(){
    //top section
    document.getElementById('ard1').addEventListener("click", arduino, false);
    document.getElementById('ard2').addEventListener("click", arduino2, false);
    document.getElementById('ard3').addEventListener("click", arduino3, false);
    document.getElementById('revE').addEventListener("click", revE, false);
    document.getElementById('revEdual').addEventListener("click", dual, false);
    document.getElementById('revF').addEventListener("click", revf, false);
    document.getElementById('revG').addEventListener("click", revg, false);
    document.getElementById('v4Cool').addEventListener("click", v4Cool, false);
    //opens selector
    document.getElementById('stp1').addEventListener("click", step1, false); 

}
//gets RevE download
function revE() {
    const answer = confirm("Please click to download RevE firmware.");

    if (answer) {
        window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip";
    } else answer = false;
}

//gets RevE Dual download
function dual() {
    const answer = confirm("Please click to download RevE Dual firmware.");

    if (answer) {
        window.location = "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V101%20-%20Dual.zip";
    } else answer = false;
}

//gets Rev.F download
function revf() {
    const answer = confirm("Please click to download RevF firmware.");

    if (answer) {
        window.location = "https://github.com/MakerGear/m2firmware/archive/AQB3f.zip";
    } else answer = false;
}

function revg(){
    const answer = confirm("Please click to download RevG firmware.");

    if (answer) {
        window.location = "http://makergear.wikidot.com/local--files/m2-firmware/m2-RevG-firmware.zip";
    } else answer = false;
}
function v4Cool(){
    const answer = confirm("Please click to download V4 F/G Cooling upgrade firmware.");

    if (answer) {
        window.location = "http://makergear.wikidot.com/local--files/m2-firmware/V4-RevF%3AG-cooling%20-upgrade.zip";
    } else answer = false;
}

//Gets Arduino 1.5.5 Windows

function arduino() {
    const answer = confirm("Please click to download Arduino 1.5.5.\r\n Contributions are voluntary");

    if (answer) {
        window.location = "https://www.arduino.cc/download_handler.php?f=/arduino-1.5.5-r2-windows.zip";
    } else answer = false;
}

//Gets Arduino 1.5.5 MAC

function arduino2() {
    const answer = confirm("Please click to download Arduino 1.5.5.\r\n Contributions are voluntary");

    if (answer) {
        window.location = "https://www.arduino.cc/download_handler.php?f=/arduino-1.5.5-macosx.zip";
    } else answer = false;
}

//Gets Arduino 1.5.5 Linux 64 bit

function arduino3() {
    const answer = confirm("Please click to download Arduino 1.5.5.\r\n Contributions are voluntary");

    if (answer) {
        window.location = "https://www.arduino.cc/download_handler.php?f=/arduino-1.5.5-linux64.tgz";
    } else answer = false;
}

//shows and hides selector divs

function step1() {

    document.getElementById("1").style.display = "block";
    document.getElementById("arrows").style.display = "block";
}



var step = 1;

function move(direction) {

    if (direction == undefined) {
        console.log("move function called without direction returning");
        return;
        }
    
    //move forward
    else if (direction == "forward" && step <= 5) {
        step = step + 1;
        
        if(step <=5){
        document.getElementById(step).style.display = "block";
        document.getElementById(step - 1).style.display = "none";
        }
    else if(direction == "forward" && step > 5){
        matchConfig();
        step = 5;
        
        }
    }

    //move back
        
    else if (direction == "back") {

        if (step <= 1){
            document.getElementById("1").style.display = "none";
            document.getElementById("arrows").style.display = "none";
                
            }
      
        else if (step = step - 1){
            document.getElementById(step).style.display = "block";
            document.getElementById(step + 1).style.display = "none";
        }
    }
    console.log(step);
}
    




//hides step 1
function stepBack() {

    document.getElementById("1").style.display = "none"

}

//constiables for matchconfig()        

//24v Black Z motor (Rev c and D)
    //V4 (single)section:
const v4bm = [0, 0, 1, 0, 0]; //Base Model V4 black_z. zmin
const v4v1 = [0, 0, 1, 0, 1]; //Viki1
const v4v2 = [0, 0, 1, 0, 2]; //Viki2
const v4gt = [0, 0, 1, 0, 3]; //Geetech

//V4 dual section:
const v4dbm = [0, 0, 1, 1, 0]; //V4 Dual Base Model
const v4dv1 = [0, 0, 1, 1, 1]; //Viki1 not supported
const v4dv2 = [0, 0, 1, 1, 2]; //Viki2 not supported
const v4dgt = [0, 0, 1, 1, 3]; // Geetech not supported

//V3b section:
const v3bbm = [0, 0, 0, 2, 0]; //Base model
const v3bv1 = [0, 0, 0, 2, 1]; //Viki1
const v3bv2 = [0, 0, 0, 2, 2]; //Viki2
const v3bgt = [0, 0, 0, 2, 3]; //Geetech

//Silver z motor section 
//Silver V3b section:	
const sv3bbm = [1, 0, 1, 2, 0]; //Base Model:
const sv3bv1 = [1, 0, 1, 2, 1]; //Viki1
const sv3bv2 = [1, 0, 1, 2, 2]; //Viki2
const sv3bgt = [1, 0, 1, 2, 3]; //Geetech

//Silver V4 section:
const sv4bm = [1, 0, 1, 0, 0]; //Base Model:
const sv4v1 = [1, 0, 1, 0, 1]; //Viki1
const sv4v2 = [1, 0, 1, 0, 2]; //Viki2
const sv4gt = [1, 0, 1, 0, 3]; //Geetech

//V4 Dual section:
const sv4dbm = [1, 0, 1, 1, 0]; //Base Model
const sv4dv1 = [1, 0, 1, 1, 1]; //Viki1 not supported
const sv4dv2 = [1, 0, 1, 1, 2]; //Viki2 not supported
const sv4dgt = [1, 0, 1, 1, 3]; //Geetech not supported

//Rev.E section    
//Rev.E section
const revEbm = [0, 0, 0, 0, 0]; //Rev.E Base Model
const revEv1 = [0, 0, 0, 0, 1]; //Viki1
const revEv2 = [0, 0, 0, 0, 2]; //Viki2
const revEgt = [0, 0, 0, 0, 3]; //Geetech

//Rev.E Dual section
const revEdbm = [0, 0, 0, 1, 0];
const revEdv1 = [0, 0, 0, 1, 1];
const revEdv2 = [0, 0, 0, 1, 2];
const revEdgt = [0, 0, 0, 1, 3];

// Nonstandard configs
const sv4Zm = [1, 0, 0, 0, 0]; //Silver,V4,Zmax
const bv3bgt = [0, 0, 1, 2, 3]; //Black,V3b,Geetech
const revF = [0,0,0,3,0]; //Rev F Firmware





//gets user input from selector         
function matchConfig() {


    const zmotor = document.getElementById("z_motor");
    let s1 = parseInt(zmotor.selectedIndex);

    const psupply = document.getElementById("p_supply");
    let s2 = parseInt(psupply.selectedIndex);

    const endstop = document.getElementById("z_stop");
    let s3 = parseInt(endstop.selectedIndex);

    const hotend = document.getElementById("hotend");
    let s4 = parseInt(hotend.selectedIndex);

    const lcd = document.getElementById("lcd");
    let s5 = parseInt(lcd.selectedIndex);

   const userConfig = [s1, s2, s3, s4, s5];

    const masterArray = [v4bm, v4v1, v4v2, v4gt, v4dbm, v4dv1, v4dv2, v4dgt, v3bbm, v3bv1, v3bv2, v3bgt,
                   sv3bbm, sv3bv1, sv3bv2, sv3bgt, sv4bm, sv4v1, sv4v2, sv4gt, sv4dbm, sv4dv1, sv4dv2, sv4dgt,
                   revEbm, revEv1, revEv2, revEgt, revEdbm, revEdv1, revEdv2, revEdgt, sv4Zm, bv3bgt, revF];

    var match;

    for (let a = 0; a < masterArray.length; a++) {

        let pass = true;

        for (let b = 0; b < userConfig.length; b++) {

            if (masterArray[a][b] !== userConfig[b]) {

                pass = false;

            }
        }
        if (pass == true) {
            match = a;
            console.log(match);
        }
    }


    //run test:

    let answer;
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
            window.location = "http://setup.makergear.com/misc/M2E-Production-nr1E2-V110.zip";
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
    } 
    else if (match == 34) {
            revf();
    }
    else alert("Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. ");
}

//Magnify Images
$(".zoom1").elevateZoom({
    zoomWindowPosition: 10
});

$(".zoom2").elevateZoom({
    zoomWindowPosition: 2
});
