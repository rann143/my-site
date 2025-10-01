import { TypeAnimation } from "react-type-animation";
import CurrentlyReading from "../components/CurrentlyReading";
import RecentlyPlayed from "../components/RecentlyPlayed";
import WhatImUpTo from "../components/WhatImUpTo";
import headshotImage from "../assets/headshot-lined.png";

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
            Growing my sofware engineering skills while trying to escape poor
            posture.
          </p>

          <div className="mt-6 flex justify-center">
            <img
              src={headshotImage}
              alt="Dan Roderman headshot"
              className="w-48 h-48 object-cover dark:rounded-full p-1 pl-4 dark:bg-white"
              style={{ objectPosition: "center top" }}
            />
          </div>
        </div>

        <WhatImUpTo />
        <CurrentlyReading />
        <RecentlyPlayed />
      </div>
    </>
  );
}
