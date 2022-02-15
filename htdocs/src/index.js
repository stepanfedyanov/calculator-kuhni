// tabs

const tabsBtn = document.querySelectorAll('.calculator__tab');
const slides = document.querySelectorAll('.calculator__slide');

console.log(slides);

tabsBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        slides.forEach(slide => slide.classList.remove('calculator__slide_active'));
        tabsBtn.forEach(btn => btn.classList.remove('calculator__tab_active'));

        slides[index].classList.add('calculator__slide_active');
        tabsBtn[index].classList.add('calculator__tab_active');
    });
});

// slider

const rangeInputs = document.querySelectorAll('.calculator__input > input[type=range]');
const labels = document.querySelectorAll('.calculator__input > label');
const btnsForInputs = document.querySelectorAll('.calculator__input > .calculator__input-btn');

const changeLabel = (input, i) => {
    labels[i].innerHTML = `${Math.trunc(+input.value/100)} м ${Math.floor((input.value/100 - Math.trunc(+input.value/100)).toFixed(2) * 100)} см`;
}

rangeInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        changeLabel(input, i);
    });
});

btnsForInputs.forEach(btn => {
    btn.addEventListener('click', (e) => {
        rangeInputs[btn.getAttribute('data-range') - 1].value = +rangeInputs[btn.getAttribute('data-range') - 1].value + +btn.getAttribute('data-step');
        changeLabel(rangeInputs[btn.getAttribute('data-range') - 1], btn.getAttribute('data-range') - 1);
    });
});

// forms

const forms = document.querySelectorAll('.calculator-form');

const ajaxSend = async (formData) => {
    const fetchResp = await fetch('server.php', {
        method: 'POST',
        body: formData
    });
    if (!fetchResp.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
    }
    return await fetchResp.text();
};

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        
        ajaxSend(formData)
                .then((response) => {
                    document.querySelector('.calculator__slide-form > button').innerHTML = 'Данные отправлены!'
                    console.log(response);
                    form.reset(); // очищаем поля формы 
                })
                .catch((err) => { 
                    console.error(err); 
                    document.querySelector('.calculator__slide-form > button').innerHTML = 'Ошибка :('
                });
        
    });
});