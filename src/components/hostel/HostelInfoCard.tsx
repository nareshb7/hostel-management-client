// components/HostelInfoCard.tsx
import { HostelInfoCardPorps } from "@/types/hostel/page";
import React from "react";

export default function HostelInfoCard({ hostel }: HostelInfoCardPorps) {
  const address = hostel.address;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <h2 className="text-2xl font-semibold mb-2">{hostel.name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {address.line1}, {address.line2 && `${address.line2}, `}
        {address.city}, {address.state} - {address.pincode}, {address.country}
      </p>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Created on: {new Date(hostel.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
