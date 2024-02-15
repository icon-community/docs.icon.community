import Link from 'next/link';

const Tile = ({ title, description, href }) => {
  return (
    <Link className="block max-w-sm px-4 py-6 overflow-hidden transition-all dark:hover:bg-zinc-900/50 hover:bg-zinc-100/50 text-decoration-none " href={href} passHref>
        
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="text-base text-gray-700 dark:text-gray-400">
            {description}
          </p>
        
    </Link>
  );
};

export default Tile;