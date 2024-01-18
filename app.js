const gameContainer = document.querySelector(".container"),
      userResult = document.querySelector(".user_result img"),
      cpuResult = document.querySelector(".cpu_result img"),
      result = document.querySelector(".result"),
      optionImages = document.querySelectorAll(".option_image");


// Loop through each opt img
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    let imgSrc = e.target.querySelector("img").src;
    userResult.src = imgSrc;
  });
});
