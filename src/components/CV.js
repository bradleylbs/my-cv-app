import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Calendar, 
  Building, 
  Download,
  Linkedin,
  Github,
  Target,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link as ScrollLink, Element } from 'react-scroll';

const CV = () => {
  const [isVisible, setIsVisible] = useState({});
  const [expandedSections, setExpandedSections] = useState({
    experience: false,
    education: false,
    skills: false,
  });

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

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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

  const workExperience = [
    {
      title: 'Power Platform Developer',
      company: 'Department of Transport, KwaZulu-Natal',
      period: '2023/03 - Present',
      location: 'KwaZulu-Natal, South Africa',
      responsibilities: [
        'Developed custom PowerApps solutions, automating key business processes and increasing operational efficiency.',
        'Designed and launched Power BI dashboards, significantly enhancing data visualization and decision-making speed.',
        'Built automated workflows with Power Automate, achieving productivity gains of 60% across various departments.',
        'Collaborated with cross-functional teams to meet critical requirements, delivering impactful solutions that support over 500 users.'
      ]
    },
    {
      title: 'Telecommunications Network Technician',
      company: 'TELKOM (OPEN SERVE)',
      period: '2021/11 - 2022/10',
      location: 'Durban, KwaZulu-Natal',
      responsibilities: [
        'Conducted precise measurements for optimal network performance, ensuring reliable and high-quality service.',
        'Streamlined network functionality by removing redundant connections, boosting operational efficiency.',
        'Partnered with technical teams to proactively resolve network issues, minimizing service interruptions for clients.',
        'Resolved technical challenges swiftly to maintain network stability, enhancing reliability by 20%.',
        'Executed comprehensive testing and tracing, achieving optimal connectivity for all user segments.'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Human Science Research Council',
      period: '2017/07 - 2017/12',
      location: 'Durban, KwaZulu-Natal',
      responsibilities: [
        'Managed lab stock levels, ensuring seamless workflow for ongoing research projects and efficient resource use.',
        'Analyzed data using advanced Excel, including pivot tables, to effectively present research findings to stakeholders.',
        'Developed conditional surveys on Mobenzi, optimizing data collection and improving data quality.',
        'Played a key role in QA and QC processes for research data, upholding accuracy and adherence to research protocols.',
        'Managed archival of historical research data, contributing to streamlined data retrieval for future projects.'
      ]
    },

  ];

  const education = [
    {
      degree: 'Bachelor of Technology: Information Technology',
      institution: 'Durban University of Technology',
      period: '2018 - 2019',
      location: 'Durban, KwaZulu-Natal'
    },
    {
      degree: 'National Diploma: Information Technology',
      institution: 'Mangosuthu University of Technology',
      period: '2014 - 2017',
      location: 'Umlazi, KwaZulu-Natal'
    },
    {
      degree: 'National Senior Certificate',
      institution: 'Sparks Estate Secondary',
      period: '2009 - 2012',
      location: 'Sydenham, KwaZulu-Natal'
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

  const WorkExperienceCard = ({ experience }) => (
    <div className="border-l-4 border-blue-600 pl-4 py-4 mb-6 last:mb-0 hover:bg-gray-50 transition-colors rounded-r-lg">
      <h3 className="text-xl font-bold text-blue-600">{experience.title}</h3>
      <div className="flex flex-wrap gap-4 text-gray-600 mt-1">
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4" />
          <span>{experience.company}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{experience.period}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>{experience.location}</span>
        </div>
      </div>
      <div className="mt-4">
        <ul className="space-y-2">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const EducationCard = ({ edu }) => (
    <div className="border-l-4 border-blue-600 pl-4 py-4 mb-6 last:mb-0 hover:bg-gray-50 transition-colors rounded-r-lg">
      <h3 className="text-xl font-bold text-blue-600">{edu.degree}</h3>
      <div className="flex flex-wrap gap-4 text-gray-600 mt-1">
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4" />
          <span>{edu.institution}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{edu.period}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>{edu.location}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-blue-600">Swelihle Bradley Lucas</h1>
              <p className="text-gray-600">Power Platform Developer & Digital Solutions Expert</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for larger screens, Bottom Nav for mobile */}
      <aside className="fixed left-0 top-20 p-4 w-40 bg-white shadow-lg rounded-r-lg z-40 hidden md:block">
        <ScrollLink to="hero" smooth duration={500} className="block mb-4 cursor-pointer">Profile</ScrollLink>
        <ScrollLink to="experience" smooth duration={500} className="block mb-4 cursor-pointer">Experience</ScrollLink>
        <ScrollLink to="education" smooth duration={500} className="block mb-4 cursor-pointer">Education</ScrollLink>
        <ScrollLink to="skills" smooth duration={500} className="block cursor-pointer">Skills</ScrollLink>
      </aside>

      <div className="max-w-6xl mx-auto p-6">
        {/* Enhanced Hero Section */}
        <Element name="hero">
          <div 
            id="hero"
            data-animate
            className={`bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-8 md:p-12 mb-8 shadow-lg transform transition-all duration-1000 ${
              isVisible['hero'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Digital Transformation Specialist</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
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
        </Element>

        {/* Experience, Education, Skills Section */}
        <Element name="experience">
          <h2 className="text-2xl font-bold mb-6 flex items-center cursor-pointer" onClick={() => toggleSection('experience')}>
            Work Experience
            {expandedSections.experience ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
          </h2>
          {expandedSections.experience && workExperience.map((experience, index) => (
            <WorkExperienceCard key={index} experience={experience} />
          ))}
        </Element>

        <Element name="education">
          <h2 className="text-2xl font-bold mb-6 flex items-center cursor-pointer" onClick={() => toggleSection('education')}>
            Education
            {expandedSections.education ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
          </h2>
          {expandedSections.education && education.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </Element>

        <Element name="skills">
          <h2 className="text-2xl font-bold mb-6 flex items-center cursor-pointer" onClick={() => toggleSection('skills')}>
            Skills
            {expandedSections.skills ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
          </h2>
          {expandedSections.skills && (
            Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="space-y-6 mb-6">
                <h3 className="text-xl font-bold text-blue-600">{category}</h3>
                {skillList.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} level={skill.level} projects={skill.projects} />
                ))}
              </div>
            ))
          )}
        </Element>
      </div>

      {/* Footer */}
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

      {/* Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-around items-center md:hidden">
        <ScrollLink to="hero" smooth duration={500} className="text-blue-600">Profile</ScrollLink>
        <ScrollLink to="experience" smooth duration={500} className="text-blue-600">Experience</ScrollLink>
        <ScrollLink to="education" smooth duration={500} className="text-blue-600">Education</ScrollLink>
        <ScrollLink to="skills" smooth duration={500} className="text-blue-600">Skills</ScrollLink>
      </nav>
    </div>
  );
};

export default CV;
