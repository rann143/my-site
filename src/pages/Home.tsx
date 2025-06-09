import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <>
      <div>
        <TypeAnimation
          wrapper="h1"
          speed={30}
          sequence={["Hi!", 500, "Hi! I'm Dan."]}
          className="dark:text-white"
          style={{ fontSize: "2rem" }}
        />
        <h2></h2>
      </div>
    </>
  );
}
