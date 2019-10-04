class Pacman {
    constructor() {
        super()
        this.xpos = 0
        this.ypos = 0
        this.self = document.getElementById('pacman')
    }

    run() {
        document.addEventListener('keydown', (event) => {

            if (event.keyCode === 37) {
              console.log('clicked left', this.self.style.left)
              this.xpos -= 1;
              this.self.style.left = xpos * 85  + 'px'}
            
            if (event.keyCode === 39) {
              console.log('clicked right', this.self.style.right)
              this.xpos += 1;
              this.self.style.left = xpos * 85 + 'px'};
      
            if (event.keyCode == 38) {
            console.log('clicked up')
            this.ypos -=1;
            this.self.style.top = ypos * 85 + 'px'}
      
            if (event.keyCode == 40) {
              console.log('clicked down')
      
              this.ypos +=1;
              this.self.style.top = ypos *85 + 'px'}
          
      
          
        })
    }
}

export default {Pacman} 