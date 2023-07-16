import array from "../../data.json" assert {type: "json"};
const ul = document.querySelector("ul");
array.map((catagory) => {
    const li = document.createElement("li");
    li.classList.add(`${catagory.category}`);
    const mainInfo = document.createElement("div");
    mainInfo.className = "main-info";
    const icon = document.createElement("span");
    icon.className = "icon";
    const image = document.createElement("img");
    const catagoryName = document.createElement("span");
    catagoryName.className = "catagory";
    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";
    const score = document.createElement("span");
    score.className = "score";
    //##############
    image.src = catagory.icon;
    image.alt = `${catagory.category}-img`;
    icon.appendChild(image);
    //##############
    catagoryName.textContent = catagory.category;
    //##############
    mainInfo.appendChild(icon);
    icon.after(catagoryName);
    //##############
    //##############
    score.textContent = catagory.score;
    scoreContainer.appendChild(score);
    score.after(" / 100");
    //##############
    //##############
    li.appendChild(mainInfo);
    li.appendChild(scoreContainer);
    ul.appendChild(li);
});
