
 " use strict"; 

 $ (document).ready (function() {   
      

  var resultlistjs=$("#resultlist");

  /* first  resultlistjs content  */

  resultlistjs.text("this is from jquery");

    
  var toggleButtonjq=$("#toggleButton");
     

        
 /* or i can use htis code ----  toggleButtonjq.click(function(){               */

  toggleButtonjq.on("click",function(){
          
  resultlistjs.toggle(500);

  if(toggleButtonjq.text()=="Hide")toggleButtonjq.text("Show");

  else toggleButtonjq.text("Hide");



            });


 $("#gitHubSearchForm").on("submit",function(){


  var searchPhrase = $("#searchphRase").val();
  var useStars= $("#UZstars").val();
  var langchoice=$("#Langchoiz").val();



  if (searchPhrase){

    resultlistjs.text("Performing search...");

    var githubsearch="https://api.github.com/search/repositories?q="+ encodeURIComponent(searchPhrase);

    

  if (langchoice != "All"){
    githubsearch += "+language:"+ encodeURIComponent(langchoice);

  }

  if (useStars) {

    githubsearch += "&sort=stars";
  }


 

  $.get(githubsearch)
 
    
  .done(function(r){
 
    // r is a variable representing any result outcome from githubsearch api which is the object in this case.
    // the result there presents an array which we are sure of that is why in the suture we use " r.items ""
 
    // work on this code below to see why not firing contents 
    //console.log(r.items.name);
  
    // this code on line counts how many items are in items  in the api link above in githubsearch , and i mean the major elements ,major arrays inclusive not minor, since this is just first step in hierarchy 
  
        //console.log(r.items.length);
  
        displayResults(r.items);
  
                    })              
 .fail(function(err){
   console.log("failed to query Github");
 
                });

              }

      return false;

 }); 



 


 

                  


    
                                

    


 /* new array  variable results        */


 /*
  var results = [ 
    
               {

    name:"jquery",
    language:"Javascript",
    score:4.5,
    showlog: function(){ } 

        ,
    owner:{
      login:"shawnwildermuth",
      id:123456,
        } 

                },{  

      name:"jqueryUI",
      language:"Javascript",
      score:3.5,
      showlog:function(){ }
      
        ,

    owner:{
      login:"shawildermuth",
      id:123456
      }

                    } 
                
                ]             */
    

    function displayResults(results){


 /* clearing the contents in the variable resultlistjs using the function 
  .empty()          */

resultlistjs.empty();

$.each(results,function(i,item){ 
  
  var newResult=$("<div class='result'>" + 

  "<div class='title'>" + item.name + "</div>" +
  "<div > Language:" + item.language + "</div>" +
  "<div > Owner:" + item.owner.login + "</div>" +


                "</div>");

    newResult.hover( function(){

      //make it darker for first function starting at hte top
    
      $(this).css("background-color","lightgray");
    
                  }  ,function(){
          //make it transparent for this function 
    
          $(this).css("background-color","transparent"); 
        
        
                             }  );
        
                


  /* second  resultlistjs content  */

  resultlistjs.append(newResult) ;

                                   } );


        
        // function display results ends here  

                                                
                  


                                  }





/*      end of  $ (document).ready (function() {      */

        });


    
//   https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars 
        

                                       
    
    
                                



                                    
