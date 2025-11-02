const projects = [
    {
        title: "Brain Tumor Detection",
        category: "Deep Learning",
        description: "A 3D CNN model for detecting and classifying brain tumors from MRI scans with 96% accuracy.",
        tags: ["Python", "TensorFlow", "OpenCV"],
        icon: "mdi-brain",
        codeUrl: "#",
        demoUrl: "#",
    },
    {
        title: "Stock Prediction",
        category: "Time Series",
        description: "LSTM-based model for stock price prediction with sentiment analysis from news articles.",
        tags: ["Python", "PyTorch", "NLP"],
        icon: "mdi-finance",
        codeUrl: "#",
        demoUrl: "#",
    },
    {
        title: "Chatbot Assistant",
        category: "NLP",
        description: "Context-aware chatbot using transformer architecture with domain-specific knowledge.",
        tags: ["Python", "HuggingFace", "Flask"],
        icon: "mdi-chat-processing",
        codeUrl: "#",
        demoUrl: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">A selection of my work, from deep learning models to full-stack applications.</p>
                    <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.title} className="glass-card rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:shadow-primary/20">
                            <div className="h-48 bg-linear-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                                <i className={`mdi ${project.icon} text-7xl text-primary`}></i>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <span className="text-xs bg-primary/10 text-secondary px-2 py-1 rounded-full">{project.category}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-dark-light px-2 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                                    <a href={project.codeUrl} className="text-primary hover:text-primary-light text-sm flex items-center">
                                        <i className="mdi mdi-github mr-1"></i> View Code
                                    </a>
                                    <a href={project.demoUrl} className="text-primary hover:text-primary-light text-sm flex items-center">
                                        <i className="mdi mdi-open-in-new mr-1"></i> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg font-medium transition duration-300">
                        <span>View All Projects</span>
                        <i className="mdi mdi-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;