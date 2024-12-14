import { Code, Database, Palette } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Palette className="w-6 h-6" />,
    items: ['React', 'JavaScript', 'Tailwind CSS', 'Bootstrap']
  },
  {
    category: 'Backend',
    icon: <Database className="w-6 h-6" />,
    items: ['Flask', 'Python', 'PostgreSQL', 'SQL']
  },
  {
    category: 'Tools & Others',
    icon: <Code className="w-6 h-6" />,
    items: ['Git','CI/CD']
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a full-stack developer with a passion for building beautiful, functional, and user-friendly websites and applications. With over X years of experience in web development, I specialize in creating responsive and performant applications using modern technologies.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {skillGroup.icon}
                  <h3 className="text-xl font-semibold ml-2">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;