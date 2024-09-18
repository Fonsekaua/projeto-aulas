
const toggle = (event,classe) => {
    event.classList.toggle(classe)
}
const title = document.querySelector("#title").addEventListener("click",()=>{
    const left = document.querySelector("#left");
   toggle(left,"leftOpacityZero")
})
const itens = document.querySelector("#itens")
const itensArray = Array.from(itens.children);
itensArray.forEach((itens)=>{

})