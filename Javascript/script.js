
//Sistema de Carrossel das imagens da home//
let totalSlides = document.querySelectorAll('.servContImg').length;
let currentSlide = 0;

document.querySelector('.servImgs').style.width =
    `calc(100vw * ${totalSlides})`

    function goPrev(){
        currentSlide--;
        if(currentSlide < 0){
            currentSlide = totalSlides - 1;
        }
        updateMargin();
    }
    
    function goNext(){
        currentSlide++;
        if (currentSlide > (totalSlides - 1)){
        currentSlide = 0
    }
    updateMargin();
    }
    
    function updateMargin(){
        let sliderWidth = document.querySelector('.servContImg').clientWidth;
        let newMargin = (currentSlide * sliderWidth);
            document.querySelector('.servContImg').style.marginLeft = 
            `-${newMargin}px`;
    }
    setInterval(goNext, 3200)
//Fim do sistema de Carrossel//
//Inicio do sistema de AutoScrollUp da página//

    function scrollUp(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
//Fim de função//