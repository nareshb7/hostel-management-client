// components/ActionButtons.tsx
import { ActionButtonsProps } from "@/types/hostel/page";
import { useRouter } from "next/navigation";

export default function ActionButtons({ hostelId }: ActionButtonsProps) {
  const router = useRouter();

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => router.push(`/dashboard/hostels/${hostelId}/edit`)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Edit Hostel
      </button>

      <button
        onClick={() => router.push(`/dashboard/hostels/${hostelId}/rooms/add`)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Room
      </button>

      <button
        onClick={() => router.push(`/dashboard/hostels/${hostelId}/tenants`)}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        View Tenants
      </button>
    </div>
  );
}
