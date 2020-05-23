const pageHeader = document.querySelector(".c-navbar")
const toggler = document.querySelector(".c-navbar__toggler")
const openClassName = "c-navbar--mobile-open"

toggler.addEventListener('click', () => {
  pageHeader.classList.forEach(cls => {
    if (cls.indexOf(openClassName) !== -1) {
      pageHeader.classList.remove(openClassName)
    } else {
      pageHeader.classList.add(openClassName)
    }
  })
})

var testimonialsSlider = new Swiper('.o-testimonials__slider-container', {
  slidesPerGroup: 3,
  slidesPerView: 3,
  spaceBetween: 28.5,
  wrapperClass: 'o-testimonials__slider-wrapper',
  slideClass: 'o-testimonials__slider-item',
  slideActiveClass: 'o-testimonials__slider-item--slide-active',
  pagination: {
    el: '.o-testimonials__slider-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

console.log(testimonialsSlider);



var checkboxs = document.querySelectorAll('.c-checkbox');
checkboxs.forEach(function (checkbox) {
  var input = checkbox.querySelector('.c-checkbox__input');
  input.addEventListener('click', function () {
    checkbox.classList.forEach(function (cls) {
      if (cls.indexOf("is-checked") !== -1) {
        checkbox.classList.remove('is-checked');
      } else {
        checkbox.classList.add('is-checked');
      }
    });
  });
});


var faqItems = document.querySelectorAll('.c-faq')

if (faqItems.length) {
  faqItems.forEach(faqItem => {
    var isOpen = 0
    var toggleBtn = faqItem.querySelector('.c-faq__toggle')
    var faqAns = faqItem.querySelector('.c-faq__ans')
    var faqAnsText = faqItem.querySelector('.c-faq__ans-text')

    toggleBtn.addEventListener('click', () => {

      faqItem.classList.forEach(cls => {
        if (cls.indexOf(`is-active`) !== -1) {
          faqItem.classList.remove('is-active')
          faqAns.style.height = `0px`
          isOpen = 0
        } else {
          if (isOpen == 0) {
            faqItem.classList.add('is-active')
            faqAns.style.height = `${faqAnsText.offsetHeight}px`
            isOpen = !0
          } else {
            faqItem.classList.remove('is-active')
            faqAns.style.height = `0px`
            isOpen = 0
          }
        }
      })
    })
  })
}


var navbar = document.querySelector('.c-navbar')
var onScroll = () => {
  var scroll = document.documentElement.scrollTop

  if (scroll > 0) {
    navbar.classList.add("is-scrolled");
  } else {
    navbar.classList.remove("is-scrolled")
  }
}

window.addEventListener('scroll', onScroll)



const roomInputs = document.querySelectorAll('.c-input--package')
if (roomInputs) {
  roomInputs.forEach((roomInput, i) => {

    const inputDropdown = document.querySelectorAll(
      '.c-input__dropdown')

    if (inputDropdown) {
      let blurEvent = 1
      const inputDropdownItems = inputDropdown[i].querySelectorAll(
        '.c-input__dropdown-item')

      roomInput.addEventListener('focus', () => {
        inputDropdown[i].classList.add('is-active')
      })

      inputDropdownItems.forEach(inputDropdownItem => {
        inputDropdownItem.addEventListener('click', () => {
          inputDropdown[i].classList.remove('is-active')
          roomInput.value = inputDropdownItem.dataset.value
        })
      })

      inputDropdown[i].addEventListener('mouseenter', () => {
        blurEvent = 0

      })

      inputDropdown[i].addEventListener('mouseleave', () => {
        blurEvent = 1
      })

      roomInput.addEventListener('blur', () => {
        if (blurEvent)
          inputDropdown[i].classList.remove('is-active')
      })
    }
  })
}