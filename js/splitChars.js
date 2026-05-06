//Here's the js for the SplitText animations

gsap.registerPlugin(SplitText);

let split = SplitText.create(".text",{
    type: "chars",
    mask: "chars",
    //charsClass: "chars",  //add this to show the border around the elements
});

function splitLoadWord() {
    gsap.timeline({ delay: 1, })
    .to(split.chars,{
        xPercent: "random([-50, 50])",
        rotation: "random(1,10)",
        autoAlpha: 0,
        stagger: {
            amount: 1,
            from: "random",
        }
    }); 
}