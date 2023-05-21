"use client";
import Link from "next/link";
import Image from "next/image";
import NavLeftLink from "./NavLeftLink";
import {
  HomeIcon as HomeIconSolid,
  BeakerIcon as BeakerIconSolid,
  HashtagIcon as HashtagIconSolid,
  BellIcon as BellIconSolid,
  InboxIcon as InboxIconSolid,
  BookmarkIcon as BookmarkIconSolid,
  ClipboardListIcon as ClipboardListIconSolid,
  UserIcon as UserIconSolid,
  DotsCircleHorizontalIcon as DotsCircleHorizontalIconSolid,
  DotsHorizontalIcon as DotsHorizontalIconSolid,
} from "@heroicons/react/24/solid";

import {
  HomeIcon as HomeIcon,
  BeakerIcon as BeakerIcon,
  HashtagIcon as HashtagIcon,
  BellIcon as BellIcon,
  InboxIcon as InboxIcon,
  BookmarkIcon as BookmarkIcon,
  ClipboardListIcon as ClipboardListIcon,
  UserIcon as UserIcon,
  DotsCircleHorizontalIcon as DotsCircleHorizontalIcon,
  DotsHorizontalIcon as DotsHorizontalIcon,
} from "@heroicons/react/24/outline";

export default function NavLeft() {
  return (
    <>
      <div className=" mx-auto flex-col justify-center gap-3.5 p-3.5 text-center align-middle tablet:flex ">
        <Link href="/" className=" ">
          <img
            src="https://www.flames.agency/wp-content/uploads/flames-agency-icon-large.png"
            alt=""
            height={44}
            width={44}
            className="mx-auto desktop:mx-0"
          />
        </Link>

        <NavLeftLink
          text="Home"
          link="/"
          Icon={HomeIcon}
          IconSolid={HomeIconSolid}
        />
        <NavLeftLink
          text="About"
          link="/about"
          Icon={BeakerIcon}
          IconSolid={BeakerIconSolid}
        />
        <NavLeftLink
          text="Discover"
          link="/about"
          Icon={BeakerIcon}
          IconSolid={BeakerIconSolid}
        />
        <NavLeftLink
          text="Settings"
          link="/about"
          Icon={BeakerIcon}
          IconSolid={BeakerIconSolid}
        />
        <NavLeftLink
          text="External"
          link="https://www.google.com"
          Icon={BeakerIcon}
        />
        <button className="hidden h-[52px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500  text-lg font-bold text-white shadow-md hover:bg-[#1a8cd8] desktop:block">
          Tweet
        </button>
      </div>
    </>
  );
}
