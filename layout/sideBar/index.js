import React from "react";
import { FaTwitter } from "react-icons/fa";
import { SidebarLink } from "../../components";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardListIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

export const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center md:items-start md:w-[285px] bg-slate-200 h-full fixed p-2">
      <div className="w-[50px] h-[50px] hoverAnimation flex justify-center items-center ">
        <FaTwitter  className="text-[#1d9bf0] h-8 w-8" />
      </div>
      <div className="space-y-3 mt-2 w-full overflow-auto">
        <SidebarLink text="Home" Icon={HomeIcon} active={true} />
        <SidebarLink text="Explore" Icon={HashtagIcon} active={false} />
        <SidebarLink text="Notifacitions" Icon={BellIcon} active={false} />
        <SidebarLink text="Messages" Icon={InboxIcon} active={false} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} active={false} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} active={false} />
        <SidebarLink text="Profile" Icon={UserIcon} active={false} />
        <SidebarLink
          text="More"
          Icon={DotsCircleHorizontalIcon}
          active={false}
        />
      </div>

      <div className='bg-[#1d9bf0] hoverAnimation w-full py-3 text-center text-white hover:bg-opacity-70 mt-2'>
        Tweet
      </div>

      <div className='flex mt-auto hoverAnimation p-2 w-full justify-around items-center'>
        <img className='w-10 h-10 rounded-full' src="https://pbs.twimg.com/profile_images/1297742680219410432/sZxReosr_400x400.jpg" alt="img" />
        <div className='hidden md:inline'>
          <h4 className='font-bold' >Mücahit Kökdemir</h4>
          <h5>@muccorn</h5>
        </div>
        <DotsCircleHorizontalIcon className='h-8 w-8 hidden md:inline' />
      </div>

    </div>
  );
};
