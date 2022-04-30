const translate = document.querySelectorAll(".translate")

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })
})
function guan(){
    document.getElementById('bless').style.backgroundColor = '#454545';
    document.body.style.backgroundColor = '#454545';
}
function chui(){
    let app = document.getElementById('candle');
    let app2 = document.getElementById('flame');
   
    app2.removeAttribute('class')
    app2.removeAttribute('id')
    app2.removeAttribute('style')
}
