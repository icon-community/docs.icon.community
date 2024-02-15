import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className='absolute right-0 w-full sm:w-[500px] grayscale-[50%] -rotate-90 sm:rotate-0 opacity-10 sm:opacity-100'>
      <Image 
        src='/images/background/hero-bridges.png' 
        alt='Bridges' 
        width={935} 
        height={608} 
        className=''
      />
    </div>
  );
};

export default HeroImage;