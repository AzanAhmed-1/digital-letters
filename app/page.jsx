import LetterForm from "../components/LetterForm";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl mb-5">Write a Letter</h1>
      <LetterForm />
    </main>
  );
}