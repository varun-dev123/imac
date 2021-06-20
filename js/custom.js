// VIDEO PLAY PASUE FUNCTION
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "<i class='fas fa-pause-circle'></i>";
    } else {
        video.pause();
        btn.innerHTML = "<i class='fas fa-play-circle'></i>";
    }
}

//  DESKTOP SCALE ANIMATION
gsap.set(".scaleDown", { xPercent: -50, yPercent: -50 });
gsap.to(".scaleDown", {
    scale: 0.8, scrollTrigger: {
        trigger: ".cc",
        pin: ".cc",
        scrub: true
    }
})


gsap.set(".scale-title", { xPercent: -10, yPercent: -30 });
gsap.to(".scale-title", {
    scale: 0.6, scrollTrigger: {
        trigger: ".thin-display",
        pin: ".thin-display",
        scrub: true
    }
})

// SAY HELLO AND WATCH EVENT
var headlines = gsap.utils.toArray(".say-hello, .watch-event, .pricing");
headlines.forEach((elem, i) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: elem,
            start: "+=133 80%",
            end: "+=200 40%",
            scrub: true,
            // markers: true,
            toggleActions: "play reverse play reverse",
        }
    });
    tl.to(elem, { opacity: 1, duration: 0.2 });
    //   .to(elem, { opacity: 0, duration: 0.2 }, 0.8);
});



// ANIMATED TEXT
var vsOpts = {
    $slides: $('.v-slide'),
    $list: $('.v-slides'),
    duration: 6,
    lineHeight: 50
}
var vSlide = new TimelineMax({
    paused: true,
    repeat: -1
})
vsOpts.$slides.each(function (i) {
    vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
        y: i * -1 * vsOpts.lineHeight,
        ease: Elastic.easeOut.config(1, 0.4)
    })
})
vSlide.play()