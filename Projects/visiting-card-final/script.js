// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("detailsForm");

//   const cardName = document.getElementById("cardName");
//   const cardAddress = document.getElementById("cardAddress");
//   const cardEmail = document.getElementById("cardEmail");
//   const cardPhone1 = document.getElementById("cardPhone1");
//   const cardPhone2 = document.getElementById("cardPhone2");
//   const cardImage = document.getElementById("cardImage");
//   const facebookLink = document.getElementById("facebookLink");
//   const instagramLink = document.getElementById("instagramLink");
//   const linkedinLink = document.getElementById("linkedinLink");
//   const otherLink = document.getElementById("otherLink");

//   form.addEventListener("input", () => {
//     cardName.textContent = form.name.value;
//     cardAddress.textContent = form.address.value;
//     cardEmail.textContent = form.email.value;
//     cardPhone1.textContent = form.phone1.value;
//     cardPhone2.textContent = form.phone2.value;

//     if (form.facebook.value) {
//       facebookLink.href = form.facebook.value;
//     }

//     if (form.instagram.value) {
//       instagramLink.href = form.instagram.value;
//     }

//     if (form.linkedin.value) {
//       linkedinLink.href = form.linkedin.value;
//     }

//     if (form.other.value) {
//       otherLink.href = form.other.value;
//     }
//   });

//   form.image.addEventListener("change", (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       cardImage.src = reader.result;
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   });
// });
