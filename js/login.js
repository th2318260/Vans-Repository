require(["require.config"],function(){
    require(["jquery","header","footer"],function($){
        $("#user-login").on("click",function(){
            $("#phone-login").css({"color":"#666666","border":"none",});
            $(this).css({"border-bottom":"3px solid #c9192e","color":"#c9192e"});
            $("#password").css("display","block")
            $("#first-p").css("display","none");
            $("#second-p").css("display","none")
        })
        $("#phone-login").on("click",function(){
            $("#user-login").css({"color":"#666666","border":"none",});
            $(this).css({"border-bottom":"3px solid #c9192e","color":"#c9192e"});
            $("#password").css("display","none");
            $("#first-p").css("display","block");
            $("#second-p").css("display","block");
            $("#user").css("margin-top","20px");
            $("#other").css("margin-top","25px")

        })

        
    })


})
