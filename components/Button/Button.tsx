// Next element
import Link from 'next/link';

function Button({ link, text }) {
  return (
    <Link href={link} className="button">
      {text}
    </Link>
  );
}

export default Button;

{
}
