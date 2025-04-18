import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './Links.js';

export default function SideNav() {
  return (
    <section className="flex h-full flex-col p-2">
        <div className="bg-red-600 p-4 mb-2 flex h-40 w-52 justify-center items-center rounded-md " href="/">
            <Image src="/images/logo.svg" alt="Logo" width={100} height={100}/>
        </div>
        <div className="flex flex-col grow justify-between space-x-0 space-y-2">
            <NavLinks />
        </div>
    </section>
  );
}