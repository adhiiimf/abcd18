$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    $(".scroll-up").each(function() {
    new ScrollMagic.Scene({
        triggerElement: this,
    })
    .setClassToggle(this,'scrollin-up')
    .addTo(controller);
    });
    $(".scroll-down").each(function() {
    new ScrollMagic.Scene({
        triggerElement: this,
    })
    .setClassToggle(this,'scrollin-down')
    .addTo(controller);
    });
    $(".scroll-right").each(function() {
    new ScrollMagic.Scene({
        triggerElement: this,
    })
    .setClassToggle(this,'scrollin-right')
    .addTo(controller);
    });
    $(".scroll-left").each(function() {
    new ScrollMagic.Scene({
        triggerElement: this,
    })
    .setClassToggle(this,'scrollin-left')
    .addTo(controller);
    });
    $(".scroll-fade").each(function() {
    new ScrollMagic.Scene({
        triggerElement: this,
    })
    .setClassToggle(this,'scrollin-fade')
    .addTo(controller);
    });
    $(".scroll-pop").each(function() {
    new ScrollMagic.Scene({
        triggerElement: this,
    })
    .setClassToggle(this,'scrollin-pop')
    .addTo(controller);
    });
    $(".scroll-rotate").each(function() {
    new ScrollMagic.Scene({
        triggerElement: this,
    })
    .setClassToggle(this,'scrollin-rotate')
    .addTo(controller);
    });
    $(".scroll-color1").each(function() {
    new ScrollMagic.Scene({
        triggerElement: this,
    })
    .setClassToggle(this,'scrollin-color1')
    .addTo(controller);
    });
    $(".scroll-color2").each(function() {
    new ScrollMagic.Scene({
        triggerElement: this,
    })
    .setClassToggle(this,'scrollin-color2')
    .addTo(controller);
    });
})