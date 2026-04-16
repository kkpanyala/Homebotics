(function() {
    const slides = Array.from(document.querySelectorAll('.slide'));

    let curInd = 0;

    let isTransitioning = false;

    const LOCK_DURATION = 800;

    function init() {
        setActiveSlide(0, false);
        window.scrollTo(0, 0);
    }

    function setActiveSlide(index, smooth=true) {
        if(index < 0 || index >= slides.length) return;

        slides.forEach(slide => slide.classList.remove('active'));

        const targetSlide = slides[index];
        targetSlide.classList.add('active');

        const top = targetSlide.offsetTop;

        if(smooth) {
            window.scrollTo({
                top,
                behavior: 'smooth',
            });
        } else {
            window.scrollTo(0, top);
        }

        curInd = index;
    }

    function onWheel(event) {
        event.preventDefault();

        if(isTransitioning) return;

        const deltaY = event.deltaY;

        if(deltaY > 0) {
            goToSlide(curInd + 1)
        } else if (deltaY < 0) {
            goToSlide(curInd - 1);
        }
    }

    function goToSlide(targetInd) {
        if(targetInd === curInd || targetInd < 0 || targetInd >= slides.length) return;
        
        isTransitioning = true;
        setActiveSlide(targetInd);

        setTimeout(() => { isTransitioning = false; }, LOCK_DURATION);
    }

    function onResize() {
        const activeSlide = slides[curInd];
        if(!activeSlide) return;
        const top = activeSlide.offsetTop;
        window.scrollTo(0, top);
    }

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', onResize);

    init();
})();