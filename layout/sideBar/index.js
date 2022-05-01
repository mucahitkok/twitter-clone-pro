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
    <div className="w-64 flex flex-col justify-between p-2 h-screen sticky top-0">
      <div className="">
        <div className="hover:bg-gray-extraLight flex items-center w-12 h-12 justify-center rounded-full">
          <TwitterLogoIcon className='w-8 h-8' />
        </div>
        <nav>
          <ul>
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
        <button className="bg-primary-base rounded-full py-3 px-5 text-white w-full shadow-lg hover:bg-primary-dark">
          Tweetle
        </button>
      </div>
      <UserBox />
    </div>
  );
};
