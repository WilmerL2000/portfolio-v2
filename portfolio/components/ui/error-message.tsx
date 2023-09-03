import Image from 'next/image';

export default function ErrorMessage() {
  return (
    <div className="w-full h-full md:flex text-center md:text-start mt-24 ">
      <div className="flex flex-col mt-20">
        <span className="font-semibold text-2xl md:text-4xl">Whooops!</span>
        <span>Sorry, the page you are looking for doesn&apos;t exist.</span>
      </div>
      <Image src="/404.svg" alt="Error 404 image" fill className="md:ml-16" />
    </div>
  );
}
