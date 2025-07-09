// app/welcome/page.tsx
import Link from "next/link";

const WelcomePage = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center 
      bg-gradient-to-br from-blue-100 via-white to-amber-200 px-4"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to PG Manager
      </h1>

      <p className="text-lg text-gray-700 mb-8 text-center max-w-lg">
        Manage your hostels efficiently — track tenants, rent, and expenses all
        in one place.
      </p>

      <div className="flex gap-4">
        <Link href="/login">
          <button className="px-6 py-2 rounded-2xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition cursor-pointer">
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button className="px-6 py-2 rounded-2xl bg-white border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
    </main>
  );
};

export default WelcomePage;
