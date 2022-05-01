import React, { useState } from "react";
import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
  TwitterLogoIcon,
  TweetIcon
} from "../icons";

import { SidebarLink, UserBox } from "../../components";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notification",
    icon: NotificationIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

export const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const handleActiveLink = (name) => {
    setActive(name);
  };
  return (
    <div className="hidden md:w-64 sm:flex flex-col justify-between items-center md:items-start p-2 h-screen sticky top-0">
      <div className="">
        <div className="hover:bg-gray-extraLight flex items-center w-12 h-12 justify-center rounded-full">
          <TwitterLogoIcon className='w-8 h-8' />
        </div>
        <nav>
          <ul className="space-y-3">
            {sideLinks.map(({ name, icon }) => (
              <SidebarLink
                key={name}
                Icon={icon}
                name={name}
                active={active}
                handleActiveLink={handleActiveLink}
              />
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base rounded-full mt-2 p-2 md:py-3 md:px-5 text-white md:w-full shadow-lg hover:bg-primary-dark">
          <p className="hidden md:inline">Tweetle</p>
          <TweetIcon className='md:hidden w-7 h-7' />
        </button>
      </div>
      <UserBox />
    </div>
  );
};
