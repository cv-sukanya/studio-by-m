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

