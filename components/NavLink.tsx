import Link from 'next/link';


type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/?category=${category}&p=0`}
      className={`navLink 
      ${isActive && 'underline decoration-orange-400 underline-offset-4 font-semibold sm:font-bold sm:text-lg'}`}
    >
      {category}
    </Link>
  );
}

export default NavLink;
