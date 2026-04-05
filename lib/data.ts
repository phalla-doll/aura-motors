export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  category: string;
  image: string;
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
];
