// ---- Footer year ----
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = new Date().getFullYear()

// ---- Nav: scroll-aware background ----
const nav = document.getElementById('nav')
if (nav) {
  const scrolledClasses = ['border-b', 'border-white/5', 'bg-[#08080f]/90', 'backdrop-blur-xl']
  const onScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add(...scrolledClasses)
      nav.classList.remove('bg-transparent')
    } else {
      nav.classList.remove(...scrolledClasses)
      nav.classList.add('bg-transparent')
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

// ---- Mobile menu toggle ----
const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const iconOpen = document.getElementById('icon-open')
const iconClose = document.getElementById('icon-close')

function closeMenu() {
  if (!mobileMenu) return
  mobileMenu.classList.add('hidden')
  iconOpen && iconOpen.classList.remove('hidden')
  iconClose && iconClose.classList.add('hidden')
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden')
    if (isHidden) {
      // open — use flex so the column layout shows
      mobileMenu.classList.remove('hidden')
      mobileMenu.classList.add('flex')
      iconOpen && iconOpen.classList.add('hidden')
      iconClose && iconClose.classList.remove('hidden')
    } else {
      mobileMenu.classList.add('hidden')
      mobileMenu.classList.remove('flex')
      iconOpen && iconOpen.classList.remove('hidden')
      iconClose && iconClose.classList.add('hidden')
    }
  })
  mobileMenu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
      mobileMenu.classList.remove('flex')
      iconOpen && iconOpen.classList.remove('hidden')
      iconClose && iconClose.classList.add('hidden')
    })
  )
}

// ---- FAQ accordion ----
document.querySelectorAll('[data-faq]').forEach((item) => {
  const btn = item.querySelector('[data-faq-btn]')
  const panel = item.querySelector('[data-faq-panel]')
  const chev = item.querySelector('[data-faq-chev]')
  if (!btn || !panel) return
  btn.addEventListener('click', () => {
    const willOpen = panel.classList.contains('hidden')
    // close all
    document.querySelectorAll('[data-faq-panel]').forEach((p) => p.classList.add('hidden'))
    document.querySelectorAll('[data-faq-chev]').forEach((c) => c.classList.remove('rotate-180'))
    document.querySelectorAll('[data-faq-btn]').forEach((b) => b.setAttribute('aria-expanded', 'false'))
    if (willOpen) {
      panel.classList.remove('hidden')
      chev && chev.classList.add('rotate-180')
      btn.setAttribute('aria-expanded', 'true')
    }
  })
})

// ---- Checkout form: show success state on submit ----
const checkoutForm = document.getElementById('checkout-form')
if (checkoutForm) {
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const content = document.getElementById('checkout-content')
    const success = document.getElementById('checkout-success')
    if (content) content.classList.add('hidden')
    if (success) success.classList.remove('hidden')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
