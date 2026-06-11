let logo = document.querySelector(".logo");

gsap.from(logo, {
    // color: "red",
    // backgroundColor: "yellow",
    x: -100,
    opacity: 0,
    // rotate: 360,
    // scale: 3,
    duration: 1,
    // delay: 2,
    ease: "power2.inOut",
});

gsap.from(".nav-item", {
    y: -100,
    ease: "power3.out",
    duration: 1,
    stagger: 0.025,
});

gsap.from(".info-leo", {
    y: -100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5,
    duration: 1,
    stagger: 0.05,
});

gsap.from(".social", {
    y: 100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.7,
    duration: 1,
    stagger: 0.3,
});

gsap.from(".cta-button", {
    opacity: 0,
    ease: "power3.out",
    delay: 0.9,
    duration: 1,
    stagger: 0.05,
});
