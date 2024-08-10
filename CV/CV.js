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
    skillDiv.className = "skill";

    const skillLabel = document.createElement("span");
    skillLabel.innerText = skill.skill;
    skillLabel.className = "skill-label";
    skillDiv.appendChild(skillLabel);

    const skillBar = document.createElement("div");
    skillBar.className = "skill-bar";

    const skillLevel = document.createElement("div");
    skillLevel.className = "skill-level";
    skillLevel.style.width = skill.level + "%";

    skillBar.appendChild(skillLevel);
    skillDiv.appendChild(skillBar);

    skillsContainer.appendChild(skillDiv);
  });
});
