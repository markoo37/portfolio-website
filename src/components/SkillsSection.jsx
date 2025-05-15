import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 90, category: "Backend & Adatbázis" },
  { name: "Express", level: 70, category: "Backend & Adatbázis" },
  { name: "NoSQL", level: 70, category: "Backend & Adatbázis" },
  { name: "SQL", level: 90, category: "Backend & Adatbázis" },
  { name: "PL/SQL", level: 85, category: "Backend & Adatbázis" },

  //Programozasi nyelvek
  { name: "C#", level: 90, category: "Programozási nyelvek" },
  { name: "C++", level: 70, category: "Programozási nyelvek" },
  { name: "Java", level: 80, category: "Programozási nyelvek" },
  { name: "Python", level: 95, category: "Programozási nyelvek" },
  { name: "PHP", level: 95, category: "Programozási nyelvek" },
  { name: "Swift", level: 70, category: "Programozási nyelvek" },

  // Eszkozok
  { name: "Git/GitHub", level: 90, category: "eszközök" },
  { name: "Docker", level: 70, category: "eszközök" },
  { name: "VS Code", level: 95, category: "eszközök" },
  { name: "Pycharm", level: 95, category: "eszközök" },
  { name: "PhpStorm", level: 95, category: "eszközök" },
  { name: "IntelliJ IDEA", level: 90, category: "eszközök" },
  { name: "CLion", level: 70, category: "eszközök" },
];

const categories = ["összes", "frontend", "Backend & Adatbázis", "Programozási nyelvek", "eszközök"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("összes");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "összes" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Készségek<span className="text-primary">.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};