import {fetchMenu , autoMenu} from "./menu"
import getHtml from './home'
import contactPage from "./contact"
import aboutPage from "./about" 
console.log('Running.......');



let home , menu ,contact , about , main;
class AddQueryOrListener{
 constructor(element,DomElement){
     this.element = element;
     this.domEl = DomElement;
 }
 getQuery(){
    return this.element = document.querySelector(this.domEl); 
 }
}

let homeBtn = new AddQueryOrListener(home,"#home").getQuery()
let menuBtn = new AddQueryOrListener(menu,"#menu").getQuery()
let contactBtn = new AddQueryOrListener(contact,"#contact").getQuery()
let aboutBtn = new AddQueryOrListener(about,"#about").getQuery();
let mainSection = new AddQueryOrListener(main,"#main").getQuery();
window.addEventListener('DOMContentLoaded',()=>{
        getHtml(mainSection)
})
 
homeBtn.addEventListener('click',()=> {
    getHtml(mainSection)
    // console.log(e)
})
menuBtn.addEventListener('click',(e)=> {
    fetchMenu(mainSection);
})
contactBtn.addEventListener('click',()=> {
contactPage().fetchContactPage(mainSection)
})
aboutBtn.addEventListener('click',()=> {
aboutPage().appendAboutPAge(mainSection);
})
console.log(autoMenu(mainSection))