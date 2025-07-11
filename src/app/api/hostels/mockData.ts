const address = {
  city: "Hyderabad",
  state: "Telangana",
  line1: "Nawaz Building, Khajaguda",
  line2: "Manikonda Jagir",
  pincode: 500008,
  country: "India",
};

export const data = {
  hostels: [
    {
      _id: "xyz123",
      name: "Red View PG",
      address,
      totalRooms: 25,
      tenantCount: 75,
      createdAt: new Date(),
      availableBeds: 34,
    },
    {
      _id: "abc123",
      name: "Green View PG",
      address,
      totalRooms: 30,
      tenantCount: 25,
      createdAt: new Date(),
      availableBeds: 41,
    },
  ],
};
