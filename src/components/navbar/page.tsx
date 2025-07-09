"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDark);
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        <Link href="/dashboard">PG Manager</Link>
      </h1>
      <button
        onClick={toggleTheme}
        className="text-sm px-4 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
