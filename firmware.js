

//gets RevE download
       function revE(){
            var answer = confirm ("Please click to download RevE firmware.");
        
            if(answer){
            window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip";       
            }
            else answer = false;
      }
        
//gets RevE Dual download
       function dual(){
            var answer = confirm ("Please click to download RevE Dual firmware.");
        
            if(answer){
            window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V101%20-%20Dual.zip";       
            }
            else answer = false;
      }   
     
//Gets Arduino 1.5.5 Windows

  function arduino(){
            var answer = confirm ("Please click to download Arduino 1.5.5.\r\n Contributions are voluntary");
        
            if(answer){
            window.location="https://www.arduino.cc/download_handler.php?f=/arduino-1.5.5-r2-windows.zip";       
            }
            else answer = false;
      } 

//Gets Arduino 1.5.5 MAC

 function arduino2(){
            var answer = confirm ("Please click to download Arduino 1.5.5.\r\n Contributions are voluntary");
        
            if(answer){
            window.location="https://www.arduino.cc/download_handler.php?f=/arduino-1.5.5-macosx.zip";       
            }
            else answer = false;
      } 
        
                 
         //24v Black Z motor (Rev c and D)
            //V4 (single)section:
           var v4bm = [0,0,1,0,0];//Base Model V4 black_z. zmin
           var v4v1 = [0,0,1,0,1];//Viki1
		   var v4v2 = [0,0,1,0,2];//Viki2
	       var v4gt = [0,0,1,0,3];//Geetech
            
            //V4 dual section:
	       var v4dbm = [0,0,1,1,0];//V4 Dual Base Model
           var v4dv1 = [0,0,1,1,1];//Viki1 not supported
		   var v4dv2 = [0,0,1,1,2]; //Viki2 not supported
	       var v4dgt = [0,0,1,1,3];// Geetech not supported
            
            //V3b section:
	       var v3bbm = [0,0,0,2,0]; //Base model
		   var v3bv1 = [0,0,0,2,1]; //Viki1
		   var v3bv2 = [0,0,0,2,2]; //Viki2
	       var v3bgt = [0,0,0,2,3]; //Geetech
            
//Silver z motor section 
           //Silver V3b section:	
	       var sv3bbm = [1,0,1,2,0]; //Base Model:
		   var sv3bv1 = [1,0,1,2,1]; //Viki1
		   var sv3bv2 = [1,0,1,2,2]; //Viki2
	       var sv3bgt = [1,0,1,2,3]; //Geetech
           
           //Silver V4 section:
	       var sv4bm = [1,0,1,0,0]; //Base Model:
		   var sv4v1 = [1,0,1,0,1]; //Viki1
		   var sv4v2 = [1,0,1,0,2]; //Viki2
	       var sv4gt = [1,0,1,0,3]; //Geetech
            
            //V4 Dual section:
	       var sv4dbm = [1,0,1,1,0]; //Base Model
		   var sv4dv1 = [1,0,1,1,1]; //Viki1 not supported
		   var sv4dv2 = [1,0,1,1,2]; //Viki2 not supported
	       var sv4dgt = [1,0,1,1,3]; //Geetech not supported
           
//Rev.E section    
           //Rev.E section
            var revEbm = [0,0,0,0,0]; //Rev.E Base Model
		    var revEv1 = [0,0,0,0,1]; //Viki1
		    var revEv2 = [0,0,0,0,2];//Viki2
	        var revEgt = [0,0,0,0,3];//Geetech
         
//Rev.E Dual section
            var revEdbm = [0,0,0,1,0];
            var revEdv1 = [0,0,0,1,1];
            var revEdv2 = [0,0,0,1,2];
            var revEdgt = [0,0,0,1,3];

// Nonstandard configs
            var sv4Zm = [1,0,0,0,0]; //Silver,V4,Zmax
            var bv3bgt = [0,0,1,2,3]; //Black,V3b,Geetech
             
         
       
    
