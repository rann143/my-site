import { useState, useEffect } from "react";

interface Activity {
  title: string;
  subTitle: string;
  description: string;
  link?: string;
}

export default function WhatImUpTo() {
  const [activities, setActivities] = useState<Activity[]>([]);

  // Mock data for now - you can replace this with actual data
  useEffect(() => {
    const mockActivities: Activity[] = [
      {
        title: "Open Source: Mirlo",
        subTitle: "Leading Mirlo's Mobile App Development",
        description:
          "Working hand-in-hand with Mirlo's leadership team to help artists sell digital music, receive financial support, manage mailing lists, and share with their supporters.",
        link: "https://mirlo.space/",
      },
    ];
    setActivities(mockActivities);
  }, []);

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">
        What I'm Up To
      </h2>
      <div className="grid gap-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
          >
            <h2 className="font-semibold dark:text-white mb-2">
              {activity.title}
            </h2>
            <h4 className="mb-2">{activity.subTitle}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              {activity.description}
            </p>
            {activity.link && (
              <a
                href={activity.link}
                className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                Check out Mirlo
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
  );
}
