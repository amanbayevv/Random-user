const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')



const toggleBtn = () => {
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
}



darkBtn.addEventListener('click', () => {
    toggleBtn()
    localStorage.setItem('mode','dark-mode')
})
lightBtn.addEventListener('click', () => {
    toggleBtn()
    localStorage.setItem('mode','')
})