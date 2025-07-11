"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import useProtectedRoute from "@/hooks/useProtectedRoute/page";
import { Hostel } from "@/types/hostel/page";

export default function DashboardPage() {
  useProtectedRoute(true);
  const { user } = useAuth();
  const router = useRouter();
  const [hostels, setHostels] = useState<Hostel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/login"); // redirect if not logged in
      return;
    }

    const fetchHostels = async () => {
      try {
        const res = await axios.get(`/api/hostels?ownerId=${user._id}`);
        setHostels(res.data.hostels || []);
      } catch (error) {
        console.log("Failed to load hostels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHostels();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-white">
        Loading Dashboard...
      </div>
    );
  }

  if (hostels.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Welcome, {user?.name}!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          You haven’t added any hostels yet.
        </p>
        <Link
          href="/dashboard/hostels/create"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create Your First Hostel
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-8 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Your Hostels
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hostels.map((hostel) => (
          <div
            key={hostel._id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow p-5"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
              {hostel.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {hostel.address?.city}, {hostel.address?.state}
            </p>

            <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200 mb-3">
              <span>Rooms: {hostel.totalRooms}</span>
              <span>Tenants: {hostel.tenantCount}</span>
            </div>

            <div className="flex gap-3">
              <a
                href={`/dashboard/hostels/${hostel._id}`}
                className="bg-blue-600 text-white text-sm px-4 py-1 rounded hover:bg-blue-700"
              >
                View
              </a>
              <a
                href={`/dashboard/tenants?hostel=${hostel._id}`}
                className="bg-gray-100 dark:bg-gray-700 text-sm text-gray-800 dark:text-white px-4 py-1 rounded"
              >
                Tenants
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
