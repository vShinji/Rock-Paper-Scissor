const gameContainer = document.querySelector(".container"),
      userResult = document.querySelector(".user-result img"),
      cpuResult = document.querySelector(".cpu-result img"),
      result = document.querySelector(".result"),
      optionImages = document.querySelectorAll(".option-image");


// Loop through each opt img
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    let randomQuestion = Math.floor(Math.random() * 4);
    let questionImg = ["images/player-question.jpg", "images/cpu-question.jpg", "images/eminem-question.jpg", "images/cat-question.jpg"];

    userResult.src = cpuResult.src = questionImg[randomQuestion];

    result.textContent = "Wait...";


    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {

      gameContainer.classList.remove("start");

      let imgSrc = e.target.querySelector("img").src;
      userResult.src = imgSrc;

      let randomNumber = Math.floor(Math.random() * 3);

      let cpuImage = ["images/the-rock.gif", "images/the-paper.jpg", "images/the-scissor.jpg"];
      cpuResult.src = cpuImage[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let results = {
        RR: "Draw",
        PP: "Draw",
        SS: "Draw",
        RP: "Cpu",
        RS: "User",
        PR: "User",
        PS: "Cpu",
        SR: "Cpu",
        SP: "User",
      };

      let resultValues = results[userValue + cpuValue];

      result.textContent = userValue === cpuValue ? "Match Draw" : `${resultValues} Won!`
    },2500)

  });
});
