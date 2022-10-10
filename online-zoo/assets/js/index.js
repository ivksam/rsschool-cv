const Burger = {
  toggle(e) {
    const action =
      e.target.classList.contains("burger") ||
      e.target.classList.contains("burger_close") ||
      e.target.closest(".navigation_cont")

    if (action) {
      document.body.classList.toggle("burger_opened")
    }
  }
}
document.querySelector(".header").addEventListener("click", (e) => {
  Burger.toggle(e)
})

const Slider = {
  isAnimation: false,
  animationTO: null,
  goto(direction) {
    if (this.isAnimation) {
      return
    }
    const sliderAction = direction > 0 ? "append" : "prepend"
    const sliderWidth = document.querySelector(".pets_content").getBoundingClientRect().width + 5
    let slideOffset = sliderWidth * direction * -1

    clearTimeout(this.animationTO)
    this.isAnimation = true

    const nextSlides = this.crateSlides()

    const nextSlidesContainer = document.createElement("div")
    nextSlidesContainer.className = "pets_content"
    nextSlidesContainer.append(...nextSlides)

    document.querySelector(".slider")[sliderAction](nextSlidesContainer)
    const current_slide = document.querySelector(".pets_content")

    if (direction < 0) slideOffset *= -1

    current_slide.style.marginLeft = `${slideOffset}px`

    if (direction < 0)
      setTimeout(() => {
        current_slide.style.marginLeft = 0
      }, 0)

    this.animationTO = setTimeout(() => {
      this.isAnimation = false
      if (direction < 0) document.querySelectorAll(".pets_content")[1].remove()
      else current_slide.remove()
    }, 300)
  },

  crateSlides() {
    const newSlides = []
    const slides = document.querySelector(".pets_content").children
    for (const slide of slides) {
      newSlides.push(slide.cloneNode(true))
    }

    return newSlides
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }
}
document.querySelector(".arrow_next").addEventListener("click", () => {
  Slider.goto(-1)
})
document.querySelector(".arrow_prew").addEventListener("click", () => {
  Slider.goto(1)
})

const Carusel = {
  countRange() {
    const range = document.querySelector(".testimonials_range")
    range.max = window.innerWidth <= 1000 ? 10 : 9
  },

  goto(gapOrder) {
    const offset = (document.querySelector(".testimonials_item").getBoundingClientRect().width + 30) * gapOrder
    document.querySelector(".testimonials_item").style.marginLeft = `-${offset}px`
  }
}
document.querySelector(".testimonials_range").addEventListener("input", () => {
  Carusel.goto(document.querySelector(".testimonials_range").value)
})
document.querySelector(".testimonials_content").addEventListener("click", (e) => {
  Popup.show(e)
})
Carusel.countRange()
const Popup = {
  show(e) {
    const card = e.target.closest(".testimonials_item")
    if (card) {
      const content = document.querySelector(".popup_content")
      document.querySelector(".popup").classList.add("popup_show")
      content.innerHTML = ""
      content.append(card.cloneNode(true))
    }
  },

  close(e) {
    if (!e.target.classList.contains("popup_container")) {
      document.querySelector(".popup").classList.remove("popup_show")
    }
  }
}
document.querySelector(".popup").addEventListener("click", (e) => {
  Popup.close(e)
})
document.querySelector(".button_donate").addEventListener("click", () => {
  window.location = "index_d.html"
})

document.querySelector(".email_submit").addEventListener("submit", () => {
  const email = document.querySelector("email_value")
  if (!email.checkValidity()) email.focus()
})
