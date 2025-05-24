import React, { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { useChatStore } from "../store/useChatStore";
import { GrGallery } from "react-icons/gr";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, settext] = useState("");
  const [imagePreview, setimagePreview] = useState(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();

    reader.onload = async () => {
      setimagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setimagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      // Clear form
      settext("");
      setimagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const fileInputRef = useRef(null);
  return (
    <div className="">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
              X
            </button>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSendMessage}
        className="flex items-center gap-2 mt-4"
      >
        <input
          type="text"
          placeholder="Type here"
          className="input w-full "
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <input
          type="file"
          accept="image*"
          className="hidden "
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className="btn btn-primary btn-square"
          onClick={() => fileInputRef.current?.click()}
        >
          <GrGallery />
        </button>

        <button
          type="submit"
          className="btn btn-primary btn-square"
          disabled={!text.trim() && !imagePreview}
        >
          <IoSend size={20} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
