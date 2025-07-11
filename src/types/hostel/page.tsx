export interface HostelAddress {
  city: string;
  state: string;
  line1: string;
  line2: string;
  pincode: number;
  country: string;
}

export interface Hostel {
  _id: string;
  name: string;
  address: HostelAddress;
  tenantCount: number;
  createdAt: string;
  totalRooms: number;
  availableBeds: number;
}

export interface HostelInfoCardPorps {
  hostel: Hostel;
}

export interface StatsOverviewProps {
  hostel: Hostel;
}

export interface ActionButtonsProps {
  hostelId: string;
}
