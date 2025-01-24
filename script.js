function homePageAnimation(){
    var t1=gsap.timeline({
        scrollTrigger:{
            trigger:".home",
            start:"top top",
            end:"bottom bottom",
            scrub:2,
        }
    })
    
    t1
    .to(".vido",{
        '--clip':"0%",
        ease:Power2 
    },'a')
    
    .to(".slidesm",{
        scale:1,
        ease:Power2 
    },'a')
    
    .to(".lt",{
        ease:Power2,
        xPercent:-10
    },'b')
    .to(".rt",{
        ease:Power2,
        xPercent:10
    },'b')
}
function realPageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub:2
        },
        xPercent: -200,
        ease:Power2
    })
}
function teamPageAnimation(){
    var elem=document.querySelectorAll(".listelem")
    elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0
    })
    val.addEventListener("mousemove",function(delts){
        val.childNodes[3].style.left=delts.x+"px"
    })
})
}
function textParaAnimation(){
    var clutter="";
document.querySelector(".textpara")
.textContent.split("")
.forEach(function(e){
    if(e==" ") clutter+=`<span>&nbsp;</span>`
    clutter+=`<span>${e}</span>`
})
document.querySelector(".textpara").innerHTML=clutter;
gsap.set(".textpara span" ,{opacity:.1});
gsap.to(".textpara span",{
    scrollTrigger: {
        trigger:".para",
        start:"top 60%",
        end: "bottom 90%",
        scrub:.2,
    },
    opacity:1,
    ease:Power4,
    stagger:.03
})
}
function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsulesAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1
        },
        y:0,
        ease:Power4
    })
}
function bodyChangeColor(){
    document.querySelectorAll(".section")
    .forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start:"top 50%",
            end:"bottom 50%",
            onEnter: function(){
                document.body.setAttribute("theme",e.dataset.color);
            },
            onEnterBack: function(){
                document.body.setAttribute("theme",e.dataset.color);
            }
        })
    })
}

realPageAnimation();
homePageAnimation();
teamPageAnimation();
textParaAnimation();
loco();
capsulesAnimation();
bodyChangeColor();





