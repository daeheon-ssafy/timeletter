import React, {useEffect} from "react";
import Helmet from "react-helmet";
import "./ufo.css";
function Ufo() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "./Ufo2.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div>
      <Helmet>

        <script src="https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/gsap.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MotionPathPlugin.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MotionPathHelper.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/ScrubGSAPTimeline.js"></script>
      </Helmet>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 914.15 946.11">
        <defs>
          <linearGradient
            id="gradientOne"
            x1="456.36"
            x2="456.36"
            y1="416.65"
            y2="861.47"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset=".79" stopColor="#cefbff" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="gradientTwo"
            x1="467.04"
            x2="468.61"
            y1="471.42"
            y2="794.45"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".02" stopColor="#73f5b8" />
            <stop offset=".18" stopColor="#7ef4c7" stopOpacity=".86" />
            <stop offset=".5" stopColor="#93f2e2" stopOpacity=".6" />
            <stop offset=".65" stopColor="#9bf1ed" stopOpacity=".5" />
            <stop offset={1} stopColor="#fff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <g className="bg">
          <path fill="#1c144e" d="M913.37 914.16V.79H0v913.37" />
          <path
            fill="url(#gradientOne)"
            d="M893.75 680a81 81 0 0 0-21.15 2.83c-7.78-58.49-48.69-103.1-98-103.1h-2.44c-49.32 0-90.23 44.61-98 103.1A81 81 0 0 0 653 680c-36.38 0-68.17 24.27-85.48 60.47a25.37 25.37 0 0 0-2-2.86c-8-10-21.1-10-29.15 0a26.53 26.53 0 0 0-4.55 8.54c-12.24-10.93-27.24-17.4-43.47-17.4a61 61 0 0 0-20.47 3.57 28.42 28.42 0 0 0-6-15.76 2.62 2.62 0 0 0-4.22 0 28.48 28.48 0 0 0-5.94 15.76 61 61 0 0 0-20.47-3.57c-16.23 0-31.23 6.47-43.47 17.4a26.72 26.72 0 0 0-4.55-8.54c-8-10-21.1-10-29.15 0a25.37 25.37 0 0 0-2 2.86c-17.23-36.23-49.03-60.47-85.4-60.47a81.07 81.07 0 0 0-21.16 2.83c-7.78-58.49-48.68-103.1-98-103.1H145.09c-49.32 0-90.23 44.61-98 103.1A80.84 80.84 0 0 0 0 684.22v261.89h912.73V682.23a81.47 81.47 0 0 0-18.98-2.23z"
            opacity=".4"
          />
          <path fill="#1d1551" d="M0 806.5s441.79-224.43 913.37-.1v107.76H0z" />
        </g>
        <g opacity="0.5" className="stars" fill="#fff">
          <circle
            className="star"
            cx="677.68"
            cy="589.97"
            r="4.7"
            fill="#fff"
            opacity=".55"
          />
          <circle
            className="star"
            cx="526.68"
            cy="538.97"
            r="4.7"
            fill="#fff"
            opacity=".55"
          />
          <circle
            className="star"
            cx="567.69"
            cy="62.34"
            r="6.83"
            opacity=".8"
          />
          <path
            className="star"
            d="M865.77 301.35a4.7 4.7 0 1 1-4.69-4.69 4.69 4.69 0 0 1 4.69 4.69zM709.31 352.56a6.83 6.83 0 1 1-6.83-6.83 6.82 6.82 0 0 1 6.83 6.83z"
            opacity=".8"
          />
          <circle
            className="star"
            cx="579.5"
            cy="252.12"
            r="6.83"
            opacity=".6"
          />
          <circle
            className="star"
            cx="773.18"
            cy="456.67"
            r="6.83"
            opacity=".55"
          />
          <circle
            className="star"
            cx="865.77"
            cy="493.49"
            r="6.83"
            opacity={1}
          />
          <path
            className="star"
            d="M914.15 155.44a6.83 6.83 0 1 1-6.83-6.83 6.82 6.82 0 0 1 6.83 6.83zM36.47 567.87c4.64 6.09-.32 12.84-6.34 11.7a6.8 6.8 0 0 1-5.36-5.36c-1.14-6.01 5.61-10.98 11.7-6.34zM515.35 486.66a6.83 6.83 0 1 1-6.82-6.83 6.82 6.82 0 0 1 6.82 6.83zM324.11 373a6.83 6.83 0 1 1-6.83-6.83 6.82 6.82 0 0 1 6.83 6.83z"
            opacity=".6"
          />
          <circle
            className="star"
            cx="735.67"
            cy="233.76"
            r="6.83"
            opacity=".8"
          />
          <circle
            className="star"
            cx="360.71"
            cy="650.04"
            r="4.7"
            opacity=".6"
          />
          <circle
            className="star"
            cx="249.71"
            cy="566.04"
            r="4.7"
            opacity=".55"
          />
          <circle
            className="star"
            cx="203.98"
            cy="143.91"
            r="4.7"
            opacity={1}
          />
          <circle
            className="star"
            cx="63.6"
            cy="296.66"
            r="6.83"
            opacity=".8"
          />
          <path
            className="star"
            d="M389.2 258.94a6.83 6.83 0 1 1-6.83-6.83 6.83 6.83 0 0 1 6.83 6.83zM84.08 37.39a6.83 6.83 0 1 1-6.83-6.83 6.82 6.82 0 0 1 6.83 6.83zM348.65 109.27a4.7 4.7 0 1 1-4.7-4.7 4.7 4.7 0 0 1 4.7 4.7zM766.36 83.56a4.7 4.7 0 1 1-4.7-4.7 4.7 4.7 0 0 1 4.7 4.7zM184.77 444.27a4.7 4.7 0 1 1-4.7-4.69 4.69 4.69 0 0 1 4.7 4.69z"
            opacity=".55"
          />
        </g>
        <g opacity={0} className="alien">
          <ellipse
            className="groundlight"
            opacity={0}
            cx="468.66"
            cy="806.4"
            fill="#9bf1ed"
            rx="117.66"
            ry="31.9"
          />
          <path
            className="light"
            fill="url(#gradientTwo)"
            d="M586.32 804.28l-83.71-306.01-70.33.18L351 806.5"
          />
          <g className="spaceship">
            <path
              fill="#344776"
              d="M401.16 454.48s18.54-53.65 68.07-54.16 67 54.16 67 54.16z"
            />
            <path
              fill="#f3f3ff"
              d="M537.14 455.65h-138.4s-1.16-11.37 70.23-11.38c66.69 0 68.17 11.38 68.17 11.38"
            />
            <path
              fill="#5f5db6"
              d="M592.39 487H343.44s-2.1-37.77 126.32-37.78c120 0 122.63 37.78 122.63 37.78"
            />
            <path
              fill="#48739b"
              d="M591.89 490.07C577 515 418.8 507.92 418.8 507.92s-88.42-5.81-73.06-25.73S453.66 459.77 492.27 461s109.93 11.88 99.62 29.05"
            />
            <path
              className="lightring"
              fill="#fff"
              d="M425.36 508.5s-6.82-3.38 0-8.2 28.49-8.18 47-7.7 44.79 5.29 41.9 13-70.67 14.72-88.9 2.9z"
            />
            <path
              className="lightcircle"
              opacity={0}
              fill="#fff"
              d="M430 508.78s14-6.82 39.19-6.6 36.61 5.62 36.61 5.62-3.41 15-36.39 14.35S430 508.78 430 508.78z"
            />
            <path
              fill="#344776"
              d="M474.75 386.08a5.07 5.07 0 1 1-5.06-5.07 5.07 5.07 0 0 1 5.06 5.07z"
            />
            <path fill="#344776" d="M468.28 386.81h2.81v21.86h-2.81z" />
            <path
              fill="#9bf1ed"
              d="M521.51 439s.73 5.43-3.37 1.8-8.9-18.32-24.34-28.79c0-.01 22.27 12.46 27.71 26.99z"
              opacity=".48"
            />
          </g>
        </g>
        <g fill="#181d26" opacity={0} className="sheep">
          <g className="body">
            <path
              className="leg legthree"
              d="M454.94 808.31c1-2.2 5.6-4.57 6.72-1.26l.34-.05c1 3-1 19.45-6.15 17.06-3.85-1.84-2.25-12.72-.91-15.75z"
            />
            <path
              className="leg legfour"
              d="M442.47 804.79c2-2.16 4.49-1.76 6.21.29l.16.32a32.61 32.61 0 0 1-2.94 8.23c-.82 1.39-3.32 4.57-5.15 4.27-4.97-.81-.02-11.22 1.72-13.11z"
            />
            <path
              className="leg legone"
              d="M497.28 801.81c-.21-1.24-.7-3.7 0-4.78a2.31 2.31 0 0 1 3.82.11l-.14-.68c1.86 3.15 8.66 16 3.22 18.18-3.11 1.23-6.46-10.21-6.9-12.83z"
            />
            <path
              className="leg legtwo"
              d="M486.31 807.29c0-1.25.06-3.75 1-4.66a2.33 2.33 0 0 1 3.74.85v-.69c1.19 3.43 5.29 17.35-.49 18.37-3.35.59-4.34-11.22-4.25-13.87z"
            />
            <path d="M435.86 788.43c-.68 1.65-.11 3.75.52 5.33a7.13 7.13 0 0 0 5.1 4.47 16.2 16.2 0 0 0 .11 2.58 14.21 14.21 0 0 0 6.07 9.65c4.3 3 11.26 3.44 15.18.34 2.49 3.62 7.21 6.14 11.36 5.56 4.57-.64 8-5 8.37-9.29 3.89 3.34 10.29 4.15 14.17.47 2.76-2.62 3.63-7.48 2.94-11.06a10.62 10.62 0 0 0-1.19-3.23c3.79-.34 7.52-2.63 8.41-6.33.82-3.36-1.4-6.68-4.32-8.32a10.56 10.56 0 0 0-7.47-1.11 18 18 0 0 0-2.47-10.84 15.26 15.26 0 0 0-8.06-5.1 13.39 13.39 0 0 0-3.85-2.4 10.57 10.57 0 0 0-14.29 7.16c-3.71-2.31-9.61-1.82-13.25-.12a11.78 11.78 0 0 0-6.58 7.64 13 13 0 0 0-7.56 2 10.43 10.43 0 0 0-3.19 12.6z" />
          </g>
          <g className="head">
            <path d="M506.18 794.72c5 3.58 14.18 5.81 19.35 1.34 5.62-4.85 1.68-12.72-3.62-15.89-5.6-3.33-15.06-5.26-21.36-2.82a1 1 0 0 0-.34.15c-6.08 4.34 2.1 14.42 5.97 17.22z" />
            <path d="M493.26 771.88a6 6 0 0 0 .33 2.51 5.53 5.53 0 0 0-2.92 2.35c-1.36 2.4-.42 5.46 1.49 7.3a7.5 7.5 0 0 0 8.23 1.52 4.91 4.91 0 0 0 2.53-2.87c2 .71 4.29.58 5.55-.84 2.15-2.41.85-5.06-1.39-6.67a12.47 12.47 0 0 0 1.86-1.84 4.83 4.83 0 0 0-.05-6.34c-1.94-2-5-1.33-6.81.4a4.74 4.74 0 0 0-5.9-.56 7.15 7.15 0 0 0-2.92 5.04z" />
            <path
              className="rightear"
              d="M511 772.52a13.74 13.74 0 0 0-4.87 3.38c-.35.47-.76 1.28-.16 1.72s2.22.31 3 .33a24.37 24.37 0 0 0 7.32-.83 12 12 0 0 0 1.59-.58 11.65 11.65 0 0 1 1.45-.82c2.7-1.89 1-4.42-1.82-4.65a12.43 12.43 0 0 0-6.22 1.32z"
            />
            <path
              className="leftear"
              d="M498.48 791.64a13.24 13.24 0 0 1 3.41-4.77c.47-.35 1.3-.77 1.76-.18s.34 2.15.37 2.9a22.34 22.34 0 0 1-.75 7.14 9.91 9.91 0 0 1-.58 1.54 13 13 0 0 0-.82 1.42c-1.91 2.66-4.53 1-4.8-1.7a11.45 11.45 0 0 1 1.27-6.07c.05-.09.09-.18.14-.28z"
            />
          </g>
        </g>
      </svg>
      <a href="https://greensock.com" target="_blank">
        <img
          className="gsap-3-logo"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-3-logo.svg"
          width={150}
        />
      </a>
      {/* <Helmet>
      <script type="text/javascript" src="./Ufo2.js"></script>
      </Helmet> */}
    </div>
  );
}

export default Ufo;
