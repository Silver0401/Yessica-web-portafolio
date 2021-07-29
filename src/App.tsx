import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Sections, SvgTypes } from "./types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

// Components
import PersonalComponent from "./components/Personal";
import AnimationBoxesComponent from "./components/AnimationBoxes";

const App: React.FC = () => {
  const [sectionSelected, setSectionSelected] = useState<Sections>("Initial");
  const { t } = useTranslation();
  const PersonalRef = useRef<HTMLTableSectionElement>(null);
  const root = document.documentElement;

  // Loader Animation
  useEffect(() => {
    function MoveLoader() {
      const Loader = anime.timeline({
        easing: "easeInOutSine",
      });

      Loader.add({
        targets: ".MovingBox",
        duration: 2200,
        translateX: ["120%", "-120%"],
      });

      Loader.add(
        {
          targets: ".AnimBox",
          duration: 500,
          opacity: [1, 0],
        },
        "-=1700"
      );

      Loader.add(
        {
          targets: ".Loader",
          duration: 750,
          width: "0px",
        },
        "-=1700"
      );

      Loader.add(
        {
          targets: ".AppContainer",
          opacity: [0, 1],
        },
        "-=1000"
      );
    }

    setTimeout(() => {
      MoveLoader();
    }, 3000);
  }, []);

  // Section Selection Animation
  useEffect(() => {
    console.log(sectionSelected);
    const colorOptions = {
      Skills: "#e94435e6",
      Contact: "#8364f2e6",
      Education: "#4ea653e6",
      Experience: "#f8bc30e6",
      Langs: "#4387f4e6",
      Achievements: "#eb63f2e6",
      Personal: "black",
      Initial: "black",
      ExitSections: "black",
    };

    root.style.setProperty(
      "--CurrentSectionColor",
      colorOptions[sectionSelected]
    );

    PersonalRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (sectionSelected === "ExitSections" || sectionSelected === "Initial") {
      const tl2 = anime.timeline({
        easing: "linear",
        duration: 700,
      });

      tl2.add({
        targets: ".AnimationContainer",
        scaleY: ["100%", "0%"],
        easing: "spring(1, 80, 20, 10)",
      });

      tl2.add(
        {
          targets: ".Personal",
          translateX: "0%",
          easing: "easeInOutElastic",
          duration: 1000,
        },
        "-=800"
      );

      tl2.add(
        {
          targets: ".PolyTitle",
          opacity: [1, 0],
        },
        "-=500"
      );

      tl2.add(
        {
          targets: [".Superficial", "#TitleHText", ".personalImgContainer"],
          opacity: 1,
        },
        "-=350"
      );
    } else {
      const tl = anime.timeline({
        easing: "linear",
        duration: 1000,
      });

      tl.add({
        targets: [".Superficial", "#TitleHText", ".personalImgContainer"],
        opacity: [1, 0],
      });

      tl.add(
        {
          targets: ".PolyTitle",
          opacity: [0, 1],
        },
        "-=100"
      );

      tl.add(
        {
          targets: ".AnimationContainer",
          duration: 50,
          scaleY: "100%",
        },
        "-=1000"
      );
      tl.add(
        {
          targets: [".leftAnimBox", ".rightAnimBox"],
          duration: 50,
          scaleY: "0%",
        },
        "-=1000"
      );

      if (
        sectionSelected === "Skills" ||
        sectionSelected === "Contact" ||
        sectionSelected === "Achievements"
      ) {
        tl.add({
          targets: ".Personal",
          translateX: "120%",
          easing: "easeInElastic",
        });
        tl.add(
          {
            targets: ".leftAnimBox",
            opacity: [0.3, 1],
            scaleY: ["0%", "100%"],
            easing: "spring(1, 80, 20, 10)",
          },
          "-=100"
        );
      } else {
        tl.add({
          targets: ".Personal",
          translateX: "-120%",
          easing: "easeInElastic",
        });
        tl.add(
          {
            targets: ".rightAnimBox",
            opacity: [0.3, 1],
            scaleY: ["0%", "100%"],
            easing: "spring(1, 80, 20, 10)",
          },
          "-=100"
        );
      }
    }
  }, [sectionSelected]);

  // Component Functions
  const ReturnSvg = (selectedSvg: SvgTypes) => {
    const SvgList = {
      book: (
        <svg
          width="303"
          height="273"
          viewBox="0 0 303 273"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Component 10">
            <path
              id="TopHat"
              d="M148.325 25.1121L292.4 84.6121L148.326 138.736L4.9002 84.6121L148.325 25.1121Z"
              fill="#4EA653"
              fillOpacity="0.75"
            />
            <path
              id="Rectangle 20"
              d="M44.4001 109L148.4 148L258.4 109C258.4 109 258.4 153.716 258.4 175.925C258.4 198.133 44.4001 199.244 44.4001 175.925C44.4001 152.605 44.4001 109 44.4001 109Z"
              fill="#4EA653"
              fillOpacity="0.75"
            />
            <path
              id="Rectangle 21"
              d="M280.9 87L293.588 82L294.4 151H281.4L280.9 87Z"
              fill="#4EA653"
              fillOpacity="0.75"
            />
            <path
              id="Polygon 2"
              d="M287.9 155L300.457 176.75H275.343L287.9 155Z"
              fill="#4EA653"
              fillOpacity="0.75"
            />
            <rect
              id="Rectangle 22"
              x="281.4"
              y="155"
              width="13"
              height="11"
              fill="#4EA653"
              fillOpacity="0.75"
            />
            <g id="CCircle1">
              <circle
                id="Ellipse 2"
                cx="60"
                cy="242.388"
                r="30"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 23"
                width="32.388"
                height="7.59116"
                transform="matrix(0.635687 -0.771947 0.784106 0.620626 50.081 252.39)"
                fill="#514E4E"
              />
              <rect
                id="Rectangle 24"
                width="7.7228"
                height="10.1177"
                transform="matrix(0.635687 -0.771947 0.784106 0.620626 43 246.781)"
                fill="#514E4E"
              />
            </g>
            <g id="CCircle2">
              <circle
                id="Ellipse 3"
                cx="159"
                cy="242.388"
                r="30"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 27"
                width="32.388"
                height="7.59116"
                transform="matrix(0.635687 -0.771947 0.784106 0.620626 149.081 252.39)"
                fill="#514E4E"
              />
              <rect
                id="Rectangle 28"
                width="7.7228"
                height="10.1177"
                transform="matrix(0.635687 -0.771947 0.784106 0.620626 142 246.781)"
                fill="#514E4E"
              />
            </g>
            <g id="CCircle3">
              <circle
                id="Ellipse 4"
                cx="259"
                cy="242.388"
                r="30"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 29"
                width="32.388"
                height="7.59116"
                transform="matrix(0.635687 -0.771947 0.784106 0.620626 249.081 252.39)"
                fill="#514E4E"
              />
              <rect
                id="Rectangle 30"
                width="7.7228"
                height="10.1177"
                transform="matrix(0.635687 -0.771947 0.784106 0.620626 242 246.781)"
                fill="#514E4E"
              />
            </g>
          </g>
        </svg>
      ),
      screw: (
        <svg
          width="323"
          height="328"
          viewBox="0 0 323 328"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="screws">
            <g id="SmallCircle">
              <path
                id="Ellipse 5"
                d="M121.438 79.8044C121.438 103.083 102.589 121.927 79.3711 121.927C56.1536 121.927 37.3039 103.083 37.3039 79.8044C37.3039 56.5253 56.1536 37.6821 79.3711 37.6821C102.589 37.6821 121.438 56.5253 121.438 79.8044Z"
                stroke="white"
                strokeOpacity="0.75"
                strokeWidth="36"
              />
              <rect
                id="Rectangle 41"
                width="13.9681"
                height="21.0817"
                rx="6.98403"
                transform="matrix(0.907065 0.420992 -0.420357 0.907359 106.015 4.07611)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 43"
                width="13.9777"
                height="21.0672"
                rx="6.98883"
                transform="matrix(0.2705 0.96272 -0.962591 0.270959 153.711 49.142)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 44"
                width="13.9781"
                height="21.0666"
                rx="6.98903"
                transform="matrix(-0.203929 0.978986 -0.978911 -0.204288 159 83.4941)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 45"
                width="13.9751"
                height="21.0711"
                rx="6.98753"
                transform="matrix(-0.525358 0.850881 -0.85045 -0.526055 150.591 115.45)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 46"
                width="13.9702"
                height="21.0783"
                rx="6.98512"
                transform="matrix(-0.807187 0.590296 -0.589591 -0.807702 129.082 141.976)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 47"
                width="13.966"
                height="21.0849"
                rx="6.98298"
                transform="matrix(-0.993922 0.110084 -0.109885 -0.993944 96.9195 157.463)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 48"
                width="13.9664"
                height="21.0841"
                rx="6.98322"
                transform="matrix(-0.974075 -0.226227 0.225834 -0.974166 62.4586 157.011)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 49"
                width="13.9701"
                height="21.0786"
                rx="6.98503"
                transform="matrix(-0.816505 -0.577339 0.576634 -0.817003 32.9182 144.579)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 50"
                width="13.9767"
                height="21.0686"
                rx="6.98836"
                transform="matrix(-0.383378 -0.923592 0.923343 -0.383977 9.62085 119.781)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 51"
                width="13.9786"
                height="21.0658"
                rx="6.9893"
                transform="matrix(-0.0223308 -0.999751 0.99975 -0.0223717 0.312134 88.5085)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 52"
                width="13.9766"
                height="21.0688"
                rx="6.98828"
                transform="matrix(0.398535 -0.917153 0.916886 0.399149 3.13019 54.9624)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 53"
                width="13.9712"
                height="21.0769"
                rx="6.98562"
                transform="matrix(0.757923 -0.652344 0.651657 0.758514 17.7838 28.0622)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 54"
                width="13.9682"
                height="21.0815"
                rx="6.98408"
                transform="matrix(0.902487 -0.430718 0.430075 0.902793 43.4551 9.49176)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 55"
                width="13.9658"
                height="21.0851"
                rx="6.9829"
                transform="matrix(0.999996 -0.00285307 0.00284785 0.999996 74.1844 0.039856)"
                fill="white"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 42"
                width="13.9725"
                height="21.075"
                rx="6.98624"
                transform="matrix(0.690856 0.722992 -0.722359 0.691518 133.768 21.0513)"
                fill="white"
                fillOpacity="0.75"
              />
            </g>
            <g id="BigCircle">
              <circle
                id="Ellipse 5_2"
                cx="190.137"
                cy="195.737"
                r="69.5"
                stroke="#E94435"
                strokeOpacity="0.75"
                strokeWidth="61"
              />
              <rect
                id="Rectangle 41_2"
                x="234.495"
                y="69.7797"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(24.8772 234.495 69.7797)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 43_2"
                x="313.898"
                y="144.737"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(74.2923 313.898 144.737)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 44_2"
                x="322.704"
                y="201.874"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(101.777 322.704 201.874)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 45_2"
                x="308.704"
                y="255.026"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(121.716 308.704 255.026)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 46_2"
                x="272.897"
                y="299.145"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(143.847 272.897 299.145)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 47_2"
                x="219.352"
                y="324.904"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(173.686 219.352 324.904)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 48_2"
                x="161.981"
                y="324.153"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(-166.937 161.981 324.153)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 49_2"
                x="112.802"
                y="303.475"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(-144.761 112.802 303.475)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 50_2"
                x="74.0168"
                y="262.23"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(-112.562 74.0168 262.23)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 51_2"
                x="58.5197"
                y="210.214"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(-91.2807 58.5197 210.214)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 52_2"
                x="63.2111"
                y="154.418"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(-66.4942 63.2111 154.418)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 53_2"
                x="87.6065"
                y="109.675"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(-40.6926 87.6065 109.675)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 54_2"
                x="130.344"
                y="78.7874"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(-25.4927 130.344 78.7874)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 55_2"
                x="181.502"
                y="63.0663"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(-0.16332 181.502 63.0663)"
                fill="#E94435"
                fillOpacity="0.75"
              />
              <rect
                id="Rectangle 42_2"
                x="280.697"
                y="98.0141"
                width="23.2503"
                height="35.0703"
                rx="10"
                transform="rotate(46.2758 280.697 98.0141)"
                fill="#E94435"
                fillOpacity="0.75"
              />
            </g>
          </g>
        </svg>
      ),
      phone: (
        <svg
          width="250"
          height="240"
          viewBox="0 0 250 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame">
            <path
              id="Vector"
              d="M208.333 226.21L171.656 158.26C171.573 158.3 151.094 167.96 150.156 168.37C126.823 179.23 79.3334 90.17 102.146 78.43L123.844 68.17L87.4584 0L65.5209 10.39C-9.49994 47.94 109.615 270.21 186.354 236.54C187.615 235.99 208.25 226.25 208.333 226.21Z"
              fill="#8364F2"
              fillOpacity="0.75"
            />
            <path
              id="Bar2"
              d="M150.31 66.3158C165.145 72.0867 190.229 100.077 191.489 116.873L183.128 116.873C182.79 103.704 162.294 79.3492 150.31 77.591L150.31 66.3158Z"
              fill="white"
              fillOpacity="0.75"
            />
            <path
              id="Bar3"
              d="M150.28 40.5263C167.052 45.4399 212.44 96.2669 211.702 116.316L201.596 116.316C201.91 97.0972 160.909 52.5325 150.28 52.9783L150.28 40.5263Z"
              fill="white"
              fillOpacity="0.75"
            />
            <path
              id="Bar4"
              d="M150.532 15.2631C172.539 17.9084 236.669 92.2939 232.258 116.31L222.151 116.311C223.717 91.6261 165.926 28.6693 150.532 27.8948L150.532 15.2631Z"
              fill="white"
              fillOpacity="0.75"
            />
            <path
              id="Bar1"
              d="M150 117.067L150 90C164.355 99.2372 168.854 100.831 172.872 117.067L150 117.067Z"
              fill="white"
              fillOpacity="0.75"
            />
          </g>
        </svg>
      ),
      clock: (
        <svg
          width="187"
          height="235"
          viewBox="0 0 187 235"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Component 5">
            <rect
              id="Rectangle 31"
              width="187"
              height="27.3256"
              fill="#F8BC30"
              fillOpacity="0.75"
            />
            <rect
              id="Rectangle 35"
              width="187"
              height="27.3256"
              transform="matrix(1 0 0 -1 0 235)"
              fill="#F8BC30"
              fillOpacity="0.75"
            />
            <path
              id="Rectangle 37"
              d="M186.822 24.9788C183.047 -15.5895 145.884 3.21042 169.319 24.9788C192.754 46.7473 112.434 108.193 114.622 118.1C116.81 128.006 132.125 133.95 132.672 118.1C133.219 102.249 190.596 65.5472 186.822 24.9788Z"
              fill="#F8BC30"
              fillOpacity="0.75"
            />
            <path
              id="Rectangle 38"
              d="M186.822 211.114C183.047 251.683 145.884 232.883 169.319 211.114C192.754 189.346 112.434 127.9 114.622 117.993C116.81 108.087 132.125 102.143 132.672 117.993C133.219 133.844 190.596 170.546 186.822 211.114Z"
              fill="#F8BC30"
              fillOpacity="0.75"
            />
            <path
              id="Rectangle 39"
              d="M0.189048 23.8858C4.18929 -16.6825 43.5708 2.1174 18.7369 23.8858C-6.097 45.6542 79.0176 107.1 76.6991 117.007C74.3806 126.913 58.1512 132.857 57.5716 117.007C56.992 101.156 -3.81119 64.4541 0.189048 23.8858Z"
              fill="#F8BC30"
              fillOpacity="0.75"
            />
            <path
              id="Rectangle 40"
              d="M0.189048 210.021C4.18929 250.589 43.5708 231.79 18.7369 210.021C-6.097 188.253 79.0176 126.807 76.6991 116.9C74.3806 106.994 58.1512 101.05 57.5716 116.9C56.992 132.751 -3.81119 169.453 0.189048 210.021Z"
              fill="#F8BC30"
              fillOpacity="0.75"
            />
            <path
              id="SandBottom"
              d="M93.5 137.721C125.191 155.901 141.816 171.726 169.793 208.221H17.2072C40.8839 176.196 56.387 159.877 93.5 137.721Z"
              fill="white"
              fillOpacity="0.75"
            />
            <path
              id="SandTop"
              d="M93.2832 97.5C61.5977 79.3109 44.9763 63.482 17.0097 26.9791L169.595 27.0209C145.91 59.0395 130.402 75.3536 93.2832 97.5Z"
              fill="white"
              fillOpacity="0.75"
            />
          </g>
        </svg>
      ),
      trophy: (
        <svg
          width="238"
          height="295"
          viewBox="0 0 238 295"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Component11">
            <g id="Frame" clipPath="url(#clip0)">
              <path
                id="Vector"
                d="M49.5833 64C49.5833 158.354 100.208 180.01 105.156 218H132.973C137.901 180.01 188.417 158.354 188.417 64H49.5833ZM119.059 204.718C115.013 195.112 109.45 185.862 103.709 176.295C89.607 152.829 73.8494 126.611 70.2001 83.25H167.8C164.151 126.62 148.433 152.839 134.361 176.314C128.639 185.872 123.096 195.121 119.059 204.718V204.718ZM119 175.14C107.844 150.471 100.664 121.25 100.585 92.875H86.87C90.5788 122.886 105.285 160.471 119 175.14V175.14ZM238 83.25C234.311 122.761 210.154 161.126 169.843 174.091C172.788 168.778 175.753 163.07 178.589 156.929C207.496 142.29 218.623 116.023 222.857 96.7635H196.201C196.786 92.4323 197.223 87.8893 197.58 83.2404H238V83.25ZM0 83.25C3.689 122.761 27.846 161.126 68.1573 174.091C65.212 168.778 62.2469 163.07 59.4108 156.929C30.5037 142.29 19.3772 116.023 15.1427 96.7635H41.7988C41.2236 92.4419 40.7873 87.8893 40.4303 83.25H0V83.25ZM133.26 227.625H104.839C102.836 239.05 88.6748 252.833 69.4266 252.833V295H168.593V252.833C148.77 252.833 135.164 239.05 133.26 227.625ZM158.667 285.375H79.3333V266.125H158.667V285.375Z"
                fill="#ED72D9"
                fillOpacity="0.75"
              />
            </g>
            <rect
              id="spark1"
              x="28.4075"
              y="7.00002"
              width="43.1017"
              height="14"
              transform="rotate(54.5691 28.4075 7.00002)"
              fill="white"
              fillOpacity="0.75"
            />
            <rect
              id="spark2"
              x="126.389"
              y="0.126419"
              width="43.1017"
              height="14"
              transform="rotate(90.5174 126.389 0.126419)"
              fill="white"
              fillOpacity="0.75"
            />
            <rect
              id="spark3"
              x="214.874"
              y="12.9053"
              width="43.1017"
              height="14"
              transform="rotate(114.949 214.874 12.9053)"
              fill="white"
              fillOpacity="0.75"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="238"
                height="231"
                fill="white"
                transform="translate(0 64)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      lang: (
        <svg
          width="233"
          height="245"
          viewBox="0 0 233 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Component 6">
            <path
              id="World"
              d="M109.533 113.092C109.242 112.542 112.383 112.242 112.942 112.242C113.558 112.317 111.308 116.008 109.533 113.092ZM91.6 87.4917L92.5 87.2333C93.0333 87.6917 91.9 88.025 92.075 88.3667C92.7917 89.6583 92.25 90.4333 92.1417 91.1333C92.025 91.8417 91.275 91.5333 90.9 91.9083C90.4583 92.4583 93.05 92.5333 93.0833 92.6167C93.175 92.8917 89.9583 93.3583 90.55 94.0417C91.35 95.175 97.4167 92.4167 96.45 92.575C98.325 91.6333 96.6917 91.5333 95.6417 90.9917C95.2833 89.2 94.9833 86.4333 93.8667 85.325L94.6 84.475C92.8833 81.9833 91.6 87.4917 91.6 87.4917ZM200 145C200 200.225 155.225 245 100 245C44.7667 245 0 200.225 0 145C0 89.775 44.7667 45 100 45C155.225 45 200 89.775 200 145ZM130.75 100.242C130.7 99.025 129.167 97.875 127.567 99.9833C126.442 101.433 126.642 103.642 126.033 104.625C125.167 106.083 130.758 107.45 130.758 106.075C130.967 103.767 136.858 105.55 138.008 105.867C140.075 106.442 143.367 103.983 139.767 102.692C136.808 101.608 135.25 100.45 134.983 98.3333C134.983 98.3333 136.55 96.8667 135.867 96.95C134.05 97.175 130.75 103.5 130.75 100.242ZM183.217 145C183.217 136.375 181.742 127.667 180.242 123.067C179.758 121.617 178.667 120.467 177.25 119.917C175.117 119.083 166.108 124.892 164.75 122.033C163.858 120.125 162.05 123.25 159.983 122.1C158.983 121.55 156.2 117.808 154.942 118.267C152.367 119.192 158.892 126.3 160.675 127.233C162.35 125.967 167.775 123.358 168.942 126.917C171.175 133.617 162.8 140.958 158.517 144.825C152.117 150.608 153.317 141.083 148.958 137.725C146.667 135.967 146.692 132.225 144.375 130.933C143.342 130.35 138.6 124.892 138.642 124.158L138.5 125.542C137.717 126.133 136.05 123.308 135.875 122.867C135.875 125.325 139.875 129.242 141.2 131.208C143.458 134.583 144.667 139.5 147.433 142.258C148.917 143.742 154.583 149.875 156.058 149.742C157.667 149.6 162.75 145.925 163.65 146.133C169.017 147.4 151.017 172.842 149.308 175.992C147.9 178.633 150.458 185.167 150.25 188.292C150.008 191.9 147.167 193.067 144.475 195.033C141.592 197.142 142.267 201.242 139.842 202.742C135.533 205.392 132.433 214.017 126.317 213.975C124.517 213.967 116.817 216.975 115.808 214.033C115.025 211.9 113.975 210.283 112.867 208.175C111.783 206.108 112.742 203.967 111.425 202.142C110.517 200.875 107.467 198 107.192 196.5C107.175 195.208 108.167 191.283 109.525 190.6C111.433 189.625 109.892 186.783 109.658 185.133C109.258 182.183 107.433 179.75 105.242 178.042C102 175.55 103.675 173.567 104.433 170.008C104.433 168.308 103.4 166.075 101.117 166.742C96.4167 168.108 97.8417 163.075 94.4167 163.3C91.95 163.475 89.9333 165.042 87.6417 165.733C84.7583 166.6 81.8083 165.05 78.9583 164.692C67.2333 163.208 63.4083 149.808 66.4667 140.142C66.775 138.558 65.5167 135.625 66.0667 134.4C67.3833 131.467 70.0667 128.175 72.4167 125.95C73.7333 124.7 75.425 125.017 76.975 124.042C79.3667 122.533 79.4 119.433 81.7417 117.533C85.075 114.825 89.625 114.883 93.975 114.3C96.2917 113.992 105.108 112.083 106.5 113.8C106.5 114.117 108.092 118.833 106.342 118.567C109.95 118.758 115.092 124.808 118.517 123.392C120.275 122.658 119.633 117.258 123.242 119.867C125.425 121.433 135.208 122.133 137.242 120.442C138.492 119.408 139.192 112.692 137.675 111.933C138.642 112.892 132.583 112.967 132.017 112.75C131.017 112.383 130.083 113.7 128.475 112.958C129.442 113.417 123.092 110.008 126.658 107.4C125.167 108.492 123.775 107.092 122.167 108.292C121.058 109.192 122.683 109.792 121.1 110.575C118.583 111.85 116.683 106.2 115.733 105.558C114.767 104.925 107.283 99.675 109.317 103.1L115.892 109.642C115.567 109.85 114.167 107.258 114.167 109.15C114.608 108.025 114.333 113.975 113.3 112.042C112.842 111.3 114.05 110.883 113.35 109.808C113.35 109.1 111.45 108.408 111.083 107.925C110.042 106.633 107.275 103.783 105.775 103.1C105.358 102.908 99.4083 103.825 98.9083 104.017C98.325 104.833 97.825 105.692 97.4167 106.608C96.1833 107.067 95.025 107.658 93.925 108.392L92.6167 111.333C92.05 111.842 86.2417 113.758 86.2083 113.833C86.45 113.208 82.15 112.408 82.4333 111.158C82.75 109.783 84.2083 105.492 83.8333 103.925C83.4333 102.283 92.7833 106.292 93.3833 101.967C93.625 100.092 93.7667 97.9083 90.775 97.5917C91.3417 97.6583 96.5667 95.5417 97.4333 94.5917C98.65 93.1917 101.442 90.9083 103.467 90.9083C105.833 90.9083 105.325 87.4667 106.417 85.7833C107.508 86.225 105.833 88.9167 107.142 90.0083C107.058 89.15 110.85 90.4833 111.217 90.2833C112.083 89.8333 116.917 90.1 116.167 87.8333C115.333 85.525 116.592 86.2083 117.675 85.725C117.492 85.8 120.508 80.5667 121.025 82.2833C120.667 80.5167 117.517 82.9 116.417 82.8083C113.875 82.6083 114.95 78.475 115.908 77.2667C116.65 76.3083 113.883 75.1333 113.85 76.9667C113.8 79.7083 111.25 82.1917 111.842 85.8333C112.742 91.325 105.717 84.5083 105.1 84.8833C102.767 86.3 100.858 83.1 102.067 81.1833C103.3 79.225 106.275 79.3167 107.5 77.2167C108.367 75.7333 109.375 74.0083 110.708 72.8833C115.167 69.1417 116.4 72.1333 120.842 72.5417C125.183 72.9417 122.308 73.575 121.708 75.2417C121.133 76.825 124.092 77.3917 125.117 76.0667C125.7 75.3 127.025 73.375 127.6 71.95C128.342 70.1 135.108 70.3083 130.383 67.4833C127.267 65.625 113.683 61.8833 104.583 61.8833C102.617 61.8833 101.242 64.075 99.7417 65.3167C96.775 67.775 89.175 72.6 84.95 71.1333C80.625 69.6417 71.3667 76.6333 69.8833 76.6833C69.3417 76.7167 69.9167 71.4 72.8667 71.0083C71.5917 71.2 83.2583 65.1167 82.9417 63.85C82.5583 62.35 59.6167 70.7 60.6417 72.375C61.1333 73.1417 63.1333 73.1417 60.5083 74.825C59.0083 75.7333 57.4083 81.5 56 81.5C51.7917 83.3417 51.525 77.875 46.8417 84.9083L39.3917 87.9083C28.325 99.6667 20.6667 114.558 17.8917 131.1C17.7833 131.758 20.675 132.983 21.05 133.433C21.9833 134.55 21.9833 139.367 22.4417 140.942C23.5917 144.925 26.4333 147.142 28.6083 150.767C29.8917 152.925 32.025 158.383 31.35 160.65C32.25 159.167 40.2667 167.442 41.7333 169.167C45.1833 173.225 47.8417 178.142 42.2417 182.158C40.4333 183.458 44.9917 191.567 42.6417 193.558L39.6333 194.333C36.6667 196.158 38.0083 200.633 39.8083 202.517C54.9583 218.358 76.3083 228.242 99.975 228.242C145.95 228.242 183.217 190.975 183.217 145ZM87.325 92.025C88.3667 91.5667 89.7667 91.5833 89.9167 90.1917C90.0417 88.9583 90.2833 89.8083 90.5833 89.3583C90.875 88.9167 90.025 88.2083 89.6667 88.1417C89.1333 88.025 88.7667 88.7167 88.425 89.0083L87.825 89.1667L87.2583 89.8917L87.325 90.2917L86.6 91.175C85.8917 91.875 86.6167 92.3333 87.325 92.025Z"
              fill="#4387F4"
              fillOpacity="0.75"
            />
            <path
              id="Globe"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M200.173 77.75C196.696 91.6288 190.621 100.25 188 104C185.379 100.25 179.3 91.6325 175.827 77.75H200.173ZM228.912 77.75C223.07 90.4662 211.475 99.9987 197.465 102.999C202.396 95.2438 205.873 86.6413 207.879 77.75H228.912ZM147.088 77.75H168.121C170.142 86.6975 173.634 95.2925 178.535 102.999C164.525 99.9987 152.93 90.4662 147.088 77.75ZM201.65 70.25H174.35C173.262 62.8063 173.262 55.1975 174.35 47.75H201.654C202.734 55.1975 202.734 62.8063 201.65 70.25ZM166.779 70.25H144.421C143.491 66.6575 143 62.885 143 59C143 55.115 143.491 51.3462 144.421 47.75H166.779C165.792 55.205 165.792 62.795 166.779 70.25ZM231.579 70.25H209.218C210.211 62.795 210.211 55.205 209.221 47.75H231.579C232.505 51.3462 233 55.115 233 59C233 62.885 232.505 66.6575 231.579 70.25ZM200.173 40.25H175.827C179.296 26.3675 185.375 17.75 188 14C192.478 20.405 197.165 28.2463 200.173 40.25ZM168.118 40.2463H147.084C152.93 27.5337 164.525 18.0012 178.535 14.9975C173.896 22.2725 170.233 30.8862 168.118 40.2463ZM228.912 40.2463H207.879C205.79 31.0138 202.205 22.4338 197.461 14.9975C211.471 18.0012 223.07 27.5337 228.912 40.2463Z"
              fill="white"
              fillOpacity="0.75"
            />
          </g>
        </svg>
      ),
    };
    return SvgList[selectedSvg];
  };

  const CreateSection = (
    sectionName: Sections,
    sectionTitle: string,
    svg: JSX.Element
  ) => {
    return (
      <div
        className={`Superficial ${sectionName}`}
        onClick={() =>
          sectionSelected === "Initial" || sectionSelected === "ExitSections"
            ? setSectionSelected(sectionName)
            : null
        }
      >
        <div className="titleContainer">
          <div className="centerBar">
            <div className="innerLine1" />
            <div className="outerCircle">
              <div className="innerCircle" />
            </div>
          </div>
          <div className="outerBar">
            <h1>{sectionTitle}</h1>
            <div className="innerLine2" />
          </div>
        </div>

        <div className="InitBox">
          <div className="animBox">{svg}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <PersonalComponent
        sectionSelected={sectionSelected}
        setSection={(input: Sections) => setSectionSelected(input)}
        personalRef={PersonalRef}
      />

      {CreateSection("Skills", `${t("Home.Skills")}`, ReturnSvg("screw"))}
      {CreateSection("Education", `${t("Home.Education")}`, ReturnSvg("book"))}
      {CreateSection(
        "Experience",
        `${t("Home.Experience")}`,
        ReturnSvg("clock")
      )}
      {CreateSection("Langs", `${t("Home.Languages")}`, ReturnSvg("lang"))}
      {CreateSection(
        "Achievements",
        `${t("Home.Achievements")}`,
        ReturnSvg("trophy")
      )}
      {CreateSection("Contact", `${t("Home.Contact")}`, ReturnSvg("phone"))}

      <AnimationBoxesComponent
        sectionSelected={sectionSelected}
        setSection={(input: Sections) => setSectionSelected(input)}
      />
      <span className="Loader">
        <span className="box">
          <div className="AnimBox">
            <div className="Box1"></div>
            <div className="Box2"></div>
            <div className="Box3"></div>
            <div className="Box4"></div>
          </div>
          <h1>Loading . . .</h1>
        </span>

        <div className="MovingBox"></div>
      </span>

      <div className="staticBg">
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
        <div className="line4" />
        <div className="line5" />
        <div className="line6" />
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
