import Image from 'next/image';

import OfficeDecoration2 from '../../assets/images/office-decoration2.webp';

function ImageBlock() {
  return (
    <div className="image-block-container">
      <Image
        src={OfficeDecoration2}
        alt="Image d'une commode avec des objets de décoration"
        className="image-block-container__image"
        width={4000}
        height={600}
      />
    </div>
  );
}

export default ImageBlock;
