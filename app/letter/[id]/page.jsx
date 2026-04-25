"use client";
import { useEffect, useState } from "react";
import { db } from "../../../lib/db";
import { collection, getDocs } from "firebase/firestore";
import Envelope from "../../../components/Envelope";

export default function LetterPage({ params }) {
  const [letter, setLetter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "letters"));
      const found = querySnapshot.docs.find(doc => doc.data().id === params.id);
      if (found) setLetter(found.data());
    };
    fetchData();
  }, []);

  if (!letter) return <div>Loading...</div>;

  return (
    <Envelope>
      <h2>To: {letter.receiver}</h2>
      <h3>From: {letter.sender}</h3>
      <p>{letter.message}</p>
    </Envelope>
  );
}