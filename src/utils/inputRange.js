// export  window.onload = function () {
//   slideOne()
//   slideTwo()
// }

const slideOne = document.getElementById('slider-1')
const slideTwo = document.getElementById('slider-2')
const displayValueOne = document.getElementById('range1')
const displayValueTwo = document.getElementById('range2')
const minGap = 5
const sliderRangeTrack = document.querySelector('.slider-range-track')
const sliderMaxValue = document.getElementById('slider-1').max

export function handleSlideOne() {
  if (parseInt(slideTwo.value) - parseInt(slideOne.value) <= minGap) {
    slideOne.value = parseInt(slideTwo.value) - minGap
  }
  displayValueOne.textContent = slideOne.value
  fillColor()
}

export function handleSlideTwo() {
  if (parseInt(slideTwo.value) - parseInt(slideOne.value) <= minGap) {
    slideTwo.value = parseInt(slideOne.value) + minGap
  }
  displayValueTwo.textContent = slideTwo.value
  fillColor()
}

function fillColor() {
  const percent1 = (slideOne.value / sliderMaxValue) * 100
  const percent2 = (slideTwo.value / sliderMaxValue) * 100
  sliderRangeTrack.style.background = `linear-gradient(to right, #222222 ${percent1}%, #ff5c00 ${percent1}%, #ff5c00 ${percent2}%, #222222 ${percent2}%)`
}
