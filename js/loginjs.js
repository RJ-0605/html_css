
/* loginjs.js for loginjs.html file */


function validateForm(){


    var UserPassmismatchj= document.getElementById("UserPassmismatch");

    var userx=document.forms["myForm"]["usrname"].value;
    var passx=document.forms["myForm"]["psswrd"].value;

                                    /* if the both fields are empty or one field is empty */
                                        if (userx=="" & passx ==""){

                                            UserPassmismatchj.innerHTML = "<p>Please Enter Username and Password</p>";
                                        return false;
                                                
                                                    }else if (userx==""){
    
                                            UserPassmismatchj.innerHTML = "<p>Please Enter Username</p>";
                                            return false;
                    
                                                      } else if (passx==""){
        
        
                                                UserPassmismatchj.innerHTML = "<p>Please Enter Password</p>";
                                                return false;
        
                                                /* if one or both fields are wrong */
                                                     }else if(userx == "kwame" & passx != "oppong20"){

                                            UserPassmismatchj.innerHTML="<p>Username or password mismatch </p>";
                                        return false;
                                    


                                                
                                                }else if(userx != "kwame" & passx == "oppong20"){

                                            UserPassmismatchj.innerHTML="<p>Username or password mismatch </p>";
                                        return false;

                                            }  else  if(userx != "kwame" & passx != "oppong20"){

                                     UserPassmismatchj.innerHTML="<p>Username or password mismatch </p>";
                                    return false;
                                            
                                                /* if the  both fields match the set value */
                                            } else if(userx =="kwame" & passx =="oppong20"){
                           
                                                    return true;
                                                /* by default the value of function is set to false so as to prevent any default hacking */

                                                 }else {
                                                     
                                                    return false;
                                                         }
                                        
                                                
                                            
                                 }






/*





            in the future i run and call the entire script 


                                 function wrongdata(){


                                     if(userx == "kwame" & passx != "oppong20"){

                                            UserPassmismatchj.innerHTML="<p>Username or password mismatch </p>";
                                        return false;
                                                
                                                }else if(userx != "kwame" & passx == "oppong20"){

                                            UserPassmismatchj.innerHTML="<p>Username or password mismatch </p>";
                                        return false;

                                            }  else  if(userx != "kwame" & passx != "oppong20"){

                                     UserPassmismatchj.innerHTML="<p>Username or password mismatch </p>";
                                    return false;


                                 }





                        function   rightdata(){

                                             if(userx === "kwame" & passx === "oppong20"){
                           
                                           return true;
                                        }

                                  }


                        function emptydata(){

                                        if (userx=="" & passx ==""){

                                            UserPassmismatchj.innerHTML = "<p>Please Enter Username and Password</p>";
                                        return false;
    
                                                  }   else if (userx==""){
    
                                        UserPassmismatchj.innerHTML = "<p>Please Enter Username</p>";
                                        return false;
                
                                                  } else if (passx==""){
    
    
                                            UserPassmismatchj.innerHTML = "<p>Please Enter Password</p>";
                                            return false;
    
                                                 }

  
                                 }


    

       var x= emptydata();
        var y=wrongdata();
       var z= rightdata();

        
        y();
        

    validateForm()

    */

