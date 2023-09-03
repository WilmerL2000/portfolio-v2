import BannerImage from './banner-image';
import BtnResume from './btn-resume';
import HeroTitle from './hero-title';

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-44">
        <HeroTitle />
        <div className="flex flex-col justify-center items-center">
          <BannerImage />
          <BtnResume />
        </div>
      </div>
    </div>
  );
}
