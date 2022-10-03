const rules = document.querySelector(".rules")
const close = document.querySelector(".close")
const img = document.querySelector(".images")
const choosen = document.querySelector(".choosen")

const img_sel = {
  rock: "./images/icon-rock.svg",
  paper: "./images/icon-paper.svg",
  scissors: "./images/icon-scissors.svg",
};

let SCORE = 0;



rules.addEventListener("click",() => {
    document.querySelector(".secret").style.display = "inline";
})

close.addEventListener("click",() => {
    document.querySelector(".secret").style.display = "none";
})


img.addEventListener("click",(e)=> {
    img.style.display ="none"
    choosen.style.display ="inline"
  
    if (
      e.target.classList != "paper" &&
      e.target.classList != "scissors" &&
      e.target.classList != "rock"
    ) {
      img.style.display = "inline";
      choosen.style.display = "none";
    }
    if(e.target.classList =="paper"){
        document.querySelector(
          ".selected_img"
        ).innerHTML = `<img class="paper" src="./images/icon-paper.svg" alt="">`;
    }
    if(e.target.classList =="scissors"){
        document.querySelector(
          ".selected_img"
        ).innerHTML = `<img class="scissors" src="./images/icon-scissors.svg" alt="">`;
    }
    if(e.target.classList =="rock"){
        document.querySelector(
          ".selected_img"
        ).innerHTML = ` <img class="rock" src="./images/icon-rock.svg" alt="">`;
    }
    // setTimeout(pc, 1000);
    pc()
    
    
})

const pc = (left) => {
    let img_sel = ["paper","scissors","rock" ];
    // let img_sel = [
    //   `<img class="paper" src="./images/icon-paper.svg" alt="">`,
    //   `<img class="scissors" src="./images/icon-scissors.svg" alt="">`,
    //   ` <img class="rock" src="./images/icon-rock.svg" alt="">`,
    // ];
     let right = img_sel[Math.round(Math.random() * 2)];
    document.querySelector(".space").innerHTML = `img_sel[right]`;
    result(left, right);
    
}
const result = (left,right) => {
if (left == "paper" && right == "scissors") {
  setDecision("YOU LOSE!");
}
if (left == "paper" && right == "rock") {
  setDecision("YOU WIN!");
  setScore(SCORE + 1);
}
if (left == "paper" && right == "paper") {
  setDecision("It's a tie!");
}
if (left == "rock" && right == "scissors") {
  setDecision("YOU WIN!");
  setScore(SCORE + 1);
}
if (left == "rock" && right == "paper") {
  setDecision("YOU LOSE!");
}
if (left == "rock" && right == "rock") {
  setDecision("It's a tie!");
}
if (left == "scissors" && right == "scissors") {
  setDecision("It's a tie!");
}
if (left == "scissors" && right == "rock") {
  setDecision("YOU LOSE!");
}
if (left == "scissors" && right == "paper") {
  setDecision("YOU WIN!");
  setScore(SCORE + 1);
}
}

const setDecision = (decision) => {
    console.log("dfdsf");
  document.querySelector(".result h1").innerText = decision;
};

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score span").innerText = newScore;
};

const restart = () => {
  let contest = document.querySelector(".choosen");
  contest.style.display = "none";

  let hands = document.querySelector(".images");
  hands.style.display = "flex";
};