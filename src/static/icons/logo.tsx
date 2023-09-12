interface LogoProps {
  width: number;
  height: number;
  fill: string;
}

const Logo: React.FC<LogoProps> = ({ width, height, fill }) => {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1621 1177"
      width={width}
      height={height}
      fill={fill}
    >
      <g id="Layer 2">
        <g id="&lt;Group&gt;">
          <g id="logo 4 ">
            <g id="&lt;Group&gt;">
              <path
                id="&lt;Compound Path&gt;"
                fillRule="evenodd"
                className="s0"
                d="m935.7 0.1l-211.7 604.9-133.2 380.3h-306l-254.9-441.5-29.1-50.3 29.1-50.4 255.6-443zm-612.6 493.4l206-356.8h-161.8l-205.9 356.8 205.9 356.7h161.8z"
              />
              <path
                id="&lt;Compound Path&gt;"
                fillRule="evenodd"
                className="s0"
                d="m1620.5 683.5l-29.1 50.4-255.6 442.9h-650.1l211.7-604.8 133.1-380.4h306.1l254.8 441.7zm-160.5 0l-205.9-356.8h-161.7l206 356.8-206 356.7h161.7z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
