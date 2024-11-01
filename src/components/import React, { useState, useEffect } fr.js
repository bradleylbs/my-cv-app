import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Building, 
  GraduationCap, 
  Award, 
  Code, 
  Briefcase, 
  User, 
  Download,
  Linkedin,
  Github,
  Target,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const CV = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [activeExperience, setActiveExperience] = useState(null);
  const [activeEducation, setActiveEducation] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const professionalHighlights = [
    {
      icon: Target,
      title: 'Expertise',
      description: 'Specialized in Microsoft Power Platform development with proven success in process automation and digital transformation.'
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'Demonstrated 40% efficiency improvement through process automation and delivered 15+ successful web applications.'
    },
    {
      icon: CheckCircle,
      title: 'Technical Proficiency',
      description: 'Full-stack development capabilities with expertise in Power Platform, web technologies, and data analysis.'
    }
  ];

  const projects = [
    {
      title: 'Enterprise Process Automation',
      description: 'Led the development of a comprehensive PowerApps solution that automated departmental workflows, resulting in 60% improved productivity.',
      technologies: ['PowerApps', 'Power Automate', 'SharePoint'],
      metrics: 'Reduced process time by 40%, serving 500+ users'
    },
    {
      title: 'Business Intelligence Dashboard Suite',
      description: 'Designed and implemented 10+ Power BI dashboards for data-driven decision making across departments.',
      technologies: ['Power BI', 'DAX', 'SQL'],
      metrics: 'Improved reporting efficiency by 75%, tracking $10M+ in departmental resources'
    }
  ];

  const skills = {
    'Power Platform': [
      { name: 'PowerApps', level: 90, projects: 15 },
      { name: 'Power BI', level: 85, projects: 12 },
      { name: 'Power Automate', level: 80, projects: 10 }
    ],
    'Web Development': [
      { name: 'HTML/CSS', level: 85, projects: 20 },
      { name: 'JavaScript', level: 80, projects: 18 },
      { name: 'React', level: 75, projects: 8 }
    ],
    'Data Science': [
      { name: 'Python', level: 75, projects: 6 },
      { name: 'Excel Analytics', level: 85, projects: 15 },
      { name: 'Data Analysis', level: 80, projects: 12 }
    ]
  };

  const SkillBar = ({ skill, level, projects }) => (
    <div className="mb-6 transform hover:scale-105 transition-all">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-blue-600">{projects} projects</span>
          <span className="text-sm text-gray-600">{level}%</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-blue-600 mb-3">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="text-sm text-gray-600 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-blue-600" />
        {project.metrics}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center p-4">
            <div>
              <h1 className="text-2xl font-bold text-blue-600">Swelihle Bradley Lucas</h1>
              <p className="text-gray-600">Power Platform Developer & Digital Solutions Expert</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Enhanced Hero Section */}
        <div 
          id="hero"
          data-animate
          className={`bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-12 mb-8 shadow-lg transform transition-all duration-1000 ${
            isVisible['hero'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Digital Transformation Specialist</h1>
            <p className="text-xl mb-8 opacity-90">
              Driving business efficiency through innovative Power Platform solutions and modern web technologies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              {professionalHighlights.map((highlight, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <highlight.icon className="w-6 h-6 mb-2" />
                  <h3 className="font-semibold mb-1">{highlight.title}</h3>
                  <p className="opacity-80">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Showcase Section */}
        <div 
          id="projects"
          data-animate
          className={`mb-12 transform transition-all duration-1000 ${
            isVisible['projects'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div 
          id="skills"
          data-animate
          className={`transform transition-all duration-1000 ${
            isVisible['skills'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-2xl font-bold mb-8">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="space-y-6">
                <h3 className="text-xl font-bold text-blue-600 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  {category}
                </h3>
                {skillList.map((skill) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill.name}
                    level={skill.level}
                    projects={skill.projects}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="mt-12 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-gray-800 mb-2">Let's Connect</h3>
              <p className="text-gray-600">Open to exciting opportunities in Power Platform development</p>
            </div>
            <div className="flex gap-6">
              <a 
                href="mailto:swelihlelucas@gmail.com" 
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CV;
