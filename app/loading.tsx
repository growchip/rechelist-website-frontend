import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="loader-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop stopColor="var(--primary-primary-css)" offset="0%" />
            <stop stopColor="var(--secondary-primary2-css)" offset="100%" />
          </linearGradient>
        </defs>
      </svg>
      <AiOutlineLoading3Quarters
        className="loading-icon"
        style={{ fill: "url(#loader-gradient)" }}
      />
    </div>
  );
};

export default Loading;
