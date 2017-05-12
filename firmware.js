

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
	        var v4dbm = [0,0,1,1,0];//V4 Dual Bas Model
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
	       var sv3bbm = [1,0,0,2,0]; //Base Model:
		   var sv3bv1 = [1,0,0,2,1]; //Viki1
		   var sv3bv2 = [1,0,0,2,2]; //Viki2
	       var sv3bgt = [1,0,0,2,3]; //Geetech
           
           //Silver V4 section:
	      var sv4bm = [1,0,0,0,0]; //Base Model:
		   var sv4v1 = [1,0,0,0,1]; //Viki1
		   var sv4v2 = [1,0,0,0,2]; //Viki2
	       var sv4gt = [1,0,0,0,3]; //Geetech
            
            //V4 Dual section:
	       var sv4dbm = [1,0,0,1,0]; //Base Model
		   var sv4dv1 = [1,0,0,1,1]; //Viki1 not supported
		   var sv4dv2 = [1,0,0,1,2]; //Viki2 not supported
	       var sv4dgt = [1,0,0,1,3]; //Geetech not supported
           
//Rev.E section    
           //Rev.E section
            var revEbm = [0,0,0,0,0]; //Rev.E Base Model
		    var revEv1 = [0,0,0,0,1]; //Viki1
		    var revEv2 = [0,0,0,0,2];//Viki2
	        var revEgt = [0,0,0,0,3];//Geetech
         
//Rev.E Dual section
           var revEd = [0,0,0,1,0]
           var revEdv1 = [0,0,0,1,1]
           var revEdv2 = [0,0,0,1,2]
           var revEdgt = [0,0,0,1,3]
         
       
    
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
          
 //result of user selection compiles here 
               
                var userConfig = [s1,s2, s3, s4, s5];  
                
                var result = _.isEqual(userConfig,revEbm);
         
                if(result){
                    alert("userConfig");
                }
               else alert("nope");
    
     }
                
