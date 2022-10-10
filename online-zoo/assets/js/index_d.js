    const button_donate = document.querySelector(".button_donate")
    const email_submit = document.querySelector(".email_submit")
    const input_range = document.querySelector(".range_input")
    const pay_amount = document.querySelector(".pay_amount")
    let range = document.querySelectorAll(".range")

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

    if (window.innerWidth <= 980) {
      input_range.max = 5
      range[0].remove()
      range[1].remove()
      range[2].remove()
      range = document.querySelectorAll(".range")
    } else if (window.innerWidth <= 1000) {
      input_range.max = 8
      input_range.value = 2
      range[0].remove()
      range = document.querySelectorAll(".range")
    }

    pay_amount.addEventListener("input", () => {
      setActive()

      if (pay_amount.value.length > 4) {
        pay_amount.value = pay_amount.value.slice(0, 4)
      }

      for (const order in range)
        if (typeof range[order] === "object") {
          if (range[order].textContent.replace("$", "") == pay_amount.value) {
            const new_order = +order + 1
            input_range.value = new_order
            setActive(new_order)
            return
          }
        }
    })

      input_range.addEventListener("change", () => {
      setActive(input_range.value)
    })

    for (const order in range)
      if (typeof range[order] === "object")
        range[order].addEventListener("click", () => {
          const range = +order + 1
          input_range.value = range
          setActive(range)
        })

    function setActive(amt = false) {
      for (const item of range) item.classList.remove("donation_progress_current")

      if (amt) {
        range[amt - 1].classList.add("donation_progress_current")

        const current_amount = range[amt - 1].textContent.replace("$", "")
        pay_amount.value = current_amount
      }
    }

    const defalt_range = input_range.max - 2
    setActive(defalt_range)
    input_range.value = defalt_range

    button_donate.addEventListener("click", () => {
      window.location = "index_d.html"
    })
    email_submit.addEventListener("submit", () => {
      const email = document.querySelector("email_value")
      if (!email.checkValidity()) email.focus()
    })




