# RanSize.js
### A wacky library for some wacky coders 

## RanSize.js - What is this?
#### This is a library is assigns random font-size to each letter in the given block that contains text in it

## RanSize.js - How to use this?
- You can download directly from this repository 

## RanSize.js - Examples
#### Here are few examples of this library
```js
var random = new RanSize('random')
random.apply()
```
![random1](./img/random1.png)
```js
var random = new Ransize('random',
{
    colors: true
})
random.apply()
```
![random2](./img/random2.png)
```js
var random = new Ransize('random',
{
    min: 0.5
})
random.apply()
```
![random3](./img/random3.png)
```js
var random = new Ransize('random',
{
    max: 3
})
random.apply()
```
![random4](./img/random4.png)
```js
var random = new Ransize('random',
{
    pattern: true,
    values: [2, 1.7, 1.3, 1, 1.3, 1.7]
})
random.apply()
```
![random5](./img/random5.png)
```css
#random {
    display: flex;
    justify-content: baseline;
}
.random {
    letter-spacing: 5px;
}
```
```js
var random = new Ransize('random',
{
    pattern: true,
    values: [2, 1.7, 1.3, 1, 1.3, 1.7],
    class: 'random'
})
random.apply()
```
![random6](./img/random6.png)

#### You can use everthing in a single object too<br>Or you can create an object seperately and specify it as the arguement

## Thanks,
[![NoxFly](https://avatars2.githubusercontent.com/u/32705400?s=88&v=4)](https://github.com/NoxFly)
[![NoxFly](https://avatars2.githubusercontent.com/u/35851048?s=88&v=4)](https://github.com/Dob6458)