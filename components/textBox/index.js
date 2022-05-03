import { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  EmojiIcon,
  GifIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../../layout/icons";

export const TextBox = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const filePickerRef = useRef();

  const addImageToPost = () => {};

  console.log(filePickerRef.current);
  return (
    <div className="mt-3 p-2 flex">
      <img
        className="w-14 h-14 rounded-full p-1"
        src="https://pbs.twimg.com/profile_images/1297742680219410432/sZxReosr_400x400.jpg"
        alt=""
      />
      <div className="w-full divide-y">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's happening?"
          rows="2"
          className="w-full resize-none rounded-md outline-none p-2"
        />

        {image && (
          <div className="relative">
            <div
              onClick={() => setImage(null)}
              className="absolute w-8 h-8 bg-[#0f1419] bg-opacity-75 flex justify-center items-center rounded-full cursor-pointer hover:bg-[#272c30] top-1 left-1"
            >
              <AiOutlineClose className="text-white " />
            </div>
            <img
              src={image}
              alt=""
              className="rounded-2xl max-h-80 object-contain"
            />
          </div>
        )}

        <div className="flex justify-between p-1">
          <div className="flex space-x-1">
            <div
              className="hoverAnimation p-2"
              onClick={() => filePickerRef.current.click()}
            >
              <ImageIcon className="h-[22px] text-[#1d9bf0]" />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={addImageToPost}
                ref={filePickerRef}
              />
            </div>

            <div className="hoverAnimation p-2">
              <GifIcon className="h-[22px] text-[#1d9bf0]" />
              <input type="file" hidden accept="image/*" />
            </div>

            <div className="hoverAnimation p-2">
              <PollIcon className="h-[22px] text-[#1d9bf0]" />
              <input type="file" hidden accept="image/*" />
            </div>

            <div className="hoverAnimation p-2">
              <EmojiIcon className="h-[22px] text-[#1d9bf0]" />
              <input type="file" hidden accept="image/*" />
            </div>

            <div className="hoverAnimation p-2">
              <ScheduleIcon className="h-[22px] text-[#1d9bf0]" />
              <input type="file" hidden accept="image/*" />
            </div>
          </div>

          <button
            disabled={!text.trim()}
            // onClick={sendPost}
            className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 hover:bg-[#1a8cd8] shadow-md disabled:cursor-default disabled:hover:bg-[#1d9bf0] disabled:opacity-50 font-bold"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
