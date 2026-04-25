"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Envelope({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)} className="cursor-pointer">
      <motion.div
        initial={{ rotateX: 0 }}
        animate={{ rotateX: open ? 180 : 0 }}
        className="bg-[#f5e6c8] p-10 rounded-xl shadow-xl"
      >
        {!open ? (
          <div className="text-center">📩 Click to open letter</div>
        ) : (
          <div>{children}</div>
        )}
      </motion.div>
    </div>
  );
}
