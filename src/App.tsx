import Lottie from "lottie-react";
import Santa from "./assets/santa.json";
import Snowfall from "react-snowfall";
import LottieOnScroll from "./components/LottieOnScroll";
import GiftLottie from "./assets/gift.json";
import ChampagneLottie from "./assets/champagne.json";
import MerryChristmas from "./assets/merry_christmas.json";
import Countdown from "./components/Countdown";
const App = () => {
  return (
    <>
      <Snowfall
        speed={[0.5, 2]}
        wind={[-0.5, 2]}
        radius={[0.5, 1.5]}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 998,
        }}
      />
      <main className="w-full h-full flex items-center flex-col gap-4 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900">
        <section className="w-full h-full max-w-[1536px] p-4 flex flex-col items-center gap-16 mobile:gap-[8rem]">
          <div className="w-full tablet:w-1/2 rounded-lg overflow-hidden shadow-md">
            <Lottie animationData={Santa} loop={true} />
          </div>
          <h2 className="text-dynamic uppercase font-semibold text-center text-white">
            <p>Áldott, Békés karácsonyi ünnepeket</p>
          </h2>
          <LottieOnScroll
            animationData={MerryChristmas}
            offset={500}
            multiplier={0.15}
          />
          <LottieOnScroll animationData={GiftLottie} />
          <h2 className="text-dynamic uppercase font-semibold text-center text-white">
            és sikerekben gazdag újévet
          </h2>
          <LottieOnScroll animationData={ChampagneLottie} />
          <div>
            <h2 className="text-dynamic uppercase font-semibold text-center text-white">
              kívánok mindenkinek!
            </h2>
            <Countdown targetDate={new Date("2023-12-31T23:59:59")} />
            <p className="text text-lg text-center text-white mt-4">
              by: <span className="font-semibold">Bence</span>
            </p>
            <p className="text text-lg text-center text-white font-semibold">
              <a
                href="https://github.com/bNc326/christmas"
                rel="noreferrer"
                target="_blank"
              >
                source
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
