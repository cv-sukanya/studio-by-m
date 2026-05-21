const input = document.querySelector("#phone");

const iti = window.intlTelInput(input, {
  separateDialCode: true,
  initialCountry: "auto",
  geoIpLookup: callback => {
    fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("in"));
  },
});
const phoneContainer = document.querySelector(".phone-inputs");

input.addEventListener("focus", () => {
  phoneContainer.classList.add("code-active");
});

input.addEventListener("blur", () => {
  if (!input.value) {
    phoneContainer.classList.remove("code-active");
  }
});

// function goNext() {
//   if (validateForm()) {
//     document.getElementById("step1").classList.remove("active");
//     document.getElementById("step2").classList.add("active");

//     const name = document.querySelector('[name="firstname"]').value;
//     document.getElementById("userName").innerText = name;
//   }
// }

function goNext() {
  const consent = document.getElementById("contactConsent");
  const consentWrapper = document.querySelector(".consent-wrapper");

  // reset error
  consentWrapper.classList.remove("error");

  // validate checkbox
  if (!consent.checked) {
    consentWrapper.classList.add("error");
    return;
  }

  // existing validation
  if (validateForm()) {
    document.getElementById("step1").classList.remove("active");
    document.getElementById("step2").classList.add("active");

    const name = document.querySelector('[name="firstname"]').value;
    document.getElementById("userName").innerText = name;
  }
}