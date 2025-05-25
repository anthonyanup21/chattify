import React, { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import toast from "react-hot-toast";
import { useChatStore } from "../store/useChatStore";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file?.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({ text: text.trim(), image: imagePreview });
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="mt-3">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              type="button"
              className="absolute -top-1.5 -right-1.5 w-5 h-5 text-sm font-bold bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSendMessage}
        className="flex flex-wrap items-center gap-2"
      >
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered flex-1 min-w-[120px] sm:min-w-[150px] text-sm sm:text-base"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className="btn btn-outline btn-square btn-sm sm:btn-md"
          onClick={() => fileInputRef.current?.click()}
        >
          <GrGallery className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          type="submit"
          className="btn btn-primary btn-square btn-sm sm:btn-md"
          disabled={!text.trim() && !imagePreview}
        >
          <IoSend className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
