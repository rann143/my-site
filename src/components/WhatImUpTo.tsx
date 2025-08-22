import { useState, useEffect } from "react";

interface Activity {
  title: string;
  subTitle: string;
  description: string;
  link?: string;
}

interface ActivitySection {
  sectionTitle: string;
  activities: Activity[];
}

export default function WhatImUpTo() {
  const [sections, setSections] = useState<ActivitySection[]>([]);

  // Mock data for now - you can replace this with actual data
  useEffect(() => {
    const mockSections: ActivitySection[] = [
      {
        sectionTitle: "Open Source",
        activities: [
          {
            title: "Mirlo",
            subTitle: "Leading Mirlo's Mobile App Development",
            description:
              "Working hand-in-hand with Mirlo's leadership team to help artists sell digital music, receive financial support, manage mailing lists, and share with their supporters.",
            link: "https://mirlo.space/",
          },
          {
            title: "Code for Boston",
            subTitle:
              "Volunteer Working on Boston Liquor License Tracking Project",
            description:
              "Working in partnership with OFFSITE to help restaurant owners navigate Boston's liquor license acquisition process",
            link: "https://github.com/codeforboston/boston-liquor-license-tracker",
          },
        ],
      },
    ];
    setSections(mockSections);
  }, []);

  const ActivityCard = ({
    activity,
    index,
  }: {
    activity: Activity;
    index: number;
  }) => (
    <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
      <h4 className="text-lg font-semibold dark:text-white mb-2">
        {activity.title}
      </h4>
      <h5 className="mb-2 text-gray-700 dark:text-gray-200 text-sm">
        {activity.subTitle}
      </h5>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
        {activity.description}
      </p>
      {activity.link && (
        <a
          href={activity.link}
          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          Check out {activity.title}
          <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      )}
    </div>
  );

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2 dark:text-white">
        What I'm Working On
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Projects that I'm excited about... and you should be, too! 😄
      </p>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">
            {section.sectionTitle}
          </h3>
          <div className="grid gap-4">
            {section.activities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} index={index} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
