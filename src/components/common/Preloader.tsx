import "../../assets/css/main.scss";

interface PreloaderProps {
  isVisible: boolean;
}

const Preloader = ({ isVisible }: PreloaderProps) => {
  return (
    <div className={`loader-wrapper ${isVisible ? "" : "hidden"}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
