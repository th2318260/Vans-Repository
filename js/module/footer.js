define(["jquery"],function($){
        class Footer{
            constructor(){
                this.init();
            }

            init () {
                $("#footer-container").load("/vans/html/module/footer.html"),function(){

                }
            }
        }
       return new Footer();
    }
)