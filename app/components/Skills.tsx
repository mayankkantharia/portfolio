import Image from 'next/image';

const skillsData = {
    "Data Science": [
        { src: "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white", alt: "Python" },
        { src: "https://img.shields.io/badge/R-276DC3?logo=r&logoColor=white", alt: "R" },
        { src: "https://img.shields.io/badge/TensorFlow-FF6F00?logo=tensorflow&logoColor=white", alt: "TensorFlow" },
        { src: "https://img.shields.io/badge/Scikit--learn-F7931E?logo=scikit-learn&logoColor=white", alt: "Scikit-learn" },
        { src: "https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white", alt: "PyTorch" },
        { src: "https://img.shields.io/badge/OpenCV-5C3EE8?logo=opencv&logoColor=white", alt: "OpenCV" },
        { src: "https://img.shields.io/badge/Keras-D00000?logo=keras&logoColor=white", alt: "Keras" },
        { src: "https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white", alt: "Pandas" },
        { src: "https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=white", alt: "NumPy" },
        { src: "https://img.shields.io/badge/Seaborn-30B7F5?logo=seaborn&logoColor=white", alt: "Seaborn" },
        { src: "https://img.shields.io/badge/Tableau-E97627?logo=tableau&logoColor=white", alt: "Tableau" },
        { src: "https://img.shields.io/badge/Power_BI-F2C811?logo=powerbi&logoColor=black", alt: "Power BI" },
    ],
    "Databases & Storage": [
        { src: "https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white", alt: "MySQL" },
        { src: "https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white", alt: "MongoDB" },
        { src: "https://img.shields.io/badge/SQLite-003B57?logo=sqlite&logoColor=white", alt: "SQLite" },
        { src: "https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black", alt: "Firebase" },
        { src: "https://img.shields.io/badge/Hive-D50000?logo=apache-hive&logoColor=white", alt: "Hive" },
    ],
    "Cloud & Big Data": [
        { src: "https://img.shields.io/badge/AWS-232F3E?logo=amazon-aws&logoColor=white", alt: "AWS" },
        { src: "https://img.shields.io/badge/Hadoop-66CCFF?logo=apache-hadoop&logoColor=white", alt: "Hadoop" },
        { src: "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white", alt: "Docker" },
        { src: "https://img.shields.io/badge/Apache_Spark-E25A1C?logo=apache-spark&logoColor=white", alt: "Apache Spark" },
    ],
    "Full Stack Development": [
        { src: "https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white", alt: "Node.js" },
        { src: "https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white", alt: "Django" },
        { src: "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black", alt: "React" },
        { src: "https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white", alt: "Flask" },
        { src: "https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white", alt: "HTML5" },
        { src: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black", alt: "JavaScript" },
        { src: "https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white", alt: "CSS3" },
        { src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white", alt: "Tailwind" },
    { src: "https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white", alt: "Bootstrap" },
    ],
    "Mobile App Development": [
        { src: "https://img.shields.io/badge/Flutter-02569B?logo=flutter&logoColor=white", alt: "Flutter" },
        { src: "https://img.shields.io/badge/Dart-0175C2?logo=dart&logoColor=white", alt: "Dart" },
    ],
    "Tools": [
        { src: "https://img.shields.io/badge/Jupyter-F37626?logo=jupyter&logoColor=white", alt: "Jupyter" },
        { src: "https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white", alt: "GitHub" },
        { src: "https://img.shields.io/badge/VS_Code-007ACC?logo=visual-studio-code&logoColor=white", alt: "VS Code" },
        { src: "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white", alt: "Git" },
    ],
};

const iconMap = {
    "Data Science": "mdi-brain",
    "Databases & Storage": "mdi-database",
    "Cloud & Big Data": "mdi-cloud-outline",
    "Full Stack Development": "mdi-web",
    "Mobile App Development": "mdi-cellphone",
    "Tools": "mdi-tools",
}

const Skills = () => {
    return (
        <section id="skills" className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-3xl font-bold mb-4">My Technical <span className="gradient-text">Arsenal</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">A collection of tools and technologies I use to bring ideas to life.</p>
                    <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-4"></div>
                </div>
                <div className="glass-card px-6 py-4 md:p-12 rounded-3xl">
                    <div className="grid grid-cols-1 text-sm">
                        {Object.entries(skillsData).map(([category, skills], index) => (
                            <div key={category} className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 ${index < Object.keys(skillsData).length -1 ? 'border-b border-gray-700' : ''}`}>
                                <div className="flex items-center">
                                    <div className="bg-primary/10 p-2 rounded-lg mr-3">
                                        <i className={`mdi ${iconMap[category as keyof typeof iconMap]} text-3xl text-primary`}></i>
                                    </div>
                                    <h3 className="text-lg font-semibold">{category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(skill => (
                                        <Image key={skill.alt} src={skill.src} alt={skill.alt} width={100} height={20} className="h-5 w-auto" unoptimized />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;