 async function fetchData(url){
   const res = await fetch(url);
   const resText = await res.text();
   return resText;
}
const autoLoad = (element, hash, fn) => {
    element.innerHTML = '';
    console.log(window.document.location.hash)
    if (window.document.location.hash === `#${hash}`)
        {return fn(element);
        }
        else console.log("erroooooooorrrrr")
        
}

export default function helper(){
    return{
        fetchData,
        autoLoad
    }
}