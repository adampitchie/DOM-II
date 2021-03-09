// click
const button = document.querySelector(".btn")

button.addEventListener('click', function(event) {
  const color = document.body.style.backgroundColor
  document.body.style.backgroundColor = color === 'white' ? 'blue' : 'white'
})

// mouseover
const img = document.querySelector('img')

img.addEventListener('mouseover', function(event) {
  const color = document.body.style.backgroundColor
  document.body.style.backgroundColor = color === 'white' ? 'green' : 'white'
})

// mousedown
img.addEventListener('mousedown', function(event) {
  const color = document.body.style.backgroundColor
  document.body.style.backgroundColor = color === 'white' ? 'beige' : 'white'
})

// dblclick
document.addEventListener('dblclick', function(event) {
  const color = document.body.style.backgroundColor
  document.body.style.backgroundColor = color === 'white' ? 'pink' : 'white'
})

// keydown
document.addEventListener('keydown', function(event) {
  const color = document.body.style.backgroundColor
  document.body.style.backgroundColor = color === 'white' ? 'teal' : 'white'
})

// keyup
document.addEventListener('keyup', function(event) {
  document.body.style.backgroundColor = 'white'
})

// scroll
document.addEventListener('scroll', function(event) {
  const color = document.body.style.backgroundColor
  document.body.style.backgroundColor = color === 'white' ? 'azure' : 'white'
})

// load
document.addEventListener('load', function(event) {
  document.body.style.backgroundColor = 'aquamarine'
})

// wheel
document.addEventListener('wheel', function(event) {
  const color = document.body.style.backgroundColor
  document.body.style.backgroundColor = color === 'white' ? 'aqua' : 'white'
  event.stopPropagation();
})

// resize
window.addEventListener('resize', function(event) {
  console.log(event.timeStamp)
})

// prevent links from refreshing page
Array.from(document.links).forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  })
})