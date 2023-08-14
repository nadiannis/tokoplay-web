import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-900 text-center w-11/12 max-w-md px-4 py-16 rounded-lg">
        <h1 className="font-bold text-3xl md:text-4xl">404 Not Found</h1>
        <div className="mt-10">
          <Link
            to="/"
            className="link text-sm text-gray-300 hover:no-underline active:no-underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
