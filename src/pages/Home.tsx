import { TypeAnimation } from "react-type-animation";
import CurrentlyReading from "../components/CurrentlyReading";
import RecentlyPlayed from "../components/RecentlyPlayed";
import WhatImUpTo from "../components/WhatImUpTo";

export default function Home() {
  return (
    <>
      <div className="space-y-8">
        <div>
          <TypeAnimation
            wrapper="h1"
            speed={30}
            sequence={["Hi!", 500, "Hi! I'm Dan."]}
            className="dark:text-white"
            style={{ fontSize: "2rem" }}
          />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            I'm a software engineer passionate about building great user experiences 
            and solving complex problems. I love working with modern web technologies, 
            reading both technical and fiction books, and discovering new music.
          </p>
        </div>
        
        <WhatImUpTo />
        <CurrentlyReading />
        <RecentlyPlayed />
      </div>
    </>
  );
}
