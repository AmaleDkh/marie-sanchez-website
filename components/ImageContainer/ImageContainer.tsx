// Next element
import Image from 'next/image';

function ImageContainer({ src, alt }) {
  return <Image src={src} alt={alt} className="image-container" />;
}

export default ImageContainer;
