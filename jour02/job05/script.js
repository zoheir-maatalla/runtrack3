const [green,red,blue] = [21, 30, 156]
const footer = document.getElementsByTagName('footer')[0]

document.addEventListener('scroll',() => {
    let y = window.scrollY /800
    const [g,r,b] = [green/y, red/y, blue/y].map(Math.round)
    footer.style.backgroundColor = `rgb(${g},${r},${b})`;
})