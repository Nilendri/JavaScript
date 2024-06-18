function displayAll() {
  const input = document.getElementById("search").value;
  const output = document.getElementById("display-profile");
  if (input) {
    fetch(`https://api.github.com/users/${input}`)
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`User not found: ${response.status}`);
        }
        return response.json();
      })
      .then(function (data) {
        output.innerHTML = `
                    <div class="output">
                    <p>Name:${data.login}</p>
                    <img src="${data.avatar_url}" alt=""/>
                    <p>Followers:${data.followers}</p>
                    </div>
                    `;
      })
      .catch(function (er) {
        output.innerHTML=`something wrong`;
      });
  } else {
    output.innerHTML = "please enter something";
  }
}
