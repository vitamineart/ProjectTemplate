const parallaxItems = document.querySelectorAll('.parallax');
window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY;
    parallaxItems.forEach(item=>{
        let speed = item.dataset.speed;
        item.style.transform = `translateY(${scroll * speed}px)`
    })
})



