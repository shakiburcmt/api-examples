const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    // console.log(user)
    const usersContainer = document.getElementById('users-container');
    for (const user of users) {
        // ekhane console log kora hoyeche jeno dekha jay array ba object er moddhe ki type er data ache, tahole easily pick kora jay
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h3>User Email - ${user.name.first + ' ' + user.name.last}</h3>
            <p>User Gender: ${user.gender}</p>
            <p>Location: ${user.location.country}</p>
        `
        usersContainer.appendChild(userDiv);
    }
}
loadUsers();