define(["jquery"],function($){
  class Header {
      constructor(){
         this.init();
      }
      init () {

        $("#header-container").load("/vans/html/module/header.html",function(){
      
        });
        this.clicklogo();
             }
      clicklogo(){
        
          $("#clicklogo").on("click",function(){
            console.log($("#clicklogo"));
            window.location.href="/vans/html/index.html"
           
          })
      }
  }    
  return new Header(); 
})