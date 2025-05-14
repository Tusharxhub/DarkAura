import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 " id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          width={1000}
          height={1000}
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href="mailto:thetushardev0@gmail.com?subject=Collaboration%20Opportunity&body=Dear%20Tushar,%0D%0A%0D%0AI%20recently%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I%20would%20like%20to%20discuss%20a%20potential%20collaboration.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            if (typeof window !== "undefined") {
              window.open(
                "mailto:thetushardev0@gmail.com?subject=Collaboration%20Opportunity&body=Dear%20Tushar,%0D%0A%0D%0AI%20recently%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I%20would%20like%20to%20discuss%20a%20potential%20collaboration.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect.",
                "_blank",
                "noopener,noreferrer"
              );
            }
          }}
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Tushar Kanti Dey | All rights reserved
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={info.img}
                alt="icons"
                width={200}
                height={200}
                className="w-full h-full opacity-50"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
