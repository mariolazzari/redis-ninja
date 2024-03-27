import Link from "next/link";
import { client } from "@/lib/db";

const getBooks = async () => {
  const books = await client.zRangeWithScores("books", 0, -1);
};

export default async function Home() {
  return (
    <main>
      <nav className="flex justify-between">
        <h1 className="font-bold">Books on Redis!</h1>
        <Link href="/create" className="btn">
          Add a new book
        </Link>
      </nav>

      <p>List of books here.</p>
    </main>
  );
}
