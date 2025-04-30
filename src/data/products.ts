
import { Product } from "@/types";

export const products: Product[] = [
  // Superbikes - 16 products
  {
    id: "superbike-1",
    name: "Ninja ZX-10R",
    brand: "Kawasaki",
    category: "superbike",
    description: "The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki, the successor to the Ninja ZX-9R. It was originally released in 2004 and has been updated and revised throughout the years. It combines race-level performance, a responsive engine, and aggressive styling in a street-legal package.",
    price: 1584000, // ₹15,84,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "998 cc Liquid-cooled 4-stroke In-line Four",
      power: "200 hp",
      torque: "114.9 Nm",
      weight: "207 kg",
      topSpeed: "299 km/h"
    },
    inStock: true
  },
  {
    id: "superbike-2",
    name: "Panigale V4",
    brand: "Ducati",
    category: "superbike",
    description: "The Ducati Panigale V4 is the essence of Ducati's racing DNA, with MotoGP technology applied to a road-legal motorcycle. Its V4 engine delivers extraordinary power with a unique sound, while its aerodynamics package ensures maximum stability at high speeds. Advanced electronics and premium components make this the ultimate expression of Italian motorcycle engineering.",
    price: 2750000, // ₹27,50,000
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "1,103 cc Desmosedici Stradale V4",
      power: "214 hp",
      torque: "124 Nm",
      weight: "198 kg",
      topSpeed: "305+ km/h"
    },
    inStock: true
  },
  {
    id: "superbike-3",
    name: "S 1000 RR",
    brand: "BMW",
    category: "superbike",
    description: "The BMW S 1000 RR revolutionized the supersport motorcycle category right from the outset. Ever since its market launch in 2009, the RR has been a trailblazer in its segment. With its compact engine, it offers awesome engine power with over 200 hp and cutting-edge race technology for both the street and track.",
    price: 2150000, // ₹21,50,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "999 cc water/oil-cooled 4-cylinder 4-stroke",
      power: "207 hp",
      torque: "113 Nm",
      weight: "197 kg",
      topSpeed: "303 km/h"
    },
    inStock: true
  },
  {
    id: "superbike-4",
    name: "YZF-R1",
    brand: "Yamaha",
    category: "superbike",
    description: "The Yamaha YZF-R1 is a 1,000 cc class sports motorcycle made by Yamaha. It was first released in 1998, undergoing significant updates in 2000, 2002, 2004, 2006, 2007, 2009, 2015, and 2020. With a crossplane crankshaft, sophisticated electronics, and race-bred chassis, the R1 delivers exhilarating performance on both road and track.",
    price: 1950000, // ₹19,50,000
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "998 cc liquid-cooled inline 4-cylinder",
      power: "200 hp",
      torque: "113.3 Nm",
      weight: "201 kg",
      topSpeed: "299 km/h"
    },
    inStock: true
  },
  {
    id: "superbike-5",
    name: "CBR1000RR-R Fireblade SP",
    brand: "Honda",
    category: "superbike",
    description: "Born from MotoGP engineering, the CBR1000RR-R Fireblade SP is designed to deliver exceptional levels of power, torque, and handling. This race-bred machine features MotoGP-derived aerodynamics, a powerful inline four-cylinder engine, and a comprehensive electronics package to harness its phenomenal performance.",
    price: 2380000, // ₹23,80,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "1000 cc liquid-cooled 4-stroke 16-valve DOHC Inline-4",
      power: "214 hp",
      torque: "113 Nm",
      weight: "201 kg",
      topSpeed: "299 km/h"
    },
    inStock: true
  },
  {
    id: "superbike-6",
    name: "GSX-R1000R",
    brand: "Suzuki",
    category: "superbike",
    description: "The Suzuki GSX-R1000R is the ultimate expression of Suzuki's performance philosophy. Designed with technologies developed in MotoGP, it features a powerful yet manageable engine, advanced electronics, and a chassis that delivers precise control whether on the street or track. The legendary GSX-R legacy continues with this flagship superbike.",
    price: 1950000, // ₹19,50,000
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "999.8 cc liquid-cooled 4-stroke inline-four",
      power: "202 hp",
      torque: "117.6 Nm",
      weight: "203 kg",
      topSpeed: "299 km/h"
    },
    inStock: false
  },
  {
    id: "superbike-7",
    name: "1299 Panigale Superleggera",
    brand: "Ducati",
    category: "superbike",
    description: "The Ducati 1299 Panigale Superleggera is the most advanced production superbike ever built by Ducati. Featuring extensive use of carbon fiber and titanium components, it represents the pinnacle of Ducati's engineering prowess. Only produced in limited numbers, it combines extraordinary performance with exclusivity.",
    price: 8500000, // ₹85,00,000
    rating: 5.0,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "1285 cc Superquadro L-Twin",
      power: "215 hp",
      torque: "146.5 Nm",
      weight: "167 kg",
      topSpeed: "310 km/h"
    },
    inStock: true
  },
  {
    id: "superbike-8",
    name: "RSV4 Factory",
    brand: "Aprilia",
    category: "superbike",
    description: "The Aprilia RSV4 Factory redefines the boundaries of superbike performance. With its V4 engine layout, advanced electronics package including cornering ABS, and premium Öhlins suspension, it offers racetrack-level performance in a street-legal package. The distinctive sound and handling characteristics set it apart in the superbike category.",
    price: 2650000, // ₹26,50,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "1099 cc V4 65° liquid-cooled",
      power: "217 hp",
      torque: "125 Nm",
      weight: "202 kg",
      topSpeed: "305 km/h"
    },
    inStock: true
  },
  {
    id: "superbike-9",
    name: "H2R",
    brand: "Kawasaki",
    category: "superbike",
    description: "The Kawasaki Ninja H2R is a closed-course only motorcycle with unprecedented power and speed. Its supercharged engine produces over 300 horsepower, making it one of the most powerful production motorcycles ever made. With advanced aerodynamics, carbon fiber bodywork, and cutting-edge technology, the H2R represents the absolute pinnacle of motorcycle engineering.",
    price: 7900000, // ₹79,00,000
    rating: 5.0,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "998 cc supercharged inline-four",
      power: "310+ hp",
      torque: "165 Nm",
      weight: "216 kg",
      topSpeed: "400 km/h"
    },
    inStock: true
  },
  {
    id: "superbike-10",
    name: "1290 Super Duke R",
    brand: "KTM",
    category: "superbike",
    description: "The KTM 1290 Super Duke R, nicknamed 'The Beast', is a naked sports motorcycle that combines raw power with precision handling. Its V-twin engine delivers explosive acceleration and torque, while its chassis provides agility and confidence. Advanced electronics ensure this potent package is manageable on both road and track.",
    price: 1850000, // ₹18,50,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "1301 cc V-twin",
      power: "180 hp",
      torque: "140 Nm",
      weight: "189 kg",
      topSpeed: "290 km/h"
    },
    inStock: true
  },
  {
    id: "superbike-11",
    name: "Hayabusa",
    brand: "Suzuki",
    category: "superbike",
    description: "The Suzuki Hayabusa is an iconic motorcycle renowned for its ultimate combination of speed, power, and torque. Known for its distinctive aerodynamic styling and bulletproof reliability, the Hayabusa delivers a smooth yet powerful ride. The latest generation features refined electronics and rider aids while maintaining the legendary Hayabusa character.",
    price: 1640000, // ₹16,40,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "1340 cc 4-stroke, liquid-cooled, inline-four",
      power: "190 hp",
      torque: "150 Nm",
      weight: "266 kg",
      topSpeed: "299 km/h (limited)"
    },
    inStock: false
  },
  {
    id: "superbike-12",
    name: "Streetfighter V4 S",
    brand: "Ducati",
    category: "superbike",
    description: "The Ducati Streetfighter V4 S is the ultimate naked sports bike, featuring the heart of the Panigale V4 but with upright ergonomics. It combines explosive power with cutting-edge electronics and premium components. The aggressive styling with its distinctive 'V' LED headlight makes it instantly recognizable as the apex predator in the naked bike segment.",
    price: 2250000, // ₹22,50,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "1103 cc Desmosedici Stradale V4",
      power: "208 hp",
      torque: "123 Nm",
      weight: "199 kg",
      topSpeed: "300 km/h"
    },
    inStock: true
  },
  {
    id: "superbike-13",
    name: "Brutale 1000 RR",
    brand: "MV Agusta",
    category: "superbike",
    description: "The MV Agusta Brutale 1000 RR is a masterpiece of Italian design and engineering, combining breathtaking aesthetics with raw performance. It features a high-output inline-four engine, premium suspension components, and sophisticated electronics. The hand-crafted attention to detail and limited production numbers ensure exclusivity for the discerning motorcycle enthusiast.",
    price: 3100000, // ₹31,00,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "998 cc inline-four",
      power: "208 hp",
      torque: "116.5 Nm",
      weight: "186 kg",
      topSpeed: "302 km/h"
    },
    inStock: true
  },
  {
    id: "superbike-14",
    name: "V4 SS",
    brand: "Bimota",
    category: "superbike",
    description: "The Bimota Tesi H2 combines Kawasaki's supercharged H2 engine with Bimota's innovative chassis design. Its unique hub-center steering system provides unmatched stability and handling, while the supercharged engine delivers explosive acceleration. Ultra-premium materials and limited production numbers make this an exclusive collector's item for motorcycle connoisseurs.",
    price: 7200000, // ₹72,00,000
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "998 cc supercharged inline-four",
      power: "242 hp",
      torque: "142 Nm",
      weight: "207 kg",
      topSpeed: "320 km/h"
    },
    inStock: true
  },
  {
    id: "superbike-15",
    name: "RC 16",
    brand: "KTM",
    category: "superbike",
    description: "The KTM RC 16 is a racing prototype motorcycle derived directly from KTM's MotoGP program. Available to the public in extremely limited numbers, this race-ready machine features a compact V4 engine, carbon fiber bodywork, and state-of-the-art electronics. It represents the closest experience to riding an actual MotoGP bike that money can buy.",
    price: 8900000, // ₹89,00,000
    rating: 5.0,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "1000 cc V4",
      power: "270 hp",
      torque: "120 Nm",
      weight: "157 kg",
      topSpeed: "340 km/h"
    },
    inStock: false
  },
  {
    id: "superbike-16",
    name: "HP4 Race",
    brand: "BMW",
    category: "superbike",
    description: "The BMW HP4 Race is a limited-production track-only superbike featuring a full carbon fiber main frame and wheels. Each engine is hand-built and produces extraordinary power, while the electronics package offers unparalleled adjustability. With only 750 units produced worldwide, this motorcycle represents the absolute pinnacle of BMW's racing technology.",
    price: 8500000, // ₹85,00,000
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1635073943977-5b6869e7b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "999 cc inline-four",
      power: "215 hp",
      torque: "120 Nm",
      weight: "171 kg",
      topSpeed: "310 km/h"
    },
    inStock: true
  },
  
  // Luxury Cars - 16 products
  {
    id: "luxury-car-1",
    name: "Phantom",
    brand: "Rolls-Royce",
    category: "luxury-car",
    description: "The Rolls-Royce Phantom is the pinnacle of luxury automobiles, embodying over a century of engineering excellence and hand-crafted artistry. Each Phantom takes over 450 hours to build by skilled craftspeople, featuring the finest materials available. The iconic starlight headliner, whisper-quiet V12 engine, and unmatched comfort deliver an unparalleled automotive experience.",
    price: 95000000, // ₹9,50,00,000
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 hp",
      torque: "900 Nm",
      acceleration: "0-100 km/h in 5.3s",
      topSpeed: "250 km/h (limited)"
    },
    inStock: true
  },
  {
    id: "luxury-car-2",
    name: "S-Class",
    brand: "Mercedes-Benz",
    category: "luxury-car",
    description: "The Mercedes-Benz S-Class has long been the benchmark for luxury sedans, combining cutting-edge technology with supreme comfort. The latest generation features a revolutionary interior design with an expansive digital display, augmented reality navigation, and level 3 autonomous driving capabilities. Its smooth powertrain and adaptive suspension create a serene driving experience.",
    price: 16000000, // ₹1,60,00,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "3.0L I6 Turbo + EQ Boost",
      power: "429 hp",
      torque: "520 Nm",
      acceleration: "0-100 km/h in 4.9s",
      topSpeed: "250 km/h (limited)"
    },
    inStock: true
  },
  {
    id: "luxury-car-3",
    name: "Flying Spur",
    brand: "Bentley",
    category: "luxury-car",
    description: "The Bentley Flying Spur perfectly balances luxury and performance in a handcrafted sedan. Inside, you'll find meticulously crafted wood veneers, hand-stitched leather, and metal accents. The powerful W12 engine delivers effortless acceleration, while the advanced chassis with four-wheel steering provides surprising agility for a luxury sedan.",
    price: 34000000, // ₹3,40,00,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "6.0L W12 Twin-Turbo",
      power: "626 hp",
      torque: "900 Nm",
      acceleration: "0-100 km/h in 3.8s",
      topSpeed: "333 km/h"
    },
    inStock: true
  },
  {
    id: "luxury-car-4",
    name: "Ghost",
    brand: "Rolls-Royce",
    category: "luxury-car",
    description: "The Rolls-Royce Ghost is designed as a slightly more dynamic alternative to the Phantom, without compromising on luxury. It features a 'Planar Suspension System' with cameras that scan the road ahead to prepare the suspension, ensuring the signature 'magic carpet ride'. Inside, the minimalist 'Post Opulence' design philosophy delivers sophisticated luxury without ostentation.",
    price: 69500000, // ₹6,95,00,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 hp",
      torque: "850 Nm",
      acceleration: "0-100 km/h in 4.8s",
      topSpeed: "250 km/h (limited)"
    },
    inStock: true
  },
  {
    id: "luxury-car-5",
    name: "A8 L",
    brand: "Audi",
    category: "luxury-car",
    description: "The Audi A8 L is a technological tour de force wrapped in elegant, understated design. Its adaptive air suspension, four-wheel steering, and mild hybrid system work seamlessly together. The interior features dual touchscreens with haptic feedback, luxurious materials, and advanced driver assistance systems that pave the way towards autonomous driving.",
    price: 13000000, // ₹1,30,00,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "3.0L V6 TFSI",
      power: "340 hp",
      torque: "500 Nm",
      acceleration: "0-100 km/h in 5.7s",
      topSpeed: "250 km/h (limited)"
    },
    inStock: true
  },
  {
    id: "luxury-car-6",
    name: "7 Series",
    brand: "BMW",
    category: "luxury-car",
    description: "The BMW 7 Series represents the perfect blend of driving dynamics and opulent luxury. The latest generation makes a bold styling statement with its illuminated kidney grille and split headlight design. Inside, the curved display with the latest iDrive system, multi-contour seats, and premium Bowers & Wilkins audio deliver a first-class experience.",
    price: 17000000, // ₹1,70,00,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "3.0L I6 TwinPower Turbo",
      power: "375 hp",
      torque: "520 Nm",
      acceleration: "0-100 km/h in 5.4s",
      topSpeed: "250 km/h (limited)"
    },
    inStock: true
  },
  {
    id: "luxury-car-7",
    name: "Mulsanne",
    brand: "Bentley",
    category: "luxury-car",
    description: "The Bentley Mulsanne represents the ultimate in British luxury motoring. Each vehicle takes over 400 hours to build, with craftsmen dedicating 150 hours to the interior alone. The hand-finished wood veneers, meticulously crafted leather work, and solid metal controls epitomize luxury, while the 6.75L V8 engine provides effortless power delivery.",
    price: 52000000, // ₹5,20,00,000
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "6.75L V8 Twin-Turbo",
      power: "530 hp",
      torque: "1100 Nm",
      acceleration: "0-100 km/h in 4.9s",
      topSpeed: "305 km/h"
    },
    inStock: false
  },
  {
    id: "luxury-car-8",
    name: "LS 500h",
    brand: "Lexus",
    category: "luxury-car",
    description: "The Lexus LS 500h is the pinnacle of Japanese luxury automotive engineering. Its hybrid powertrain delivers smooth, refined performance while maintaining impressive fuel efficiency. The interior features traditional Japanese aesthetics like Kiriko cut glass and hand-pleated door panels, combined with advanced technology for a unique luxury experience.",
    price: 19000000, // ₹1,90,00,000
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "3.5L V6 Multi-Stage Hybrid",
      power: "354 hp (combined)",
      torque: "350 Nm",
      acceleration: "0-100 km/h in 5.4s",
      topSpeed: "250 km/h (limited)"
    },
    inStock: true
  },
  {
    id: "luxury-car-9",
    name: "Maybach S-Class",
    brand: "Mercedes-Benz",
    category: "luxury-car",
    description: "The Mercedes-Maybach S-Class takes the already luxurious S-Class to another level entirely. With an extended wheelbase providing exceptional rear legroom, reclining executive seats with massage functions, champagne flutes, and refrigeration compartment, it's designed primarily for those who prefer to be driven rather than drive themselves.",
    price: 38500000, // ₹3,85,00,000
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "6.0L V12 Biturbo",
      power: "621 hp",
      torque: "1000 Nm",
      acceleration: "0-100 km/h in 4.5s",
      topSpeed: "250 km/h (limited)"
    },
    inStock: true
  },
  {
    id: "luxury-car-10",
    name: "Cullinan",
    brand: "Rolls-Royce",
    category: "luxury-car",
    description: "The Rolls-Royce Cullinan is the first SUV from the iconic British luxury manufacturer, designed to provide 'Effortless Everywhere'. Named after the largest diamond ever discovered, it combines the legendary Rolls-Royce refinement with genuine off-road capability. The interior features the highest quality materials and can be customized to each owner's specific requirements.",
    price: 69000000, // ₹6,90,00,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 hp",
      torque: "850 Nm",
      acceleration: "0-100 km/h in 5.2s",
      topSpeed: "250 km/h (limited)"
    },
    inStock: true
  },
  {
    id: "luxury-car-11",
    name: "Bentayga",
    brand: "Bentley",
    category: "luxury-car",
    description: "The Bentley Bentayga combines the commanding presence and capability of an SUV with the hand-crafted luxury, performance and exclusivity expected of a Bentley. Its interior features flawless leather, handcrafted wood veneers, and metal accents. The powerful W12 engine provides effortless acceleration despite the vehicle's substantial size.",
    price: 41000000, // ₹4,10,00,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "542 hp",
      torque: "770 Nm",
      acceleration: "0-100 km/h in 4.5s",
      topSpeed: "290 km/h"
    },
    inStock: true
  },
  {
    id: "luxury-car-12",
    name: "Range Rover SV",
    brand: "Land Rover",
    category: "luxury-car",
    description: "The Range Rover SV represents the pinnacle of the Land Rover lineup, handcrafted by the Special Vehicle Operations division. It combines legendary off-road capability with supreme on-road comfort and the highest levels of luxury. The ceramic controls, semi-aniline leather, and bespoke trim options ensure each vehicle is uniquely tailored to its owner.",
    price: 45000000, // ₹4,50,00,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "4.4L V8 Twin-Turbo",
      power: "523 hp",
      torque: "750 Nm",
      acceleration: "0-100 km/h in 4.6s",
      topSpeed: "250 km/h"
    },
    inStock: true
  },
  {
    id: "luxury-car-13",
    name: "Panamera Turbo S",
    brand: "Porsche",
    category: "luxury-car",
    description: "The Porsche Panamera Turbo S combines sports car performance with luxury sedan comfort. The sculpted body houses a twin-turbocharged V8 engine that delivers breathtaking acceleration, while the Porsche Active Suspension Management system ensures composed handling. The driver-focused cockpit features premium materials and cutting-edge technology.",
    price: 21500000, // ₹2,15,00,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "620 hp",
      torque: "820 Nm",
      acceleration: "0-100 km/h in 3.1s",
      topSpeed: "315 km/h"
    },
    inStock: true
  },
  {
    id: "luxury-car-14",
    name: "G 63 AMG",
    brand: "Mercedes-Benz",
    category: "luxury-car",
    description: "The Mercedes-AMG G 63 is an iconic luxury SUV that combines rugged off-road capability with opulent luxury and blistering performance. Its distinctive boxy design has remained largely unchanged for decades, while the interior features premium Nappa leather, carbon fiber trim, and the latest MBUX infotainment system. The hand-built AMG engine provides supercar-like acceleration.",
    price: 25000000, // ₹2,50,00,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "4.0L V8 Biturbo",
      power: "585 hp",
      torque: "850 Nm",
      acceleration: "0-100 km/h in 4.5s",
      topSpeed: "240 km/h (limited)"
    },
    inStock: false
  },
  {
    id: "luxury-car-15",
    name: "XJ Ultimate",
    brand: "Jaguar",
    category: "luxury-car",
    description: "The Jaguar XJ Ultimate represents British luxury at its finest. Its sleek, distinctive design houses a sumptuous interior featuring high-grade leather, laser-inlaid wood veneers, and a bespoke Meridian sound system. The adaptive dynamics ensure the XJ delivers both the composed ride expected of a luxury sedan and the engaging handling for which Jaguar is renowned.",
    price: 19900000, // ₹1,99,00,000
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "5.0L V8 Supercharged",
      power: "510 hp",
      torque: "625 Nm",
      acceleration: "0-100 km/h in 4.9s",
      topSpeed: "250 km/h (limited)"
    },
    inStock: true
  },
  {
    id: "luxury-car-16",
    name: "Continental GT Speed",
    brand: "Bentley",
    category: "luxury-car",
    description: "The Bentley Continental GT Speed is the most performance-focused interpretation of the luxury grand tourer. Its W12 engine delivers immense power, while the sophisticated chassis with active all-wheel drive and all-wheel steering provides both agility and stability. The handcrafted interior combines traditional craftsmanship with modern technology for a truly luxurious driving experience.",
    price: 33500000, // ₹3,35,00,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "6.0L W12 Twin-Turbo",
      power: "650 hp",
      torque: "900 Nm",
      acceleration: "0-100 km/h in 3.5s",
      topSpeed: "335 km/h"
    },
    inStock: true
  },
  
  // Sports Cars - 16 products
  {
    id: "sports-car-1",
    name: "911 GT3 RS",
    brand: "Porsche",
    category: "sports-car",
    description: "The Porsche 911 GT3 RS represents the pinnacle of naturally-aspirated 911 performance. Its motorsport-derived 4.0-liter flat-six engine screams to 9,000 rpm, while the aerodynamic package produces significant downforce. Despite its track-focused nature, it remains comfortable enough for road use. Its precision, feedback, and driver engagement create an unparalleled driving experience.",
    price: 30000000, // ₹3,00,00,000
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "4.0L Flat-6",
      power: "525 hp",
      torque: "465 Nm",
      acceleration: "0-100 km/h in 3.2s",
      topSpeed: "296 km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-2",
    name: "SF90 Stradale",
    brand: "Ferrari",
    category: "sports-car",
    description: "The Ferrari SF90 Stradale represents the pinnacle of Ferrari's road car technology, featuring a plug-in hybrid powertrain that combines a turbocharged V8 with three electric motors. Its carbon fiber and aluminum construction, sophisticated aerodynamics, and cutting-edge electronics create devastating performance. The digital cockpit and minimalist interior focus entirely on the driving experience.",
    price: 75000000, // ₹7,50,00,000
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "4.0L V8 Twin-Turbo + 3 Electric Motors",
      power: "1000 hp (combined)",
      torque: "800 Nm",
      acceleration: "0-100 km/h in 2.5s",
      topSpeed: "340 km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-3",
    name: "Huracán STO",
    brand: "Lamborghini",
    category: "sports-car",
    description: "The Lamborghini Huracán STO (Super Trofeo Omologata) is a road-legal supercar derived from Lamborghini's successful racing program. Its naturally-aspirated V10 engine delivers linear power delivery and an intoxicating soundtrack. The extensive use of carbon fiber, race-derived aerodynamics, and track-focused suspension create an authentic motorsport experience for the road.",
    price: 48900000, // ₹4,89,00,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "5.2L V10",
      power: "640 hp",
      torque: "565 Nm",
      acceleration: "0-100 km/h in 3.0s",
      topSpeed: "310 km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-4",
    name: "AMG GT Black Series",
    brand: "Mercedes-Benz",
    category: "sports-car",
    description: "The Mercedes-AMG GT Black Series represents the absolute pinnacle of AMG's performance engineering. Its flat-plane crank V8 engine, extensive use of carbon fiber, and sophisticated aerodynamics with active elements were developed from the company's GT3 racing program. The result is the most extreme and focused road car ever produced by Mercedes-AMG.",
    price: 55000000, // ₹5,50,00,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "4.0L V8 Biturbo",
      power: "730 hp",
      torque: "800 Nm",
      acceleration: "0-100 km/h in 3.2s",
      topSpeed: "325 km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-5",
    name: "MC20",
    brand: "Maserati",
    category: "sports-car",
    description: "The Maserati MC20 marks the brand's return to producing a mid-engine supercar. Its 'Nettuno' engine, developed entirely in-house, features Formula 1-derived technology. The carbon fiber monocoque, developed with racing specialists Dallara, ensures exceptional rigidity with minimal weight. Sophisticated yet purposeful, it combines Italian elegance with supercar performance.",
    price: 37000000, // ₹3,70,00,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "3.0L V6 Twin-Turbo",
      power: "621 hp",
      torque: "730 Nm",
      acceleration: "0-100 km/h in 2.9s",
      topSpeed: "325 km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-6",
    name: "F8 Tributo",
    brand: "Ferrari",
    category: "sports-car",
    description: "The Ferrari F8 Tributo pays homage to Ferrari's most powerful V8 engine. This mid-engine berlinetta features advanced aerodynamics that enhance both performance and cooling efficiency. The cockpit blends traditional Ferrari elements with modern technology. Its handling, acceleration, and engine note deliver an emotional driving experience that is quintessentially Ferrari.",
    price: 42000000, // ₹4,20,00,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "3.9L V8 Twin-Turbo",
      power: "710 hp",
      torque: "770 Nm",
      acceleration: "0-100 km/h in 2.9s",
      topSpeed: "340 km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-7",
    name: "Aventador SVJ",
    brand: "Lamborghini",
    category: "sports-car",
    description: "The Lamborghini Aventador SVJ (Super Veloce Jota) represents the most extreme version of Lamborghini's flagship V12 supercar. Its naturally-aspirated engine, active aerodynamics system (ALA 2.0), and sophisticated all-wheel drive create devastating performance. The dramatic styling and scissor doors maintain the Lamborghini tradition of visual drama and theatrical presence.",
    price: 85000000, // ₹8,50,00,000
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "6.5L V12",
      power: "770 hp",
      torque: "720 Nm",
      acceleration: "0-100 km/h in 2.8s",
      topSpeed: "350 km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-8",
    name: "DBS Superleggera",
    brand: "Aston Martin",
    category: "sports-car",
    description: "The Aston Martin DBS Superleggera combines the raw power of a super GT with the sophisticated elegance for which Aston Martin is renowned. Its twin-turbocharged V12 engine delivers immense power and torque, while the carbon fiber body provides strength with reduced weight. The sumptuous interior features hand-stitched leather and premium materials throughout.",
    price: 54000000, // ₹5,40,00,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "5.2L V12 Twin-Turbo",
      power: "725 hp",
      torque: "900 Nm",
      acceleration: "0-100 km/h in 3.4s",
      topSpeed: "340 km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-9",
    name: "720S",
    brand: "McLaren",
    category: "sports-car",
    description: "The McLaren 720S showcases McLaren's expertise in lightweight construction and aerodynamic efficiency. Its carbon fiber Monocage II structure provides exceptional rigidity with minimal weight, while the twin-turbocharged V8 delivers explosive performance. The innovative rotating driver display and dihedral doors add technological drama to this stunning supercar.",
    price: 48000000, // ₹4,80,00,000
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "710 hp",
      torque: "770 Nm",
      acceleration: "0-100 km/h in 2.9s",
      topSpeed: "341 km/h"
    },
    inStock: false
  },
  {
    id: "sports-car-10",
    name: "GT",
    brand: "Ford",
    category: "sports-car",
    description: "The Ford GT is a modern interpretation of the legendary race car that defeated Ferrari at Le Mans in the 1960s. Its carbon fiber construction, active aerodynamics, and twin-turbocharged EcoBoost V6 create exceptional performance. Designed primarily as a race car for the road, its purposeful design prioritizes aerodynamic efficiency and track capability.",
    price: 35000000, // ₹3,50,00,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "3.5L V6 EcoBoost Twin-Turbo",
      power: "647 hp",
      torque: "746 Nm",
      acceleration: "0-100 km/h in 3.0s",
      topSpeed: "348 km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-11",
    name: "R8 V10 Performance",
    brand: "Audi",
    category: "sports-car",
    description: "The Audi R8 V10 Performance combines supercar performance with everyday usability. Its naturally-aspirated V10 engine, shared with the Lamborghini Huracán, delivers linear power delivery and an intoxicating soundtrack. The Quattro all-wheel drive system provides exceptional traction in all conditions, while the Virtual Cockpit and refined interior ensure everyday comfort.",
    price: 24700000, // ₹2,47,00,000
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "5.2L V10",
      power: "620 hp",
      torque: "580 Nm",
      acceleration: "0-100 km/h in 3.1s",
      topSpeed: "331 km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-12",
    name: "Senna",
    brand: "McLaren",
    category: "sports-car",
    description: "The McLaren Senna is named after Formula 1 legend Ayrton Senna and represents McLaren's ultimate track-focused road car. Its extreme aerodynamics, including an enormous active rear wing, generate 800kg of downforce. The carbon fiber construction, minimalist interior, and lack of creature comforts emphasize its single-minded focus on track performance above all else.",
    price: 90000000, // ₹9,00,00,000
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "789 hp",
      torque: "800 Nm",
      acceleration: "0-100 km/h in 2.8s",
      topSpeed: "335 km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-13",
    name: "Valkyrie",
    brand: "Aston Martin",
    category: "sports-car",
    description: "The Aston Martin Valkyrie is a limited production hypercar developed in collaboration with Red Bull Racing. Its naturally-aspirated V12 engine revs to 11,000 rpm and combines with a hybrid system for extraordinary performance. The aerodynamic design by Adrian Newey features venturi tunnels that run underneath the vehicle for unprecedented downforce.",
    price: 240000000, // ₹24,00,00,000
    rating: 5.0,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "6.5L V12 + Electric Motor",
      power: "1160 hp (combined)",
      torque: "900 Nm",
      acceleration: "0-100 km/h in 2.5s",
      topSpeed: "350+ km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-14",
    name: "Chiron Super Sport",
    brand: "Bugatti",
    category: "sports-car",
    description: "The Bugatti Chiron Super Sport represents the absolute pinnacle of automotive performance and luxury. Its quad-turbocharged W16 engine produces mind-bending power, while the extensively redesigned aerodynamics allow for greater high-speed stability. Hand-built to exacting standards, it combines phenomenal performance with unmatched craftsmanship and exclusivity.",
    price: 320000000, // ₹32,00,00,000
    rating: 5.0,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "8.0L W16 Quad-Turbo",
      power: "1578 hp",
      torque: "1600 Nm",
      acceleration: "0-100 km/h in 2.4s",
      topSpeed: "440+ km/h"
    },
    inStock: true
  },
  {
    id: "sports-car-15",
    name: "Battista",
    brand: "Pininfarina",
    category: "sports-car",
    description: "The Pininfarina Battista is an all-electric hyper GT that combines stunning Italian design with unprecedented electric performance. Its four electric motors produce more power than a Formula 1 car, while the carbon fiber monocoque and T-shaped battery pack provide structural rigidity and optimal weight distribution. Only 150 units will be hand-built in Italy.",
    price: 190000000, // ₹19,00,00,000
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "4 Electric Motors",
      power: "1900 hp",
      torque: "2300 Nm",
      acceleration: "0-100 km/h in 1.9s",
      topSpeed: "350 km/h"
    },
    inStock: false
  },
  {
    id: "sports-car-16",
    name: "Jesko",
    brand: "Koenigsegg",
    category: "sports-car",
    description: "The Koenigsegg Jesko, named after the father of the company's founder, represents the absolute pinnacle of Koenigsegg's engineering prowess. Its twin-turbocharged V8 engine features a revolutionary 'Light Speed Transmission' for instant gear changes. The advanced aerodynamics produce over 1000kg of downforce, while the carbon fiber and aluminum construction keeps weight to a minimum.",
    price: 270000000, // ₹27,00,00,000
    rating: 5.0,
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ],
    specs: {
      engine: "5.0L V8 Twin-Turbo",
      power: "1600 hp (E85 fuel)",
      torque: "1500 Nm",
      acceleration: "0-100 km/h in 2.5s",
      topSpeed: "480+ km/h"
    },
    inStock: true
  }
];

