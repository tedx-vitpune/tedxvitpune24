export default function Loader() {
	return (
	  <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  height="128px"
		  width="256px"
		  viewBox="0 0 256 128"
		  className="ip"
		>
		  <defs>
			<linearGradient y2="0" x2="1" y1="0" x1="0" id="grad1">
			  <stop stopColor="#015EDD" offset="0%"></stop>
			  <stop stopColor="#00B0F7" offset="33%"></stop>
			  <stop stopColor="#00B0F7" offset="67%"></stop>
			  <stop stopColor="#00B0F7" offset="100%"></stop>
			</linearGradient>
			<linearGradient y2="0" x2="0" y1="0" x1="1" id="grad2">
			  <stop stopColor="#016FED" offset="0%"></stop>
			  <stop stopColor="#015EEA" offset="33%"></stop>
			  <stop stopColor="#009BF4" offset="67%"></stop>
			  <stop stopColor="#015EDD" offset="100%"></stop>
			</linearGradient>
		  </defs>
		  <g strokeWidth="16" strokeLinecap="round" fill="none">
			<g stroke="#ddd" className="ip__track">
			  <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"></path>
			  <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"></path>
			</g>
			<g strokeDasharray="180 656">
			  <path
				d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"
				strokeDashoffset="0"
				stroke="url(#grad1)"
				className="ip__worm1"
			  ></path>
			  <path
				d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"
				strokeDashoffset="358"
				stroke="url(#grad2)"
				className="ip__worm2"
			  ></path>
			</g>
		  </g>
		</svg>
	  </div>
	);
  }
  