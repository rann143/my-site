import { useState, useEffect } from "react";

interface Book {
  title: string;
  author: string;
  cover?: string;
  dateFinished?: string;
  rating?: number;
}

interface BookCategories {
  industry: Book[];
  personal: Book[];
}

export default function RecentlyRead() {
  const [books, setBooks] = useState<BookCategories>({
    industry: [],
    personal: [],
  });

  // Mock data for now - you can replace this with actual API calls
  useEffect(() => {
    const mockBooks: BookCategories = {
      industry: [
        {
          title: "Inside the Machine",
          author: "Jon Stokes",
          dateFinished: "May 2025",
        },
      ],
      personal: [
        {
          title: "Children of Time",
          author: "Adrian Tchaikovsky",
          dateFinished: "August 2025",
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
      <div className="flex justify-between items-center mt-2">
        {book.dateFinished && (
          <span className="text-gray-500 dark:text-gray-400 text-xs">
            {book.dateFinished}
          </span>
        )}
        {book.rating && (
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < book.rating!
                    ? "text-yellow-400"
                    : "text-gray-300 dark:text-gray-600"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2 dark:text-white">
          Recently Read
        </h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Industry/Technical Books */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
            Industry & Technical
          </h2>
          <div className="grid gap-3">
            {books.industry.map((book, index) => (
              <BookCard key={index} book={book} index={index} />
            ))}
          </div>
        </div>

        {/* Personal Books */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
            Personal
          </h2>
          <div className="grid gap-3">
            {books.personal.map((book, index) => (
              <BookCard key={index} book={book} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
