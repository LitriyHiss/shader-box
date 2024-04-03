const boxShad = document.getElementById('boxShad');
const bgCol = document.getElementById('body');
const root = document.querySelector(':root');

const scaleBtn = document.getElementById('scaleBtn');
const colBtn = document.getElementById('colBtn');
const shadeBtn = document.getElementById('shadeBtn');
const resBtn = document.getElementById('resBtn');

const scale = document.getElementById('scale');
const color = document.getElementById('color');
const shadow = document.getElementById('shadow');

scaleBtn.addEventListener('click', () => {
    scale.classList.toggle('active');
    color.classList.remove('active');
    shadow.classList.remove('active');
})

const widthInp = document.getElementById('widthInp');
const heightInp = document.getElementById('heightInp');
const posXInp = document.getElementById('posXInp');
const posYInp = document.getElementById('posYInp');
const radInp = document.getElementById('radInp');

const widthInpR = document.getElementById('widthInpR');
const heightInpR = document.getElementById('heightInpR');
const posXInpR = document.getElementById('posXInpR');
const posYInpR = document.getElementById('posYInpR');
const radInpR = document.getElementById('radInpR');

widthInpR.min = 0;
widthInpR.max = 1000;
heightInpR.min = 0;
heightInpR.max = 800;
posXInpR.min = -100;
posXInpR.max = 1200;
posYInpR.min = -100;
posYInpR.max = 600;
radInpR.min = 0;
radInpR.max = 1000;

widthInp.addEventListener('input', () => {
    boxShad.style.width = `${widthInp.value}px`;
    widthInpR.value = widthInp.value;
})
heightInp.addEventListener('input', () => {
    boxShad.style.height = `${heightInp.value}px`;
    heightInpR.value = heightInp.value;
})
posXInp.addEventListener('input', () => {
    boxShad.style.left = `${posXInp.value}px`;
    posXInpR.value = posXInp.value;
})
posYInp.addEventListener('input', () => {
    boxShad.style.top = `${posYInp.value}px`;
    posYInpR.value = posYInp.value;
})
radInp.addEventListener('input', () => {
    boxShad.style.borderRadius = `${radInp.value}px`;
    radInpR.value = radInp.value;
})

widthInpR.addEventListener('input', () => {
    boxShad.style.width = `${widthInpR.value}px`;
    widthInp.value = widthInpR.value;
})
heightInpR.addEventListener('input', () => {
    boxShad.style.height = `${heightInpR.value}px`;
    heightInp.value = heightInpR.value;
})
posXInpR.addEventListener('input', () => {
    boxShad.style.left = `${posXInpR.value}px`;
    posXInp.value = posXInpR.value;
})
posYInpR.addEventListener('input', () => {
    boxShad.style.top = `${posYInpR.value}px`;
    posYInp.value = posYInpR.value;
})
radInpR.addEventListener('input', () => {
    boxShad.style.borderRadius = `${radInpR.value}px`;
    radInp.value = radInpR.value;
})

colBtn.addEventListener('click', () => {
    color.classList.toggle('active');
    scale.classList.remove('active');
    shadow.classList.remove('active');
})

const boxColor = document.getElementById('boxColor');
const bgColor = document.getElementById('bgColor');
const shadowColor = document.getElementById('shadColor');

boxColor.addEventListener('input', () => {
    boxShad.style.backgroundColor = `${boxColor.value}`;
})
bgColor.addEventListener('input', () => {
    body.style.backgroundColor = `${bgColor.value}`;
})
shadowColor.addEventListener('input', () => {
    root.style.setProperty('--shad-color', `${shadowColor.value}`);
})

shadeBtn.addEventListener('click', () => {
    shadow.classList.toggle('active');
    scale.classList.remove('active');
    color.classList.remove('active');
})

const posXShad = document.getElementById('posXShad');
const posYShad = document.getElementById('posYShad');
const blurInp = document.getElementById('blurInp');
const spreadInp = document.getElementById('spreadInp');
const checkShad = document.getElementById('checkShad');

const posXShadR = document.getElementById('posXShadR');
const posYShadR = document.getElementById('posYShadR');
const blurInpR = document.getElementById('blurInpR');
const spreadInpR = document.getElementById('spreadInpR');

posXShadR.min = -100;
posXShadR.max = 100;
posYShadR.min = -100;
posYShadR.max = 100;
blurInpR.min = 0;
blurInpR.max = 100;
spreadInpR.min = 0;
spreadInpR.max = 100;

posXShad.addEventListener('input', () => {
    root.style.setProperty('--shad-pos-x', `${posXShad.value}px`);
    posXShadR.value = posXShad.value;
})
posYShad.addEventListener('input', () => {
    root.style.setProperty('--shad-pos-y', `${posYShad.value}px`);
    posYShadR.value = posYShad.value;
})
blurInp.addEventListener('input', () => {
    root.style.setProperty('--shad-blur', `${blurInp.value}px`);
    blurInpR.value = blurInp.value;
})
spreadInp.addEventListener('input', () => {
    root.style.setProperty('--shad-spread', `${spreadInp.value}px`);
    spreadInpR.value = spreadInp.value;
})

checkShad.addEventListener('input', () => {
    if (checkShad.checked) {
        root.style.setProperty('--shad-set', 'inset');
    } else {
        root.style.setProperty('--shad-set', '');
    }
})

posXShadR.addEventListener('input', () => {
    root.style.setProperty('--shad-pos-x', `${posXShadR.value}px`);
    posXShad.value = posXShadR.value;
})
posYShadR.addEventListener('input', () => {
    root.style.setProperty('--shad-pos-y', `${posYShadR.value}px`);
    posYShad.value = posYShadR.value;
})
blurInpR.addEventListener('input', () => {
    root.style.setProperty('--shad-blur', `${blurInpR.value}px`);
    blurInp.value = blurInpR.value;
})
spreadInpR.addEventListener('input', () => {
    root.style.setProperty('--shad-spread', `${spreadInpR.value}px`);
    spreadInp.value = spreadInpR.value;
})

resBtn.addEventListener('click', () => {
    scale.classList.remove('active');
    color.classList.remove('active');
    shadow.classList.remove('active');
    root.style.setProperty('--shad-pos-x', '16px');
    root.style.setProperty('--shad-pos-y', '16px');
    root.style.setProperty('--shad-blur', '4px');
    root.style.setProperty('--shad-spread', '4px');
    root.style.setProperty('--shad-color', '#00000040');
    body.style.backgroundColor = '';
    boxShad.style.backgroundColor = '';
    boxShad.style.width = '';
    boxShad.style.height = '';
    boxShad.style.left = '';
    boxShad.style.top = '';
    boxShad.style.borderRadius = '';
    scale.classList.toggle('active');
})