let header = document.getElementById('header')
window.addEventListener('scroll', () => {
if(window.scrollY >= 200){
header.style.background = '#4A766E'
} else {
header.style.background = 'transparent'
}
})