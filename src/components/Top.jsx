import Menu from "./Menu";
import MenuBottom from "./MenuBottom";
import "./top.css"
const Top = ({ onOpen }) => {
  return (
    <div>
      <Menu onOpen={onOpen} />
      <MenuBottom />
      <video   className="background-video" width="1500"  style={{margin:"auto"}} autoPlay muted loop={true} >
<source src="https://res.cloudinary.com/dsryrpt1t/video/upload/f_auto:video,q_auto/dvitrjlthqelrwhkhy8s" type="video/mp4" />
Your browser does not support the video tag.
</video>
    </div>
  );
};

export default Top;
