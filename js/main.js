
    function responsiveMenu() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    window.onload=function(){
        document.getElementById("TrialButton").addEventListener("click",function(e){
            e.target.value;
            alert("Your Trial Started");
        });
        
    }
  
   