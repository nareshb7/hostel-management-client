"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import HostelInfoCard from "@/components/hostel/HostelInfoCard";
import StatsOverview from "@/components/hostel/StatsOverView";
import ActionButtons from "@/components/hostel/ActionButtons";

export default function HostelDetailPage() {
  const { hostelId } = useParams();
  const [hostel, setHostel] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHostel() {
      try {
        const res = await axios.get(`/api/hostels/${hostelId}`);
        setHostel(res.data.hostel);
      } catch (err) {
        console.error("Failed to load hostel", err);
      } finally {
        setLoading(false);
      }
    }

    fetchHostel();
  }, [hostelId]);

  if (loading) {
    return (
      <div className="p-10 text-gray-500">Loading hostel information...</div>
    );
  }

  if (!hostel) {
    return <div className="p-10 text-red-600">Hostel not found</div>;
  }

  return (
    <div className="p-6 space-y-6 text-gray-800 dark:text-white">
      <HostelInfoCard hostel={hostel} />
      <StatsOverview hostel={hostel} />
      <ActionButtons hostelId={hostel._id} />
    </div>
  );
}
