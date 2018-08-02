changeBackgroundColor = () => {
  let rgb = ['#']
  for (let i=0; i < 3; i++)
    rgb.push(Math.floor(Math.random() * 99));
    console.log(rgb)
    colorCode = rgb.join('')
    document.body.style.background = colorCode}

document.querySelector('.buttonClicked').addEventListener('click', changeBackgroundColor)