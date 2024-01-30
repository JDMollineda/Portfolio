const about = document.querySelector("#about");
const years = document.querySelector(".years");
const clients = document.querySelector(".clients");
const projects = document.querySelector(".projects");

function Experience() {
  let testing = 0;
  if (testing < 10) {
    let interval = setInterval(() => {
      testing < 10 ? testing++ : clearInterval(interval);
      years.textContent = testing + "+";
    }, 10);
  }
  if (testing < 240) {
    let interval = setInterval(() => {
      testing < 242 ? testing++ : clearInterval(interval);
      clients.textContent = testing + "+";
    }, 45);
  }
  if (testing < 429) {
    let interval = setInterval(() => {
      testing < 629 ? testing++ : clearInterval(interval);
      projects.textContent = testing + "+";
    }, 35);
  }
}
about.addEventListener("mouseover", Experience());
removeEventListener("mouseover", about);


