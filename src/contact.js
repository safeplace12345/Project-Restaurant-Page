import helper from "./helpers"
const URL = "/partials/contact.html"
async function fetchContactPage(element) {
       const response = helper().fetchData(URL)
       appendContactPage(await response,element);
}
const appendContactPage = (res,element) => {
    element.innerHTML = '';
    return element.insertAdjacentHTML('beforeend', res);
}

export default function contactPage() {
    return {
        fetchContactPage,
     }
}