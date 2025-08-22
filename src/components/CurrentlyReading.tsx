import { useState, useEffect } from "react";

interface Book {
  title: string;
  author: string;
  cover?: string;
  progress?: number;
}

interface BookCategories {
  industry: Book[];
  personal: Book[];
}

export default function CurrentlyReading() {
  const [books, setBooks] = useState<BookCategories>({
    industry: [],
    personal: [],
  });

  // Mock data for now - you can replace this with actual API calls
  useEffect(() => {
    const mockBooks: BookCategories = {
      industry: [
        {
          title: "Clean Code",
          author: "Robert C. Martin",
          progress: 23,
        },
      ],
      personal: [
        {
          title: "Atomic Habits",
          author: "James Clear",
          progress: 45,
        },
      ],
    };
    setBooks(mockBooks);
  }, []);

  const BookCard = ({ book, index }: { book: Book; index: number }) => (
    <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
      <h4 className="font-semibold dark:text-white">{book.title}</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        by {book.author}
      </p>
      {book.progress && (
        <div className="mt-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="dark:text-gray-300">Progress</span>
            <span className="dark:text-gray-300">{book.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${book.progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        Currently Reading
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Industry/Technical Books */}
        <div>
          <h3 className="text-lg font-semibold mb-3 dark:text-white text-blue-600 dark:text-blue-400">
            Industry & Technical
          </h3>
          <div className="grid gap-3">
            {books.industry.map((book, index) => (
              <BookCard key={index} book={book} index={index} />
            ))}
          </div>
        </div>

        {/* Personal Books */}
        <div>
          <h3 className="text-lg font-semibold mb-3 dark:text-white text-green-600 dark:text-green-400">
            Personal
          </h3>
          <div className="grid gap-3">
            {books.personal.map((book, index) => (
              <BookCard key={index} book={book} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <a
          href="/recently-read"
          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          View recently read books
          <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
