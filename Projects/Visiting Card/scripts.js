document
  .getElementById("detailsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const imageUrl = document.getElementById("image").value;

    document.getElementById("cardName").innerText = `Name: ${name}`;
    document.getElementById("cardAddress").innerText = `Address: ${address}`;
    document.getElementById("cardEmail").innerText = `Email: ${email}`;
    document.getElementById("cardImage").src = imageUrl;
  });
