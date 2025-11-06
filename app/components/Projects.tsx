import Image from "next/image";

type ProjectMedia =
  | { type: "icon"; name: string }
  | { type: "image"; src: string; alt: string };

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  media: ProjectMedia;
  codeUrl: string;
  presentationUrl: string;
};

const projects: Project[] = [
    {
        title: "Social Media & Network Analysis of Russia-Ukraine War",
        category: "Data Engineering & Analytics",
        description:
            "End-to-end pipeline that gathers YouTube and Reddit data via public APIs, cleans and enriches the datasets, and runs network analytics to study information flows around the Russia-Ukraine war.",
        tags: [
            "Python",
            "Jupyter",
            "YouTube API",
            "Reddit API",
            "Network Analysis",
            "Data Engineering",
        ],
        media: {
            type: "image",
            src: "/RussiaUkraineWar.jpg",
            alt: "Network graph visual for Russia-Ukraine information flows",
        },
        codeUrl: "https://github.com/mayankkantharia/Social-Media-A2",
        presentationUrl:
            "https://www.canva.com/design/DAGpRvWhgBA/LBbA9ui11CiYOPCiHlc6uA/view?utm_content=DAGpRvWhgBA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1d638ba156",
    },
    {
        title: "Few-Shot Hyperspectral Image Classification",
        category: "Deep Learning",
        description: "Implemented a prototypical network with attention mechanisms and temperature scaling to classify hyperspectral images in a few-shot learning setup, enabling accurate recognition with limited labeled data.",
        tags: ["Python", "PyTorch", "HSI", "Few-Shot Learning"],
        media: { type: "icon", name: "mdi-brain" },
        codeUrl:
            "https://github.com/mayankkantharia/HSI-Few-Shot-Prototypical-Network",
        presentationUrl:
            "https://www.canva.com/design/DAFKl8v9FWY/QWfiTHsmM5fivNiZ58Stzg/view?utm_content=DAFKl8v9FWY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9048a6012d",
    },
];

const Projects = () => {
  return (
    <section id="projects" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my work, from deep learning models to full-stack
            applications.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full"
            >
              <div
                className={`relative h-60 flex items-center justify-center overflow-hidden ${
                  project.media.type === "icon"
                    ? "bg-linear-to-r from-primary/20 to-secondary/20"
                    : "bg-dark"
                }`}
              >
                {project.media.type === "image" ? (
                  <Image
                    src={project.media.src}
                    alt={project.media.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <i
                    className={`mdi ${project.media.name} text-8xl text-primary`}
                  ></i>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-300">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                      <i className="mdi mdi-shape-outline text-primary-light"></i>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-gray-400 text-sm text-justify">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-dark-light px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-6">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light text-sm flex items-center"
                  >
                    <i className="mdi mdi-github mr-1"></i> View Code
                  </a>
                  <a
                    href={project.presentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light text-sm flex items-center"
                  >
                    <i className="mdi mdi-monitor-account mr-1"></i>{" "}
                    Presentation
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-12">
                    <a href="#" className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg font-medium transition duration-300">
                        <span>View All Projects</span>
                        <i className="mdi mdi-arrow-right ml-2"></i>
                    </a>
                </div> */}
      </div>
    </section>
  );
};

export default Projects;
