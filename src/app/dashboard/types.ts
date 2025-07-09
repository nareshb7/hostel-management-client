export interface HostelAddress {
  city: string;
  state: string;
}

export interface Hostel {
  _id: string;
  name: string;
  address: HostelAddress;
  roomCount: number;
  tenantCount: number;
}
