import helper from "./helpers"
const URL = '/partials/home Assets/home.html'

export default async function getHtml(element){
    try{
        element.innerHTML = '';
       const response = helper().fetchData(URL)
       element.insertAdjacentHTML('beforeend',await  response)
       return response;
    }catch(err){
console.log('Error :', err)
    }
}

