const skills = [
  { name: "js", color: "#efd81d", width: "95%" },
  { name: "react", color: "#5ed3f3", width: "80%" },
  { name: "sass", color: "#c76494", width: "90%" },
  { name: "html", color: "#dd4b25", width: "95%" },
  { name: "css", color: "#254bdd", width: "95%" },
  { name: "firebase", color: "#254bdd", width: "60%" },
  { name: "php", color: "#254bdd", width: "40%" },
];

const elSkills = document.querySelectorAll(".skill");
const objSkills = {};

elSkills.forEach((skill) => {
  const name = skill.classList[1];
  const barPercentage = skill.querySelector(".bar-percentage");

  objSkills[name] = {
    name,
    element: skill,
    barPercentage,
  };
});

const configSkills = () => {
  for (const firstKey in objSkills) {
    const { name, barPercentage } = objSkills[firstKey];

    for (const secondKey in skills) {
      const skill = skills[secondKey];
      const { color, width, name: nameSkill } = skill;
      if (name === nameSkill) {
        setTimeout(() => {
          barPercentage.style.background =
            "linear-gradient(90deg, rgba(255,255,255, 0.7), blue)";
          barPercentage.style.width = width;
        }, 1000);
      }
    }
  }
};

configSkills();
