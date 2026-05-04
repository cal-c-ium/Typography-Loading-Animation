//Here's the js for the SplitText animations

gsap.registerPlugin(SplitText);

let split = SplitText.create(".text",{
    type: "chars",
    //charsClass: "chars",  //add this to show the border around the elements
});

function splitLoadWord() {
    gsap.timeline({ delay: 1, })
    .to(split.chars,{
        yPercent: "random([-10, 10])",
        rotation: 1000,
        autoAlpha: 0,
        stagger: {
            amount: 1,
            from: "random",
        }
    });
}