import React from "react";

export const SidebarLink = ({ text, Icon, active }) => {
  return (
    <div
      className={`hoverAnimation p-2 flex min-w-full items-center justify-center md:justify-start space-x-2 text-black ${
        active && "font-bold"
      }`}
    >
      <Icon className="h-8 w-8" />
      <div className="hidden md:inline"> {text} </div>
    </div>
  );
};
