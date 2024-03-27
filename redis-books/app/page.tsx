import Link from "next/link";
import { client } from "@/lib/db";

const getBooks = async () => {
  const res = await client.zRangeWithScores("books", 0, -1);

  const books = await Promise.all(
    res.map(r => client.hGetAll(`books:${r.score}`))
  );

  return books;
};

export default async function Home() {
  const books = await getBooks();

  return (
    <main>
      <nav className="flex justify-between">
        <h1 className="font-bold">Books on Redis!</h1>
        <Link href="/create" className="btn">
          Add a new book
        </Link>
      </nav>

      {books.map(book => (
        <div key={book.title} className="card">
          <h2>{book.title}</h2>
          <p>By {book.author}</p>
          <p>{book.blurb}</p>
          <p>Rating: {book.rating}</p>
        </div>
      ))}
    </main>
  );
}
