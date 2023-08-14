import { Link } from "react-scroll";
import logo from "./../assets/Atlas 1.png";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

const Menu = ({ onOpen }) => {
  const navigate = useNavigate();
  return (
    <div className="top_section_menubar">
      {/* <div className="top_section_menubar_1" onClick={() => navigate("/")}>
        <img src={logo} alt="main_logo" />
      </div> */}

      <div className="logoo">
   
      <span className="svg">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="60" height="60" viewBox="0 0 226.000000 300.000000"
      preserveAspectRatio="xMidYMid meet">
     <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
     stroke="none">
     <path d="M1172 2976 c-45 -6 -83 -15 -82 -21 0 -6 48 -11 117 -13 195 -5 325
     -44 474 -141 175 -116 291 -275 345 -476 29 -106 27 -296 -4 -395 -79 -250
     -250 -436 -492 -534 -126 -51 -230 -69 -369 -64 -102 4 -130 10 -238 46 -187
     63 -308 142 -396 261 -69 93 -96 139 -134 230 -41 101 -58 124 -48 66 20 -113
     103 -298 167 -370 185 -212 374 -320 619 -356 46 -7 89 -16 95 -21 32 -24 -40
     -169 -136 -275 -51 -56 -78 -105 -87 -158 -4 -27 -13 -36 -47 -51 -42 -19
     -110 -72 -179 -137 -27 -27 -49 -38 -85 -43 -58 -8 -103 -30 -171 -84 -122
     -97 -261 -263 -261 -314 0 -35 -12 -43 -85 -55 -145 -24 -175 -33 -175 -53 0
     -17 39 -18 1115 -18 773 0 1115 3 1115 11 0 14 -56 36 -156 60 -76 18 -105 28
     -201 72 -39 18 -24 89 45 217 19 34 34 83 42 130 6 41 26 114 45 161 37 92 45
     166 24 213 -26 55 -121 96 -227 98 -91 1 -226 -13 -241 -26 -10 -8 -10 -3 2
     19 24 44 37 58 87 92 66 45 136 124 166 188 15 31 33 59 39 61 7 3 28 -4 47
     -16 46 -27 72 -17 118 45 19 26 50 62 69 80 30 29 33 37 32 88 0 31 -8 71 -17
     88 -16 31 -15 33 31 131 188 400 54 862 -324 1117 -182 123 -417 177 -639 147z
     m213 -2366 c46 -23 222 -18 308 8 l67 21 -20 -26 c-14 -18 -20 -41 -20 -79 0
     -29 -5 -65 -10 -80 -6 -15 -14 -83 -19 -151 -6 -101 -11 -128 -28 -151 l-20
     -27 -469 3 c-258 1 -516 -1 -574 -6 -119 -10 -140 -4 -140 38 0 76 38 101 203
     130 68 12 124 28 150 43 23 13 64 27 90 29 31 4 69 19 106 42 33 20 67 36 76
     36 31 0 139 64 186 111 26 25 53 62 60 83 13 35 14 36 19 15 3 -13 19 -31 35
     -39z"/>
     </g>
     </svg>
  </span>
  <h2>ATLAS</h2>
      </div>

      
      <div className="top_section_menubar_2">
        <button className="top_section_menubar_2_button1">
          <Link to="services" smooth={true} duration={500}>
            Our Services
          </Link>
        </button>
      {/*   <button
          className="top_section_menubar_2_button3"
          onClick={() => navigate("/career")}
        >
          Jobs/Careers
        </button> */}
        <button className="top_section_menubar_2_button2" onClick={onOpen}>
          Join our newsletter
        </button>
      </div>
    </div>
  );
};

export default Menu;
