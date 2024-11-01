// Next element
import Image from 'next/image';

function ImageBlock({ src, alt, className }) {
  return <Image src={src} alt={alt} className={className} />;
}

export default ImageBlock;
