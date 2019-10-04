
/*eslint-disable*/

document.addEventListener('DOMContentLoaded', () => {
  
  const pacman = document.getElementById('pacman')
  const app   = document.getElementById('app')
  // 37      Left arrow
  // 38      38      38      38      38      Up arrow
  // 39      39      39      39      39      Right arrow
  // 40      40      40      40      40      Down arrow
  
  let xpos   = 0;
  let ypos   = 0;
 
  document.addEventListener('keydown', (event) => {

      if (event.keyCode === 37) {
        console.log('clicked left', pacman.style.left)
        xpos -= 1;
        pacman.style.left = xpos * 85  + 'px'}
      
      if (event.keyCode === 39) {
        console.log('clicked right', pacman.style.right)
        xpos += 1;
        pacman.style.left = xpos * 85 + 'px'};

      if (event.keyCode == 38) {
      console.log('clicked up')
      ypos -=1;
      pacman.style.top = ypos * 85 + 'px'}

      if (event.keyCode == 40) {
        console.log('clicked down')

        ypos +=1;
        pacman.style.top = ypos *85 + 'px'}
    

    
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
  })
  // })


