import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "blipblop PHP",
    description: "Egy stabil videómegosztó oldal egyetemi projekt keretében.",
    image: "/projects/php_blipblop.png",
    tags: ["PHP", "Oracle Database", "Javascript"],
    demoUrl: "https://drive.google.com/file/d/1y03aT2LkchIbu-pPxtZD9gK7qpr2XLvt/view?t=39",
    githubUrl: "https://github.com/markoo37/blipblop",
  },
  {
    id: 2,
    title: "blipblop TypeScript Jamstack",
    description:
      "A videómegosztó oldal modernebb technológiákkal.",
    image: "/projects/ts_blipblop.png",
    tags: ["TypeScript",  "Next.js", "Supabase", "Tailwind CSS"],
    demoUrl: "https://drive.google.com/file/d/1Q-4KQ1VX34PzIWHQYTlAcvt6qPpas6lG/view",
    githubUrl: "https://github.com/markoo37/blipblop_typeScriptJamstack",
  },
  {
    id: 3,
    title: "Számkitatlálós játék",
    description:
      "A felhasználók virtuális pénnzel fogadhatnak egy számra (1-9).",
    image: "/projects/luckynumbergame.png",
    tags: ["WinForm C#",  "Node.js", "Javascript", "MySQL"],
    demoUrl: "https://drive.google.com/file/d/1Pn3ax78I7-Eavv3NM4Df-u4yp3FgJIrN/view?t=39",
    githubUrl: "https://github.com/markoo37/luckynumber",
  },
  {
    id: 4,
    title: "SplashScore",
    description:
      "Vízilabda bajnoksághoz információs alkalmazás. Eredmények, cikkek, tabella, top-listák.",
    image: "/projects/splashscore.png",
    tags: ["Java",  "Android Studio", "Firebase"],
    demoUrl: "https://drive.google.com/file/d/168BBzyLIm-MTdEaaiYb_obbtmGMZtu3g/view",
    githubUrl: "https://github.com/markoo37/SplashScore",
  },
  {
    id: 5,
    title: "WeatherAPP",
    description:
      "Időjárás lekérdező app a világ városaiból API segítségével.",
    image: "/projects/weatherapp.png",
    tags: ["C#",  "WPF", "weatherapi.com"],
    demoUrl: "",
    githubUrl: "https://github.com/markoo37/WeatherAPP_u4ufuk",
  },
  {
    id: 6,
    title: "Edzői mini CRM ",
    description:
      "Fejlsztés alatt. Edzőknek vagy oktatóknak nyilvántartás, jelenlét, teljesítménykövetés.",
    image: "/projects/under-construction.png",
    tags: ["Ruby on Rails", "PostgreSQL", "Devise", "Turbo (Hotwire)", "Tailwind CSS", "Chartkick.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Kiemelt Projektjeim<span className="text-primary">.</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Itt van néhány friss projektem. Ezeknél a projekteknél figyelembe veszem a felhasználói élményt, az intuitív megjelenéseket, és különböző biztonsági tényezőket.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/markoo37"
          >
            Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};