//gets user input from selector         
     function matchConfig(){


                var zmotor = document.getElementById("z_motor");
                var s1 = parseInt(zmotor.selectedIndex);
               
                var psupply = document.getElementById("p_supply");
                var s2 = parseInt(psupply.selectedIndex);
          
                var endstop = document.getElementById("z_stop");
                var s3 = parseInt(endstop.selectedIndex);
           
                var hotend = document.getElementById("hotend");
                var s4 = parseInt(hotend.selectedIndex);
              
                var lcd = document.getElementById("lcd");
                var s5= parseInt(lcd.selectedIndex);
          
//result of user selection compiles here :
                var userConfig = [s1,s2, s3, s4, s5];
         
//test result for black Z single V4 section:         
         var result1 = _.isEqual(userConfig,v4bm);
         var result2 = _.isEqual(userConfig,v4v1);
         var result3 = _.isEqual(userConfig,v4v2);
         var result4 = _.isEqual(userConfig,v4gt);
//test result for black Z dual V4 section:
         var result5 = _.isEqual(userConfig,v4dbm);
         var result6 = _.isEqual(userConfig,v4dv1);
         var result7 = _.isEqual(userConfig,v4dv2);
         var result8 = _.isEqual(userConfig,v4dgt);
//test result for black Z single V3B section: 
         var result9 = _.isEqual(userConfig,v3bbm);
         var result10 = _.isEqual(userConfig,v3bv1);
         var result11 = _.isEqual(userConfig,v3bv2);
         var result12 = _.isEqual(userConfig,v3bgt);
//test results for silver V3b section:
         var result13 = _.isEqual(userConfig,sv3bbm);
         var result14 = _.isEqual(userConfig,sv3bv1);
         var result15 = _.isEqual(userConfig,sv3bv2);
         var result16 = _.isEqual(userConfig,sv3bgt);
//test results for silver V4 section:
         var result17 = _.isEqual(userConfig,sv4bm);
         var result18 = _.isEqual(userConfig,sv4v1);
         var result19 = _.isEqual(userConfig,sv4v2);
         var result20 = _.isEqual(userConfig,sv4gt);
//test results for silver V4 dual section:
         var result21 = _.isEqual(userConfig,sv4dbm);
         var result22 = _.isEqual(userConfig,sv4dv1);
         var result23 = _.isEqual(userConfig,sv4dv2);
         var result24 = _.isEqual(userConfig,sv4dgt);
//test results for Rev.E section:
         var result25 = _.isEqual(userConfig,revEbm);
         var result26 = _.isEqual(userConfig,revEv1);
         var result27 = _.isEqual(userConfig,revEv2);
         var result28 = _.isEqual(userConfig,revEgt);
//test results for Rev.E dual section:
         var result29 = _.isEqual(userConfig,revEdbm);
         var result30 = _.isEqual(userConfig,revEdv1);
         var result31 = _.isEqual(userConfig,revEdv2);
         var result32 = _.isEqual(userConfig,revEdgt);
//test results for Non-standard configs:
         var result33 = _.isEqual(userConfig,sv4Zm);
         var result34 = _.isEqual(userConfig,bv3bgt);
         
         
//run test:
         
         if(result1){
             
                var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin-11-30-2015.zip";     
                 }
            else answer = false;
              
         }
         else if(result2){
                 var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip";     
                }
            else answer = false;
            }
                 
        else if(result3){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                   alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")     
                }
            else answer = false;
            }
         
          else if(result4){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2%20Marlin%20-%20Geeetech%20LCD%20-%20Black%20Z%20Motor%20-%2010-19-2015.zip";     
                }
            else answer = false;
            }
         
         else if(result5){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2_Dual_Extruder_Marlin_Black_Z_Motor.zip";     
                }
            else answer = false;
            }
         
         else if(result6){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result7){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result8){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result9){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin-11-30-2015.zip";     
                }
            else answer = false;
            }
             
         else if(result10){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip";     
                }
            else answer = false;
            }
         
             else if(result11){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
             else if(result12){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
          else if(result13){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin24r2.zip";     
                }
            else answer = false;
            }
         
           else if(result14){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_942013.zip";     
                }
            else answer = false;
            }
         
          else if(result15){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result16){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location=" http://makergear.wikidot.com/local--files/m2-lcd-panel/M2_Marlin_RRDSC_v1.0.zip";     
                }
            else answer = false;
            }
         
         else if(result17){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location=" http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin-01-14-2016-OriginalZMotor.zip";     
                }
            else answer = false;
            }
         
         else if(result18){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip";     
                }
            else answer = false;
            }
         
         else if(result19){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result20){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wikidot.com/local--files/m2-lcd-panel/M2_Marlin_RRDSC_v1.0.zip";     
                }
            else answer = false;
            }
         
         else if(result21){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2_Dual_Extruder_Marlin.zip";     
                }
            else answer = false;
            }
         
         else if(result22){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result23){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result24){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result25){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip";     
                }
            else answer = false;
            }
         
          else if(result26){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
          else if(result27){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
          else if(result28){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip";     
                }
            else answer = false;
            }
         
          else if(result29){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V101%20-%20Dual.zip";     
                }
            else answer = false;
            }
         
          else if(result30){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V104%20-%20Dual%20-%20Viki.zip";     
                }
            else answer = false;
            }
         
          else if(result31){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
          }
         
         else if(result32){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V101%20-%20Dual.zip";     
                }
            else answer = false;
            }
         
         else if(result33){
             var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result34){
             var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
          else alert("Your printer configuration appears to be non-standard. Please contact support@makergear.com")
         
        }


//Magnify Images
$(".zoom1").elevateZoom({zoomWindowPosition: 10});
$(".zoom2").elevateZoom({zoomWindowPosition: 2});

    
     
                
