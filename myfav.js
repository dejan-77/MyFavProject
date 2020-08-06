/* SCROLLTRIGGER REVEAL ALL IMAGE IN VIEW WITH CLIPPATH */

document.querySelectorAll("img").forEach(img => {
    gsap.fromTo(img, {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    }, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.6,
      ease: "power1.inOut",
      scrollTrigger: img
    });
  });

  