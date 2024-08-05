document.addEventListener("DOMContentLoaded", function () {
  const updateCard = (id, value) => {
    if (id === "heading") {
      document.querySelector(".heading h1").textContent = value;
    } else if (id === "mobile") {
      document.querySelector(".phoneNumber").textContent = `+91 ${value}`;
    } else if (id === "whatsapp") {
      document.querySelector(".whatsappNumber").textContent = ` +91 ${value}`;
    } else if (id === "name") {
      document.querySelector(".name").textContent = value;
    } else if (id === "address") {
      document.querySelector(".add").textContent = value;
    } else if (id === "email") {
      document.querySelector(".email").textContent = value;
    } else if (id === "facebook") {
      document.querySelector(".social-icons a:nth-child(1)").href = value;
    } else if (id === "instagram") {
      document.querySelector(".social-icons a:nth-child(2)").href = value;
    } else if (id === "youtube") {
      document.querySelector(".social-icons a:nth-child(3)").href = value;
    } else if (id === "linkedin") {
      document.querySelector(".social-icons a:nth-child(4)").href = value;
    } else if (id === "twitter") {
      document.querySelector(".social-icons a:nth-child(5)").href = value;
    }
  };

  const inputs = [
    "heading",
    "mobile",
    "whatsapp",
    "name",
    "address",
    "email",
    "facebook",
    "instagram",
    "youtube",
    "linkedin",
    "twitter",
  ];

  inputs.forEach((id) => {
    document.getElementById(id).addEventListener("input", function () {
      updateCard(id, this.value);
    });
  });

  const imageInput = document.getElementById("image");
  const backgroundInput = document.getElementById("background");

  imageInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.querySelector(".info-img img").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  backgroundInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const cardBackground = document.querySelector(".card");
        cardBackground.style.backgroundImage = `url(${e.target.result})`;
        cardBackground.style.backgroundSize = "cover";
        cardBackground.style.backgroundPosition = "center";
      };
      reader.readAsDataURL(file);
    }
  });
});
