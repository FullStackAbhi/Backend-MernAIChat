import { getCardHTML, getRow, description } from "./markup.js";

export const renderUser = (userid) => {
  const containerDiv = document.getElementById("users-wrapper");
  containerDiv.classList.toggle("hide");

  const detailedWrapperdiv = document.getElementById("userdetails-wrapper");
  detailedWrapperdiv.classList.toggle("hide");

  detailedWrapperdiv.querySelector(".row > .col:first-child").innerHTML =
    `<button class="btn btn-outline-danger back-btn">
            <i class="bi bi-arrow-left-circle"></i>
            <span>Go Back</span>
          </button>` + getCardHTML(userid.avatar_url, userid.login);

  detailedWrapperdiv.querySelector(".row > .col:last-child").innerHTML =
    description(userid);

  let bckBtn = detailedWrapperdiv.querySelector("button.back-btn");
  bckBtn.onclick = () => {
    containerDiv.classList.toggle("hide");
    detailedWrapperdiv.classList.toggle("hide");
  };
};
