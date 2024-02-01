fetch("https://random-data-api.com/api/users/random_user")
.then(data => data.json())
.then(userData => {
    const name = userData.username;
    const image = userData.avatar;
    const nameElement = document.getElementById('name');
    const imgElement = document.getElementById('image');

    nameElement.innerHTML = name;
    imgElement.src = image
})

