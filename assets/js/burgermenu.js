const menuIcon = document.getElementById('menu-icon')
const menuList = document.getElementById('menu-list')
const body = document.querySelector('body')
const container = document.getElementById('container')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const Line1 = document.getElementById('line-1')
const Line2 = document.getElementById('line-2')
const Line3 = document.getElementById('line-3')

menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('bg-active')
    body.classList.toggle('bg-active')
    container.classList.toggle('bg-active')
    header.classList.toggle('active')
    footer.classList.toggle('active')
    Line1.classList.toggle('bg1-active')
    Line2.classList.toggle('bg2-active')
    Line3.classList.toggle('bg3-active')
})