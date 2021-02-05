import helper from "./helpers"
const URL = "/partials/about.html"

async function appendAboutPAge(element){
    element.innerHTML = ""
    const aboutPage = helper().fetchData(URL)
    element.insertAdjacentHTML('beforeend', await aboutPage);
}
export default function aboutPage() {
    return {
        appendAboutPAge
    }
}