import { fetchMenu, autoMenu } from './menu'
import getHtml from './home'
import contactPage from './contact'
import aboutPage from './about'
import helper from './helpers'
console.log('Running.......')

let home, menu, contact, about, main
class AddQueryOrListener {
  constructor (element, DomElement) {
    this.element = element
    this.domEl = DomElement
  }

  getQuery () {
    this.element = document.querySelector(this.domEl)
  }
}

const homeBtn = new AddQueryOrListener(home, '#home').getQuery()
const menuBtn = new AddQueryOrListener(menu, '#menu').getQuery()
const contactBtn = new AddQueryOrListener(contact, '#contact').getQuery()
const aboutBtn = new AddQueryOrListener(about, '#about').getQuery()
const mainSection = new AddQueryOrListener(main, '#main').getQuery()
window.addEventListener('DOMContentLoaded', () => {
  getHtml(mainSection)
})

homeBtn.addEventListener('click', () => {
  getHtml(mainSection)
  // console.log(e)
})
menuBtn.addEventListener('click', (e) => {
  fetchMenu(mainSection)
})

// My test is here on the contact button
// the url dosent have the contact word appended to it
contactBtn.addEventListener('click', () => {
  window.document.location.hash = 'contact'
  contactPage().fetchContactPage(mainSection)
  helper().autoLoad(mainSection, 'contact', contactPage().fetchContactPage)
})
aboutBtn.addEventListener('click', () => {
  aboutPage().appendAboutPAge(mainSection)
})
console.log(autoMenu(mainSection))
