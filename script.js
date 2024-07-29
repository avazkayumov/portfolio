window.addEventListener('DOMContentLoaded', function() {
    this.window.addEventListener('scroll', function() {
        const header = document.querySelector('header')
        header.classList.toggle('sticky', window.scrollY > 0)
    })

    const menuBtn = document.querySelector('.menu-btn')
    const navigation = document.querySelector('.navigation')
    const navigationItems = document.querySelectorAll('.navigation a')
    
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })
    
    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', function() {
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })
    
    const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', function() {
        scrollBtn.classList.toggle('active', this.window.scrollY > 500)
    })

    scrollBtn.addEventListener('click', function() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    })

    this.window.addEventListener('scroll', function() {
        let reveals = document.querySelectorAll('.reveal')

        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top
            let revealPoint = 50

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active')
            }
        }
    })
})
