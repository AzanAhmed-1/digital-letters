"use client";
import { useState } from "react";
import { db } from "../lib/db";
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default function LetterForm() {
  const [form, setForm] = useState({
    sender: "",
    receiver: "",
    message: ""
  });

  const handleSubmit = async () => {
    const id = uuidv4();

    await addDoc(collection(db, "letters"), {
      ...form,
      id,
      timestamp: new Date()
    });

    alert(`Share this link: /letter/${id}`);
  };

  return (
    <div className="flex flex-col gap-3">
      <input placeholder="Sender" onChange={e => setForm({...form, sender: e.target.value})}/>
      <input placeholder="Receiver" onChange={e => setForm({...form, receiver: e.target.value})}/>
      <textarea placeholder="Write your letter..." onChange={e => setForm({...form, message: e.target.value})}/>
      <button onClick={handleSubmit}>Send Letter</button>
    </div>
  );
}