// Next element
import Link from 'next/link';

// Style
import './SecondaryButton.scss';

interface SecondaryButtonProps {
  link: string;
  label: string;
  centerVersion?: string;
  marginTopVersion?: 'margin-top-version';
}

function SecondaryButton({
  link,
  label,
  centerVersion,
  marginTopVersion,
}: SecondaryButtonProps) {
  return (
    <Link
      href={link}
      className={`secondary-button secondary-button--${marginTopVersion} ${centerVersion}`}
    >
      {label}
    </Link>
  );
}

export default SecondaryButton;
