'use client';

import { JSX, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  skills: Skill[];
}

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string>('Frontend Development');

  const categories: SkillCategory[] = [
    {
      title: 'Development Languages',
      subtitle: 'Web and Desktop apps',
      icon: (
        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.611 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/>
        </svg>
      ),
      skills: [
        { name: 'C#', level: 80 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'Java', level: 60 },
        { name: 'C/C++', level: 60 },
      ],
    },
    {
      title: 'Frontend Development',
      subtitle: 'Web interface development',
      icon: (
        <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      ),
      skills: [
        { name: 'React', level: 80 },
        { name: 'Angular', level: 80 },
        { name: 'Next.js', level: 70 },
      ],
    },
    {
      title: 'Backend Development',
      subtitle: 'Server-side development',
      icon: (
        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
        </svg>
      ),
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'ASP.NET Core', level: 80 },
        { name: 'Flask', level: 60 },
      ],
    },
    {
      title: 'Database Technologies',
      subtitle: 'SQL and NoSQL databases',
      icon: (
        <h3 className="h-5 w-5 text-blue-500 font-bold">DB</h3>
      ),
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'SQLite', level: 80 },
        { name: 'SQL Server', level: 80 },
        { name: 'MongoDB', level: 60 },
        { name: 'Redis', level: 60 },
        { name: 'DynamoDB', level: 60 },
      ],
    },
    {
      title: 'Artificial Intelligence & Machine Learning',
      subtitle: 'AI and ML frameworks',
      icon: (
        <h3 className="h-5 w-5 text-purple-500 font-bold">AI</h3>
      ),
      skills: [
        { name: 'pandas/numpy', level: 80 },
        { name: 'Apache Spark', level: 60 },
        { name: 'scikit-learn', level: 60 },
        { name: 'PyTorch', level: 60 },
        { name: 'TensorFlow', level: 50 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      subtitle: 'Platforms and CI/CD tools',
      icon: (
        <h3 className="h-5 w-5 text-yellow-500 font-bold">CD</h3>
      ),
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'IBM Cloud', level: 80 },
        { name: 'Docker', level: 80 },
        { name: 'Azure', level: 60 },
        { name: 'GitHub Actions', level: 60 },
      ],
    },
    
  ];

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? '' : title);
  };

  return (
    <div className="w-full max-w-3xl">
      <div className="space-y-3">
        {categories.map((category) => (
          <div
            key={category.title}
            className="border border-zinc-700 rounded-2xl bg-zinc-900/50 overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggleCategory(category.title)}
              className="w-full flex items-center justify-between p-6 hover:bg-zinc-800/30 transition-colors"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  {category.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-l font-bold text-white mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-zinc-400">
                    {category.subtitle}
                  </p>
                </div>
              </div>
              <svg
                className={`h-6 w-6 text-cyan-400 transition-transform ${
                  expandedCategory === category.title ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Expanded Content */}
            {expandedCategory === category.title && (
              <div className="px-6 pb-6 space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <div className="flex items-center gap-3 w-40">
                      <span className="text-sm text-white font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
