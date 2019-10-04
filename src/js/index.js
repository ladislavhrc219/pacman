// import { url } from "inspector"

/*eslint-disable*/
class Pacman {
  constructor() {
      this.xpos = 0
      this.ypos = 0
      this.self = document.getElementById('pacman')
      this.self.style.left = this.xpos  + 'px'
      this.self.style.top = this.ypos  + 'px'
      this.multiply = 85
      this.windowWidth = window.innerWidth
      this.windowHeigh = window.innerHeight

  }

  run() {
    
      document.addEventListener('keydown', (event) => {

          if (event.keyCode === 37 && this.xpos > 0) {
            // console.log('clicked left', this.self.style.left)
            this.xpos -= this.multiply;
            this.self.style.left = this.xpos  + 'px'}
            console.log(this.xpos)

          
          if (event.keyCode === 39 && this.xpos < this.windowWidth - 100) {
            // console.log('clicked right', this.self.style.right)
            this.xpos += this.multiply;
            this.self.style.left = this.xpos  + 'px'};
    
          if (event.keyCode == 38 && this.ypos > 0) {
          // console.log('clicked up', this.self.style.top)
          this.ypos -=this.multiply;
          this.self.style.top = this.ypos  + 'px'}
    
          if (event.keyCode == 40 && this.ypos < this.windowHeigh -100) {
            // console.log('clicked down', this.self.style.top)
    
            this.ypos +=this.multiply;
            this.self.style.top = this.ypos  + 'px'}
        
    
        
      })
  }
}

class Apple {
  constructor() {
    this.xpos = 0
    this.ypos = 0
    this.self = document.getElementById('apple')
  }

  run() {
    console.log(this.self)
    // this.self.style
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const pac = new Pacman
  const appl = new Apple
  pac.run()
  // appl.run()
  // const pacman = document.getElementById('pacman')
  // const app   = document.getElementById('app')
  // // 37      Left arrow
  // // 38      38      38      38      38      Up arrow
  // // 39      39      39      39      39      Right arrow
  // // 40      40      40      40      40      Down arrow
  
  // let xpos   = 0;
  // let ypos   = 0;
 
  // document.addEventListener('keydown', (event) => {

  //     if (event.keyCode === 37) {
  //       console.log('clicked left', pacman.style.left)
  //       xpos -= 1;
  //       pacman.style.left = xpos * 85  + 'px'}
      
  //     if (event.keyCode === 39) {
  //       console.log('clicked right', pacman.style.right)
  //       xpos += 1;
  //       pacman.style.left = xpos * 85 + 'px'};

  //     if (event.keyCode == 38) {
  //     console.log('clicked up')
  //     ypos -=1;
  //     pacman.style.top = ypos * 85 + 'px'}

  //     if (event.keyCode == 40) {
  //       console.log('clicked down')

  //       ypos +=1;
  //       pacman.style.top = ypos *85 + 'px'}
    

    
  })
  // console.log(cont)
  // console.log('test')
  // document.addEventListener('keydown', (event) => {
  //   console.log('inside the event')
    
    // if (event.keyCode == 39) {
    // pacman.style.left += 

    // }
    // if(event.keyCode == 39) {
    //   console.log('alfa')
    // }
  // })
  // })


