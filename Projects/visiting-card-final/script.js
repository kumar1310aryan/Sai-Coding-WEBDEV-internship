
  document.addEventListener("DOMContentLoaded", function() {
    // Load saved data from localStorage
    const loadSavedData = () => {
      const savedData = JSON.parse(localStorage.getItem("formData"));
      if (savedData) {
        document.getElementById("heading").value = savedData.heading || '';
        document.getElementById("mobile").value = savedData.mobile || '';
        document.getElementById("whatsapp").value = savedData.whatsapp || '';
        document.getElementById("name").value = savedData.name || '';
        document.getElementById("address").value = savedData.address || '';
        document.getElementById("email").value = savedData.email || '';
        document.getElementById("facebook").value = savedData.facebook || '';
        document.getElementById("instagram").value = savedData.instagram || '';
        document.getElementById("youtube").value = savedData.youtube || '';
        document.getElementById("linkedin").value = savedData.linkedin || '';
        document.getElementById("twitter").value = savedData.twitter || '';

        // Update the card with saved data
        document.querySelector(".heading h1").textContent = savedData.heading || 'This is the Heading';
        document.querySelector(".name").textContent = savedData.name || '';
        document.querySelector(".add").textContent = savedData.address || '';
        document.querySelector(".email").textContent = savedData.email || '';
        document.querySelector(".contact div:first-child").textContent = `+91 ${savedData.mobile || ''}`;
        document.querySelector(".contact div:nth-child(2)").textContent = `+91 ${savedData.whatsapp || ''}`;
        
        // Restore social media links
        document.querySelector(".social-icons a:nth-child(1)").href = savedData.facebook || '#';
        document.querySelector(".social-icons a:nth-child(2)").href = savedData.instagram || '#';
        document.querySelector(".social-icons a:nth-child(3)").href = savedData.youtube || '#';
        document.querySelector(".social-icons a:nth-child(4)").href = savedData.linkedin || '#';
        document.querySelector(".social-icons a:nth-child(5)").href = savedData.twitter || '#';

        // Restore images
        if (savedData.image) {
          document.querySelector(".info-img img").src = savedData.image;
        }
        if (savedData.background) {
          document.querySelector(".card").style.backgroundImage = `url(${savedData.background})`;
          document.querySelector(".card").style.backgroundSize = "cover";
          document.querySelector(".card").style.backgroundPosition = "center";
        }
      }
    };

    loadSavedData();

    const saveData = () => {
      const formData = {
        heading: document.getElementById("heading").value,
        mobile: document.getElementById("mobile").value,
        whatsapp: document.getElementById("whatsapp").value,
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value,
        facebook: document.getElementById("facebook").value,
        instagram: document.getElementById("instagram").value,
        youtube: document.getElementById("youtube").value,
        linkedin: document.getElementById("linkedin").value,
        twitter: document.getElementById("twitter").value,
        image: document.querySelector(".info-img img").src,
        background: document.querySelector(".card").style.backgroundImage.replace(/url\(["']?/, '').replace(/["']?\)/, '') || ''
      };
      localStorage.setItem("formData", JSON.stringify(formData));
    };

    const inputs = [
      "heading", "mobile", "whatsapp", "name", "address", "email",
      "facebook", "instagram", "youtube", "linkedin", "twitter"
    ];

    inputs.forEach(id => {
      document.getElementById(id).addEventListener("input", function() {
        saveData();
        // Update the card in real-time
        if (id === "heading") {
          document.querySelector(".heading h1").textContent = this.value;
        } else if (id === "mobile") {
          document.querySelector(".contact div:first-child").textContent = `+91 ${this.value}`;
        } else if (id === "whatsapp") {
          document.querySelector(".contact div:nth-child(2)").textContent = `+91 ${this.value}`;
        } else if (id === "name") {
          document.querySelector(".name").textContent = this.value;
        } else if (id === "address") {
          document.querySelector(".add").textContent = this.value;
        } else if (id === "email") {
          document.querySelector(".email").textContent = this.value;
        } else if (id === "facebook") {
          document.querySelector(".social-icons a:nth-child(1)").href = this.value;
        } else if (id === "instagram") {
          document.querySelector(".social-icons a:nth-child(2)").href = this.value;
        } else if (id === "youtube") {
          document.querySelector(".social-icons a:nth-child(3)").href = this.value;
        } else if (id === "linkedin") {
          document.querySelector(".social-icons a:nth-child(4)").href = this.value;
        } else if (id === "twitter") {
          document.querySelector(".social-icons a:nth-child(5)").href = this.value;
        }
      });
    });

    const imageInput = document.getElementById("image");
    const backgroundInput = document.getElementById("background");

    imageInput.addEventListener("change", function(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          document.querySelector(".info-img img").src = e.target.result;
          saveData(); // Save the new image to localStorage
        };
        reader.readAsDataURL(file);
      }
    });

    backgroundInput.addEventListener("change", function(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const cardBackground = document.querySelector(".card");
          cardBackground.style.backgroundImage = `url(${e.target.result})`;
          cardBackground.style.backgroundSize = "cover";
          cardBackground.style.backgroundPosition = "center";
          saveData(); // Save the new background to localStorage
        };
        reader.readAsDataURL(file);
      }
    });
  });

