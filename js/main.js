$(function () {
  $('.carousel').carousel({
    interval: 6000,
  })

  // show options box
  $('.gear').on('click', function () {
    $('.options-box').toggleClass('show')
  })
})

// switch colors
const colorsLi = document.querySelectorAll('.colors-list li')
let mainColors = localStorage.getItem('color-option')
// if local storge has color change --main-color to color that saved in local storage
if (mainColors) {
  // add color saved in local storage to --main-color in root
  document.documentElement.style.setProperty('--main-color', mainColors)

  // add class selected on li that his color is saved in local storage
  colorsLi.forEach((item) => {
    if (item.dataset.color === mainColors) {
      colorsLi.forEach((ele) => {
        ele.classList.remove('selected')
      })
      item.classList.add('selected')
    }
  })
}
// on click on li
colorsLi.forEach((ele) => {
  ele.addEventListener('click', function (e) {
    // set color on root
    document.documentElement.style.setProperty(
      '--main-color',
      e.target.dataset.color,
    )

    // remove class selected from all lis and add class on clicked li
    colorsLi.forEach((el) => {
      el.classList.remove('selected')
    })
    e.target.classList.add('selected')

    // save color in local storage
    localStorage.setItem('color-option', e.target.dataset.color)
  })
})

// loading screen
$(window).on('load', function () {
  $('.loading-overlay .sk-chase').fadeOut(4000, function () {
    $('body').css('overflow', 'auto')
    $(this)
      .parent()
      .fadeOut(1000, function () {
        $(this).remove()
      })
  })
})

// scroll to top
let scrollBtn = document.querySelector('.scroll-to-top')

window.addEventListener('scroll', function () {
  this.scrollY >= 200
    ? (scrollBtn.style.right = '20px')
    : (scrollBtn.style.right = '-60px')
})

scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
