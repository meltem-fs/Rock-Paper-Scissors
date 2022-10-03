const rules = document.querySelector(".rules")
const close = document.querySelector(".close")
const img = document.querySelector(".images")



rules.addEventListener("click",() => {
    document.querySelector(".secret").style.display = "inline";
})

close.addEventListener("click",() => {
    document.querySelector(".secret").style.display = "none";
})


img.addEventListener("click",(e)=> {
    
    console.log(e.target);
    if(e.target.classList =="paper"){
        document.querySelector(
          ".choosen"
        ).innerHTML = `<img class="paper" src="./images/icon-paper.svg" alt="">`;
    }
    if(e.target.classList =="scissors"){
        document.querySelector(
          ".choosen"
        ).innerHTML = `<img class="scissors" src="./images/icon-scissors.svg" alt="">`;
    }
    if(e.target.classList =="rock"){
        document.querySelector(
          ".choosen"
        ).innerHTML = ` <img class="rock" src="./images/icon-rock.svg" alt="">`;
    }
})