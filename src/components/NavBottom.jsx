"use client";
import Link from "next/link";
import Image from "next/image";
import NavBottomLink from "./NavBottomLink";
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

export default function NavBottom() {
  return (
    <>
      <ul className="flex w-full items-center justify-between">
        <NavBottomLink
          text="Home"
          link="/"
          Icon={HomeIcon}
          IconSolid={HomeIconSolid}
        />
        <NavBottomLink
          text="Home"
          link="/about"
          Icon={HomeIcon}
          IconSolid={HomeIconSolid}
        />
        <NavBottomLink
          text="Home"
          link="#"
          Icon={HomeIcon}
          IconSolid={HomeIconSolid}
        />
      </ul>
    </>
  );
}
