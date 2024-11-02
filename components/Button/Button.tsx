// Next element
import Link from 'next/link';

function Button({ link, text, className }) {
  return (
    <Link href={link} className={className}>
      {text}
    </Link>
  );
}

export default Button;

{
}
