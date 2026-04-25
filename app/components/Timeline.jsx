"use client";
import { useEffect, useState } from "react";
import { db } from "../lib/db";
import { collection, getDocs } from "firebase/firestore";

export default function Timeline() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const fetchLetters = async () => {
      const data = await getDocs(collection(db, "letters"));
      setLetters(data.docs.map(doc => doc.data()));
    };
    fetchLetters();
  }, []);

  return (
    <div>
      {letters.map((l, i) => (
        <div key={i} className="border p-3 my-2">
          <p>{l.sender} → {l.receiver}</p>
          <p>{new Date(l.timestamp.seconds * 1000).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}