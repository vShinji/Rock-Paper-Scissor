const gameContainer = document.querySelector(".container"),
      userResult = document.querySelector(".user-result img"),
      cpuResult = document.querySelector(".cpu-result img"),
      result = document.querySelector(".result"),
      optionImages = document.querySelectorAll(".opt-img");

// Loop through each opt img
optionImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    image.classList.add("active");

    optionImages.forEach((img, index2) => {
      console.log(index, index2);
    })
  })
})
