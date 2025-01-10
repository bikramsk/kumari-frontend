'use client';
import { useRouter } from 'next/navigation';

const ReadMoreButton = ({ link, label }) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(link);
  };

  return (
    <button 
      onClick={handleReadMore} 
      className="bg-black text-white uppercase py-4 px-11"
    >
      {label}
    </button>
  );
};

export default ReadMoreButton;