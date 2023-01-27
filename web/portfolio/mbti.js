let titleLeft = document.querySelector("h1.title0");
//let titleLeft = document.querySelector("div.intro_text h1");
//let titleRight = document.querySelector("div.title_right");
//var autoplayVideoInterval = setInterval("autoplayVideo()",2000);

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);
    
    if(value >=700){
        titleLeft.style.animation = "disappear_left 1s ease-out forwards";
        titleLeft.nextElementSibling.style.animation = "disappear_left 1s ease-out forwards";
    }
    else{
        titleLeft.style.animation="appear_left 1s ease-out";
        titleLeft.nextElementSibling.style.animation = "appear_left 2s ease-out";
    }
    /*    
    if(value >=400)
        titleRight.style.animation = "disappear_right 2s ease-out forwards";
    else
        titleRight.style.animation="appear_right 2s ease-out";

    if( value >=500 && value <=550)
        replay();    
    */
    
});





/*
$(window).ready(function(){
    draw(80, '.pie-chart1', '#ccc');
   draw(50, '.pie-chart2', '#8b22ff');
   draw(30, '.pie-chart3','#ff0');
   draw(70, '.pie-chart4','red');

   autoplayVideo();
 });

function autoplayVideo()
{
    var promise = document.querySelector("video").play();
    if (promise !== undefined){
        promise.then(function (_){
        // Autoplay started!
        clearInterval(autoplayVideoInterval);

        }).catch(function (error) {// Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
            });
    }
}
 
 
 function replay(){
   draw(80, '.pie-chart1', '#ccc');
   draw(50, '.pie-chart2', '#8b22ff');
   draw(30, '.pie-chart3','#ff0');
   draw(70, '.pie-chart4','red');
 }

 function draw(max, classname, colorname){
    var i=1;
     var func1 = setInterval(function(){
       if(i<max){
           color1(i,classname,colorname);
           i++;
       } else{
         clearInterval(func1);
       }
     },10);
 }
 function color1(i, classname,colorname){
    $(classname).css({
         "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
    });
 }

 */