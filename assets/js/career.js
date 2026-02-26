function filterJobs() {

  const city = document.getElementById("city").value.toLowerCase().trim();
  const keyword = document.getElementById("keyword").value.toLowerCase().trim();

  document.querySelectorAll(".job-card").forEach(card => {

    const jobCity = card.dataset.city.toLowerCase().trim();
    const jobTitle = card.dataset.title.toLowerCase().trim();

    const cityMatch =
      city === "" || jobCity === city;   // exact match

    const keywordMatch =
      keyword === "" || jobTitle.includes(keyword);

    if (cityMatch && keywordMatch) {
      card.style.display = "grid";
    } else {
      card.style.display = "none";
    }

  });
}
function openApply(job){
  document.getElementById("jobName").value = job;
  document.getElementById("applyModal").style.display="flex";
}

function closeApply(){
  document.getElementById("applyModal").style.display="none";
}

// experience select

function redirectToJob(button, role) {

  const card = button.closest('.job-card');
  const experience = card.querySelector('.experience-select').value;

  if (!experience) {
    alert("Please select experience level.");
    return;
  }

  const url = role + "-" + experience + ".html";

  window.location.href = url;
}



// form exp selection for individual page
document.addEventListener("DOMContentLoaded", function() {

  // Get page filename
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf("/") + 1);

  // Remove .html
  const clean = file.replace(".html", "");

  // Split by dash
  const parts = clean.split("-");

  const role = parts[0];
  const level = parts[1];

  document.getElementById("jobInput").value = role;
  document.getElementById("experienceInput").value = level;

});