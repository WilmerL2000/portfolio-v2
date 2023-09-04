import Image from 'next/image';

export default function ErrorMessage() {
  return (
    <div className="mx-auto max-w-[85rem]">
      <div className="w-full h-screen md:flex text-center md:text-start relative pt-20 px-4">
        <div className="flex flex-col">
          <span className="font-semibold text-2xl md:text-4xl">Whooops!</span>
          <span>Sorry, the page you are looking for doesn&apos;t exist.</span>
        </div>
        <Image
          src="/404.svg"
          alt="Error 404 image"
          fill
          className="absolute md:translate-x-20"
        />
      </div>
    </div>
  );
}
