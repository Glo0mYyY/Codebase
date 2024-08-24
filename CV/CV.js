document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    { skill: "HTML", level: 10 },
    { skill: "CSS", level: 5 },
    { skill: "Java Script", level: 1 },
    { skill: "PowerShell", level: 100 },
  ];

  const skillsContainer = document.getElementById("skills-container");

  skills.forEach(function (skill) {
    const skillDiv = document.createElement("div");
    skillDiv.innerHTML = `
      <span class="skill-label">${skill.skill}</span>
      <div class="skill-bar">
        <div class="skill-level" style="width: ${skill.level}%"></div>
      </div>
    `;

    skillsContainer.appendChild(skillDiv);
  });
});
