import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className='absolute right-0 h-full w-full sm:w-[50vh] grayscale-[50%] -rotate-90 sm:rotate-0 transition-all opacity-10 md:opacity-40 lg:opacity-100'>
      <Image 
        src='/images/background/hero-bridges.png' 
        alt='Bridges' 
        
        className=''
        layout='fill'
        objectFit='contain'
      />
    </div>
  );
};

export default HeroImage;