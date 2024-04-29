import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between m-6">
        <div className="flex gap-4">
          <Image src="/vercel.svg" alt="logo" width={20} height={20}></Image>
          <h1>Logo</h1>
        </div>

        <ul className="flex gap-10 ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <Link href="/login"> Login</Link>
          <li>Register</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
