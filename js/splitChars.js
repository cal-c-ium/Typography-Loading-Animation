//Here's the js for the SplitText animations

gsap.registerPlugin(SplitText);

let split = SplitText.create(".text",{
    type: "chars",
    //charsClass: "chars",  //add this to show the border around the elements
});

function xyPercentDecider() {
    const deciderValues = ['yes', 'no'];
    let  ranDecider = deciderValues[Math.floor(Math.random() * deciderValues.length)];
    console.log(ranDecider);
}

function xyPercent() {
    xyPercentDecider();

    if (ranDecider = 'yes') {
        gsap.set(".xyPercentGSAP", { xPercent: "random([-50, 50])", yPercent: 0 });
    } else if (ranDecider = 'no') {
        gsap.set(".xyPercentGSAP", { xPercent: 0 , yPercent: "random([-50, 50])" });
    }
}

function splitLoadWord() {
    gsap.timeline({ delay: 1, })
    .to(split.chars,{
        yPercent: "random([-50, 50])",
        //xPercent: "random([-50, 50])",
        //rotation: "random(1,10)",
        autoAlpha: 0,
        stagger: {
            amount: 1,
            from: "random",
        }
    }); 
}