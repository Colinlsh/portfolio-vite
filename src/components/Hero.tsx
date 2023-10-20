import { useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "./ui/ScrollObserver";
import personalPhoto1 from "../assets/personal-photo-3.jpg";
import Button from "./ui/custom/Button";
import { Link } from "react-scroll";

const Hero = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const [text, setText] = useState("I am a Full Stack");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 2000;

  const sentenceToWrite = "I am a Full Stack Developer";

  const tick = () => {
    let updatedText = isDeleting
      ? sentenceToWrite.substring(0, text.length - 1)
      : sentenceToWrite.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === sentenceToWrite) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "I am a Full") {
      setIsDeleting(false);
      setDelta(100);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <div
      id="hero"
      className={`sticky h-screen w-full flex justify-center items-center z-0 dark:bg-customDark`}
    >
      <div
        className="fixed w-full h-full flex flex-col justify-center items-center px-20 md:px-60"
        style={{
          transform: `translateY(-${scrollY / 4}px)`,
          transition: "ease",
        }}
      >
        <div className="flex flex-col w-full gap-y-2">
          <div className="h-full w-full flex justify-center items-center lg:items-center">
            <div className="h-full w-full flex justify-center">
              <img
                src={personalPhoto1}
                alt="/"
                className="lg:w-[50%] w-[80%] rounded-3xl"
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col text-left gap-y-2">
            {/* <div className="h-[20%]  flex items-center justify-center">
              <p className="md:text-7xl text-4xl w-full flex justify-center 0">
                {text}
              </p>
            </div> */}
            <div className="flex items-center justify-center">
              <p className="p-5 border-2 text-l w-full flex justify-center text-center rounded-lg bg-slate-600">
                {"Hi, thanks for checking my page out!"}
              </p>
            </div>
            <div className="h-full flex flex-col w-full">
              <div className="cursor-pointer items-center w-full flex justify-center">
                <Link
                  className="p-4 text-white drop-shadow-lg bg-customDark duration-500 rounded-lg dark:border-white dark:border-thin"
                  to="projects"
                  smooth={true}
                >
                  Check out my works!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
