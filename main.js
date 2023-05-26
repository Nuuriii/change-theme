const select = document.querySelector("#theme");
const html = document.querySelector("html");

select.addEventListener("change", () => {
   const choice = select.value;

   //Add Switch Statement in Here
   switch (choice) {
      case "white":
         update("white", "black");
         break;
      case "black":
         update("black", "white");
         break;
      case "yellow":
         update("yellow", "black");
         break;
      case "purple":
         update("purple", "white");
         break;
      case "green":
         update("green", "white");
   }
});

function update(bgColor, textColor) {
   html.style.backgroundColor = bgColor;
   html.style.color = textColor;
}
