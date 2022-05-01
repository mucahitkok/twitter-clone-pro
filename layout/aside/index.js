import React from "react";

import { SesarchIcon } from "../icons";

export const Aside = () => {
  return (
    <aside className="hidden lg:inline w-96">
      <div className="m-3 ">
        <span className="flex w-full bg-gray-extraLight rounded-full py-3 px-3">
          <SesarchIcon className={"w-6 h-6"} />
          <input
            type="text"
            className="w-full outline-none bg-gray-extraLight rounded-full pl-3"
          />
        </span>
      </div>
    </aside>
  );
};
