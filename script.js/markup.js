export const getCardHTML = (
  imgSrc,
  userId,
  description = "Description about User"
) => {
  return `<div class="card" style="width: 12rem">
            <img src="${imgSrc}" class="card-img-top" alt="user img" />
            <div class="card-body">
              <h5 class="card-title">${userId}</h5>
              <p class="card-text">
                To see full description about the user press the button below
              </p>
              <button  class="btn btn-primary" data-userid="${userId}">View Details</button>
            </div>
          </div>`;
};

export const getRow = () => {
  const div = document.createElement("div");
  div.classList.add("row");
  return div;
};

export const description = (singleuser) => {
  return `<ul> <b>User description</b>
      <li>Username : ${singleuser.name}</li>
      <li>Public gists : ${singleuser.public_gists}</li>
      <li>Public repos : ${singleuser.public_repos}</li>
      <li>User hireable : ${singleuser.hireable}</li>
      <li>Id created at : ${singleuser.updated_at}</li>
      <li>Id updated at : ${singleuser.created_at}</li>
      <li>Id updated at : ${singleuser.company}</li>
      <li>User email : ${singleuser.email}</li>
      <li>bio : ${singleuser.bio}</li>
      </ul>`;
};
