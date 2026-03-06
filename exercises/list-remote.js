document.addEventListener("DOMContentLoaded", () => {
  const dogBtn = document.getElementById("btn-dog");
  const dogImg = document.getElementById("dog-image");
  const usersGrid = document.getElementById("users-grid");

  // -------------------------
  // DOG API (works normally)
  // -------------------------
  async function fetchDog() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");

      if (!response.ok) {
        throw new Error(`Dog API error: ${response.status}`);
      }

      const data = await response.json();
      dogImg.src = data.message;
    } catch (error) {
      console.error(error);
      alert("Failed to load a dog image. Check console.");
    }
  }

  dogBtn.addEventListener("click", fetchDog);

  // ---------------------------------------
  // USERS API (JSONPlaceholder - no CORS)
  // ---------------------------------------
  async function fetchRemoteUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error(`Users API error: ${response.status}`);
      }

      const data = await response.json(); // data is an array
      displayUsers(data);
    } catch (error) {
      console.error(error);
      usersGrid.innerHTML = `<p style="color:red;">Failed to load users. Check console.</p>`;
    }
  }

  function displayUsers(usersArray) {
    // Safety check
    if (!Array.isArray(usersArray)) {
      console.error("Expected an array, got:", usersArray);
      return;
    }

    usersGrid.innerHTML = usersArray.map(user => `
      <div style="border:1px solid #ccc; padding:15px; text-align:center; width:220px;">
        <h3>${user.name}</h3>
        <p style="word-break:break-word;">${user.email}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
      </div>
    `).join("");
  }

  // Load users on page load
  fetchRemoteUsers();
});