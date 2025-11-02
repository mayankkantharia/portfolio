const About = () => {
  return (
    <section id="about" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A glimpse into my professional journey and what drives me.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-4"></div>
        </div>

        <div className="glass-card px-6 py-4 md:p-12 rounded-3xl">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-justify">
              I am currently pursuing my <strong>Master of Data Science</strong>{" "}
              at <strong>RMIT University</strong>, where I focus on turning
              complex datasets into clear, actionable insights. My studies and
              projects have strengthened my expertise in{" "}
              <strong>
                machine learning, deep learning, big data analytics, cloud
                computing, and data visualisation
              </strong>
              , enabling me to solve real-world problems with precision and
              creativity.
            </p>

            <p className="text-gray-300 leading-relaxed text-justify">
              With a <strong>Bachelor’s degree in Computer Engineering</strong>{" "}
              from Mumbai University, I bring a strong foundation in
              programming, database management, and software development. I have
              completed impactful projects in{" "}
              <strong>
                deep learning, machine learning, and web/app development
              </strong>
              , applying cutting-edge technologies to build scalable and
              intelligent solutions.
            </p>

            <p className="text-gray-300 leading-relaxed text-justify">
              I am passionate about leveraging data to drive innovation -
              whether it&apos;s building predictive models, creating intelligent
              applications, or exploring emerging areas such as natural language
              processing and computer vision. I thrive in environments that
              demand both analytical thinking and creative problem-solving, and
              I am committed to continuous learning to stay ahead in the
              evolving data landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
