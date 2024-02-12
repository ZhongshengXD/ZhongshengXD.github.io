let slideToImagePosition = {
    0: '11% 20%',
    1: '47% 20%',
    2: '73% 20%',
    3: '100% 20%',
    4: '1% 87%',
    5: '31% 87%',
    6: '59% 87%',
    7: '92% 87%'
};



function slide() {
    let slider = document.getElementById('slider');
    let value = slider.value;
    let container = document.getElementById('slideImageContainer');


    if (slideToImagePosition[value] !== undefined) {
        container.style.backgroundPosition = slideToImagePosition[value];
    }
}

