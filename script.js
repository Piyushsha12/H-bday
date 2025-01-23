let highestZ = 1 ;

class paper{

    holdingPaper = false;

    prevMouseX = 0;
    prevMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velocityX = 0;
    velocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0;

    init(Paper) {
      
    Paper.addEventListener('mousedown', (e) => {
        
        this.holdingPaper = true ;

        Paper.style.zIndex = highestZ;
        highestZ+= 1;

        if ( e.button === 0) {
            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;
            
            console.log (this.prevMouseX);
            console.log (this.prevMouseY);

        }
    })

    document.addEventListener('mousemove' , (e) => {
       

        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        this.velocityX = this.mouseX - this.prevMouseX;
        this.velocityY = this.mouseY - this.prevMouseY;


        if (this.holdingPaper) {


            this.currentPaperX += this.velocityX;
            this.currentPaperY += this.velocityY;

            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;

            Paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;

        }
    })

    window.addEventListener('mouseup' , (e) =>{
        console.log('mouse button is released');
        this.holdingPaper = false;
        
     })
    }
}

const papers=Array.from(document.querySelectorAll('.paper'));

papers.forEach( Paper => {
    const p = new paper();
    p.init(Paper);
})