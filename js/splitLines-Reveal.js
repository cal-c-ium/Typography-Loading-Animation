//Here's the js for the first line animation.

gsap.registerPlugin(SplitText);

let textRevealSplit = SplitText.create(".textReveal",{
    type: "lines, chars",
    mask: "lines",
    onSplit(self) {
        return gsap.from(self.lines, {
        delay: .1,
        duration: .5, 
        yPercent: 100, 
        autoAlpha: 0, 
        stagger: 0.05
        });
    }
});