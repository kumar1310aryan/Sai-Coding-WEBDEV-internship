const headingInput = document.getElementById('heading');
const mobileInput = document.getElementById('mobile');
const whatsappInput = document.getElementById('whatsapp');
const nameInput = document.getElementById('name');
const addressInput = document.getElementById('address');
const emailInput = document.getElementById('email');
const facebookInput = document.getElementById('facebook');
const instagramInput = document.getElementById('instagram');
const youtubeInput = document.getElementById('youtube');
const linkedinInput = document.getElementById('linkedin');
const twitterInput = document.getElementById('twitter');
const imageInput = document.getElementById('image');
const backgroundInput = document.getElementById('background');

const headingDisplay = document.querySelector('.heading h1');
const nameDisplay = document.querySelector('.name');
const addressDisplay = document.querySelector('.add');
const emailDisplay = document.querySelector('.email');
const phoneDisplay = document.querySelector('.phoneNumber');
const whatsappDisplay = document.querySelector('.whatsappNumber');
const contactImage = document.querySelector('.contact img');
const card = document.querySelector('.card');

const socialLinks = {
  facebook: document.querySelector('.social-icons a:nth-child(1)'),
  instagram: document.querySelector('.social-icons a:nth-child(2)'),
  linkedin: document.querySelector('.social-icons a:nth-child(3)'),
  telegram: document.querySelector('.social-icons a:nth-child(4)'),
  twitter: document.querySelector('.social-icons a:nth-child(5)'),
};

headingInput.addEventListener('input', function() {
  headingDisplay.textContent = headingInput.value;
});

mobileInput.addEventListener('input', function() {
  phoneDisplay.textContent = mobileInput.value;
});

whatsappInput.addEventListener('input', function() {
  whatsappDisplay.textContent = whatsappInput.value;
});

nameInput.addEventListener('input', function() {
  nameDisplay.textContent = nameInput.value;
});

addressInput.addEventListener('input', function() {
  addressDisplay.textContent = addressInput.value;
});

emailInput.addEventListener('input', function() {
  emailDisplay.textContent = emailInput.value;
});

facebookInput.addEventListener('input', function() {
  socialLinks.facebook.href = facebookInput.value;
});

instagramInput.addEventListener('input', function() {
  socialLinks.instagram.href = instagramInput.value;
});

youtubeInput.addEventListener('input', function() {
  socialLinks.youtube.href = youtubeInput.value;
});

linkedinInput.addEventListener('input', function() {
  socialLinks.linkedin.href = linkedinInput.value;
});

twitterInput.addEventListener('input', function() {
  socialLinks.twitter.href = twitterInput.value;
});

imageInput.addEventListener('change', function() {
  const file = imageInput.files[0];
  const reader = new FileReader();
  reader.onloadend = function() {
    contactImage.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  }
});

backgroundInput.addEventListener('change', function() {
  const file = backgroundInput.files[0];
  const reader = new FileReader();
  reader.onloadend = function() {
    card.style.backgroundImage = `url(${reader.result})`;
  };
  if (file) {
    reader.readAsDataURL(file);
  }
});
