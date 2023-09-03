import BannerImage from './banner-image';
import BtnResume from './btn-resume';
import HeroTitle from './hero-title';

export default function HeroSection() {
  return (
    <div className="flex flex-col mt-14 mb-12">
      <div className="flex flex-col justify-center items-center">
        <HeroTitle />
        <BannerImage />
        <BtnResume />
      </div>
    </div>
  );
}
