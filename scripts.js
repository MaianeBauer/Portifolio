let header = document.getElementById('header')
window.addEventListener('scroll', () => {
if(window.scrollY >= 200){
header.style.background = '#ff1493'
} else {
header.style.background = 'transparent'
}
})