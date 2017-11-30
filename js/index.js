var mySwiper=new Swiper(".swiper-container",{
    direction:"vertical",
    loop:true,
    effect:"flip",
    onSlideChangeEnd: function (swiper) {
        var slides=swiper.slides,
            curIndex=swiper.activeIndex,
            trueSlideNum=slides.length- 2,
            lastSlideNum=trueSlideNum+1;
        [].forEach.call(slides, function (item, index) {
//console.log(item.id);
            item.id="";
            if(index==curIndex){
                switch  (index){
                    case 0:
                        item.id="page"+trueSlideNum;
                        break;
                    case lastSlideNum:
                        item.id="page1";
                        break;
                    default :
                        item.id="page"+curIndex;
                }
            }
        })

    },
    onInit: function () {

    }
});
var music=document.getElementById("music"),
    beyond=music.getElementsByClassName("beyond")[0];
//console.log(beyond);
window.setTimeout(function () {
   beyond.play();
    beyond.addEventListener("canplay", function () {
        music.className="player playMusic";
        music.style.opacity=1;
    });
},500);
    music.addEventListener("click", function () {
        if(beyond.paused){
            beyond.play();
            music.className="player playMusic";
        }else{
            beyond.pause();
            music.className="player";
        }
    });

var $cubeBox=$(".cubeBox");
$cubeBox.attr({
    rotateX:-30,
    rotateY:45
});
$cubeBox.on("touchstart", function (ev) {
    var point=ev.changedTouches[0];
    $(this).attr({
        strX:point.pageX,
        strY:point.pageY,
        changeX:0,
        changeY:0
    })
});
$cubeBox.on("touchmove", function (ev) {
    var point=ev.changedTouches[0];
    $(this).attr({
        changeX:point.pageX-parseFloat($(this).attr("strX")),
        changeY:point.pageY-parseFloat($(this).attr("strY"))
    })
});
$cubeBox.on("touchend", function (ev) {
    var changeX=parseFloat($(this).attr("changeX")),
        changeY=parseFloat($(this).attr("changeY"));
    var rotateX=parseFloat($(this).attr("rotateX")),
        rotateY=parseFloat($(this).attr("rotateY"));
    if(Math.abs(changeX)>30||Math.abs(changeY)>30){
        //-->¿Ï¶¨»¬¶¯ÁË
        rotateX=rotateX+changeY/3;
        rotateY=rotateY+changeX/3;
        $(this).attr({
            rotateX:rotateX,
            rotateY:rotateY
        }).css("transform","scale(0.6) rotateX("+rotateX+"deg) rotateY("+rotateY+"deg)")
    }
})





