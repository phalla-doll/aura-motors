export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  category: string;
  image: string;
  gallery?: string[];
  tagline: string;
  color: string;
  condition: number;
  specs: {
    power?: string;
    acceleration?: string;
    topSpeed?: string;
    range?: string;
  };
  seller: {
    name: string;
    phone: string;
    image: string;
  };
};

export const cars: Car[] = [
  {
    id: "1",
    make: "Aero",
    model: "Model S",
    year: 2026,
    price: 89990,
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2070&auto=format&fit=crop"
    ],
    tagline: "Beyond performance.",
    color: "Midnight Silver",
    condition: 100,
    specs: {
      power: "1,020 hp",
      acceleration: "1.99s 0-60 mph",
      range: "396 mi",
    },
    seller: {
      name: "Alex Johnson",
      phone: "+1 (555) 123-4567",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: "2",
    make: "Vanguard",
    model: "Atlas",
    year: 2025,
    price: 65000,
    category: "SUV",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
    tagline: "Room for everything. Except compromise.",
    color: "Pearl White",
    condition: 95,
    specs: {
      power: "450 hp",
      acceleration: "4.5s 0-60 mph",
      range: "320 mi",
    },
    seller: {
      name: "Sarah Williams",
      phone: "+1 (555) 987-6543",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: "3",
    make: "Aero",
    model: "Roadster",
    year: 2026,
    price: 125000,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
    tagline: "The quickest car in the world.",
    color: "Solid Black",
    condition: 100,
    specs: {
      power: "1,200 hp",
      acceleration: "1.9s 0-60 mph",
      topSpeed: "250+ mph",
    },
    seller: {
      name: "Michael Chen",
      phone: "+1 (555) 345-6789",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: "4",
    make: "Nexus",
    model: "Horizon",
    year: 2025,
    price: 45000,
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
    tagline: "Everyday elegance.",
    color: "Deep Blue",
    condition: 88,
    specs: {
      power: "280 hp",
      acceleration: "5.8s 0-60 mph",
      range: "410 mi",
    },
    seller: {
      name: "Emily Davis",
      phone: "+1 (555) 234-5678",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: "5",
    make: "Vanguard",
    model: "Titan",
    year: 2026,
    price: 78000,
    category: "Truck",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=2073&auto=format&fit=crop",
    tagline: "Unstoppable force.",
    color: "Stealth Grey",
    condition: 100,
    specs: {
      power: "600 hp",
      acceleration: "3.9s 0-60 mph",
      range: "350 mi",
    },
    seller: {
      name: "David Wilson",
      phone: "+1 (555) 876-5432",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: "6",
    make: "Nexus",
    model: "Apex",
    year: 2026,
    price: 95000,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2187&auto=format&fit=crop",
    tagline: "Pure adrenaline.",
    color: "Racing Red",
    condition: 92,
    specs: {
      power: "750 hp",
      acceleration: "2.8s 0-60 mph",
      topSpeed: "210 mph",
    },
    seller: {
      name: "Jessica Taylor",
      phone: "+1 (555) 456-7890",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: "7",
    make: "Aero",
    model: "Model X",
    year: 2024,
    price: 79990,
    category: "SUV",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070&auto=format&fit=crop",
    tagline: "Utility meets performance.",
    color: "Obsidian Black",
    condition: 85,
    specs: {
      power: "670 hp",
      acceleration: "3.8s 0-60 mph",
      range: "348 mi",
    },
    seller: {
      name: "Robert Chen",
      phone: "+1 (555) 111-2222",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: "8",
    make: "Vanguard",
    model: "Pinnacle",
    year: 2026,
    price: 115000,
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop",
    tagline: "The absolute height of luxury.",
    color: "Champagne Gold",
    condition: 100,
    specs: {
      power: "550 hp",
      acceleration: "4.2s 0-60 mph",
      range: "450 mi",
    },
    seller: {
      name: "Amanda Wright",
      phone: "+1 (555) 333-4444",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: "9",
    make: "Nexus",
    model: "City",
    year: 2023,
    price: 28000,
    category: "Compact",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop",
    tagline: "Urban mobility, redefined.",
    color: "Mint Green",
    condition: 75,
    specs: {
      power: "150 hp",
      acceleration: "7.5s 0-60 mph",
      range: "220 mi",
    },
    seller: {
      name: "Thomas Lee",
      phone: "+1 (555) 555-6666",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: "10",
    make: "Aero",
    model: "Model 3",
    year: 2025,
    price: 42990,
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1561580125-028ce3bfcb25?q=80&w=2070&auto=format&fit=crop",
    tagline: "The car of the future, today.",
    color: "Pearl White",
    condition: 98,
    specs: {
      power: "346 hp",
      acceleration: "4.2s 0-60 mph",
      range: "333 mi",
    },
    seller: {
      name: "Lisa Wong",
      phone: "+1 (555) 777-8888",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1b4492?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: "11",
    make: "Vanguard",
    model: "Scout",
    year: 2024,
    price: 52000,
    category: "SUV",
    image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?q=80&w=2070&auto=format&fit=crop",
    tagline: "Ready for any adventure.",
    color: "Forest Green",
    condition: 82,
    specs: {
      power: "300 hp",
      acceleration: "6.0s 0-60 mph",
      range: "280 mi",
    },
    seller: {
      name: "James Smith",
      phone: "+1 (555) 999-0000",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: "12",
    make: "Nexus",
    model: "Veloce",
    year: 2026,
    price: 105000,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop",
    tagline: "Italian design, electric heart.",
    color: "Rosso Corsa",
    condition: 100,
    specs: {
      power: "800 hp",
      acceleration: "2.5s 0-60 mph",
      topSpeed: "220 mph",
    },
    seller: {
      name: "Elena Rossi",
      phone: "+1 (555) 121-2121",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop",
    },
  }
];
