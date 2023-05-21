"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLeftLink({ text, Icon, IconSolid, link }) {
  const pathname = usePathname();
  const isActive = pathname === link || (pathname === "/" && link === "/");

  return (
    <Link href={link}>
      <div
        className={`sidebarLink flex items-center justify-center rounded-full  p-3.5 
        text-xl desktop:justify-start desktop:gap-3.5  ${
          isActive ? "active" : ""
        }`}
      >
        {isActive ? (
          <IconSolid className="h-7 text-red-500" />
        ) : (
          <Icon className="h-7 text-gray-500" />
        )}
        <div className={` hidden desktop:inline ${isActive ? "active" : ""}`}>
          {text}
        </div>
      </div>
    </Link>
  );
}
