import { TypeAnimation } from "react-type-animation";

interface TimelineEntry {
  dateRange: string;
  title: string;
  subtitle: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface Hobby {
  title: string;
  description: string;
  icon: string;
}

export default function About() {
  const dotColors = [
    "bg-blue-600 dark:bg-blue-400",
    "bg-purple-600 dark:bg-purple-400",
    "bg-green-600 dark:bg-green-400",
    "bg-orange-600 dark:bg-orange-400",
    "bg-red-600 dark:bg-red-400",
  ];

  const timelineEntries: TimelineEntry[] = [
    {
      dateRange: "2024 - Present",
      title: "[Company Name]",
      subtitle: "Software Engineer",
      description:
        "Working on [project details]. Leading initiatives in [area of focus].",
    },
    {
      dateRange: "2022 - 2024",
      title: "[Organization/Institution]",
      subtitle: "[Previous Role/Education]",
      description:
        "Description of what you accomplished or learned during this time.",
    },
    {
      dateRange: "2021 - 2022",
      title: "[Organization/Institution]",
      subtitle: "[Role/Achievement]",
      description:
        "Key accomplishments and responsibilities during this period.",
    },
    {
      dateRange: "2019 - 2021",
      title: "[Organization/Institution]",
      subtitle: "[Role/Education]",
      description: "What you were doing and learning during this time.",
    },
    {
      dateRange: "2018 - 2019",
      title: "[Organization/Institution]",
      subtitle: "[Early Role/Education]",
      description: "Where your journey began or a significant milestone.",
    },
  ];

  const projects: Project[] = [
    {
      title: "Project Name 1",
      description:
        "Brief description of what this project does and the problem it solves.",
      technologies: ["React", "TypeScript", "Node.js"],
      link: "https://github.com/yourusername/project1",
    },
    {
      title: "Project Name 2",
      description: "Another project you're proud of and want to showcase.",
      technologies: ["Python", "PostgreSQL", "Docker"],
      link: "https://github.com/yourusername/project2",
    },
    {
      title: "Project Name 3",
      description:
        "A third project that demonstrates your skills and interests.",
      technologies: ["React Native", "Firebase", "JavaScript"],
    },
  ];

  const hobbies: Hobby[] = [
    {
      title: "Reading",
      description:
        "Love getting lost in a good book, especially [genre/topics].",
      icon: "📚",
    },
    {
      title: "Music",
      description:
        "Always listening to something new. Currently into [genre/artists].",
      icon: "🎵",
    },
    {
      title: "Fitness",
      description: "Trying to maintain good posture while staying active.",
      icon: "🏃‍♂️",
    },
    {
      title: "Cooking",
      description:
        "Experimenting in the kitchen and occasionally making something edible.",
      icon: "👨‍🍳",
    },
  ];

  return (
    <>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <TypeAnimation
            wrapper="h1"
            speed={30}
            sequence={["About Me", 500, "About Me"]}
            className="dark:text-white"
            style={{ fontSize: "2rem" }}
          />
        </div>

        {/* Brief Introduction */}
        <section className="mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a software engineer based in [your location] who loves
              building things that matter. My journey into tech started [brief
              origin story], and I've been passionate about creating solutions
              that make people's lives easier ever since.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When I'm not coding, you'll find me [brief personal interests]. I
              believe in [your values/philosophy], and I'm always looking for
              opportunities to learn, grow, and contribute to meaningful
              projects.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently, I'm focused on [current focus areas] while working on
              improving my posture (it's a work in progress).
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Timeline</h2>
          <div className="space-y-6">
            {timelineEntries.map((entry, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div
                    className={`w-5 h-5 ${dotColors[index]} rounded-full`}
                  ></div>
                  {index < timelineEntries.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-300 dark:bg-gray-600 mt-2"></div>
                  )}
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex-1 transition-all duration-200 hover:scale-103">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white">
                        {entry.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        {entry.subtitle}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {entry.dateRange}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg transition-all duration-200 hover:scale-103"
              >
                <h3 className="text-lg font-semibold dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
                  >
                    View Project
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transition-all duration-200 hover:scale-103"
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{hobby.icon}</span>
                  <h3 className="text-lg font-semibold dark:text-white">
                    {hobby.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
