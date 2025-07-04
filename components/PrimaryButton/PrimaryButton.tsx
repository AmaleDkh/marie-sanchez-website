// Next element
import Link from 'next/link';

// Style
import './PrimaryButton.scss';

interface ButtonProps {
  text: string;
  link: string;
  marginTopVersion?: string;
  mobileVersion?: string;
  centerVersion?: string;
  colorVersion?: string;
}

function PrimaryButton({
  text,
  link,
  marginTopVersion,
  mobileVersion,
  centerVersion,
  colorVersion,
}: ButtonProps) {
  return (
    <Link
      className={`button ${marginTopVersion} ${mobileVersion} ${centerVersion} ${colorVersion}`}
      href={link}
    >
      {text}
    </Link>
  );
}

export default PrimaryButton;
