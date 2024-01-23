// Selectors

let container = document.querySelector("#container");

// Logic

fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((data) => displayUsers(data.users));

function displayUsers(users) {
  users.forEach((u) => {
    let html = `
    <div class="user col-4">

        <img src="${u.image}">

        <h1 class="text-center">${u.firstName}</h1>
        <h2 class="text-center">${u.lastName}</h2>
        <p><span class="bold-text">Username:</span> ${u.username}</p>
        <p><span class="bold-text">Email:</span> ${u.email}</p>
    </div>
    `;

    container.innerHTML += html;
  });
}
