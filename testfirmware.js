

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
            window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2_Dual_Extruder_Marlin.zip";       
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
         
               var m2Configs = [[revEbm]];
           
           
           
           
          //[v4bm] [v4v1],[v4v2],[v4gt],[v4dbm],[v4dv1],[v4dv2],[v4dgt],[v3bbm],[v3bv1],[v3bv2],[v3bgt],[sv3bbm],[sv3bv1],[sv3bv2],[sv3bgt],[sv4bm],[sv4v1],[sv4v2],[sv4gt],[sv4dbm],[sv4dv1],[sv4dv2],[sv4dgt],[revEbm],[revEv1],[revEv2],[revEgt],[revEdbm],[revEdv1],[revEdv2],[revEdgt]
         

         
                var result = m2Configs.findIndex(function(arr) {
                    return arr.every(function(value, i) {
                        return value === userConfig[i];
                    });
                });   

         
//run test:
         
         //if(result == 0){
             alert(result);
               // var answer = confirm ("Please click to download your firmware.");
        
               //if(answer){
                 //   window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin-11-30-2015.zip";     
              //   }
           // else answer = false;    
         }
          /*  
            
         else if(result == 1 ){
                 var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip";     
                }
            else answer = false;
            }
                 
        else if(result == 2){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                   alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")     
                }
            else answer = false;
            }
        
          else if(result == 3){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2%20Marlin%20-%20Geeetech%20LCD%20-%20Black%20Z%20Motor%20-%2010-19-2015.zip";     
                }
            else answer = false;
            }
          
         else if(result == 4){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2_Dual_Extruder_Marlin_Black_Z_Motor.zip";     
                }
            else answer = false;
            }
         
         else if(result == 5){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result == 6){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result = 7){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result == 8){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin-11-30-2015.zip";     
                }
            else answer = false;
            }
             
         else if(result == 9){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip";     
                }
            else answer = false;
            }
         
        else if(result == 10){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result == 11){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
        
          else if(result == 12){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin24r2.zip";     
                }
            else answer = false;
            }
          
           else if(result == 13){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_942013.zip";     
                }
            else answer = false;
            }
         
          else if(result ==14){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result == 15){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location=" http://makergear.wikidot.com/local--files/m2-lcd-panel/M2_Marlin_RRDSC_v1.0.zip";     
                }
            else answer = false;
            }
         
         else if(result == 16){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location=" http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin-01-14-2016-OriginalZMotor.zip";     
                }
            else answer = false;
            }
         
         else if(result == 17){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip";     
                }
            else answer = false;
            }
         
         else if(result == 18){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result == 19){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wikidot.com/local--files/m2-lcd-panel/M2_Marlin_RRDSC_v1.0.zip";     
                }
            else answer = false;
            }
         
         else if(result == 20){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2_Dual_Extruder_Marlin.zip";     
                }
            else answer = false;
            }
        
         else if(result == 21){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result == 22){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
         else if(result == 23){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
        
         else if(result == 24){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip";     
                }
            else answer = false;
            }
         
          else if(result == 25){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
          
          else if(result == 26){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
            }
         
          else if(result == 27){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip";     
                }
            else answer = false;
            }
        
          else if(result == 28){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V101%20-%20Dual.zip";     
                }
            else answer = false;
            }
          
          else if(result == 29){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V104%20-%20Dual%20-%20Viki.zip";     
                }
            else answer = false;
            }
         
          else if(result == 30){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    alert("Your printer configuration appears to be non-standard. Please contact support.makergear.com and they may be able to help you. ")      
                }
            else answer = false;
          }
        
         else if(result == 31){
            var answer = confirm ("Please click to download your firmware.");
        
                if(answer){
                    window.location="http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V101%20-%20Dual.zip";     
                }
            else answer = false;
            } 
          
          else alert("Your printer configuration appears to be non-standard. Please contact support@makergear.com")
         
        }*/
                 
                
                 
        
               
    
     
                
