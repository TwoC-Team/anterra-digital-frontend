import React from "react";

export default function CustomButton({ children: title }) {
  return (
    <button
      type="button"
      className="bg-gradient-to-br from-white/30 border-slate-200/40 border to-transparent min-w-[105px] max-w-[105px] w-full py-[8px] rounded-[8px]"
    >
      {title}
    </button>
  );
}
