// This function loads pokemon data from the Pokemon API
function fetchChuckJSON() {

    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
        .then(response => { // DIFFERENT FROM FETCH: response.data instead of response.json()
            {
                console.log('data decoded from JSON:', response.data);
                // Build a block of HTML
                const chuckHtml = `
                <img src = "${response.data.icon_url}"/>
                <p><strong>${response.data.value}</strong></p>
                `;
                document.querySelector('#chuck-norris').innerHTML = chuckHtml;
            }
        });
        
}
document.getElementById("myBtn").addEventListener("click", function () {
    fetchChuckJSON();
});


fetchChuckJSON();