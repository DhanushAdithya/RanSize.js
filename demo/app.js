var random = new RanSize('size').apply();

var random2 = new RanSize('size2', {
    pattern: true
}).apply();

var random3 = new RanSize('size3', {
    class: 'random'
}).apply();

var random4 = new RanSize('size4', {
    colors: true
}).apply();

var random5 = new RanSize('size5', {
    min: 1.5,
    max: 2.5
}).apply();

var random6 = new RanSize('size6', {
    rotate: true
}).apply();

var random7 = new RanSize('size7', {
    pattern: true,
    value: [2, 1.3]
}).apply();

var random8 = new RanSize('size8', {
    min: 1.5,
    max: 2.5,
    pattern: true,
    value: [2.5, 1.5],
    colors: true,
    rotate: true,
    class: 'all'
}).apply();

const ham = document.querySelector('.ham');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const nav = document.querySelector('.nav');

let i = 0;

ham.addEventListener('click', () => {
    bar1.classList.toggle('forbar1')
    bar2.classList.toggle('forbar2')
    bar3.classList.toggle('forbar3')
    nav.classList.toggle('open')
})