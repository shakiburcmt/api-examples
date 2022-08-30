// now time to apply try catch
const loadUser = () => {
    const url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayUser(data.results[0]))
        .catch(error => console.log(error))
}

const loadUserAsync = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayUser(data.results[0])
    }
    catch (error) {
        console.log(error);
    }

}

const displayUser = user => {
    console.log(user)
}