import { StatsOverviewProps } from "@/types/hostel/page";

// components/StatsOverview.tsx
export default function StatsOverview({ hostel }: StatsOverviewProps) {
  // These values will be fetched later from backend logic
  const totalRooms = hostel.totalRooms || 0;
  const availableBeds = hostel.availableBeds || 0;
  const tenantCount = hostel.tenantCount || 0;

  const statClass =
    "bg-gray-100 dark:bg-gray-700 rounded-md px-4 py-3 text-center flex-1";

  return (
    <div className="flex gap-4">
      <div className={statClass}>
        <div className="text-lg font-bold">{totalRooms}</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Total Rooms
        </div>
      </div>
      <div className={statClass}>
        <div className="text-lg font-bold">{availableBeds}</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Available Beds
        </div>
      </div>
      <div className={statClass}>
        <div className="text-lg font-bold">{tenantCount}</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Current Tenants
        </div>
      </div>
    </div>
  );
}
