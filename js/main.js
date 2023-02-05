// window.alert('Hello')
let menu = document.querySelector(".kasper-page .kasper .links i");
let ul = document.querySelector(".kasper-page .kasper .links ul");

menu.addEventListener("click", () => {
    console.log(ul.style.display)
    if(ul.style.display === "block"){
        ul.style.display = 'none';
        console.log(ul.style.display);
    }else{
        ul.style = 'display:block;';
        console.log(ul.style.display);
    }
})