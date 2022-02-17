import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo3.png" alt="logo" width={77} height={77} />
        <h3>Chosen Members</h3>
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/members">
        <a>Member List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
