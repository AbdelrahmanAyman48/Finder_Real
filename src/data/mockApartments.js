import React from 'react';

export const mockApartments = [
  // {
  //   id: 'APT001',
  //   title: 'Spacious Downtown Loft',
  //   address: '123 Main St, Anytown, USA',
  //   price: 250000,
  //   bedrooms: 2,
  //   bathrooms: 2,
  //   area: 1200, 
  //   type: 'Loft',
  //   amenities: ['Parking', 'Balcony', 'Pet Friendly', 'In-unit Laundry', 'Gym'],
  //   description: 'Stunning 2-bedroom loft in the heart of downtown. Features high ceilings, modern kitchen, and city views. Building includes a gym and rooftop terrace.',
  //   images: [
  //     { 
  //       alt: 'Living room with city view',
  //       url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80'
  //       // url: '/images/1.jpeg'
  //     },
  //     {

  //       alt: 'Modern kitchen with island',
  //       url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80'
  //       // url: '/images/1-7-11/2.jpeg'
  //     },
  //     {
  //       alt: 'Bedroom with large window',
  //       url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80'
  //     },
  //     {
  //       alt: 'Rooftop terrace',
  //       url: 'https://images.unsplash.com/photo-1529408686214-b48b8532f72c?auto=format&fit=crop&w=1200&q=80'
  //     }
  //   ],
  //   agent: {
  //     name: 'Alice Wonderland',
  //     phone: '555-0101'
  //   },
  //   availabilityDate: '2025-07-01',
  //   rating: 4.8,
  //   isPremium: true,
  // },
  // {
  //   id: 'APT002',
  //   title: 'Cozy Suburban Apartment',
  //   address: '456 Oak Ave, Suburbia, USA',
  //   price: 150000,
  //   bedrooms: 3,
  //   bathrooms: 1.5,
  //   area: 950,
  //   type: 'Apartment',
  //   amenities: ['Parking', 'Garden Access', 'Quiet Neighborhood'],
  //   description: 'Charming 3-bedroom apartment in a quiet suburban neighborhood. Perfect for families. Close to parks and schools.',
  //   images: [
  //     {
  //       alt: 'Cozy living room with fireplace',
  //       url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
  //     },
  //     {
  //       alt: 'Kitchen with breakfast nook',
  //       url: 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?auto=format&fit=crop&w=1200&q=80'
  //     },
  //     {
  //       alt: 'Master bedroom',
  //       url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80'
  //     },
  //     {
  //       alt: 'Backyard garden',
  //       url: 'https://images.unsplash.com/photo-1558521558-037f1cb027c5?auto=format&fit=crop&w=1200&q=80'
  //     }
  //   ],
  //   agent: {
  //     name: 'Bob The Builder',
  //     phone: '555-0202'
  //   },
  //   availabilityDate: '2025-06-15',
  //   rating: 4.2,
  //   isPremium: false,
  // },
  // {
  //   id: 'APT003',
  //   title: 'Modern Studio Near Campus',
  //   address: '789 University Dr, Collegetown, USA',
  //   price: 350000,
  //   bedrooms: 0,
  //   bathrooms: 1,
  //   area: 500,
  //   type: 'Studio',
  //   amenities: ['Bike Storage', 'Shared Laundry', 'Utilities Included'],
  //   description: 'Bright and modern studio apartment, ideal for students. Walking distance to campus and local amenities. Utilities included.',
  //   images: [
  //     {
  //       alt: 'Modern studio apartment layout',
  //       url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
  //     },
  //     {
  //       alt: 'Efficient kitchenette',
  //       url: 'https://images.unsplash.com/photo-1630699144867-37acec97df5a?auto=format&fit=crop&w=1200&q=80'
  //     },
  //     {
  //       alt: 'Study area',
  //       url: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1200&q=80'
  //     }
  //   ],
  //   agent: {
  //     name: 'Carol Danvers',
  //     phone: '555-0303'
  //   },
  //   availabilityDate: '2025-08-01',
  //   rating: 4.0,
  //   isPremium: false,
  // },
  // {
  //   "id": "APT004",
  //   "title": "H",
  //   "address": "\u062a\u0648\u064a\u0646 \u0647\u0627\u0648\u0633 \u062b\u0646\u0627\u0626\u064a\u0629",
  //   "price": 55000,
  //   "bedrooms": 3,
  //   "bathrooms": 2,
  //   "area": 222,
  //   "type": "twin",
  //   "amenities": [],
  //   "description": NaN,
  //   "images": [
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (1)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (1).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (10)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (10).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (11)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (11).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (12)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (12).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (13)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (13).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (14)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (14).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (15)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (15).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (16)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (16).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (17)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (17).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (18)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (18).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (19)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (19).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (2)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (2).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (20)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (20).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (21)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (21).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (3)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (3).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (4)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (4).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (5)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (5).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (6)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (6).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (7)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (7).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (8)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (8).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM (9)",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM (9).webp"
  //     },
  //     {
  //       "alt": "Apartment APT004 - WhatsApp Image 2025-05-12 at 9.47.13 PM",
  //       "url": "/images/APT004/WhatsApp Image 2025-05-12 at 9.47.13 PM.webp"
  //     }
  //   ],
  //   "agent": {
  //     "name": NaN,
  //     "phone": "01554664328"
  //   },
  //   "availabilityDate": "nan",
  //   "rating": 3.0,
  //   "isPremium": false
  // },
  // {
  //   "id": "APT005",
  //   "title": "C",
  //   "address": "\u0645\u0633\u062a\u0642\u0644\u0629",
  //   "price": 45000,
  //   "bedrooms": 3,
  //   "bathrooms": 3,
  //   "area": 270,
  //   "type": "stand alone",
  //   "amenities": [],
  //   "description": NaN,
  //   "images": [
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (1)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (1).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (10)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (10).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (11)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (11).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (12)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (12).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (13)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (13).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (14)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (14).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (15)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (15).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (16)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (16).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (2)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (2).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (3)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (3).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (4)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (4).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (5)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (5).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (6)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (6).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (7)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (7).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (8)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (8).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM (9)",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM (9).webp"
  //     },
  //     {
  //       "alt": "Apartment APT005 - WhatsApp Image 2025-05-05 at 5.15.14 PM",
  //       "url": "/images/APT005/WhatsApp Image 2025-05-05 at 5.15.14 PM.webp"
  //     }
  //   ],
  //   "agent": {
  //     "name": NaN,
  //     "phone": "01554664329"
  //   },
  //   "availabilityDate": "nan",
  //   "rating": 4.0,
  //   "isPremium": false
  // }, 
    {
      "id": "RV001",
      "address": "Rehab",
      "area": 320.0,
      "description": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u0646\u0645\u0648\u0630\u062c H \u062a\u062a\u0643\u0648\u0646 \u0645\u0646 : 4\u063a\u0631\u0641 \u0646\u0648\u0645 4\u062d\u0645\u0627\u0645 \u0627\u0644\u0627\u0631\u0636\u0649 : \u0631\u064a\u0633\u0628\u0634\u0646 / \u0645\u0637\u0628\u062e / \u062d\u0645\u0627\u0645 \u0636\u064a\u0648\u0641 \u0627\u0644\u0627\u0648\u0644 : \u0663 \u063a\u0631\u0641 \u0645\u0646\u0647\u0645 \u063a\u0631\u0641\u0647 \u0645\u0627\u0633\u062a\u0631 + \u062d\u0645\u0627\u0645 \u0627\u062e\u0631 + \u0644\u064a\u0641\u064a\u0646\u062c \u0627\u0644\u0631\u0648\u0648\u0641 : \u063a\u0631\u0641\u0647 \u0631\u0626\u064a\u0633\u064a\u0647 + \u062d\u0645\u0627\u0645 \u0648\u0628\u0642\u064a\u0647 \u0627\u0644\u0631\u0648\u0648\u0641 \u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0627\u0631\u0636 : \u0663\u0664\u0660\u0645 \u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0645\u0628\u0627\u0646\u0649 : \u0662\u0663\u0660\u0645 \u062c\u0627\u0647\u0632\u0629 \u0639\u0644\u064a \u0627\u0644\u0633\u0643\u0646 \u0645\u0628\u0627\u0634\u0631\u0629 \u0627\u0644\u0645\u0641\u062a\u0627\u062d \u0645\u0648\u062c\u0648\u062f \u0644\u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u0645\u0639\u0627\u064a\u0646\u0629 \u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0639\u0628\u0631 \u0627\u0644\u0641\u0648\u0646 \u0627\u0648 \u0627\u0644\u0648\u0627\u062a\u0633 \u0627\u0628 01125422310 01000290924 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0645\u0647\u0645\u0629 \u0639\u0646 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u062a\u0639\u062f \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u0645\u0646 \u0623\u0648\u0627\u0626\u0644 \u0627\u0644\u0645\u062f\u0646 \u0627\u0644\u0633\u0643\u0646\u064a\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u0623\u0646\u0634\u0626\u062a \u0641\u064a \u0645\u0635\u0631 \u0639\u0644\u064a \u064a\u062f \u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0645\u0637\u0648\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \u0637\u0644\u0639\u062a \u0645\u0635\u0637\u0641\u064a \u0648\u0627\u0644\u062a\u064a \u062a\u0645 \u0627\u0644\u0639\u0645\u0644 \u0641\u064a\u0647\u0627 \u0639\u0627\u0645 1997 \u0641\u0647\u064a \u0645\u0646 \u0627\u0642\u062f\u0645 \u0627\u0644\u0645\u062f\u0646 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0648 \u062a\u062a\u0648\u0627\u0644\u064a \u0627\u0644\u062a\u0637\u0648\u064a\u0631\u0627\u062a \u0648\u0627\u0644\u0627\u0646\u0634\u0627\u0621\u0627\u062a \u0628\u0647\u0627 \u0644\u0643\u064a \u062a\u0633\u062a\u0648\u0639\u0628 \u0623\u0643\u0628\u0631 \u0639\u062f\u062f \u0645\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0623\u0641\u0631\u0627\u062f \u0627\u0644\u062a\u064a \u064a\u062a\u0648\u062c\u0647\u0648\u0646 \u0627\u0644\u064a\u0647\u0627 \u0644\u0644\u062a\u0645\u062a\u0639 \u0628\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u0648\u0641\u0631\u0647\u0627 . \u062a\u0639\u0631\u0641 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u0628\u0644\u0642\u0628 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u062e\u0636\u0631\u0627\u0621 \u0628\u0633\u0628\u0628 \u0643\u062b\u0631\u0629 \u0627\u0644\u0645\u0633\u0627\u062d\u0627\u062a \u0627\u0644\u062e\u0636\u0631\u0627\u0621 \u0648\u062a\u0645 \u0627\u0646\u0634\u0627\u0626\u0647\u0627 \u062e\u0627\u0631\u062c \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u0643\u0628\u0631\u064a\u0648\u062a\u0633\u062a\u0648\u0639\u0628 \u0645\u0646 \u0627\u0644\u0633\u0643\u0627\u0646 \u062d\u0648\u0627\u0644\u064a 200 \u0627\u0644\u0641 \u0646\u0633\u0645\u0629 \u0648\u0627\u0644\u0647\u062f\u0641 \u0645\u0646 \u0627\u0646\u0634\u0627\u0621 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u0647\u0648 \u062a\u062e\u0641\u064a\u0641 \u0627\u0644\u0636\u063a\u0637 \u0648\u0627\u0644\u0627\u0632\u062f\u062d\u0627\u0645 \u0627\u0644\u0645\u062a\u0648\u0627\u062c\u062f \u0641\u064a \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0642\u0627\u0647\u0631\u0629. \u062a\u0636\u0645 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 10 \u0627\u062d\u064a\u0627\u0621 \u0648\u062a\u0628\u0644\u063a \u0645\u0633\u0627\u062d\u0629 \u0643\u0644 \u062d\u064a 220 \u0641\u062f\u0627\u0646 \u0648\u062c\u0645\u064a\u0639 \u0627\u062d\u064a\u0627\u0626\u0647\u0627 \u064a\u062a\u0648\u0627\u0641\u0631 \u0628\u0647\u0627 \u0643\u0627\u0641\u0629 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0627\u0644\u062a\u064a \u062a\u0644\u0628\u064a \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0642\u0627\u0637\u0646\u064a\u0629 \u0648\u062a\u062a\u0645\u064a\u0632 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0628\u0645\u0646\u0627\u062e\u0647\u0627 \u0627\u0644\u0645\u0639\u062a\u062f\u0644 \u0637\u0648\u0627\u0644 \u0627\u0644\u0639\u0627\u0645 \u0641\u0642\u062f \u0628\u0646\u064a\u062a \u0639\u0644\u064a \u0645\u0633\u0627\u062d\u0629 \u0645\u0631\u062a\u0641\u0639\u0629 \u0639\u0646 \u0633\u0637\u062d \u0627\u0644\u0628\u062d\u0631 . \u0645\u0648\u0642\u0639 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u0645\u0646 \u0627\u0644\u0623\u062d\u064a\u0627\u0621 \u0627\u0644\u0633\u0643\u0646\u064a\u0629 \u0627\u0644\u0634\u0647\u064a\u0631\u0629 \u0627\u0644\u062a\u064a \u062a\u0642\u0639 \u0641\u064a \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0639\u0644\u064a \u0628\u0639\u062f 20 \u062f\u0642\u064a\u0642\u0629 \u0645\u0646 \u0648\u0633\u0637 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u0637\u0631\u064a\u0642 \u0627\u0644\u062f\u0627\u0626\u0631\u064a \u0627\u0644\u0623\u0648\u0644 \u0627\u0644\u0645\u062a\u0642\u0627\u0637\u0639 \u0645\u0639 \u0637\u0631\u064a\u0642 \u0627\u0644\u0633\u0648\u064a\u0633 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0643\u0645\u0627 \u0627\u0646\u0647\u0627 \u062a\u0642\u0639 \u0639\u064a \u0628\u0639\u062f 10 \u062f\u0642\u0627\u0626\u0642 \u0645\u0646 \u0645\u0635\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0648\u0645\u062f\u064a\u0646\u0629 \u0646\u0635\u0631 \u0639\u0644\u064a \u0637\u0631\u064a\u0642 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u0633\u0648\u064a\u0633 . \u062a\u0641\u0627\u0635\u064a\u0644 \u0639\u0646 \u062d\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0644\u0627 \u0634\u0643 \u0623\u0646 \u0627\u0644\u0631\u062d\u0627\u0628 \u0645\u0646 \u0623\u0648\u0627\u0626\u0644 \u0627\u0644\u0645\u062f\u0646 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644\u0629 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0641\u064a \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u062d\u064a\u062b \u062a\u0639\u062f \u062a\u062c\u0631\u0628\u0629 \u0633\u0643\u0646 \u0641\u0631\u064a\u062f\u0629 \u0644\u062c\u0645\u0627\u0644 \u0645\u0648\u0642\u0639\u0647\u0627 \u0648\u062a\u0635\u0645\u064a\u0645\u0627\u062a\u0647\u0627 \u0627\u0644\u0641\u0631\u064a\u062f\u0629 \u0627\u0644\u064a \u062c\u0627\u0646\u0628 \u0627\u062d\u062a\u0648\u0627\u0626\u0647\u0627 \u0643\u0627\u0641\u0629 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u062d\u062a\u0627\u062c\u0647\u0627 \u0627\u0644\u0623\u0641\u0631\u0627\u062f \u0648\u0645\u0646 \u062e\u062f\u0645\u0627\u062a \u062d\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0645\u062a\u0646\u0648\u0639\u0629 : \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u062a\u0636\u0645 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0639\u062f\u064a\u062f \u0645\u0646 \u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u0648\u0645\u0646 \u0627\u0647\u0645 \u062a\u0644\u0643 \u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u0645\u0648\u0644 \u0627\u0644\u0631\u062d\u0627\u0628 1 \u0648\u0645\u0648\u06442 \u0648\u0645\u0648\u0644 \u062c\u064a\u062a \u0648\u0627\u064a \u0648\u0645\u0648\u0644 \u0627\u0641\u064a\u0646\u064a\u0648 \u0643\u0645\u0627 \u064a\u0648\u062c\u062f \u0639\u062f\u062f 2\u0633\u0648\u0642 \u062a\u062c\u0627\u0631\u064a \u0648\u0647\u0645\u0627 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0642\u062f\u064a\u0645 \u0648\u064a\u0642\u0639 \u0645\u0648\u0642\u0639\u0647 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 1 \u0628\u062c\u0627\u0646\u0628 \u0628\u0648\u0627\u0628\u0629 5\u06486 \u0648\u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0634\u0631\u0642\u064a \u0648\u064a\u0642\u0639 \u0645\u0648\u0642\u0639\u0647\u0627 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 2 \u0628\u062c\u0627\u0646\u0628 \u0628\u0648\u0627\u0628\u0629 23 \u064822",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "E G R Realestate company",
      "price": 70000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634\u0629 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 4\u0646\u0648\u0645 4\u062d\u0645\u0627\u0645 \u0627\u0644\u0633\u0639\u0631 \u0644\u0642\u0637\u0629",
      "agent_phone": "1125422310",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (1)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (1).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (10)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (10).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (11)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (11).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (12)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (12).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (13)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (13).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (14)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (14).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (15)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (15).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (16)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (16).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (17)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (17).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (18)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (18).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (2)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (2).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (3)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (3).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (4)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (4).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (5)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (5).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (6)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (6).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (7)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (7).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (8)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (8).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM (9)",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM (9).webp"
        },
        {
          "alt": "Apartment RV001 - WhatsApp Image 2025-05-03 at 10.59.07 AM",
          "url": "/images/RV001/WhatsApp Image 2025-05-03 at 10.59.07 AM.webp"
        }
      ]
    },
    {
      "id": "RV002",
      "address": "Rehab",
      "area": 220.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0628\u0645\u062f\u064a\u0646\u0647 \u0627\u0644\u0631\u062d\u0627\u0628 \u0628\u0627\u0644\u0645\u0631\u062d\u0644\u0647 \u0627\u0644\u0627\u0648\u0644\u064a \u0628\u062c\u0648\u0627\u0631 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u062a\u062c\u0627\u0631\u064a \u0627\u0644\u0642\u062f\u064a\u0645 \u0648\u0645\u0648\u0644 1 \u0646\u0645\u0648\u0632\u062c b \u0627\u0644\u062a\u0642\u0633\u064a\u0645\u0647 \u0627\u0644\u062f\u0627\u062e\u0644\u064a\u0647 \u0644\u0644\u063a\u0631\u0641 3 \u063a\u0631\u0641 3 \u062d\u0645\u0627\u0645 \u0631\u064a\u0633\u0628\u0634\u0646 \u0643\u0628\u064a\u0631 \u0645\u0633\u0627\u062d\u0647 220 \u0645\u062a\u0631",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 3.0,
      "bedrooms": 3.0,
      "agent_name": "",
      "price": 70000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0628\u0645\u062f\u064a\u0646\u0647 \u0627\u0644\u0631\u062d\u0627\u0628 \u0628\u0627\u0644\u0645\u0631\u062d\u0644\u0647 \u0627\u0644\u0627\u0648\u0644\u064a \u0628\u062c\u0648\u0627\u0631 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u062a\u062c\u0627\u0631\u064a \u0627\u0644\u0642\u062f\u064a\u0645 \u0648\u0645\u0648\u0644 1 \u0646\u0645\u0648\u0632\u062c b",
      "agent_phone": "1004199704",
      "type": "Furnitured",
      "contact": "Office",
      "state": "Rented",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (1)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (1).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (10)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (10).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (11)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (11).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (12)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (12).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (13)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (13).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (14)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (14).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (15)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (15).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (16)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (16).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (17)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (17).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (18)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (18).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (19)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (19).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (2)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (2).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (20)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (20).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (21)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (21).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (22)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (22).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (3)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (3).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (4)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (4).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (5)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (5).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (6)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (6).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (7)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (7).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (8)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (8).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM (9)",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM (9).webp"
        },
        {
          "alt": "Apartment RV002 - WhatsApp Image 2025-05-03 at 11.06.18 AM",
          "url": "/images/RV002/WhatsApp Image 2025-05-03 at 11.06.18 AM.webp"
        }
      ]
    },
    {
      "id": "RV003",
      "address": "Rehab",
      "area": 280.0,
      "description": "First Floor, No. 136",
      "model": "",
      "bathrooms": 3.0,
      "bedrooms": 3.0,
      "agent_name": "bc1947",
      "price": 70000.0,
      "title": "",
      "agent_phone": "1275503111",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (1)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (1).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (10)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (10).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (11)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (11).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (12)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (12).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (13)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (13).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (14)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (14).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (15)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (15).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (16)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (16).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (17)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (17).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (18)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (18).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (19)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (19).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (2)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (2).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (20)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (20).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (21)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (21).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (22)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (22).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (23)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (23).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (24)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (24).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (25)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (25).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (26)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (26).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (27)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (27).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (28)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (28).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (29)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (29).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (3)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (3).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (30)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (30).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (31)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (31).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (32)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (32).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (33)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (33).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (34)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (34).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (35)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (35).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (36)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (36).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (37)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (37).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (38)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (38).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (39)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (39).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (4)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (4).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (40)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (40).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (41)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (41).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (42)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (42).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (43)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (43).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (44)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (44).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (45)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (45).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (46)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (46).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (47)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (47).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (48)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (48).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (49)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (49).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (5)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (5).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (50)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (50).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (51)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (51).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (52)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (52).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (53)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (53).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (54)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (54).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (55)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (55).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (56)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (56).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (57)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (57).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (58)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (58).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (59)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (59).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (6)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (6).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (60)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (60).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (61)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (61).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (62)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (62).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (7)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (7).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (8)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (8).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM (9)",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM (9).webp"
        },
        {
          "alt": "Apartment RV003 - WhatsApp Image 2025-05-03 at 11.20.14 AM",
          "url": "/images/RV003/WhatsApp Image 2025-05-03 at 11.20.14 AM.webp"
        }
      ]
    },
    {
      "id": "RV004",
      "address": "R1G5M1So",
      "area": 350.0,
      "description": "",
      "model": "",
      "bathrooms": 3.0,
      "bedrooms": 4.0,
      "agent_name": "bc3563",
      "price": 70000.0,
      "title": "",
      "agent_phone": "",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM (1)",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM (1).webp"
        },
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM (10)",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM (10).webp"
        },
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM (11)",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM (11).webp"
        },
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM (12)",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM (12).webp"
        },
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM (2)",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM (2).webp"
        },
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM (3)",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM (3).webp"
        },
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM (4)",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM (4).webp"
        },
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM (5)",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM (5).webp"
        },
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM (6)",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM (6).webp"
        },
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM (7)",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM (7).webp"
        },
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM (8)",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM (8).webp"
        },
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM (9)",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM (9).webp"
        },
        {
          "alt": "Apartment RV004 - WhatsApp Image 2025-05-03 at 11.22.12 AM",
          "url": "/images/RV004/WhatsApp Image 2025-05-03 at 11.22.12 AM.webp"
        }
      ]
    },
    {
      "id": "RV005",
      "address": "R1",
      "area": 0,
      "description": "",
      "model": "",
      "bathrooms": 0,
      "bedrooms": 0,
      "agent_name": "bc5195",
      "price": 80000.0,
      "title": "",
      "agent_phone": "",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV005 - WhatsApp Image 2025-05-04 at 10.07.03 PM (1)",
          "url": "/images/RV005/WhatsApp Image 2025-05-04 at 10.07.03 PM (1).webp"
        },
        {
          "alt": "Apartment RV005 - WhatsApp Image 2025-05-04 at 10.07.03 PM (2)",
          "url": "/images/RV005/WhatsApp Image 2025-05-04 at 10.07.03 PM (2).webp"
        },
        {
          "alt": "Apartment RV005 - WhatsApp Image 2025-05-04 at 10.07.03 PM (3)",
          "url": "/images/RV005/WhatsApp Image 2025-05-04 at 10.07.03 PM (3).webp"
        },
        {
          "alt": "Apartment RV005 - WhatsApp Image 2025-05-04 at 10.07.03 PM",
          "url": "/images/RV005/WhatsApp Image 2025-05-04 at 10.07.03 PM.webp"
        }
      ]
    },
    {
      "id": "RV006",
      "address": "",
      "area": 450.0,
      "description": "\u0639\u0644\u064a \u0634\u0627\u0631\u0639 \u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0645\u0627\u0644\u0643\u0647 \u0628\u062a\u062c\u062f\u062f \u063a\u0631\u0641 \u0627\u0644\u0646\u0648\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644",
      "model": "",
      "bathrooms": 0,
      "bedrooms": 0,
      "agent_name": "bc996",
      "price": 100000.0,
      "title": "",
      "agent_phone": "",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV006 - WhatsApp Image 2025-05-06 at 2.35.35 PM",
          "url": "/images/RV006/WhatsApp Image 2025-05-06 at 2.35.35 PM.webp"
        },
        {
          "alt": "Apartment RV006 - WhatsApp Image 2025-05-06 at 2.35.36 PM",
          "url": "/images/RV006/WhatsApp Image 2025-05-06 at 2.35.36 PM.webp"
        },
        {
          "alt": "Apartment RV006 - WhatsApp Image 2025-05-06 at 2.35.37 PM",
          "url": "/images/RV006/WhatsApp Image 2025-05-06 at 2.35.37 PM.webp"
        },
        {
          "alt": "Apartment RV006 - WhatsApp Image 2025-05-06 at 2.35.38 PM",
          "url": "/images/RV006/WhatsApp Image 2025-05-06 at 2.35.38 PM.webp"
        },
        {
          "alt": "Apartment RV006 - WhatsApp Image 2025-05-06 at 2.35.39 PM",
          "url": "/images/RV006/WhatsApp Image 2025-05-06 at 2.35.39 PM.webp"
        },
        {
          "alt": "Apartment RV006 - WhatsApp Image 2025-05-06 at 2.35.40 PM",
          "url": "/images/RV006/WhatsApp Image 2025-05-06 at 2.35.40 PM.webp"
        },
        {
          "alt": "Apartment RV006 - WhatsApp Image 2025-05-06 at 2.35.41 PM",
          "url": "/images/RV006/WhatsApp Image 2025-05-06 at 2.35.41 PM.webp"
        },
        {
          "alt": "Apartment RV006 - WhatsApp Image 2025-05-06 at 2.35.43 PM",
          "url": "/images/RV006/WhatsApp Image 2025-05-06 at 2.35.43 PM.webp"
        },
        {
          "alt": "Apartment RV006 - WhatsApp Image 2025-05-06 at 2.35.44 PM",
          "url": "/images/RV006/WhatsApp Image 2025-05-06 at 2.35.44 PM.webp"
        },
        {
          "alt": "Apartment RV006 - WhatsApp Image 2025-05-06 at 2.35.46 PM",
          "url": "/images/RV006/WhatsApp Image 2025-05-06 at 2.35.46 PM.webp"
        }
      ]
    },
    {
      "id": "RV007",
      "address": "R2",
      "area": 550.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0645\u064a\u0632 \u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 1 \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u0623\u0648\u0644 Rehab city, new cairo \u0646\u0645\u0648\u0630\u062c E \u0627\u0644\u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632 \u0641\u064a \u0627\u0644\u0645\u0631\u062d\u0644\u0647 \u0627\u0644\u0627\u0648\u0644\u064a \u0641\u064a\u0644\u0627\u062a \u0627\u0644\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634\u0647 \u0641\u0631\u0634 \u0646\u0638\u064a\u0641 \u062c\u0627\u0647\u0632\u0647 \u0639\u0644\u064a \u0627\u0644\u0633\u0643\u0646 \u0641\u0648\u0631\u0627 \u0627\u0644\u0641\u064a\u0644\u0627 \u0645\u0643\u0648\u0646\u0647 \u0645\u0646 3 \u0646\u0648\u0645 3 \u062d\u0645\u0627\u0645 \u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0627\u0631\u0636 550\u0645\u062a\u0631 \u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0645\u0628\u0627\u0646\u0649 300\u0645\u062a\u0631 \u0641\u064a\u0647\u0627 \u0628\u0639\u0636 \u0627\u0644\u062a\u0634\u0637\u064a\u0628\u0627\u062a \u0627\u0644\u062e\u0627\u0635\u0647 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631\u0627\u062a \u0648\u0627\u062a\u0633\u0627\u0628 \u0648\u0641\u0648\u0646: 01022228005 / 01101210222",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 3.0,
      "bedrooms": 4.0,
      "agent_name": "Al Masrya real estate",
      "price": 70000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0645\u064a\u0632 \u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 1 \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u0623\u0648\u0644 Rehab city, new cairo \u0646\u0645\u0648\u0630\u062c E",
      "agent_phone": "1022228005",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (1)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (1).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (10)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (10).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (11)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (11).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (12)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (12).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (13)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (13).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (2)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (2).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (3)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (3).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (4)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (4).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (5)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (5).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (6)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (6).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (7)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (7).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (8)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (8).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM (9)",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM (9).webp"
        },
        {
          "alt": "Apartment RV007 - WhatsApp Image 2025-05-06 at 3.59.52 PM",
          "url": "/images/RV007/WhatsApp Image 2025-05-06 at 3.59.52 PM.webp"
        }
      ]
    },
    {
      "id": "RV008",
      "address": "Rehab",
      "area": 0,
      "description": "",
      "model": "",
      "bathrooms": 3.0,
      "bedrooms": 3.0,
      "agent_name": "bc873",
      "price": 75000.0,
      "title": "",
      "agent_phone": "",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (1)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (1).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (10)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (10).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (11)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (11).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (12)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (12).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (13)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (13).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (14)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (14).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (15)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (15).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (16)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (16).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (17)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (17).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (18)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (18).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (19)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (19).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (2)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (2).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (3)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (3).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (4)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (4).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (5)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (5).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (6)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (6).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (7)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (7).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (8)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (8).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM (9)",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM (9).webp"
        },
        {
          "alt": "Apartment RV008 - WhatsApp Image 2025-05-06 at 4.01.44 PM",
          "url": "/images/RV008/WhatsApp Image 2025-05-06 at 4.01.44 PM.webp"
        }
      ]
    },
    {
      "id": "RV009",
      "address": "G5",
      "area": 240.0,
      "description": "\u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \n\u0641\u064a\u0644\u0627 \u0631\u0628\u0627\u0639\u064a \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \n\u0641\u064a \u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u0627\u0648\u0644\u064a \n\u0645\u0633\u0627\u062d\u0629 \u0627\u0631\u0636 240 \n\u0645\u0628\u0627\u0646\u064a 225 \n\u0646\u0645\u0648\u0630\u062c G \n3 \u063a\u0631\u0641\u0629 + \u063a\u0631\u0641\u0629 \u062e\u062f\u0645\u0627\u062a \u0641\u064a \u0627\u0644\u0631\u0648\u0641 \n3 \u062d\u0645\u0627\u0645 \n\u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0629 \n\u0645\u0637\u0644\u0648\u0628 90 \u0627\u0644\u0641 \n\n\u0644\u062a\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631: 01120052474",
      "model": "\u0627\u064a \u0641\u064a\u0644\u0627",
      "bathrooms": 3.0,
      "bedrooms": 4.0,
      "agent_name": "Al Masrya real estate",
      "price": 120000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0631\u0628\u0627\u0639\u064a 240\u0645 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0646\u0645\u0648\u0630\u062c G \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634",
      "agent_phone": "1120052474",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (1)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (1).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (10)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (10).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (11)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (11).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (12)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (12).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (13)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (13).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (14)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (14).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (15)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (15).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (2)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (2).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (3)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (3).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (4)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (4).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (5)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (5).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (6)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (6).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (7)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (7).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (8)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (8).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM (9)",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM (9).webp"
        },
        {
          "alt": "Apartment RV009 - WhatsApp Image 2025-05-28 at 2.16.20 PM",
          "url": "/images/RV009/WhatsApp Image 2025-05-28 at 2.16.20 PM.webp"
        }
      ]
    },
    {
      "id": "RV010",
      "address": "Rehab",
      "area": 212.0,
      "description": "\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0631\u0636 \u0662\u0664\u0663\n\u0645\u0628\u06274\u0646\u064a \u0662\u0661\u0662\n\u0664 \u063a\u0631\u0641 \u0663 \u062d\u0645\u0627\u0645 \n\u0627\u0644\u0625\u064a\u062c\u0627\u0631 \u0633\u0646\u0648\u0649 \n\u0645\u0637\u0644\u0648\u0628 \u0669\u0660 \u062a\u0641\u0627\u0648\u0636 \u062a\u062e\u0644\u0635 80",
      "model": "",
      "bathrooms": 3.0,
      "bedrooms": 4.0,
      "agent_name": "bc1576",
      "price": 85000.0,
      "title": "",
      "agent_phone": "",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.26 PM (1)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.26 PM (1).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.26 PM",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.26 PM.webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (1)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (1).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (10)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (10).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (11)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (11).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (12)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (12).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (13)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (13).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (14)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (14).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (15)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (15).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (16)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (16).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (17)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (17).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (18)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (18).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (19)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (19).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (2)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (2).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (20)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (20).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (21)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (21).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (22)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (22).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (23)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (23).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (24)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (24).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (3)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (3).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (4)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (4).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (5)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (5).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (6)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (6).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (7)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (7).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (8)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (8).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM (9)",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM (9).webp"
        },
        {
          "alt": "Apartment RV010 - WhatsApp Image 2025-05-06 at 4.06.27 PM",
          "url": "/images/RV010/WhatsApp Image 2025-05-06 at 4.06.27 PM.webp"
        }
      ]
    },
    {
      "id": "RV011",
      "address": "Rehab",
      "area": 220.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 4 \u063a\u0631\u0641 \u0648 4 \u062d\u0645\u0627\u0645 \u0646\u0645\u0648\u0632\u062c H \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0629 Furnished villa for rent in Al Rehab, 4 bedrooms, 4 bathrooms, Model H Special finishes For Contact (\u0639\u0631\u0636 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641) what\u2019s up (\u0639\u0631\u0636 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641)",
      "model": "\u062a\u0627\u0648\u0646 \u0647\u0627\u0648\u0633",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "",
      "price": 90000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 4 \u063a\u0631\u0641 \u0648 4 \u062d\u0645\u0627\u0645 \u0646\u0645\u0648\u0632\u062c H",
      "agent_phone": "1509026636",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.18 PM",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.18 PM.webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.19 PM (1)",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.19 PM (1).webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.19 PM",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.19 PM.webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.20 PM",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.20 PM.webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.21 PM",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.21 PM.webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.22 PM (1)",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.22 PM (1).webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.22 PM (2)",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.22 PM (2).webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.22 PM",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.22 PM.webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.23 PM (1)",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.23 PM (1).webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.23 PM",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.23 PM.webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.24 PM (1)",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.24 PM (1).webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.24 PM (2)",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.24 PM (2).webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.24 PM",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.24 PM.webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.25 PM (1)",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.25 PM (1).webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.25 PM",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.25 PM.webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.26 PM (1)",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.26 PM (1).webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.26 PM (2)",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.26 PM (2).webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.26 PM",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.26 PM.webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.27 PM (1)",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.27 PM (1).webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.27 PM (2)",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.27 PM (2).webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.27 PM",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.27 PM.webp"
        },
        {
          "alt": "Apartment RV011 - WhatsApp Image 2025-06-03 at 4.03.28 PM",
          "url": "/images/RV011/WhatsApp Image 2025-06-03 at 4.03.28 PM.webp"
        }
      ]
    },
    {
      "id": "RV012",
      "address": "Rehab",
      "area": 237.0,
      "description": "\u0646\u0645\u0648\u0630\u062c C \u0641\u064a \u0627\u0644\u0627\u0648\u0644\u064a. 5\u0645 4\u062d \u0628100\u0627\u0644\u0641",
      "model": "C",
      "bathrooms": 4.0,
      "bedrooms": 5.0,
      "agent_name": "",
      "price": 90000.0,
      "title": "",
      "agent_phone": "1009666626",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (1)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (1).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (10)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (10).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (11)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (11).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (12)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (12).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (13)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (13).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (14)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (14).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (15)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (15).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (16)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (16).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (17)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (17).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (18)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (18).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (19)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (19).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (2)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (2).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (20)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (20).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (21)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (21).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (22)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (22).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (3)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (3).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (4)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (4).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (5)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (5).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (6)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (6).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (7)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (7).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (8)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (8).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM (9)",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM (9).webp"
        },
        {
          "alt": "Apartment RV012 - WhatsApp Image 2025-05-06 at 4.08.04 PM",
          "url": "/images/RV012/WhatsApp Image 2025-05-06 at 4.08.04 PM.webp"
        }
      ]
    },
    {
      "id": "RV013",
      "address": "Rehab",
      "area": 280.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0646\u0645\u0648\u0630\u062c (i) \n\u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0623\u0648\u0644 \u0644\u0644\u0641\u064a\u0644\u0627 \u0664 \u063a\u0631\u0641 \u0646\u0648\u0645 \u0661\u0645\u0627\u0633\u062a\u0631 \u0628\u062d\u0645\u0627\u0645 \u0648 \u0663\u063a\u0631\u0641\u0629 \u0628\u062d\u0645\u0627\u0645 +\u0631\u064a\u0633\u0628\u0634\u0646 \n\u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0623\u0631\u0636\u064a \n\u063a\u0631\u0641\u0629 \u0633\u0641\u0631\u0647 \u0648 \u062c\u0644\u0648\u0633 \u0639\u0644\u064a \u062c\u0632\u0626\u064a\u0646 \n\u0645\u0637\u0628\u062e +\u062d\u0645\u0627\u0645 \u0636\u064a\u0648\u0641+\u063a\u0631\u0641\u0629 \u0634\u063a\u0627\u0644\u0629 \u0628\u062d\u0645\u0627\u0645+\u0645\u0637\u0628\u062e \n\u0628\u062c\u0648\u0627\u0631 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \n\u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0647 \u0628\u0627\u0644\u0643\u0627\u0645\u0644",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 3.0,
      "bedrooms": 4.0,
      "agent_name": "",
      "price": 95000.0,
      "title": "\u0645\u062a\u0627\u062d \u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634\u0647 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0628\u0633\u0639\u0631 \u0645\u0645\u064a\u0632 \u062c\u062f\u0627",
      "agent_phone": "1068965653",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.36 PM (1)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.36 PM (1).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.36 PM (10)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.36 PM (10).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.36 PM (11)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.36 PM (11).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.36 PM (2)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.36 PM (2).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.36 PM (3)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.36 PM (3).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.36 PM (4)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.36 PM (4).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.36 PM (5)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.36 PM (5).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.36 PM (6)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.36 PM (6).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.36 PM (7)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.36 PM (7).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.36 PM (8)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.36 PM (8).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.36 PM (9)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.36 PM (9).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.36 PM",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.36 PM.webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM (1)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM (1).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM (10)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM (10).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM (11)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM (11).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM (12)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM (12).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM (2)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM (2).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM (3)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM (3).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM (4)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM (4).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM (5)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM (5).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM (6)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM (6).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM (7)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM (7).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM (8)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM (8).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM (9)",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM (9).webp"
        },
        {
          "alt": "Apartment RV013 - WhatsApp Image 2025-05-06 at 4.46.37 PM",
          "url": "/images/RV013/WhatsApp Image 2025-05-06 at 4.46.37 PM.webp"
        }
      ]
    },
    {
      "id": "RV014",
      "address": "Rehab",
      "area": 400.0,
      "description": "* \u0641\u064a\u0644\u0627 \u0641\u0646\u062f\u0642\u064a\u0629 \u0645\u0641\u0631\u0648\u0634\u0629 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 - \u0646\u0645\u0648\u0630\u062c T1 * *\u0627\u0644\u0645\u0633\u0627\u062d\u0629:* 275 \u0645\u062a\u0631 *\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644:* - 3 \u063a\u0631\u0641 \u0646\u0648\u0645 - 3 \u062d\u0645\u0627\u0645 - *\u062a\u0635\u0645\u064a\u0645 \u0641\u0646\u062f\u0642\u064a \u0631\u0627\u0642\u064a* - *\u0645\u0641\u0631\u0648\u0634\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644* \u0628\u0623\u062c\u0648\u062f \u0627\u0644\u0623\u062b\u0627\u062b \u0648\u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u062d\u062f\u064a\u062b\u0629 - *\u062a\u0634\u0637\u064a\u0628 \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633* * \u0627\u0644\u0645\u0648\u0642\u0639:* *\u0627\u0644\u0631\u062d\u0627\u0628* - \u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632 \u0628\u0627\u0644\u0642\u0631\u0628 \u0645\u0646 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 3.0,
      "bedrooms": 3.0,
      "agent_name": "",
      "price": 90000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0641\u0646\u062f\u0642\u064a\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0628\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0645\u0627\u0645 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0627\u0644\u0628\u0646\u0648\u0643",
      "agent_phone": "1115105222",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (1)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (1).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (10)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (10).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (11)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (11).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (12)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (12).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (13)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (13).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (2)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (2).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (3)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (3).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (4)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (4).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (5)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (5).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (6)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (6).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (7)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (7).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (8)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (8).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM (9)",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM (9).webp"
        },
        {
          "alt": "Apartment RV014 - WhatsApp Image 2025-05-06 at 5.29.00 PM",
          "url": "/images/RV014/WhatsApp Image 2025-05-06 at 5.29.00 PM.webp"
        }
      ]
    },
    {
      "id": "RV015",
      "address": "Rehab",
      "area": 0,
      "description": "\u0641\u064a\u0644\u0627 v \u0641\u064a \u0627\u0644\u062b\u0627\u0645\u0646\u0629",
      "model": "C",
      "bathrooms": 5.0,
      "bedrooms": 5.0,
      "agent_name": "\u0648\u0641\u0627\u0621",
      "price": 100000.0,
      "title": "",
      "agent_phone": "1286591691",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.39 PM (1)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.39 PM (1).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.39 PM",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.39 PM.webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.40 PM (1)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.40 PM (1).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.40 PM",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.40 PM.webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.41 PM (1)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.41 PM (1).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.41 PM (2)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.41 PM (2).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.41 PM",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.41 PM.webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.42 PM (1)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.42 PM (1).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.42 PM (2)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.42 PM (2).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.42 PM",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.42 PM.webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.43 PM (1)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.43 PM (1).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.43 PM (2)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.43 PM (2).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.43 PM",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.43 PM.webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.44 PM (1)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.44 PM (1).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.44 PM (2)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.44 PM (2).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.44 PM",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.44 PM.webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.45 PM (1)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.45 PM (1).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.45 PM (2)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.45 PM (2).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.45 PM",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.45 PM.webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.46 PM (1)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.46 PM (1).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.16.46 PM",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.16.46 PM.webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.17.55 PM (1)",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.17.55 PM (1).webp"
        },
        {
          "alt": "Apartment RV015 - WhatsApp Image 2025-06-03 at 4.17.55 PM",
          "url": "/images/RV015/WhatsApp Image 2025-06-03 at 4.17.55 PM.webp"
        }
      ]
    },
    {
      "id": "RV016",
      "address": "",
      "area": 0,
      "description": "",
      "model": "",
      "bathrooms": 3.0,
      "bedrooms": 3.0,
      "agent_name": "",
      "price": 75000.0,
      "title": "",
      "agent_phone": "",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV016 - WhatsApp Image 2025-05-29 at 4.09.17 PM (1)",
          "url": "/images/RV016/WhatsApp Image 2025-05-29 at 4.09.17 PM (1).webp"
        },
        {
          "alt": "Apartment RV016 - WhatsApp Image 2025-05-29 at 4.09.17 PM",
          "url": "/images/RV016/WhatsApp Image 2025-05-29 at 4.09.17 PM.webp"
        },
        {
          "alt": "Apartment RV016 - WhatsApp Image 2025-05-29 at 4.09.18 PM (1)",
          "url": "/images/RV016/WhatsApp Image 2025-05-29 at 4.09.18 PM (1).webp"
        },
        {
          "alt": "Apartment RV016 - WhatsApp Image 2025-05-29 at 4.09.18 PM (2)",
          "url": "/images/RV016/WhatsApp Image 2025-05-29 at 4.09.18 PM (2).webp"
        },
        {
          "alt": "Apartment RV016 - WhatsApp Image 2025-05-29 at 4.09.18 PM (3)",
          "url": "/images/RV016/WhatsApp Image 2025-05-29 at 4.09.18 PM (3).webp"
        },
        {
          "alt": "Apartment RV016 - WhatsApp Image 2025-05-29 at 4.09.18 PM (4)",
          "url": "/images/RV016/WhatsApp Image 2025-05-29 at 4.09.18 PM (4).webp"
        },
        {
          "alt": "Apartment RV016 - WhatsApp Image 2025-05-29 at 4.09.18 PM (5)",
          "url": "/images/RV016/WhatsApp Image 2025-05-29 at 4.09.18 PM (5).webp"
        },
        {
          "alt": "Apartment RV016 - WhatsApp Image 2025-05-29 at 4.09.18 PM (6)",
          "url": "/images/RV016/WhatsApp Image 2025-05-29 at 4.09.18 PM (6).webp"
        },
        {
          "alt": "Apartment RV016 - WhatsApp Image 2025-05-29 at 4.09.18 PM (7)",
          "url": "/images/RV016/WhatsApp Image 2025-05-29 at 4.09.18 PM (7).webp"
        },
        {
          "alt": "Apartment RV016 - WhatsApp Image 2025-05-29 at 4.09.18 PM",
          "url": "/images/RV016/WhatsApp Image 2025-05-29 at 4.09.18 PM.webp"
        },
        {
          "alt": "Apartment RV016 - WhatsApp Image 2025-05-29 at 4.09.19 PM",
          "url": "/images/RV016/WhatsApp Image 2025-05-29 at 4.09.19 PM.webp"
        }
      ]
    },
    {
      "id": "RV017",
      "address": "",
      "area": 500.0,
      "description": "\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u0625\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0641\u064a\u0644\u0627 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0629 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 2 3 \u063a\u0631\u0641 \u0646\u0648\u0645 \u0645\u0627\u0633\u062a\u0631 4 \u062d\u0645\u0627\u0645 \u0642\u0631\u064a\u0628\u0647 \u0645\u0646 \u0645\u0648\u0644 \u0627\u0641\u064a\u0646\u064a\u0648 \u0648\u0627\u0644\u0645\u0633\u062c\u062f \u0645\u0648\u0642\u0639 \u0645\u0645\u062a\u0627\u0632 \u062d\u062f\u064a\u0642\u0629 \u062e\u0627\u0635\u0629 \u0643\u0628\u064a\u0631\u0629 \u062c\u062f\u0627 \u0627\u0644\u0641\u064a\u0644\u0627 \u062c\u0627\u0647\u0632\u0647 \u0644\u0644\u0633\u0643\u0646 \u0645\u0628\u0627\u0634\u0631\u0629 \u0644\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 (\u0639\u0631\u0636 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641)",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 3.0,
      "agent_name": "",
      "price": 80000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634 \u0628\u0633\u0639\u0631 \u0634\u0642\u0629 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628",
      "agent_phone": "1006726119",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV017 - WhatsApp Image 2025-05-06 at 5.58.41 PM (1)",
          "url": "/images/RV017/WhatsApp Image 2025-05-06 at 5.58.41 PM (1).webp"
        },
        {
          "alt": "Apartment RV017 - WhatsApp Image 2025-05-06 at 5.58.41 PM (2)",
          "url": "/images/RV017/WhatsApp Image 2025-05-06 at 5.58.41 PM (2).webp"
        },
        {
          "alt": "Apartment RV017 - WhatsApp Image 2025-05-06 at 5.58.41 PM (3)",
          "url": "/images/RV017/WhatsApp Image 2025-05-06 at 5.58.41 PM (3).webp"
        },
        {
          "alt": "Apartment RV017 - WhatsApp Image 2025-05-06 at 5.58.41 PM (4)",
          "url": "/images/RV017/WhatsApp Image 2025-05-06 at 5.58.41 PM (4).webp"
        },
        {
          "alt": "Apartment RV017 - WhatsApp Image 2025-05-06 at 5.58.41 PM (5)",
          "url": "/images/RV017/WhatsApp Image 2025-05-06 at 5.58.41 PM (5).webp"
        },
        {
          "alt": "Apartment RV017 - WhatsApp Image 2025-05-06 at 5.58.41 PM (6)",
          "url": "/images/RV017/WhatsApp Image 2025-05-06 at 5.58.41 PM (6).webp"
        },
        {
          "alt": "Apartment RV017 - WhatsApp Image 2025-05-06 at 5.58.41 PM (7)",
          "url": "/images/RV017/WhatsApp Image 2025-05-06 at 5.58.41 PM (7).webp"
        },
        {
          "alt": "Apartment RV017 - WhatsApp Image 2025-05-06 at 5.58.41 PM (8)",
          "url": "/images/RV017/WhatsApp Image 2025-05-06 at 5.58.41 PM (8).webp"
        },
        {
          "alt": "Apartment RV017 - WhatsApp Image 2025-05-06 at 5.58.41 PM",
          "url": "/images/RV017/WhatsApp Image 2025-05-06 at 5.58.41 PM.webp"
        }
      ]
    },
    {
      "id": "RV018",
      "address": "Rehab 2",
      "area": 680.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \n\u0627\u0633\u062a\u0646\u062f \u0627\u0644\u0648\u0646 \u0641\u0649 \u0627\u0644\u0631\u062d\u0627\u0628 2 \n\u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0647 \n\u0641\u0631\u0634 \u062d\u062f\u064a\u062b \n\u0628\u062d\u0627\u0627\u0644\u0647 \u062c\u064a\u062f\u0627 \u062c\u062f\u0627\u0646\u0627 \n\u0642\u0631\u064a\u0628\u0629 \u0645\u0646 \u0645\u0648\u0644 \u0627\u0641\u0646\u064a\u0648 \n\u0628\u0647\u0627 \u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629 \n4 \u063a\u0631\u0641 \u0646\u0648\u0645 \n4\u062d\u0645\u0627\u0645 \n\u0634\u0631\u0643\u0647 \u0643\u0627\u0631\u0644\u0627 \u0632\u064a\u0646 \u0644\u062a\u0633\u0648\u064a\u0642 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \u0648\u062e\u062f\u0645\u0627\u062a \u0631\u062c\u0627\u0644 \u0627\u0639\u0645\u0627\u0644 \n\u0645\u0648\u0642\u0639 \u0627\u0644\u0634\u0631\u0643\u0647 \u0645\u062f\u064a\u0646\u0647 \u0627\u0644\u0631\u062d\u0627\u0628 \u0645\u0648\u0644 1 \n\nMahmoud Abu Bak01210079992 \n01275503111",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "Carla Zain",
      "price": 160000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 4 \u063a\u0631\u0641 \u0646\u0648\u0645 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0629 \u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0647 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 2 \u0628\u062c\u0648\u0627\u0631 \u0623\u0641\u0646\u064a\u0648 \u0645\u0648\u0644 Rehab City 2, New Cairo",
      "agent_phone": "1210079992",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (1)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (1).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (10)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (10).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (11)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (11).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (12)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (12).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (13)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (13).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (14)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (14).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (15)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (15).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (16)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (16).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (17)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (17).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (18)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (18).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (19)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (19).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (2)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (2).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (20)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (20).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (21)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (21).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (22)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (22).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (23)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (23).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (24)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (24).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (25)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (25).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (26)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (26).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (27)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (27).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (28)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (28).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (29)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (29).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (3)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (3).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (4)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (4).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (5)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (5).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (6)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (6).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (7)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (7).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (8)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (8).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM (9)",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM (9).webp"
        },
        {
          "alt": "Apartment RV018 - WhatsApp Image 2025-05-06 at 6.05.07 PM",
          "url": "/images/RV018/WhatsApp Image 2025-05-06 at 6.05.07 PM.webp"
        }
      ]
    },
    {
      "id": "RV019",
      "address": "Rehab",
      "area": 175.0,
      "description": "\u062a\u0627\u0648\u0646 \u0647\u0627\u0629\u0633 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0644\u0645\u0631\u062d\u0644\u0647 \u0627\u0644\u062a\u0627\u0644\u062a\u0647\n\u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0627\u0631\u0636 :198\u0645\n\u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0645\u0628\u0646\u064a :175\n3 \u063a\u0631\u0641 \u0646\u0648\u0645 ( \u063a\u0631\u0641\u0647 \u0645\u0627\u0633\u062a\u0631 \u0628\u0627\u0644\u062f\u0631\u064a\u0633\u064a\u0646\u062c )\n3 \u062d\u0645\u0627\u0645",
      "model": "i",
      "bathrooms": 3.0,
      "bedrooms": 3.0,
      "agent_name": "bc6128",
      "price": 90000.0,
      "title": "",
      "agent_phone": "",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV019 - WhatsApp Image 2025-05-06 at 6.07.33 PM (1)",
          "url": "/images/RV019/WhatsApp Image 2025-05-06 at 6.07.33 PM (1).webp"
        },
        {
          "alt": "Apartment RV019 - WhatsApp Image 2025-05-06 at 6.07.33 PM (2)",
          "url": "/images/RV019/WhatsApp Image 2025-05-06 at 6.07.33 PM (2).webp"
        },
        {
          "alt": "Apartment RV019 - WhatsApp Image 2025-05-06 at 6.07.33 PM (3)",
          "url": "/images/RV019/WhatsApp Image 2025-05-06 at 6.07.33 PM (3).webp"
        },
        {
          "alt": "Apartment RV019 - WhatsApp Image 2025-05-06 at 6.07.33 PM (4)",
          "url": "/images/RV019/WhatsApp Image 2025-05-06 at 6.07.33 PM (4).webp"
        },
        {
          "alt": "Apartment RV019 - WhatsApp Image 2025-05-06 at 6.07.33 PM (5)",
          "url": "/images/RV019/WhatsApp Image 2025-05-06 at 6.07.33 PM (5).webp"
        },
        {
          "alt": "Apartment RV019 - WhatsApp Image 2025-05-06 at 6.07.33 PM (6)",
          "url": "/images/RV019/WhatsApp Image 2025-05-06 at 6.07.33 PM (6).webp"
        },
        {
          "alt": "Apartment RV019 - WhatsApp Image 2025-05-06 at 6.07.33 PM (7)",
          "url": "/images/RV019/WhatsApp Image 2025-05-06 at 6.07.33 PM (7).webp"
        },
        {
          "alt": "Apartment RV019 - WhatsApp Image 2025-05-06 at 6.07.33 PM (8)",
          "url": "/images/RV019/WhatsApp Image 2025-05-06 at 6.07.33 PM (8).webp"
        },
        {
          "alt": "Apartment RV019 - WhatsApp Image 2025-05-06 at 6.07.33 PM",
          "url": "/images/RV019/WhatsApp Image 2025-05-06 at 6.07.33 PM.webp"
        }
      ]
    },
    {
      "id": "RV020",
      "address": "",
      "area": 270.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \n\u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u062a\u0627\u0644\u062a\u0629 \n\u0646\u0645\u0648\u0630\u062c I \n\n\n\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0627\u0631\u0636 : 475 \u0645\u062a\u0631 \n\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u0628\u0627\u0646\u064a : 270 \u0645\u062a\u0631 \n\n\n4 \u063a\u0631\u0641 \n4 \u062d\u0645\u0627\u0645 \nNanny\u2019s Room With Toilet \n\n\u0645\u0641\u0631\u0648\u0634\u0629 \n\u0645\u0643\u064a\u0641\u0629 ( \u0628\u0647\u0627 6 \u062a\u0643\u064a\u064a\u0641\u0627\u062a ) \n\n\u062c\u0627\u0647\u0632\u0647 \u0644\u0644\u0633\u0643\u0646 \n\u0628\u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632 \n\u0627\u0633\u062a\u0644\u0627\u0645 \u0641\u0648\u0631\u064a \n\n\n\u0627\u0644\u0633\u0639\u0631 : 100,000 ( \u062a\u0641\u0627\u0648\u0636 ) \u0634\u0647\u0631\u064a\u0627 \n\n\n\u0634\u0631\u0643\u0629 \u0643\u0627\u0628\u064a\u062a\u0627\u0644 \u062a\u0642\u062f\u0645 \u0644\u0643\u0645 \u0639\u0631\u0648\u0636 \u0645\u0645\u064a\u0632\u0629 \u0645\u0646 \u0627\u0644\u0645\u0627\u0644\u0643 \u0645\u0628\u0627\u0634\u0631\u0629 \n\u064a\u0648\u062c\u062f \u0644\u062f\u064a\u0646\u0627 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0633\u0627\u062d\u0627\u062a \u0648 \u0627\u0644\u0645\u0631\u0627\u062d\u0644 \u0628\u0627\u0654\u0633\u0639\u0627\u0631 \u0645\u062e\u062a\u0644\u0641\u0647 \n\u0627\u0644\u0642\u0627\u0647\u0631\u0647 \u0627\u0644\u062c\u062f\u064a\u062f\u0647",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "",
      "price": 100000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634\u0629 \u0645\u0643\u064a\u0641\u0629 \u062c\u0627\u0647\u0632\u0647 \u0644\u0644\u0633\u0643\u0646 \u0641\u064a \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 Al Rehab City 1 \u0646\u0645\u0648\u0630\u062c i",
      "agent_phone": "1033760260",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (1)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (1).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (10)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (10).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (11)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (11).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (12)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (12).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (13)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (13).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (14)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (14).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (15)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (15).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (16)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (16).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (17)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (17).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (2)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (2).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (3)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (3).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (4)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (4).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (5)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (5).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (6)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (6).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (7)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (7).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (8)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (8).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM (9)",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM (9).webp"
        },
        {
          "alt": "Apartment RV020 - WhatsApp Image 2025-05-06 at 7.25.23 PM",
          "url": "/images/RV020/WhatsApp Image 2025-05-06 at 7.25.23 PM.webp"
        }
      ]
    },
    {
      "id": "RV021",
      "address": "Rehab",
      "area": 800.0,
      "description": "\u0641\u064a\u0644\u0627 \u0645\u0645\u064a\u0632\u0647 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634\u0629 \u0628\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u2013 [\u0646\u0645\u0648\u0630\u062c F] \u0641\u0631\u0635\u062a\u0643 \u0644\u0644\u0631\u0641\u0627\u0647\u064a\u0629 \u0648\u0627\u0644\u0631\u0627\u062d\u0629 \u0641\u064a \u0642\u0644\u0628 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629! \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0641\u064a\u0644\u0627 : \u2022 \u0646\u0648\u0639 \u0627\u0644\u0641\u064a\u0644\u0627: \u0645\u0633\u062a\u0642\u0644\u0629 (\u0633\u062a\u0627\u0646\u062f \u0623\u0644\u0648\u0646) \u2022 \u0627\u0644\u062a\u0634\u0637\u064a\u0628: \u0623\u0644\u062a\u0631\u0627 \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \u2022 \u0627\u0644\u0645\u0633\u0627\u062d\u0629: \u2022 \u0627\u0644\u0623\u0631\u0636: 800 \u0645\u00b2 \u2022 \u0627\u0644\u0645\u0628\u0627\u0646\u064a: 400 \u0645\u00b2 \u2022 \u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629 \u062e\u0627\u0635 \u2013 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u0631\u0627\u0642\u064a\u0629 \u2013 \u062e\u0635\u0648\u0635\u064a\u0629 \u062a\u0627\u0645\u0629 \u0645\u0643\u0648\u0646\u0627\u062a \u0627\u0644\u0641\u064a\u0644\u0627: \u2022 4 \u063a\u0631\u0641 \u0646\u0648\u0645 (\u0645\u0646\u0647\u0645 \u063a\u0631\u0641\u0629 \u0645\u0627\u0633\u062a\u0631 \u0628\u062d\u0645\u0627\u0645 \u062e\u0627\u0635) \u2022 \u0631\u064a\u0633\u0628\u0634\u0646 \u0648\u0627\u0633\u0639 \u0648\u0645\u0641\u062a\u0648\u062d \u2022 \u0645\u0637\u0628\u062e \u0645\u062c\u0647\u0632 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0628\u0623\u062d\u062f\u062b \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u2022 \u062a\u0631\u0627\u0633 \u0628\u0625\u0637\u0644\u0627\u0644\u0629 \u0633\u0627\u062d\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u062d\u062f\u064a\u0642\u0629 \u0645\u0645\u064a\u0632\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629: \u2022 \u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629 \u062e\u0627\u0635 \u2022 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u0641\u0627\u062e\u0631\u0629 \u062c\u062f\u0627\u064b \u2022 \u0625\u0646\u062a\u0631\u0646\u062a \u0641\u0627\u064a\u0628\u0631 + \u063a\u0627\u0632 \u0637\u0628\u064a\u0639\u064a \u2022 \u062a\u0643\u064a\u064a\u0641\u0627\u062a \u0628\u062c\u0645\u064a\u0639 \u0627\u0644\u063a\u0631\u0641 \u2022 \u0641\u064a\u0648 \u0645\u0641\u062a\u0648\u062d \u0639\u0644\u0649 \u0627\u0644\u062c\u0627\u0631\u062f\u0646 \u2022 \u0627\u0644\u0641\u064a\u0644\u0627 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u0633\u0643\u0646 \u0627\u0644\u0639\u0627\u0626\u0644\u064a \u0641\u0642\u0637 \u2022 \u0627\u0644\u0625\u064a\u062c\u0627\u0631 \u0644\u0645\u062f\u0629 \u0637\u0648\u064a\u0644\u0629 \u0641\u0642\u0637 \u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631: 01148244427 \u0627\u0644\u0641\u0631\u0635\u0629 \u0645\u0634 \u0647\u062a\u062a\u0643\u0631\u0631 \u2013 \u0627\u062a\u0635\u0644 \u062f\u0644\u0648\u0642\u062a\u064a \u0648\u0627\u062d\u062c\u0632 \u0631\u0641\u0627\u0647\u064a\u062a\u0643!",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 5.0,
      "bedrooms": 5.0,
      "agent_name": "Dream homes",
      "price": 150000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0645\u064a\u0632\u0647 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634\u0629 \u0628\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u2013 [\u0646\u0645\u0648\u0630\u062c F]",
      "agent_phone": "1148244427",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (1)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (1).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (10)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (10).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (11)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (11).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (12)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (12).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (13)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (13).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (14)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (14).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (15)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (15).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (16)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (16).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (17)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (17).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (18)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (18).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (19)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (19).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (2)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (2).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (3)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (3).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (4)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (4).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (5)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (5).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (6)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (6).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (7)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (7).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (8)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (8).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM (9)",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM (9).webp"
        },
        {
          "alt": "Apartment RV021 - WhatsApp Image 2025-05-07 at 1.56.31 PM",
          "url": "/images/RV021/WhatsApp Image 2025-05-07 at 1.56.31 PM.webp"
        }
      ]
    },
    {
      "id": "RV022",
      "address": "Rehab",
      "area": 0,
      "description": "",
      "model": "",
      "bathrooms": 3.0,
      "bedrooms": 3.0,
      "agent_name": "",
      "price": 135000.0,
      "title": "",
      "agent_phone": "",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.37 PM (1)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.37 PM (1).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.37 PM",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.37 PM.webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.39 PM (1)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.39 PM (1).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.39 PM (2)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.39 PM (2).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.39 PM",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.39 PM.webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.40 PM (1)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.40 PM (1).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.40 PM (2)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.40 PM (2).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.40 PM (3)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.40 PM (3).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.40 PM",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.40 PM.webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.41 PM (1)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.41 PM (1).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.41 PM (2)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.41 PM (2).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.41 PM",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.41 PM.webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.42 PM (1)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.42 PM (1).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.42 PM",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.42 PM.webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.43 PM (1)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.43 PM (1).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.43 PM (2)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.43 PM (2).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.43 PM",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.43 PM.webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.44 PM (1)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.44 PM (1).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.44 PM",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.44 PM.webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.45 PM (1)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.45 PM (1).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.45 PM",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.45 PM.webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.46 PM (1)",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.46 PM (1).webp"
        },
        {
          "alt": "Apartment RV022 - WhatsApp Image 2025-05-29 at 4.28.46 PM",
          "url": "/images/RV022/WhatsApp Image 2025-05-29 at 4.28.46 PM.webp"
        }
      ]
    },
    {
      "id": "RV023",
      "address": "",
      "area": 0,
      "description": "\u0634\u0627\u0631\u0639 \u0645\u062d\u0645\u062f \u062d\u0633\u0646\u064a\u0646 \u0647\u064a\u0643\u0644\n\u0639\u0627\u0626\u0644\u0627\u062a \u0641\u0642\u0637\n\u0645\u062f\u062f \u0642\u0635\u064a\u0631\u0647 \u0641\u0642\u0637\n\u0627\u0644\u0634\u0647\u0631 \u0628 \u0661\u0660\u0660 \u0627\u0644\u0641\n\u0663 \u0646\u0648\u0645 \u0648 \u0664 \u062d\u0645\u0627\u0645",
      "model": "",
      "bathrooms": 4.0,
      "bedrooms": 3.0,
      "agent_name": "bc1909",
      "price": 100000.0,
      "title": "",
      "agent_phone": "",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (1)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (1).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (10)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (10).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (11)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (11).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (12)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (12).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (13)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (13).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (14)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (14).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (15)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (15).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (16)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (16).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (17)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (17).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (18)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (18).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (19)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (19).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (2)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (2).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (20)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (20).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (21)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (21).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (22)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (22).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (23)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (23).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (24)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (24).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (3)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (3).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (4)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (4).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (5)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (5).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (6)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (6).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (7)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (7).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (8)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (8).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM (9)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM (9).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.43 PM",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.43 PM.webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.44 PM (1)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.44 PM (1).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.44 PM (2)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.44 PM (2).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.44 PM (3)",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.44 PM (3).webp"
        },
        {
          "alt": "Apartment RV023 - WhatsApp Image 2025-05-07 at 5.32.44 PM",
          "url": "/images/RV023/WhatsApp Image 2025-05-07 at 5.32.44 PM.webp"
        }
      ]
    },
    {
      "id": "RV024",
      "address": "",
      "area": 280.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 1 \n\u0628\u062c\u0648\u0627\u0631 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0642\u062f\u064a\u0645 \n\u0628\u062c\u0648\u0627\u0631 \u0628\u0648\u0627\u0628\u0647 5 \u0627\u0644\u0631\u062d\u0627\u0628 \n\u0645\u0633\u0627\u062d\u0647 \u062d\u062f\u064a\u0642\u0647 \u0643\u0628\u064a\u0631 \n3 \u063a\u0631\u0641 \u0646\u0648\u0645 \n3 \u062d\u0645\u0627\u0645 \n\u0641\u0631\u0634 \u0643\u0648\u064a\u0633 \u062c\u062f\u0627\u0646\u0627 \n\u0645\u0637\u0644\u0648\u0628 70000 \n\u0645\u062f\u062f\u0647 \u0642\u0635\u064a\u0631\u0647 \u0648\u0637\u0648\u064a\u0644\u0647 \u0644\u0639\u0627\u0626\u0644\u0647 \u0641\u0642\u0637 \n\u0634\u0631\u0643\u0647 \u0643\u0627\u0631\u0644\u0627 \u0632\u064a\u0646 \u0644\u062a\u0633\u0648\u064a\u0642 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \u0648\u062e\u062f\u0645\u0647 \u0631\u062c\u0627\u0644 \u0627\u0644\u0627\u0639\u0645\u0627\u0644 \u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0639\u0642\u0627\u0631\u064a \n\u0645\u0648\u0644 1 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0627\u0648\u0644 \u0631\u0642\u0645 136 \n\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0627 \n\nMahmoud Abu Bakr \n\n0201275503111 \n\n0201210079992 \n\n#\u0628\u064a\u0639 #\u0627\u064a\u062c\u0627\u0631 #\u0634\u0631\u0627\u0621 #\u0642\u0627\u0646\u0648\u0646 #\u0645\u0641\u0631\u0648\u0634 #\u0634\u0642\u0642 #\u0641\u0644\u0627\u062a#\u0627\u0644\u0631\u062d\u0627\u0628 #\u0645\u062f\u064a\u0646\u062a\u064a #\u0627\u0644\u062a\u062c\u0645\u0639",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 3.0,
      "bedrooms": 3.0,
      "agent_name": "Carla Zain",
      "price": 70000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 3\u063a\u0631\u0641 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 1 \u0628\u062c\u0648\u0627\u0631 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0642\u062f\u064a\u0645 \u0645\u0628\u0627\u0634\u0631\u0629 \u0646\u0638\u064a\u0641\u0647 \u062c\u062f\u0627 Al Rehab Old Market New Cairo",
      "agent_phone": "1275503111",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (1)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (1).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (10)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (10).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (11)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (11).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (12)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (12).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (13)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (13).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (14)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (14).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (15)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (15).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (16)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (16).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (17)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (17).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (2)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (2).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (3)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (3).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (4)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (4).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (5)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (5).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (6)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (6).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (7)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (7).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (8)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (8).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM (9)",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM (9).webp"
        },
        {
          "alt": "Apartment RV024 - WhatsApp Image 2025-05-07 at 5.33.29 PM",
          "url": "/images/RV024/WhatsApp Image 2025-05-07 at 5.33.29 PM.webp"
        }
      ]
    },
    {
      "id": "RV025",
      "address": "Rehab",
      "area": 275.0,
      "description": "\u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u2013 \u0641\u064a\u0644\u0627 \u0646\u0645\u0648\u0630\u062c \u062b\u0646\u0627\u0626\u064a (J) \u0628\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \n\n\u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632 \u0641\u064a \u0645\u0646\u0637\u0642\u0629 \u0641\u064a\u0644\u0627\u062a \u0627\u0644\u0647\u064a\u0644\u0632 \n\u2022 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0631\u0636: 480 \u0645\u00b2 \n\u2022 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u0628\u0627\u0646\u064a: 275 \u0645\u00b2 \n\u2022 \u062a\u0634\u0637\u064a\u0628: \u0623\u0644\u062a\u0631\u0627 \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \n\u2022 \u0627\u0644\u0641\u0631\u0634: \u0645\u0648\u062f\u0631\u0646 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0648\u0639\u0644\u0649 \u0623\u0639\u0644\u0649 \u0645\u0633\u062a\u0648\u0649 \n\n\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062f\u0627\u062e\u0644\u064a\u0629: \n\n\u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0623\u0631\u0636\u064a: \n\u2022 \u0631\u064a\u0633\u064a\u0628\u0634\u0646 \u0643\u0628\u064a\u0631 4 \u0642\u0637\u0639 \n\u2022 \u0645\u0637\u0628\u062e \u0645\u062c\u0647\u0632 \n\u2022 \u062d\u0645\u0627\u0645 \u0636\u064a\u0648\u0641 \n\u2022 \u062d\u062f\u064a\u0642\u0629 \u062e\u0627\u0635\u0629 + \u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629 \n\n\u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0623\u0648\u0644: \n\u2022 \u0644\u064a\u0641\u064a\u0646\u062c \u0631\u0648\u0645 \n\u2022 2 \u063a\u0631\u0641\u0629 \u0646\u0648\u0645 (\u0645\u0646\u0647\u0645 \u0648\u0627\u062d\u062f\u0629 \u0645\u0627\u0633\u062a\u0631) \n\u2022 2 \u062d\u0645\u0627\u0645 \n\n\u0627\u0644\u0631\u0648\u0641 (\u0645\u062a\u0642\u0641\u0644): \n\u2022 2 \u063a\u0631\u0641\u0629 \u0646\u0648\u0645 \n\u2022 1 \u062d\u0645\u0627\u0645 \n\u2022 \u063a\u0631\u0641\u0629 \u0646\u0627\u0646\u064a \u0628\u062d\u0645\u0627\u0645 \u062e\u0627\u0635 \n\n\n\u062c\u0627\u0647\u0632\u0629 \u0644\u0644\u0633\u0643\u0646 \u0627\u0644\u0641\u0648\u0631\u064a \n\n\u0645\u0641\u062a\u0627\u062d \u0645\u062a\u0648\u0641\u0631 \u0644\u062a\u0633\u0647\u064a\u0644 \u0627\u0644\u0645\u0639\u0627\u064a\u0646\u0627\u062a \n\n\u0623\u0645\u0646 \u0648\u062d\u0631\u0627\u0633\u0629 \u2013 \u0646\u0638\u0627\u0641\u0629 \u062f\u0648\u0631\u064a\u0629 \u2013 \u0628\u0627\u0631\u0643\u064a\u0646\u062c \n\n\u0644\u0644\u062a\u0648\u0627\u0635\u0644: \n01153988832 \n\n\u0645\u0643\u062a\u0628 \u0633\u0643\u0646\u064a \n\u0644\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0639\u0642\u0627\u0631\u064a",
      "model": "\u062a\u0648\u064a\u0646 \u0647\u0627\u0648\u0633",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "SAKANY REAL ESTATE",
      "price": 180000.0,
      "title": "\u0641\u064a\u0644\u0627 \u062b\u0646\u0627\u0626\u064a \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0623\u0631\u0642\u064a \u0644\u0648\u0643\u064a\u0634\u0646 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0641\u064a\u0644\u0627\u062a \u0627\u0644\u0647\u064a\u0644\u0632",
      "agent_phone": "1153988832",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (1)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (1).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (10)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (10).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (11)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (11).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (12)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (12).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (13)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (13).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (14)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (14).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (15)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (15).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (16)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (16).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (17)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (17).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (18)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (18).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (19)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (19).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (2)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (2).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (20)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (20).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (21)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (21).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (22)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (22).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (23)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (23).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (24)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (24).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (25)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (25).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (26)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (26).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (27)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (27).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (28)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (28).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (29)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (29).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (3)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (3).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (30)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (30).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (31)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (31).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (32)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (32).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (33)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (33).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (34)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (34).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (35)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (35).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (36)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (36).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (37)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (37).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (38)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (38).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (39)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (39).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (4)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (4).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (40)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (40).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (41)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (41).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (42)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (42).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (5)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (5).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (6)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (6).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (7)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (7).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (8)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (8).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM (9)",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM (9).webp"
        },
        {
          "alt": "Apartment RV025 - WhatsApp Image 2025-05-07 at 5.54.45 PM",
          "url": "/images/RV025/WhatsApp Image 2025-05-07 at 5.54.45 PM.webp"
        }
      ]
    },
    {
      "id": "RV026",
      "address": "Rehab",
      "area": 500.0,
      "description": "*\u0645\u062a\u0627\u062d \u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634 \u0628\u0627\u0644\u0631\u062d\u0627\u0628* *\u0641 \u0627\u0644\u0647\u064a\u0644\u0632* *\u0646\u0645\u0648\u0630\u062c J* *\u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0627\u0631\u0636 (500 \u0645\u062a\u0631)* *\u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0645\u0628\u0627\u0646\u064a (250 \u0645\u062a\u0631)* *(4 \u0646\u0648\u0645 + 4 \u062d\u0645\u0627\u0645)* *\u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0647 \u0628\u0627\u0644\u0643\u0627\u0645\u0644* \u0644\u0644\u062a\u0648\u0627\u0635\u0644 01094007958",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "mohamed elbana",
      "price": 110000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 \u0647\u0644\u0632 4\u063a\u0631\u0641 \u0646\u0648\u0645",
      "agent_phone": "1094007958",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.19 PM (1)",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.19 PM (1).webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.19 PM (2)",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.19 PM (2).webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.19 PM",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.19 PM.webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.20 PM (1)",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.20 PM (1).webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.20 PM (2)",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.20 PM (2).webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.20 PM (3)",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.20 PM (3).webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.20 PM (4)",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.20 PM (4).webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.20 PM (5)",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.20 PM (5).webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.20 PM (6)",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.20 PM (6).webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.20 PM",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.20 PM.webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.21 PM (1)",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.21 PM (1).webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.21 PM (2)",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.21 PM (2).webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.21 PM (3)",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.21 PM (3).webp"
        },
        {
          "alt": "Apartment RV026 - WhatsApp Image 2025-05-29 at 4.15.21 PM",
          "url": "/images/RV026/WhatsApp Image 2025-05-29 at 4.15.21 PM.webp"
        }
      ]
    },
    {
      "id": "RV027",
      "address": "Rehab",
      "area": 0,
      "description": "\u062d\u0639\u0645\u0644 \u0627\u0644\u0633\u0639\u0631 \u0667\u0660\n230 m type A\n\u0639\u062f\u062f 3 \u062d\u0645\u0627\u0645\u0627\u062a \u06482\u063a\u0631\u0641\u062a\u064a\u0646 \u0646\u0648\u0645 \u063a\u0631\u0641\u0629 \u0645\u0639 \u062c\u0646\u0627\u062d",
      "model": "u",
      "bathrooms": 3.0,
      "bedrooms": 2.0,
      "agent_name": "bc159",
      "price": 70000.0,
      "title": "",
      "agent_phone": "",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.28 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.28 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.30 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.30 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.30 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.30 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.31 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.31 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.32 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.32 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.32 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.32 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.33 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.33 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.33 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.33 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.34 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.34 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.34 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.34 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.35 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.35 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.35 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.35 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.36 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.36 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.36 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.36 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.37 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.37 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.37 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.37 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.38 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.38 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.38 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.38 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.39 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.39 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.42 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.42 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.43 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.43 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.43 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.43 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.44 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.44 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.44 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.44 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.45 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.45 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.45 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.45 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.46 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.46 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.46 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.46 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.47 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.47 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.47 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.47 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.48 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.48 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.49 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.49 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.49 PM (2)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.49 PM (2).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.49 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.49 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.50 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.50 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.51 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.51 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.51 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.51 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.55 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.55 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.55 PM (2)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.55 PM (2).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.55 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.55 PM.webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.56 PM (1)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.56 PM (1).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.56 PM (2)",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.56 PM (2).webp"
        },
        {
          "alt": "Apartment RV027 - WhatsApp Image 2025-06-03 at 1.56.56 PM",
          "url": "/images/RV027/WhatsApp Image 2025-06-03 at 1.56.56 PM.webp"
        }
      ]
    },
    {
      "id": "RV028",
      "address": "",
      "area": 320.0,
      "description": "\u0641\u064a\u0644\u0627 \u0645\u0633\u062a\u0642\u0644\u0629 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0641\u064a \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628\u060c \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0639\u0642\u0627\u0631: * \u0627\u0644\u0645\u0648\u0642\u0639 : \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628\u060c \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 * \u0627\u0644\u0637\u0648\u0627\u0628\u0642 : \u0642\u0628\u0648\u060c \u0637\u0627\u0628\u0642 \u0623\u0631\u0636\u064a\u060c \u0637\u0627\u0628\u0642 \u0623\u0648\u0644\u060c \u0633\u0637\u062d * \u0627\u0644\u0625\u064a\u062c\u0627\u0631 : 170,000 \u062c\u0646\u064a\u0647 \u0645\u0635\u0631\u064a \u0634\u0647\u0631\u064a\u064b\u0627 * \u0645\u062f\u0629 \u0627\u0644\u0625\u064a\u062c\u0627\u0631 \u0627\u0644\u0623\u062f\u0646\u0649 : \u0633\u0646\u0629 \u0648\u0627\u062d\u062f\u0629 \u0645\u062e\u0637\u0637 \u0627\u0644\u0641\u064a\u0644\u0627: * \u0637\u0627\u0628\u0642 \u0627\u0644\u0642\u0628\u0648: * \u063a\u0631\u0641\u0629 \u062e\u0627\u062f\u0645\u0629 \u0645\u0639 \u062d\u0645\u0627\u0645 \u062e\u0627\u0635 * \u063a\u0631\u0641\u0629 \u062a\u062e\u0632\u064a\u0646 \u0643\u0628\u064a\u0631\u0629 * \u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0623\u0631\u0636\u064a: * \u0645\u0646\u0637\u0642\u0629 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0648\u0627\u0633\u0639\u0629 \u0645\u0639 \u0637\u0627\u0648\u0644\u0629 \u0637\u0639\u0627\u0645 \u0643\u0628\u064a\u0631\u0629 * \u0645\u0637\u0628\u062e \u0645\u062c\u0647\u0632 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 * \u062d\u0645\u0627\u0645 \u0636\u064a\u0648\u0641 * \u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0623\u0648\u0644: * \u063a\u0631\u0641\u0629 \u0645\u0639\u064a\u0634\u0629 * \u063a\u0631\u0641\u062a\u0627 \u0646\u0648\u0645 * \u062d\u0645\u0627\u0645 \u0645\u0634\u062a\u0631\u0643 * \u063a\u0631\u0641\u0629 \u0646\u0648\u0645 \u0631\u0626\u064a\u0633\u064a\u0629 \u0645\u0639 \u063a\u0631\u0641\u0629 \u0645\u0644\u0627\u0628\u0633 * \u0637\u0627\u0628\u0642 \u0627\u0644\u0633\u0637\u062d: * \u063a\u0631\u0641\u0629 \u0646\u0648\u0645 \u0635\u063a\u064a\u0631\u0629 \u0645\u0639 \u062d\u0645\u0627\u0645 \u062e\u0627\u0635",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 5.0,
      "bedrooms": 5.0,
      "agent_name": "Modern Home",
      "price": 170000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0633\u062a\u0642\u0644\u0629 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628\u060c \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629",
      "agent_phone": "1115105222",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.05 PM (1)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.05 PM (1).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.05 PM (2)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.05 PM (2).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.05 PM (3)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.05 PM (3).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.05 PM (4)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.05 PM (4).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.05 PM (5)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.05 PM (5).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.05 PM (6)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.05 PM (6).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.05 PM (7)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.05 PM (7).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.05 PM",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.05 PM.webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.06 PM (1)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.06 PM (1).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.06 PM (2)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.06 PM (2).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.06 PM (3)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.06 PM (3).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.06 PM (4)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.06 PM (4).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.06 PM (5)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.06 PM (5).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.06 PM (6)",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.06 PM (6).webp"
        },
        {
          "alt": "Apartment RV028 - WhatsApp Image 2025-05-08 at 5.21.06 PM",
          "url": "/images/RV028/WhatsApp Image 2025-05-08 at 5.21.06 PM.webp"
        }
      ]
    },
    {
      "id": "RV029",
      "address": "Rehab",
      "area": 0,
      "description": "\u0646\u0645\u0648\u0630\u062c k\n\u0666 \u063a\u0631\u0641 \u0648\u0666 \u062d\u0645\u0627\u0645\n\u0645\u0634 \u0639\u0627\u064a\u0632 \u0645\u0635\u0631\u064a\u064a\u0646\n\u0645\u0637\u0644\u0648\u0628 \u0662\u0665\u0660\u0660 \u062f\u0648\u0644\u0627\u0631\n\u062a\u0641\u0627\u0648\u0636 \u0639\u0646\u062f \u0627\u0644\u062c\u062f\u064a\u0647",
      "model": "k",
      "bathrooms": 6.0,
      "bedrooms": 6.0,
      "agent_name": "bc5749",
      "price": 220000.0,
      "title": "",
      "agent_phone": "",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (1)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (1).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (10)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (10).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (11)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (11).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (12)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (12).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (13)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (13).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (14)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (14).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (15)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (15).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (16)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (16).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (17)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (17).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (18)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (18).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (19)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (19).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (2)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (2).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (20)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (20).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (21)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (21).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (22)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (22).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (23)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (23).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (24)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (24).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (25)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (25).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (26)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (26).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (3)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (3).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (4)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (4).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (5)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (5).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (6)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (6).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (7)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (7).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (8)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (8).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM (9)",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM (9).webp"
        },
        {
          "alt": "Apartment RV029 - WhatsApp Image 2025-05-08 at 6.16.57 PM",
          "url": "/images/RV029/WhatsApp Image 2025-05-08 at 6.16.57 PM.webp"
        }
      ]
    },
    {
      "id": "RV030",
      "address": "Rehab",
      "area": 250.0,
      "description": "*\u0625\u0639\u0644\u0627\u0646 \u0639\u0646 \u0641\u064a\u0644\u0627 \u0641\u0627\u062e\u0631\u0629 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628* *\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634\u0629 \u0641\u0627\u062e\u0631\u0629 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628* *3 \u063a\u0631\u0641 \u0646\u0648\u0645* \u0631\u0626\u064a\u0633\u064a\u0629 (\u062c\u0645\u064a\u0639\u0647\u0627 \u0628\u0645\u0633\u0627\u062d\u0627\u062a \u0648\u0627\u0633\u0639\u0629) *3 \u062d\u0645\u0627\u0645\u0627\u062a* \u0628\u062a\u0634\u0637\u064a\u0628 \u0641\u0627\u062e\u0631 *\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629 \u062e\u0627\u0635* *\u062a\u0634\u0637\u064a\u0628 \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633* (\u0623\u0631\u0636\u064a\u0627\u062a \u0631\u062e\u0627\u0645\u060c \u062f\u064a\u0643\u0648\u0631\u0627\u062a \u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062c\u0648\u062f\u0629) *\u0635\u0627\u0644\u0629 \u0645\u0639\u064a\u0634\u0629 + \u0635\u0627\u0644\u0629 \u0637\u0639\u0627\u0645* *\u0645\u0637\u0628\u062e \u0645\u062c\u0647\u0632 \u0628\u0627\u0644\u0643\u0627\u0645\u0644* (\u0623\u062c\u0647\u0632\u0629 \u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062c\u0648\u062f\u0629) *\u0645\u0648\u0627\u0642\u0641 \u0633\u064a\u0627\u0631\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629* *\u062d\u062f\u064a\u0642\u0629 \u062e\u0627\u0635\u0629 + \u0623\u0645\u0627\u0643\u0646 \u0627\u0633\u062a\u0631\u0627\u062d\u0629 \u062e\u0627\u0631\u062c\u064a\u0629* *\u0646\u0638\u0627\u0645 \u0623\u0645\u0646 \u0648\u062d\u0631\u0627\u0633\u0629 24/7* *\u0642\u0631\u064a\u0628\u0629 \u0645\u0646 \u0627\u0644\u062e\u062f\u0645\u0627\u062a (\u0645\u062f\u0627\u0631\u0633\u060c \u0645\u0648\u0644\u0627\u062a\u060c \u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a)* *\u0627\u0644\u0645\u0648\u0642\u0639:* *\u0627\u0644\u0631\u062d\u0627\u0628* - \u0628\u0627\u0644\u0642\u0631\u0628 \u0645\u0646 \u0623\u0647\u0645 \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629.",
      "model": "\u062a\u0627\u0648\u0646 \u0647\u0627\u0648\u0633",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "\u0623\u062d\u0645\u062f \u0631\u0641\u0639\u062a \u0641\u0627\u0631\u0648\u0642",
      "price": 130000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0628\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0647 \u062e\u0627\u0635",
      "agent_phone": "1096034001",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV030 - 0",
          "url": "/images/RV030/0.png"
        },
        {
          "alt": "Apartment RV030 - 1",
          "url": "/images/RV030/1.png"
        },
        {
          "alt": "Apartment RV030 - 2",
          "url": "/images/RV030/2.png"
        },
        {
          "alt": "Apartment RV030 - 3",
          "url": "/images/RV030/3.png"
        },
        {
          "alt": "Apartment RV030 - 4",
          "url": "/images/RV030/4.png"
        }
      ]
    },
    {
      "id": "RV031",
      "address": "Rehab",
      "area": 350.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0628\u0633\u0639\u0631 \u0644\u0642\u0637\u0647 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 2 \n\u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0647 \u0648\u0645\u062c\u0647\u0632\u0647 \u0628\u0627\u0643\u0627\u0645\u0644 \u0628\u0633\u0639\u0631 \u0644\u0642\u0637\u0647 \n\u0648\u0642\u0631\u064a\u0628\u0647 \u062c\u062f\u0627 \u0644\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0645\u0645\u064a\u0632\u0647 \n\n\u0627\u0644\u0641\u064a\u0644\u0627 \u062a\u062a\u0643\u0648\u0646 \u0645\u0646 :- \n3 \u063a\u0631\u0641 \u0645\u0646\u0647\u0645 \u063a\u0631\u0641\u0629 \u0645\u0627\u0633\u062a\u0631 _ 3 \u062d\u0645\u0627\u0645 _ \u063a\u0631\u0641\u0629 \u062e\u062f\u0645\u0627\u062a \n\u0631\u064a\u0633\u0628\u0634\u0646 \u0643\u0628\u064a\u0631 _ \u0644\u064a\u0641\u064a\u0646\u062c \u0631\u0648\u0648\u0645 _ \u0645\u0637\u0628\u062e \n\n\u062a\u0645 \u062a\u063a\u064a\u0631 \u0627\u0644\u062d\u0645\u0627\u0645\u0627\u062a \u0648\u0627\u0631\u0636\u064a\u0627\u062a \u0627\u0644\u063a\u0631\u0641 \n\u0644\u0648\u0643\u064a\u0634\u064a\u0646 \u0645\u0645\u064a\u0632 \u0648\u0627\u0644\u0641\u064a\u0644\u0627 \u063a\u064a\u0631 \u0645\u062c\u0631\u0648\u062d\u0647 \n\u0645\u0637\u0644\u0648\u0628 \u0644\u0642\u0637\u0647 \n\nEast House . MTM. Real Estate \nContact Me 01062258190 \n\n\u0627\u0644\u0627\u062f\u0627\u0631\u064a \u0644\u0644\u0634\u0631\u0643\u0629 : \u0627\u0644\u0645\u0628\u0646\u0649 \u0627\u0644\u0627\u062f\u0627\u0631\u064a \u0628\u0627\u0644\u0631\u062d\u0627\u0628 . . \u0645\u0643\u062a\u0628 \u0631\u0642\u0645 5 \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0627\u0631\u0636\u064a",
      "model": "\u062a\u0627\u0648\u0646 \u0647\u0627\u0648\u0633",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "East House",
      "price": 90000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u062a\u0634\u0637\u064a\u0628 \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \u0642\u0631\u064a\u0628\u0647 \u062c\u062f\u0627 \u0645\u0646 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u063a\u064a\u0631 \u0645\u062c\u0631\u0648\u062d\u0647",
      "agent_phone": "1062258190",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV031 - 1",
          "url": "/images/RV031/1.png"
        }
      ]
    },
    {
      "id": "RV032",
      "address": "Rehab",
      "area": 260.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0628\u0645\u0633\u0627\u062d\u0647 250 \u0645\u062a\u0631 \u0641\u064a \u0627\u0645\u064a\u0632 \u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0631\u062d\u0627\u06282 Rehab city, new cairo \u0641\u064a\u0644\u0627 \u062a\u0627\u0648\u0646 \u0647\u0627\u0648\u0633 \u0646\u0645\u0648\u0630\u062c T1 \u0631\u0628\u0627\u0639\u064a\u0647 \u0627\u0644\u0641\u064a\u0644\u0627 \u0641\u064a \u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u0639\u0627\u0634\u0631\u0629 \u0627\u0644\u0641\u064a\u0644\u0627 \u0642\u0631\u0628\u064a\u0647 \u0645\u0646 \u0645\u0648\u0644 \u0627\u0641\u0646\u064a\u0648 \u0648\u0643\u0627\u0631\u0641\u0648\u0631 \u0648\u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629 \u0628\u0627\u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0641\u064a\u0644\u0627 \u0645\u0643\u0648\u0646\u0647 \u0645\u0646 ( \u062d\u062f\u064a\u0642\u0629 30 \u0645\u062a\u0631 \u0648\u062c\u0631\u0627\u062c \u0648\u062f\u0648\u0631 \u0627\u0631\u0636\u064a \u0648\u0627\u0648\u0644 \u0648\u0631\u0648\u0641 ) \u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0627\u0631\u0636 250 \u0645\u062a\u0631 \u0648\u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0645\u0628\u0627\u0646\u064a 221 \u0645\u062a\u0631 \u0648\u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u062d\u062f\u064a\u0642\u0647 30 \u0645\u062a\u0631 \u0627\u0644\u0641\u064a\u0644\u0627 \u0628\u0647\u0627 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \u062c\u0627\u0647\u0632\u0647 \u0639\u0644\u064a \u0627\u0644\u0633\u0643\u0646 \u0641\u0648\u0631\u0627 \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0627\u0631\u0636\u064a \u0645\u0643\u0648\u0646 \u0645\u0646( \u0631\u064a\u0633\u0628\u0634\u0646 \u0643\u0628\u064a\u0631 \u0648\u0645\u0637\u0628\u062e \u0648\u062d\u0645\u0627\u0645 \u0644\u0644\u0636\u064a\u0648\u0641 ) \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0627\u0648\u0644 \u0645\u0643\u0648\u0646 \u0645\u0646 ( \u0644\u0641\u0646\u064a\u062c \u0643\u0628\u064a\u0631 \u0648 3 \u063a\u0631\u0641 \u0646\u0648\u0645 \u0648 2 \u062d\u0645\u0627\u0645 \u0645\u0646\u0647\u0645 \u063a\u0631\u0641\u0647 \u0645\u0627\u0633\u062a\u0631 \u0648\u0628\u0644\u0643\u0648\u0646\u0647 ) \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u062b\u0627\u0646\u064a \u0645\u0643\u0648\u0646 \u0645\u0646( \u063a\u0631\u0641\u0647 \u0628\u0627\u0644\u062d\u0645\u0627\u0645 \u0628\u0627\u0644\u0631\u0648\u0641 \u0648\u062a\u0631\u0627\u0633 \u0643\u0628\u064a\u0631 ) \u0627\u0644\u062a\u0648\u0627\u0635\u0644: 01101221202",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "Carla Zain",
      "price": 90000.0,
      "title": "\u0641\u064a\u0644\u0627 4\u063a\u0631\u0641 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 2 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0647 \u0641\u0631\u0634 \u0645\u0648\u062f\u0631\u0646 Rehab City, New Cairo",
      "agent_phone": "201275503111",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.49 PM (1)",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.49 PM (1).webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.49 PM (2)",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.49 PM (2).webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.49 PM",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.49 PM.webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.50 PM (1)",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.50 PM (1).webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.50 PM (2)",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.50 PM (2).webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.50 PM",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.50 PM.webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.51 PM (1)",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.51 PM (1).webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.51 PM",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.51 PM.webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.52 PM (1)",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.52 PM (1).webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.52 PM",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.52 PM.webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.53 PM (1)",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.53 PM (1).webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.53 PM (2)",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.53 PM (2).webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.53 PM",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.53 PM.webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.54 PM (1)",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.54 PM (1).webp"
        },
        {
          "alt": "Apartment RV032 - WhatsApp Image 2025-05-15 at 5.55.54 PM",
          "url": "/images/RV032/WhatsApp Image 2025-05-15 at 5.55.54 PM.webp"
        }
      ]
    },
    {
      "id": "RV033",
      "address": "Rehab",
      "area": 236.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0645\u064a\u0632 \u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 1 \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u0623\u0648\u0644 Rehab city, new cairo \u0646\u0645\u0648\u0630\u062c G \u0627\u0644\u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632 \u0641\u064a \u0627\u0644\u0645\u0631\u062d\u0644\u0647 \u0627\u0644\u062b\u0627\u0644\u062b\u0647 \u0627\u0644\u0641\u064a\u0644\u0627 \u0645\u0643\u0648\u0646\u0647 \u0645\u0646 8 \u0646\u0648\u0645 6 \u062d\u0645\u0627\u0645 \u063a\u0631\u0641\u062a\u064a\u0646 \u0645\u0627\u0633\u062a\u0631 \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0627\u0631\u0636\u064a \u0645\u0643\u0648\u0646 \u0645\u0646( \u0631\u064a\u0633\u064a\u0628\u0634\u0646 \u0643\u0628\u064a\u0631 \u0648\u0645\u0637\u0628\u062e \u0648\u062d\u0645\u0627\u0645 \u0644\u0644\u0636\u064a\u0648\u0641 ) \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0627\u0648\u0644 \u0645\u0643\u0648\u0646 \u0645\u0646( \u0644\u0641\u0646\u064a\u062c 3 \u0646\u0648\u0645 2 \u062d\u0645\u0627\u0645 \u063a\u0631\u0641\u0647 \u0645\u0627\u0633\u062a\u0631 ) \u063a\u0631\u0641\u0647 \u0628\u0627\u0644\u0631\u0648\u0641 \u0635\u063a\u064a\u0631\u0647 \u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0627\u0631\u0636 236 \u0645\u062a\u0631 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u0628\u0627\u0646\u064a 221 \u0645\u062a\u0631 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \u062c\u0627\u0647\u0632\u0647 \u0639\u0644\u064a \u0627\u0644\u0633\u0643\u0646 \u0641\u0648\u0631\u0627 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 85 \u0627\u0644\u0641 \u062a\u0641\u0627\u0648\u0636 \u0644\u0644\u0641\u064a\u0644\u0627 \u0627\u0644\u0648\u062d\u062f\u0647 \u0641\u0642\u0637( \u0627\u0644\u0641\u064a\u0644\u0627 \u0627\u0644\u0648\u0627\u062d\u062f\u0647 ) \u0648\u0641\u064a \u062d\u0627\u0644\u0647 \u0627\u0644\u062c\u062f\u064a\u0647 \u0648\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0641\u0644\u062a\u064a\u0646 \u0645\u0639 \u0628\u0639\u0636 \u064a\u0648\u062c\u062f \u062a\u0641\u0627\u0648\u0636 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 : 01273812888 / 01002102022",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 6.0,
      "bedrooms": 8.0,
      "agent_name": "",
      "price": 85000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0645\u064a\u0632 \u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 1 \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u0623\u0648\u0644 Rehab city, new cairo \u0646\u0645\u0648\u0630\u062c G \u0627\u0644\u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632 \u0641\u064a \u0627\u0644\u0645\u0631\u062d\u0644\u0647 \u0627\u0644\u062b\u0627\u0644\u062b\u0647",
      "agent_phone": "1273812888",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (1)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (1).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (10)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (10).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (11)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (11).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (12)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (12).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (13)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (13).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (14)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (14).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (15)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (15).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (16)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (16).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (17)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (17).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (18)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (18).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (19)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (19).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (2)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (2).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (20)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (20).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (21)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (21).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (3)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (3).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (4)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (4).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (5)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (5).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (6)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (6).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (7)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (7).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (8)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (8).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM (9)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM (9).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.07 PM",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.07 PM.webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.08 PM (1)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.08 PM (1).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.08 PM (2)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.08 PM (2).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.08 PM (3)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.08 PM (3).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.08 PM (4)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.08 PM (4).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.08 PM (5)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.08 PM (5).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.08 PM (6)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.08 PM (6).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.08 PM (7)",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.08 PM (7).webp"
        },
        {
          "alt": "Apartment RV033 - WhatsApp Image 2025-05-28 at 2.15.08 PM",
          "url": "/images/RV033/WhatsApp Image 2025-05-28 at 2.15.08 PM.webp"
        }
      ]
    },
    {
      "id": "RV034",
      "address": "Rehab",
      "area": 300.0,
      "description": "\u0646\u0645\u0648\u0630\u062c D \u0641\u064a \u0627\u0644\u062a\u0627\u0646\u064a\u0647 \u0627\u0644\u0627\u0631\u0636 300\u0645. \u0627\u0644\u0645\u0628\u0627\u0646\u064a 300\u0645 \u0628120\u0627\u0644\u0641",
      "model": "",
      "bathrooms": 0,
      "bedrooms": 3.0,
      "agent_name": "\u0648\u0641\u0627\u0621",
      "price": 120000.0,
      "title": "",
      "agent_phone": "",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.07 PM (1)",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.07 PM (1).webp"
        },
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.07 PM (2)",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.07 PM (2).webp"
        },
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.07 PM (3)",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.07 PM (3).webp"
        },
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.07 PM",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.07 PM.webp"
        },
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.08 PM (1)",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.08 PM (1).webp"
        },
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.08 PM (2)",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.08 PM (2).webp"
        },
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.08 PM",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.08 PM.webp"
        },
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.09 PM (1)",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.09 PM (1).webp"
        },
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.09 PM (2)",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.09 PM (2).webp"
        },
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.09 PM",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.09 PM.webp"
        },
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.10 PM (1)",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.10 PM (1).webp"
        },
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.10 PM (2)",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.10 PM (2).webp"
        },
        {
          "alt": "Apartment RV034 - WhatsApp Image 2025-06-04 at 4.02.10 PM",
          "url": "/images/RV034/WhatsApp Image 2025-06-04 at 4.02.10 PM.webp"
        }
      ]
    },
    {
      "id": "RV035",
      "address": "",
      "area": 250.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0644\u0642\u0637\u0629\u0629\u0629\u0629 \u0628\u0633\u0639\u0631 \u0627\u0644\u0641\u0627\u0636\u064a\u0629 \n\u0645\u0643\u064a\u0641\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0627\u0644\u0641\u064a\u0644\u0627 \u0628\u062d\u0627\u0644\u0629 \u0645\u0645\u062a\u0627\u0632\u0629 \u062c\u062f\u0627 \n250\u0645 \u0627\u0644\u0627\u0631\u0636 \u0648\u0627\u0644\u0645\u0628\u0627\u0646\u064a 230\u0645 \n\u0627\u0631\u0636\u064a \u0648\u0627\u0648\u0644 \u0648\u0631\u0648\u0641 \n\u0642\u0631\u064a\u0628\u0629 \u0644\u0643\u0644 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \n4 \u063a\u0631\u0641 4 \u062d\u0645\u0627\u0645 \n\u0644\u0644\u0627\u0633\u0631 \u0627\u0642\u0644 \u0645\u062f\u0629 \u0633\u0646\u0629 \n\n01500367092 \n\n01123634000",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "\u0645\u0643\u062a\u0628 \u0631\u062d\u0627\u0628 \u062c\u064a\u062a",
      "price": 65000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0644\u0642\u0637\u0629\u0629\u0629\u0629 \u0628\u0633\u0639\u0631 \u0627\u0644\u0641\u0627\u0636\u064a\u0629 \u0645\u0643\u064a\u0641\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0627\u0644\u0641\u064a\u0644\u0627 \u0628\u062d\u0627\u0644\u0629 \u0645\u0645\u062a\u0627\u0632\u0629 \u062c\u062f\u0627",
      "agent_phone": "1500367092",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV035 - 1",
          "url": "/images/RV035/1.png"
        }
      ]
    },
    {
      "id": "RV036",
      "address": "Rehab",
      "area": 500.0,
      "description": "\u0641\u064a\u0644\u0627 \u0645\u0633\u062a\u0642\u0644\u0629 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0627\u0631\u0636 \u0665\u0665\u0660\u0645 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u0628\u0627\u0646\u064a \u0663\u0660\u0660\u0645 \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0627\u0631\u0636\u064a ( \u0631\u064a\u0633\u0628\u0634\u0646 - \u0645\u0637\u0628\u062e - \u062d\u0645\u0627\u0645 \u0636\u064a\u0648\u0641 - \u063a\u0631\u0641\u0629 ) \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0627\u0648\u0644 ( \u0663 \u063a\u0631\u0641 \u0646\u0648\u0645 \u0645\u0646\u0647\u0645 \u063a\u0631\u0641\u0629 \u0645\u0627\u0633\u062a\u0631 - \u063a\u0631\u0641\u0629 \u0645\u0639\u064a\u0634\u0629 - \u062d\u0645\u0627\u0645) \u0627\u0644\u0631\u0648\u0641 ( \u063a\u0631\u0641\u0629 - \u0631\u0648\u0641 \u0645\u0641\u062a\u0648\u062d \u0628\u0647 \u0642\u0627\u0639\u062f\u0647 ) *(\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0647)* \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u062a\u0627\u0646\u064a \u0633\u0643\u0646 *\u0627\u0644\u0633\u0639\u0631 : \u0662\u0660\u0660 \u0627\u0644\u0641 \u062a\u0641\u0627\u0648\u0636 \u0639\u0644\u064a \u062d\u0633\u0628 \u0627\u0644\u0645\u062f\u0647 \u0645\u0641\u062a\u0627\u062d \u0645\u0648\u062c\u0648\u062f \u0644\u0633\u0647\u0648\u0644\u0647 \u0627\u0644\u0645\u0639\u0627\u064a\u0646\u0647 \u0635\u0648\u0631 \u0645\u0648\u062c\u0648\u062f \u0644\u0644\u062a\u0648\u0627\u0635\u0644 01152078757",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 3.0,
      "bedrooms": 4.0,
      "agent_name": "",
      "price": 180000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634 \u0628\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0647",
      "agent_phone": "1152078757",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV036 - 1",
          "url": "/images/RV036/1.png"
        },
        {
          "alt": "Apartment RV036 - 2",
          "url": "/images/RV036/2.png"
        },
        {
          "alt": "Apartment RV036 - 3",
          "url": "/images/RV036/3.png"
        },
        {
          "alt": "Apartment RV036 - 4",
          "url": "/images/RV036/4.png"
        },
        {
          "alt": "Apartment RV036 - 5",
          "url": "/images/RV036/5.png"
        },
        {
          "alt": "Apartment RV036 - 6",
          "url": "/images/RV036/6.png"
        },
        {
          "alt": "Apartment RV036 - 7",
          "url": "/images/RV036/7.png"
        },
        {
          "alt": "Apartment RV036 - 8",
          "url": "/images/RV036/8.png"
        },
        {
          "alt": "Apartment RV036 - 9",
          "url": "/images/RV036/9.png"
        }
      ]
    },
    {
      "id": "RV037",
      "address": "Rehab",
      "area": 630.0,
      "description": "\u0641\u064a\u0644\u0627 \u0645\u0633\u062a\u0642\u0644\u0647 stand Alone \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0645\u064a\u0632 \u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 2 \u0641\u064a \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u0623\u0648\u0644Rehab city, new cairo \u0646\u0645\u0648\u0630\u062c Y  \u0627\u0644\u0631\u062d\u0627\u06282 7\u063a\u0631\u0641 \u0646\u0648\u0645 \u0648 7\u062d\u0645\u0627\u0645 \u0627\u0644\u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 2 \u0642\u0631\u064a\u0628 \u0645\u0646 \u0645\u0648\u0644 \u0627\u0641\u064a\u0646\u0648 \u0648\u0627\u0644\u0645\u0633\u062c\u062f \u0648\u0627\u0644\u0646\u0627\u062f\u064a \u0648\u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0641\u064a\u0644\u0627 \u0645\u0643\u0648\u0646\u0647 \u0645\u0646 \u062f\u0648\u0631 \u0627\u0631\u0636\u064a \u0648\u0627\u0648\u0644 \u0648\u062a\u0627\u0646\u064a \u0648\u062d\u062f\u064a\u0642\u0629 \u0648\u062c\u0631\u0627\u062c \u062e\u0627\u0635 \u0627\u0644\u0641\u064a\u0644\u0627 \u062c\u0627\u0647\u0632\u0647 \u0639\u0644\u064a \u0627\u0644\u0633\u0643\u0646 \u0641\u0648\u0631\u0627 \u0645\u0641\u0631\u0648\u0634\u0647 \u0641\u0631\u0634 \u0627\u0644\u062a\u0631\u0627 \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \u0648\u062a\u0634\u0637\u064a\u0628\u0627\u062a \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \u0627\u0644\u0641\u064a\u0644\u0627 \u062a\u0637\u0644 \u0639\u0644\u0649 \u0627\u0644\u062d\u062f\u064a\u0642\u0629 \u0627\u0643\u0628\u0631 \u0648\u0627\u064a\u062f \u062c\u0627\u0631\u062f\u0646 \u0628\u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0641\u064a\u0644\u0627 \u062a\u062a\u0643\u0648\u0646 \u0645\u0646 (\u062f\u0648\u0631 \u0627\u0631\u0636\u064a) 2 \u063a\u0631\u0641\u0629 \u0661 \u0645\u0637\u0628\u062e \u0663 \u062d\u0645\u0627\u0645 \u0631\u064a\u0633\u064a\u064a\u0634\u0646 (\u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0627\u0648\u0644 \u064a\u062a\u0643\u0648\u0646 \u0645\u0646 ) \u0627\u0631\u0628\u0639\u0629 \u063a\u0631\u0641 \u0661 \u062f\u0631\u064a\u0633\u0646\u062c \u0631\u0648\u0648\u0645 \u0627\u0631\u0628\u0639 \u062d\u0645\u0627\u0645\u0627\u062a \u0644\u064a\u06a4\u0646\u062c \u0662 \u0628\u0644\u0643\u0648\u0646\u0629 (\u0631\u0648\u0648\u0641) \u063a\u0631\u0641\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0627\u0631\u0636 630 \u0645\u062a\u0631 \u0648\u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0645\u0628\u0627\u0646\u064a 437 \u0645\u062a\u0631 \u0627\u0644\u062a\u0648\u0627\u0635\u0644: 01273812888 / 01002102022",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 6.0,
      "bedrooms": 7.0,
      "agent_name": "Al Masrya real estate",
      "price": 210000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0633\u062a\u0642\u0644\u0647 stand Alone \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0645\u064a\u0632 \u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 2 \u0641\u064a \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u0623\u0648\u0644Rehab city, new cairo \u0646\u0645\u0648\u0630\u062c Y \u0627\u0644\u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 2",
      "agent_phone": "1273812888",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV037 - 1",
          "url": "/images/RV037/1.png"
        },
        {
          "alt": "Apartment RV037 - 2",
          "url": "/images/RV037/2.png"
        },
        {
          "alt": "Apartment RV037 - 3",
          "url": "/images/RV037/3.png"
        },
        {
          "alt": "Apartment RV037 - 4",
          "url": "/images/RV037/4.png"
        },
        {
          "alt": "Apartment RV037 - 5",
          "url": "/images/RV037/5.png"
        }
      ]
    },
    {
      "id": "RV038",
      "address": "Rehab",
      "area": 450.0,
      "description": "\u0641\u064a\u0644\u0627 \u0641\u0627\u062e\u0631\u0629 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628* *\u0645\u0633\u0627\u062d\u0629 \u0643\u0628\u064a\u0631\u0629 450 \u0645\u062a\u0631* *6 \u063a\u0631\u0641 \u0646\u0648\u0645* *5 \u062d\u0645\u0627\u0645\u0627\u062a* *\u0645\u0641\u0631\u0648\u0634\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0648\u062a\u0635\u0645\u064a\u0645 \u0631\u0627\u0642\u064a* *\u0641\u064a\u0644\u0627 \u0645\u0633\u062a\u0642\u0644\u0629 \u0641\u064a \u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632* *\u0645\u0648\u0627\u0642\u0641 \u0633\u064a\u0627\u0631\u0627\u062a* *\u0623\u0645\u0646 24 \u0633\u0627\u0639\u0629* *\u0642\u0631\u064a\u0628\u0629 \u0645\u0646 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629*",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 5.0,
      "bedrooms": 6.0,
      "agent_name": "Modern Home",
      "price": 170000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634\u0647 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0628\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0647",
      "agent_phone": "1115105222",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV038 - 1",
          "url": "/images/RV038/1.png"
        },
        {
          "alt": "Apartment RV038 - 2",
          "url": "/images/RV038/2.png"
        },
        {
          "alt": "Apartment RV038 - 3",
          "url": "/images/RV038/3.png"
        },
        {
          "alt": "Apartment RV038 - 4",
          "url": "/images/RV038/4.png"
        },
        {
          "alt": "Apartment RV038 - 5",
          "url": "/images/RV038/5.png"
        }
      ]
    },
    {
      "id": "RV039",
      "address": "Rehab",
      "area": 300.0,
      "description": "\u0641\u064a\u0644\u0627 \u0641\u0646\u062f\u0642\u064a\u0629 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 4 \u063a\u0631\u0641 \u0642\u0631\u064a\u0628\u0629 \u0644\u0644\u062e\u062f\u0645\u0627\u062a \u0641\u0631\u0634 \u0645\u0648\u062f\u0631\u0646 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \n4 \u063a\u0631\u0641 4 \u062d\u0645\u0627\u0645 \u0645\u0646\u0647\u0645 \u0645\u0627\u0633\u062a\u0631 \n\u0648\u0627\u064a \u0641\u0627\u064a \n\u0634\u0627\u0634\u0627\u062a led \n\u0627\u0642\u0644 \u0645\u062f\u0629 \u0633\u0646\u0629 \n\u0644\u0648\u0643\u064a\u0634\u0646 \u0645\u0645\u064a\u0632 \u062c\u062f\u0627 \n01123634000",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "\u0645\u0643\u062a\u0628 \u0631\u062d\u0627\u0628 \u062c\u064a\u062a",
      "price": 120000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0641\u0646\u062f\u0642\u064a\u0629 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 4 \u063a\u0631\u0641 \u0642\u0631\u064a\u0628\u0629 \u0644\u0644\u062e\u062f\u0645\u0627\u062a \u0641\u0631\u0634 \u0645\u0648\u062f\u0631\u0646 \u0628\u0627\u0644\u0643\u0627\u0645\u0644",
      "agent_phone": "1123634000",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV039 - 1",
          "url": "/images/RV039/1.png"
        },
        {
          "alt": "Apartment RV039 - 2",
          "url": "/images/RV039/2.png"
        },
        {
          "alt": "Apartment RV039 - 3",
          "url": "/images/RV039/3.png"
        },
        {
          "alt": "Apartment RV039 - 4",
          "url": "/images/RV039/4.png"
        },
        {
          "alt": "Apartment RV039 - 5",
          "url": "/images/RV039/5.png"
        }
      ]
    },
    {
      "id": "RV040",
      "address": "Rehab",
      "area": 500.0,
      "description": "\u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \n\u0641\u064a\u0644\u0627 \u0645\u0633\u062a\u0642\u0644\u0629 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \n\u0641\u064a\u0644\u0627\u062a \u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u0639\u0627\u0634\u0631\u0629 \n\u0646\u0645\u0648\u0630\u062c \n500 \u0623\u0631\u0636 \n340 \u0645\u0628\u0627\u0646\u064a \n\u063a\u0631\u0641 \n\u062d\u0645\u0627\u0645 \n\u062a\u0634\u0637\u064a\u0628 \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \n\u0645\u0637\u0644\u0648\u0628 110 \u0627\u0644\u0641 \n\n\u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631: 01120052474 \n\u0623/ \u0645\u0647\u0627",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 5.0,
      "agent_name": "",
      "price": 110000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0633\u062a\u0642\u0644\u0629 500\u0645 \u0646\u0645\u0648\u0630\u062c V \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0644\u0642\u0637\u0629",
      "agent_phone": "1120052474",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV040 - 1",
          "url": "/images/RV040/1.png"
        }
      ]
    },
    {
      "id": "RV041",
      "address": "Rehab",
      "area": 500.0,
      "description": "#\u0644\u0644\u0627\u064a\u062c\u0627\u0631_\u0641\u064a\u0644\u0627_\u0645\u0641\u0631\u0648\u0634\u0647_\u0641\u064a_\u0627\u0644\u0631\u062d\u0627\u0628 #\u0641\u064a\u0644\u0627_\u0627\u0633\u062a\u0627\u0646\u062f \u0627\u0644\u0644\u0648\u0646 \u062a\u0634\u0637\u064a\u0628 \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \u0641\u0631\u0634 \u0645\u0648\u062f\u0631\u0646 \u0645\u0643\u064a\u0641\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0627\u062c\u0647\u0632\u0629 \u062c\u062f\u064a\u062f\u0629 \u0627\u0646\u062a\u0631\u0646\u062a \u0645\u0646\u0632\u0644\u064a \u0642\u0631\u064a\u0628 \u0645\u0646 \u0628\u0648\u0627\u0628\u0647 9 \u0642\u0631\u064a\u0628\u0647 \u0644 \u0645\u0648\u0644 2 \u0627\u0644\u0645\u0633\u0627\u062d\u0647 : 500 \u0645\u062a\u0631 4\u063a\u0631\u0641 4\u062d\u0645\u0627\u0645 \u0627\u0644\u0633\u0639\u0631 120.000 \u0644\u0644\u062a\u0648\u0627\u0635\u0644: Hader \u0660\u0661\u0660\u0660\u0667\u0666\u0665\u0663\u0669\u0663\u0664 Swedish for real estate #\u0627\u0644\u0631\u062d\u0627\u0628 #\u0627\u064a\u062c\u0627\u0631_\u0645\u0641\u0631\u0648\u0634 #\u0627\u064a\u062c\u0627\u0631_\u0642\u0627\u0646\u0648\u0646 #\u0628\u062c\u0648\u0627\u0631_\u0627\u0644\u062e\u062f\u0645\u0627\u062a #\u0633\u0639\u0631_\u0644\u0642\u0637\u0629 #\u0641\u064a\u0648_\u0645\u0645\u062a\u0627\u0632 #\u0627\u0631\u062e\u0635_\u0633\u0639\u0631 #\u0641\u064a\u0648_\u062c\u0627\u0631\u062f\u0646 #\u0627\u0644\u0633\u0648\u0642_\u0627\u0644\u0642\u062f\u064a\u0645 & #\u0627\u0644\u0633\u0648\u0642_\u0627\u0644\u0634\u0631\u0642\u064a #\u0648\u0633\u064a\u0637_\u0645\u0646_\u0627\u0644\u0645\u0627\u0644\u0643 #\u0627\u0644\u0645\u0627\u0644\u0643",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "",
      "price": 120000.0,
      "title": "\u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a\u0644\u0627 \u0627\u0633\u062a\u0627\u0646\u062f \u0627\u0644\u0644\u0648\u0646 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0645\u0641\u0631\u0648\u0634\u0647 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0648\u0633\u064a\u0637 \u0645\u0646 \u0627\u0644\u0645\u0627\u0644\u0643",
      "agent_phone": "1007653934",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV041 - 1",
          "url": "/images/RV041/1.png"
        }
      ]
    },
    {
      "id": "RV042",
      "address": "Rehab",
      "area": 650.0,
      "description": "\u0641\u064a\u0644\u0627 \u0628\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0645\u064a\u0632 \u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 1 \u0646\u0645\u0648\u0630\u062c F \u0627\u0643\u0628\u0631 \u0646\u0645\u0648\u0630\u062c \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 1 Rehab city, new cairo \u0627\u0644\u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632 \u0641\u064a \u0627\u0644\u0645\u0631\u062d\u0644\u0647 \u0627\u0644\u0627\u0648\u0644\u064a \u0642\u0631\u064a\u0628 \u0645\u0646 \u0645\u0648\u0644 1 \u0628\u0648\u0627\u0628\u0647 1 \u0648\u062e\u0637\u0648\u0627\u062a \u0644\u0633\u0648\u0642 \u0627\u0644\u0642\u062f\u064a\u0645 \u0648\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0637\u0628\u064a \u0648\u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 El-Rehab \u0627\u0644\u0641\u064a\u0644\u0627 \u0645\u0643\u0648\u0646\u0647 \u0645\u0646 \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0627\u0631\u0636\u064a ( \u0631\u064a\u0633\u0628\u0634\u0646 \u0643\u0628\u064a\u0631 \u0648\u0645\u0637\u0628\u062e \u0648\u062d\u0645\u0627\u0645 \u0644\u0644\u0636\u064a\u0648\u0641 \u0648\u063a\u0631\u0641 \u0645\u0631\u0628\u064a\u0647 \u0628\u0627\u0644\u062d\u0645\u0627\u0645 \u0648\u063a\u0631\u0641\u0647 \u0643\u0628\u064a\u0631\u0629 \u0628\u0627\u0644\u062d\u0645\u0627\u0645 ) \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0627\u0648\u0644 \u0645\u0643\u0648\u0646 \u0645\u0646 ( \u0644\u0641\u064a\u0646\u062c \u0643\u0628\u064a\u0631 \u0648\u0628\u0644\u0643\u0648\u0646\u0647 \u0643\u0628\u064a\u0631\u0647 \u0648 4 \u063a\u0631\u0641\u0647 \u0646\u0648\u0645 \u0648\u0645\u0646\u0647\u0645 \u063a\u0631\u0641\u0647 \u0645\u0627\u0633\u062a\u0631 \u0628\u0627\u0644\u062d\u0645\u0627\u0645 \u0648\u0627\u0644\u062f\u0631\u064a\u0633\u0646\u062c \u0631\u0648\u0645 \u0648\u0628\u0644\u0643\u0648\u0646\u0647 \u0643\u0628\u064a\u0631\u0647 \u0648 3 \u062d\u0645\u0627\u0645 \u0644\u0644\u0641\u0646\u064a\u062c \u0648 3 \u0627\u0644\u063a\u0631\u0641\u0647 \u0648\u0627\u0648\u0641\u064a\u0633 ) \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u062b\u0627\u0646\u064a \u0645\u0643\u0648\u0646 \u0645\u0646 ( \u063a\u0631\u0641\u0647 \u0643\u0628\u064a\u0631\u0647 \u0648\u0631\u064a\u0633\u0628\u0634\u0646 \u0648\u062d\u0645\u0627\u0645 \u062e\u0627\u0635 \u0628\u0627\u0644\u062f\u0648\u0631 \u0648\u0627\u0648\u0641\u064a\u0633 ) \u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0627\u0631\u0636 650 \u0645\u062a\u0631 \u0648\u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0645\u0628\u0627\u0646\u064a 450 \u0645\u062a\u0631 \u0627\u0644\u0641\u064a\u0644\u0627 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u0627\u0644\u062a\u0631\u0627 \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \u062c\u0627\u0647\u0632\u0647 \u0639\u0644\u064a \u0627\u0644\u0633\u0643\u0646 \u0645\u0628\u0627\u0634\u0631\u0629 \u0627\u0644\u0644\u064a\u0648\u0643\u0634\u0646 \u0639\u0644\u064a \u0627\u0643\u0628\u0631 \u062c\u0632\u064a\u0632\u0647 \u0641\u064a \u0627\u0644\u0645\u0631\u062d\u0644\u0647 \u0627\u0644\u0627\u0648\u0644\u064a \u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0647 \u062e\u0627\u0635 \u0641\u064a \u0627\u0644\u0641\u064a\u0644\u0627 \u0627\u0644\u0645\u0641\u062a\u0627\u062d \u0645\u0648\u062c\u0648\u062f \u0644\u0644\u0645\u0639\u0627\u0646\u064a\u0647 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 / 01101221202",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 7.0,
      "bedrooms": 7.0,
      "agent_name": "Al Masrya real estate",
      "price": 250000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0628\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0645\u064a\u0632 \u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 1 \u0646\u0645\u0648\u0630\u062c F \u0627\u0643\u0628\u0631 \u0646\u0645\u0648\u0630\u062c \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 1 Rehab city, new cairo",
      "agent_phone": "1101221202",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV042 - 1",
          "url": "/images/RV042/1.png"
        },
        {
          "alt": "Apartment RV042 - 2",
          "url": "/images/RV042/2.png"
        },
        {
          "alt": "Apartment RV042 - 3",
          "url": "/images/RV042/3.png"
        },
        {
          "alt": "Apartment RV042 - 4",
          "url": "/images/RV042/4.png"
        },
        {
          "alt": "Apartment RV042 - 5",
          "url": "/images/RV042/5.png"
        }
      ]
    },
    {
      "id": "RV043",
      "address": "Rehab",
      "area": 1000.0,
      "description": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634\u0629 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0641\u064a \u0643\u0648\u0645\u0628\u0627\u0648\u0646\u062f \u0627\u0644\u0631\u062d\u0627\u0628 \u0647\u0627\u064a\u062a\u0633\u060c \u0642\u0644\u0628 \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u062e\u0627\u0645\u0633 \n\u062a\u0634\u0637\u064a\u0628 \u0641\u0627\u062e\u0631 \u0639\u0635\u0631\u064a \u0628\u0623\u062d\u062f\u062b \u0627\u0644\u062a\u0635\u0627\u0645\u064a\u0645 \n\u0623\u062b\u0627\u062b \u0645\u0633\u062a\u0648\u0631\u062f \u0648\u0639\u0635\u0631\u064a \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \n\n\u0627\u0644\u0645\u0633\u0627\u062d\u0629: 1000 \u0645\u062a\u0631 \u0645\u0631\u0628\u0639 \n\n\u062a\u062a\u0643\u0648\u0646 \u0645\u0646:- \n5 \u063a\u0631\u0641 \u0646\u0648\u0645 \u0645\u0627\u0633\u062a\u0631 \u0645\u0639 \u062d\u0645\u0627\u0645 \u0648\u062f\u0631\u064a\u0633\u0646\u062c \u0631\u0648\u0645 \n7 \u062d\u0645\u0627\u0645\u0627\u062a \n\u062d\u062f\u064a\u0642\u0629 \u062e\u0627\u0635\u0629 \n\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629 \n\u063a\u0631\u0641\u062a\u064a\u0646 \u0644\u0644\u0639\u0645\u0627\u0644 \n\u0645\u0635\u0639\u062f \n\u0633\u0628\u0627\u060c \u0633\u0627\u0648\u0646\u0627\u060c \u062c\u0627\u0643\u0648\u0632\u064a \n\u062c\u064a\u0645 \n\u0645\u0646\u0637\u0642\u0629 \u0644\u0644\u0634\u0648\u0627\u0621 \n\u063a\u0631\u0641\u0629 \u063a\u0633\u064a\u0644 \n\u062c\u0631\u0627\u062c \u062e\u0627\u0635 \u064a\u062a\u0633\u0639 \u062d\u062a\u0649 7 \u0633\u064a\u0627\u0631\u0627\u062a \n\u063a\u0631\u0641\u0629 \u0644\u0644\u0639\u0645\u0627\u0644 \u0645\u0639 \u062d\u0645\u0627\u0645 \n\u062a\u0643\u064a\u064a\u0641\u0627\u062a \u0641\u064a \u062c\u0645\u064a\u0639 \u0627\u0644\u063a\u0631\u0641 \n\u0623\u0645\u0646 \u0639\u0644\u0649 \u0645\u062f\u0627\u0631 24 \u0633\u0627\u0639\u0629 \n\u0645\u0646\u0627\u0638\u0631 \u0637\u0628\u064a\u0639\u064a\u0629 \u0648\u0645\u0633\u0627\u062d\u0627\u062a \u062e\u0636\u0631\u0627\u0621 \n\u0625\u0637\u0644\u0627\u0644\u0629 \u0645\u0645\u062a\u0627\u0632\u0629 \n\u0645\u0648\u0642\u0639 \u0645\u062a\u0645\u064a\u0632 \u0641\u064a \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u062e\u0627\u0645\u0633 \n\u0645\u0648\u0642\u0639 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a \n\u0642\u0631\u064a\u0628 \u0645\u0646 \u062c\u0645\u064a\u0639 \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \n\u0639\u0644\u0649 \u0628\u0639\u062f 10 \u062f\u0642\u0627\u0626\u0642 \u0645\u0646 \u0634\u0627\u0631\u0639 \u0627\u0644\u062a\u0633\u0639\u064a\u0646 \n\u062f\u0642\u0627\u0626\u0642 \u0645\u0646 \u0645\u062f\u064a\u0646\u0629 \u0646\u0635\u0631 \n\u0648\u0645\u064a\u062f\u0627\u0646 \u062c\u0648\u0644\u062f\u0646 \u0633\u0643\u0648\u064a\u0631",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 7.0,
      "bedrooms": 5.0,
      "agent_name": "Brand Real Estate",
      "price": 350000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0633\u062a\u0642\u0644\u0629 \u0641\u0627\u062e\u0631\u0629 \u0645\u0641\u0631\u0648\u0634\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0628\u0645\u0633\u0627\u062d\u0629 1000\u0645\u062a\u0631 \u0645\u0639 \u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0641\u064a \u0643\u0648\u0645\u0628\u0627\u0648\u0646\u062f \u0627\u0644\u0631\u062d\u0627\u0628 \u0647\u0627\u064a\u062a\u0633 - \u0645\u0648\u0642\u0639 \u0645\u062a\u0645\u064a\u0632 \u0628\u062c\u0627\u0646\u0628 \u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u062f\u0645\u0627\u062a.",
      "agent_phone": "1149593867",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV043 - 1",
          "url": "/images/RV043/1.png"
        },
        {
          "alt": "Apartment RV043 - 2",
          "url": "/images/RV043/2.png"
        },
        {
          "alt": "Apartment RV043 - 3",
          "url": "/images/RV043/3.png"
        },
        {
          "alt": "Apartment RV043 - 4",
          "url": "/images/RV043/4.png"
        },
        {
          "alt": "Apartment RV043 - 5",
          "url": "/images/RV043/5.png"
        },
        {
          "alt": "Apartment RV043 - 6",
          "url": "/images/RV043/6.png"
        }
      ]
    },
    {
      "id": "RV044",
      "address": "Rehab",
      "area": 800.0,
      "description": "\u0641\u064a\u0644\u0627 \u0641\u0627\u062e\u0631\u0629 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0641\u064a \u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632 \u062f\u0627\u062e\u0644 \u0643\u0645\u0628\u0648\u0646\u062f \u0627\u0644\u0631\u062d\u0627\u0628 \u0647\u0627\u064a\u062a\u0633 \n\u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \n\n\u062d\u062f\u064a\u0642\u0629 \u062e\u0627\u0635\u0629 \n\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629 \u062e\u0627\u0635 \n\u0645\u0648\u0642\u0641 \u0633\u064a\u0627\u0631\u0627\u062a \u062e\u0627\u0635 \u064a\u062a\u0633\u0639 \u062d\u062a\u0649 6 \u0633\u064a\u0627\u0631\u0627\u062a \n\u0635\u0627\u0644\u0629 \u0631\u064a\u0627\u0636\u064a\u0629\u060c \u0633\u0627\u0648\u0646\u0627\u060c \u062c\u0627\u0643\u0648\u0632\u064a \u0648\u0633\u0628\u0627 \n\u0645\u0635\u0639\u062f \u062f\u0627\u062e\u0644\u064a \n\u0625\u0637\u0644\u0627\u0644\u0629 \u0645\u0641\u062a\u0648\u062d\u0629 \u0645\u0639 \u0645\u0646\u0627\u0638\u0631 \u0637\u0628\u064a\u0639\u064a\u0629 \u0648\u062d\u062f\u0627\u0626\u0642 \n\n\u0627\u0644\u0645\u0633\u0627\u062d\u0629: 800 \u0645\u062a\u0631 \u0645\u0631\u0628\u0639 \n\n\u062a\u062a\u0643\u0648\u0646 \u0645\u0646: \n4 \u063a\u0631\u0641 \u0646\u0648\u0645 \n\u063a\u0631\u0641\u0629 \u0646\u0648\u0645 \u0631\u0626\u064a\u0633\u064a\u0629 \u0645\u0639 \u062d\u0645\u0627\u0645 \u062e\u0627\u0635 \u0648\u062f\u0631\u064a\u0633\u0646\u062c \n5 \u062d\u0645\u0627\u0645\u0627\u062a \n\u063a\u0631\u0641\u062a\u064a\u0646 \u0644\u0644\u062e\u0627\u062f\u0645\u0629 \n\u063a\u0631\u0641\u0629 \u063a\u0633\u064a\u0644 \n\u0645\u0643\u064a\u0641\u0627\u062a \u0647\u0648\u0627\u0621 \u0643\u0627\u0645\u0644\u0629 \n\u0645\u0637\u0628\u062e \u0645\u062c\u0647\u0632 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \n\u0623\u062c\u0647\u0632\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064a\u0629 \u062c\u062f\u064a\u062f\u0629 \n\n\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0625\u064a\u062c\u0627\u0631: \n\u0627\u0644\u0633\u0639\u0631: 6,000 \u062f\u0648\u0644\u0627\u0631",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 6.0,
      "bedrooms": 5.0,
      "agent_name": "Brand Real Estate",
      "price": 300000.0,
      "title": "\u0641\u064a\u0644\u0627 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u0645\u0645\u064a\u0632\u0629 \u0645\u0639 \u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629 \u062e\u0627\u0635 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0641\u064a \u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632 \u062f\u0627\u062e\u0644 \u0643\u0645\u0628\u0648\u0646\u062f \u0627\u0644\u0631\u062d\u0627\u0628 \u0647\u0627\u064a\u062a\u0633 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 - \u0645\u0641\u0631\u0648\u0634 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0641\u0631\u0634 \u0641\u0627\u062e\u0631",
      "agent_phone": "1149593867",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV044 - 1",
          "url": "/images/RV044/1.png"
        },
        {
          "alt": "Apartment RV044 - 2",
          "url": "/images/RV044/2.png"
        },
        {
          "alt": "Apartment RV044 - 3",
          "url": "/images/RV044/3.png"
        },
        {
          "alt": "Apartment RV044 - 4",
          "url": "/images/RV044/4.png"
        },
        {
          "alt": "Apartment RV044 - 5",
          "url": "/images/RV044/5.png"
        }
      ]
    },
    {
      "id": "RV045",
      "address": "Rehab",
      "area": 1500.0,
      "description": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634\u0629 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \n\u0641\u064a \u0643\u0645\u0628\u0648\u0646\u062f \u0627\u0644\u0631\u062d\u0627\u0628 \u0633\u064a\u062a\u064a \u0628\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629 \n\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634\u0629 \u0628\u0623\u062b\u0627\u062b \u0641\u0646\u062f\u0642\u064a \n\u062a\u0634\u0637\u064a\u0628 \u0641\u0627\u062e\u0631 \u0648\u0631\u0627\u0642\u064a \n\n\u0645\u0633\u0627\u062d\u0629 1,500 \u0645\u062a\u0631 \n5 \u063a\u0631\u0641 \u0646\u0648\u0645 \u0631\u0626\u064a\u0633\u064a\u0629 \n7 \u062d\u0645\u0627\u0645\u0627\u062a \n\u062d\u062f\u064a\u0642\u0629 \u062e\u0627\u0635\u0629 \n\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629 \n\u062c\u0631\u0627\u062c \u062e\u0627\u0635 \u064a\u062a\u0633\u0639 \u0644\u0640 8 \u0633\u064a\u0627\u0631\u0627\u062a \n\u062c\u064a\u0645 \n\u0633\u0628\u0627 \n\u0633\u0627\u0648\u0646\u0627 \n\u062c\u0627\u0643\u0648\u0632\u064a \n\n\u0641\u064a\u0648 \u0639\u0644\u0649 \u0627\u0644\u062d\u062f\u0627\u0626\u0642 \n\u0641\u064a\u0648 \u0645\u0641\u062a\u0648\u062d\u0629 \n\n\u0627\u0644\u0633\u0639\u0631 \u0634\u0647\u0631\u064a\u064b\u0627: 7,000 \u062f\u0648\u0644\u0627\u0631",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 7.0,
      "bedrooms": 5.0,
      "agent_name": "Brand Real Estate",
      "price": 350000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634\u0629 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0641\u064a \u0643\u0645\u0628\u0648\u0646\u062f \u0627\u0644\u0631\u062d\u0627\u0628 \u0633\u064a\u062a\u064a \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629, \u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634\u0629 \u0641\u064a \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u062e\u0627\u0645\u0633 \u0645\u0648\u0642\u0639 \u0645\u062a\u0645\u064a\u0632 - \u0641\u064a\u0648 \u0639\u0644\u0649 \u062d\u062f\u0627\u0626\u0642 Villa for rent",
      "agent_phone": "1149593867",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV045 - 1",
          "url": "/images/RV045/1.png"
        },
        {
          "alt": "Apartment RV045 - 2",
          "url": "/images/RV045/2.png"
        },
        {
          "alt": "Apartment RV045 - 3",
          "url": "/images/RV045/3.png"
        },
        {
          "alt": "Apartment RV045 - 4",
          "url": "/images/RV045/4.png"
        },
        {
          "alt": "Apartment RV045 - 5",
          "url": "/images/RV045/5.png"
        }
      ]
    },
    {
      "id": "RV046",
      "address": "Rehab",
      "area": 480.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0628\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u0628\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629 \u0645\u0648\u0642\u0639 \u0645\u062a\u0645\u064a\u0632 \u062c\u062f\u0627 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0627\u0631\u0636 671 \u0645\u062a\u0631 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u0628\u0627\u0646\u064a 480 \u0645\u062a\u0631 \u062a\u0642\u0633\u064a\u0645\u0629 \u0627\u0644\u0641\u064a\u0644\u0627 \u0664\u063a\u0631\u0641 \u0646\u0648\u0645\u0663 \u062d\u0645\u0627\u0645 \u0627\u0644\u062f\u0648\u0631 \u0627\u0644\u0627\u0631\u0636\u0649 \u0643\u0644\u0629 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0665 \u0642\u0637\u0639 \u0648\u0645\u0637\u0628\u062e \u0643\u0628\u064a\u0631 \u0648\u062d\u0645\u0627\u0645 \u0636\u064a\u0648\u0641 \u0627\u0644\u0628\u064a\u0639 \u0628\u0627\u0644\u0641\u0631\u0634 \u0648\u0627\u0644\u0646\u062c\u0641 \u0648\u0627\u0644\u0633\u062a\u0627\u064a\u0631 \u0648\u0627\u0644\u0633\u062c\u0627\u062f \u0648\u0627\u0644\u0627\u062c\u0647\u0632\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064a\u0629 \u0644\u0644\u0645\u0637\u0628\u062e \u0645\u0641\u0631\u0648\u0634 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0648\u0627\u0644\u062a\u0643\u064a\u0641\u0627\u062a \u0648\u0627\u0644\u062f\u0641\u0627\u064a\u0627\u062a \u0645\u0631\u0643\u0632\u064a\u0629 \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 250,000 \u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0639\u0644\u064a 01118985888",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "Dream homes",
      "price": 250000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 \u0646\u0645\u0648\u0630\u062c M \u0648\u0628\u0633\u0639\u0631 \u0645\u0645\u064a\u0632 \u062c\u062f\u0627",
      "agent_phone": "1118985888",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV046 - 1",
          "url": "/images/RV046/1.png"
        }
      ]
    },
    {
      "id": "RV047",
      "address": "Rehab",
      "area": 700.0,
      "description": "\u0641\u064a\u0644\u0627 \u0628\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634 - \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 - \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0627\u0633\u062a\u0627\u0646\u062f \u0627\u0644\u0648\u0646 \u0641\u064a\u0644\u0627 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0629 \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \u0641\u0631\u0634 \u0645\u0648\u062f\u0631\u0646 \u0645\u0645\u064a\u0632 \u0627\u0644\u0641\u064a\u0644\u0627 \u062a\u062a\u0643\u0648\u0646 \u0645\u0646 : 7 \u063a\u0631\u0641 \u0646\u0648\u0645 9 \u062d\u0645\u0627\u0645 4 \u0644\u064a\u0641\u064a\u0646\u062c 3 \u0645\u0637\u0628\u062e \u0633\u0641\u0631\u0629 2 \u0635\u0627\u0644\u0648\u0646 \u0628\u0627\u0644\u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0649 2 \u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0647 \u062e\u0627\u0631\u062c\u0649 \u0648 \u062f\u0627\u062e\u0644\u064a \u063a\u0631\u0641\u0647 \u063a\u0641\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0631\u0636\u064a\u0627\u062a \u062d\u0645\u0627\u0645\u0627\u062a \u0631\u062e\u0627\u0645 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u0639\u0644\u0649 \u0627\u0639\u0644\u0649 \u0645\u0633\u062a\u0648\u0649 \u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632 \u0642\u0631\u064a\u0628 \u0644\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0627\u0644\u0645\u0648\u0644 \u0627\u0644\u0633\u0639\u0631 5000 \u062f\u0648\u0644\u0627\u0631 \u0634\u0647\u0631\u064a\u0627 \u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631 : 01111932100",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 9.0,
      "bedrooms": 7.0,
      "agent_name": "Modern Home",
      "price": 250000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0628\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0647 7 \u063a\u0631\u0641 \u0646\u0648\u0645 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u0648\u0641\u0631\u0634 \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \u0628\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628",
      "agent_phone": "1111932100",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV047 - 1",
          "url": "/images/RV047/1.png"
        }
      ]
    },
    {
      "id": "RV048",
      "address": "Rehab",
      "area": 230.0,
      "description": "\u0641\u064a\u0644\u0627 \u0645\u0648\u062f\u0631\u0646 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0628\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 2 \u062a\u0648 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0627\u0644\u0641\u064a\u0644\u0627 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u063a\u0631\u0641\u0629 \u0631\u0626\u064a\u0633\u064a\u0649\u0629 \u0639\u062f\u062f 3 \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u064a \u063a\u0631\u0641\u0629 4 \u0645\u0631\u0628\u064a\u0629 \u0623\u0648 \u0636\u064a\u0641 \u0623\u0648 \u0628\u062d\u0633\u0628 \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u062c \u0627\u0644\u062d\u0627\u0644\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0627\u0644\u0641\u064a\u0644\u0627 \u0645\u0645\u062a\u0627\u0632\u0629 \u0644\u0627 \u062a\u0648\u062c\u062f \u0627\u0639\u0637\u0627\u0644 \u0645\u0643\u064a\u0641\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0645\u062a\u0648\u0641\u0631\u0629 \u0641\u0631\u0634 \u0645\u0648\u062f\u0631\u0646 \u062d\u0645\u0627\u0645\u0627\u062a \u0631\u0627\u0642\u064a\u0629 \u0639\u062f\u062f3\u062d\u0645\u0627\u0645 \u0627\u0644\u062d\u062f\u064a\u0642\u0629 \u0628\u062d\u0627\u0644\u0629 \u062c\u064a\u062f\u0629 \u0645\u0648\u0642\u0641 \u0633\u064a\u0627\u0631\u0627\u062a \u0645\u063a\u0637\u064a \u064a\u0633\u0639 \u0641\u064a \u0627\u0644\u062f\u0627\u062e\u0644 \u0639\u062f\u062f2\u0633\u064a\u0627\u0631\u0629 \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u064a \u0645\u0643\u0627\u0646 \u0628\u0643\u0641\u064a \u0633\u064a\u0627\u0631\u062a\u064a\u0646 \u0641\u064a \u0627\u0644\u062e\u0627\u0631\u062c \u0627\u0644\u0631\u0648\u0641 \u0641\u064a \u062d\u0627\u0644\u0629 \u062c\u064a\u062f\u0629 \u062c\u062f\u0627 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u0628\u0627\u0646\u064a \u0662\u0663\u0660 \u0645 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u062d\u062f\u064a\u0642\u0629 \u0662\u0665\u0660 \u0645 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u062a\u0623\u062c\u064a\u0631\u064a\u0629 \u0667\u0665\u0660\u0660\u0660 \u0634\u0647\u0631\u064a\u0627 \u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062f\u0641\u0639 \u0645\u0642\u062f\u0645\u0627 \u0643\u0644 \u0627\u0648\u0644 \u0634\u0647\u0631 \u0627\u0644\u062a\u0623\u0645\u064a\u0646 \u0639\u062f\u062f \u0662 \u0634\u0647\u0631 \u0634\u0631\u0643\u0629 \u062a\u0623\u062c\u064a\u0631\u0629 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u0640 \u0627\u0644\u0645\u0628\u0646\u064a \u0627\u0644\u0625\u062f\u0627\u0631\u064a \u0640 \u0645\u0643\u062a\u0628 \u0662\u0661\u0663 \u0648\u0643\u064a\u0644 \u0639\u0642\u0627\u0631\u064a \u0645\u0639\u062a\u0645\u062f",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 3.0,
      "bedrooms": 4.0,
      "agent_name": "",
      "price": 75000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 2 \u062a\u0648 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629",
      "agent_phone": "1006101212",
      "type": "Furnitured",
      "contact": "Office",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RV048 - 1",
          "url": "/images/RV048/1.png"
        },
        {
          "alt": "Apartment RV048 - 2",
          "url": "/images/RV048/2.png"
        },
        {
          "alt": "Apartment RV048 - 3",
          "url": "/images/RV048/3.png"
        },
        {
          "alt": "Apartment RV048 - 5",
          "url": "/images/RV048/5.png"
        },
        {
          "alt": "Apartment RV048 - 6",
          "url": "/images/RV048/6.png"
        },
        {
          "alt": "Apartment RV048 - \u0644\u0642\u0637\u0629 \u0627\u0644\u0634\u0627\u0634\u0629 2025-06-12 173159",
          "url": "/images/RV048/\u0644\u0642\u0637\u0629 \u0627\u0644\u0634\u0627\u0634\u0629 2025-06-12 173159.png"
        }
      ]
    },
    {
      "id": "RVR100",
      "address": "Rehab",
      "area": 250.0,
      "description": "\u06a4\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 \u0646\u0645\u0648\u0630\u062cB \u0645\u0648\u0642\u0639 \u0645\u062a\u0645\u064a\u0632 \u0628\u062c\u0648\u0627\u0631 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0642\u062f\u064a\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0645\u0648\u0644 1\u062a\u062a\u0643\u0648\u0646 \u0645\u0646 4\u063a\u0631\u0641 \u0646\u0648\u0645+4\u062d\u0645\u0627\u0645 \u0641\u0631\u0634 \u0645\u0648\u062f\u0631\u0646 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u0627\u0648\u0644 \n\u064a\u0648\u062c\u062f \u0644\u062f\u064a\u0646\u0627 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0633\u0627\u062d\u0627\u062a \u0627\u064a\u062c\u0627\u0631 \u0648\u062a\u0645\u0644\u064a\u0643",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "Alrahma for real estate",
      "price": 130000.0,
      "title": "\u06a4\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0628\u0627\u0644\u0631\u062d\u0627\u0628 \u0646\u0645\u0648\u0630\u062cB \u0645\u0648\u0642\u0639 \u0645\u062a\u0645\u064a\u0632 \u0628\u062c\u0648\u0627\u0631 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0642\u062f\u064a\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0645\u0648\u0644 1\u062a\u062a\u0643\u0648\u0646 \u0645\u0646 4\u063a\u0631\u0641 \u0646\u0648\u0645+4\u062d\u0645\u0627\u0645 \u0641\u0631\u0634 \u0645\u0648\u062f\u0631\u0646 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u0633\u0648\u0628\u0631 \u0644\u0648\u0643\u0633 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u0627\u0648\u0644",
      "agent_phone": "1153720056",
      "type": "Furnitured",
      "contact": "Direct",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.31 PM (1)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.31 PM (1).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.31 PM (2)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.31 PM (2).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.31 PM (3)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.31 PM (3).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.31 PM",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.31 PM.webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.32 PM (1)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.32 PM (1).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.32 PM (2)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.32 PM (2).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.32 PM",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.32 PM.webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.33 PM (1)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.33 PM (1).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.33 PM (2)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.33 PM (2).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.33 PM",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.33 PM.webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.34 PM (1)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.34 PM (1).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.34 PM (2)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.34 PM (2).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.34 PM (3)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.34 PM (3).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.34 PM",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.34 PM.webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.35 PM (1)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.35 PM (1).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.35 PM (2)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.35 PM (2).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.35 PM",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.35 PM.webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.36 PM (1)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.36 PM (1).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.36 PM (2)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.36 PM (2).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.36 PM (3)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.36 PM (3).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.36 PM",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.36 PM.webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.37 PM (1)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.37 PM (1).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.37 PM (2)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.37 PM (2).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.37 PM",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.37 PM.webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.38 PM (1)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.38 PM (1).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.38 PM (2)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.38 PM (2).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.38 PM (3)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.38 PM (3).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.38 PM",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.38 PM.webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.39 PM (1)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.39 PM (1).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.39 PM (2)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.39 PM (2).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.39 PM (3)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.39 PM (3).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.39 PM",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.39 PM.webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.40 PM (1)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.40 PM (1).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.40 PM (2)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.40 PM (2).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.40 PM (3)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.40 PM (3).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.40 PM",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.40 PM.webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.41 PM (1)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.41 PM (1).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.41 PM (2)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.41 PM (2).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.41 PM (3)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.41 PM (3).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.41 PM",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.41 PM.webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.42 PM (1)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.42 PM (1).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.42 PM (2)",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.42 PM (2).webp"
        },
        {
          "alt": "Apartment RVR100 - WhatsApp Image 2025-06-04 at 3.24.42 PM",
          "url": "/images/RVR100/WhatsApp Image 2025-06-04 at 3.24.42 PM.webp"
        }
      ]
    },
    {
      "id": "RVR101",
      "address": "Rehab",
      "area": 250.0,
      "description": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634 \n\u0628\u062d\u062f\u064a\u0642\u0629 \n3 \u0646\u0648\u0645 \n3 \u062d\u0645\u0627\u0645 \n60000 \n\u0647\u062a\u0643\u0648\u0646 \u0645\u062a\u0627\u062d\u0629 \u0645\u0646 \u064a\u0648\u0645 5/15 \n\u0644\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 /\u0634\u0631\u0643\u0629 \u0643\u0627\u0631\u0644\u0627 \u0632\u064a\u0646 \u0644\u062a\u0633\u0648\u064a\u0642 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \n\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 Mahmoud Abo Bakr \n01020633246 \n01275503111 \n01210079992 \n\u0645\u062a\u0627\u062d \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0633\u0627\u062d\u0627\u062a #\u062a\u0645\u0644\u064a\u0643 #\u0628\u064a\u0639 #\u0627\u064a\u062c\u0627\u0631 #\u0645\u0641\u0631\u0648\u0634\u0647 #\u0643\u0627\u0627\u0634 #\u0648\u062a\u0642\u0633\u064a\u0637 #\u0627\u0644\u0631\u062d\u0627\u0628 #\u0645\u062f\u064a\u0646\u062a\u064a #\u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u062e\u0627\u0645\u0633 #\u0627\u0644\u0642\u0627\u0647\u0631\u0629\u0640\u0627\u0644\u062c\u062f\u064a\u062f\u0629 #\u0643\u0648\u0645\u0628\u0627\u0648\u0646\u062f",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 3.0,
      "bedrooms": 3.0,
      "agent_name": "",
      "price": 60000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 3\u063a\u0631\u0641 \u0646\u0648\u0645 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 Al Rehab New Cairo Cairo",
      "agent_phone": "\u0627\u0646\u0638\u0631 \u0627\u0644\u0645\u0648\u0642\u0639",
      "type": "Furnitured",
      "contact": "Direct",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.38 PM (1)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.38 PM (1).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.38 PM",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.38 PM.webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.39 PM (1)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.39 PM (1).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.39 PM (2)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.39 PM (2).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.39 PM",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.39 PM.webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.40 PM (1)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.40 PM (1).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.40 PM (2)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.40 PM (2).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.40 PM",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.40 PM.webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.41 PM (1)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.41 PM (1).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.41 PM (2)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.41 PM (2).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.41 PM (3)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.41 PM (3).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.41 PM",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.41 PM.webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.42 PM (1)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.42 PM (1).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.42 PM (2)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.42 PM (2).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.42 PM",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.42 PM.webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.43 PM (1)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.43 PM (1).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.43 PM (2)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.43 PM (2).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.43 PM (3)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.43 PM (3).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.43 PM",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.43 PM.webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.44 PM (1)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.44 PM (1).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.44 PM",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.44 PM.webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.45 PM (1)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.45 PM (1).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.45 PM (2)",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.45 PM (2).webp"
        },
        {
          "alt": "Apartment RVR101 - WhatsApp Image 2025-05-07 at 6.13.45 PM",
          "url": "/images/RVR101/WhatsApp Image 2025-05-07 at 6.13.45 PM.webp"
        }
      ]
    },
    {
      "id": "RVR107",
      "address": "Rehab",
      "area": 260.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0645\u0641\u0631\u0648\u0634 \u0628\u062d\u0627\u0644\u0647 \u0627\u0648\u0644 \u0633\u0643\u0646 \u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0627\u0631\u0636 260 \u0648\u0627\u0644\u0645\u0628\u0627\u0646\u064a \u0639\u0644\u0649 210 \u0641\u0631\u0634 \u0645\u0648\u062f\u0631\u0646 \u0648\u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0647 \u0645\u0643\u064a\u0641\u0647 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0648\u0628\u0647\u0627 \u063a\u0627\u0632 \u0637\u0628\u064a\u0639\u064a \u0627\u0631\u0628\u0639 \u063a\u0631\u0641 \u0646\u0648\u0645 \u0627\u0631\u0628\u0639\u0647 \u062d\u0645\u0627\u0645 \u0645\u0646\u0647\u0645 \u063a\u0631\u0641\u062a\u064a\u0646 \u0645\u0627\u0633\u062a\u0631 \u062e\u0644\u0641 \u0645\u0648\u0644 \u0648\u0627\u062d\u062f \u0648\u0628\u062c\u0648\u0627\u0631 \u0627\u0644\u0645\u0633\u062c\u062f \u062e\u0637\u0648\u0627\u062a \u0645\u0646 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0642\u062f\u064a\u0645 \u0648\u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \n\u0627\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u062f\u0647 \u0637\u0648\u064a\u0644\u0647 85\u0627\u0644\u0641",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 4.0,
      "bedrooms": 4.0,
      "agent_name": "",
      "price": 85000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0645\u0641\u0631\u0648\u0634 \u0628\u062d\u0627\u0644\u0647 \u0627\u0648\u0644 \u0633\u0643\u0646 \u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0627\u0631\u0636 260 \u0648\u0627\u0644\u0645\u0628\u0627\u0646\u064a \u0639\u0644\u0649 210 \u0641\u0631\u0634 \u0645\u0648\u062f\u0631\u0646 \u0648\u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0647 \u0645\u0643\u064a\u0641\u0647 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0648\u0628\u0647\u0627 \u063a\u0627\u0632 \u0637\u0628\u064a\u0639\u064a \u0627\u0631\u0628\u0639 \u063a\u0631\u0641 \u0646\u0648\u0645 \u0627\u0631\u0628\u0639\u0647 \u062d\u0645",
      "agent_phone": "1070523344",
      "type": "Furnitured",
      "contact": "Direct",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.46 PM (1)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.46 PM (1).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.46 PM (2)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.46 PM (2).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.46 PM (3)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.46 PM (3).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.46 PM",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.46 PM.webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.47 PM (1)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.47 PM (1).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.47 PM (2)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.47 PM (2).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.47 PM (3)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.47 PM (3).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.47 PM",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.47 PM.webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.48 PM (1)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.48 PM (1).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.48 PM (2)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.48 PM (2).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.48 PM (3)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.48 PM (3).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.48 PM",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.48 PM.webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.49 PM (1)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.49 PM (1).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.49 PM (2)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.49 PM (2).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.49 PM (3)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.49 PM (3).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.49 PM",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.49 PM.webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.50 PM (1)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.50 PM (1).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.50 PM (2)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.50 PM (2).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.50 PM (3)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.50 PM (3).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.50 PM",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.50 PM.webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.51 PM (1)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.51 PM (1).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.51 PM (2)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.51 PM (2).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.51 PM (3)",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.51 PM (3).webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.51 PM",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.51 PM.webp"
        },
        {
          "alt": "Apartment RVR107 - WhatsApp Image 2025-05-25 at 7.01.52 PM",
          "url": "/images/RVR107/WhatsApp Image 2025-05-25 at 7.01.52 PM.webp"
        }
      ]
    },
    {
      "id": "RVR118",
      "address": "Rehab",
      "area": 0,
      "description": "\u0628\u062f\u0648\u0644\u0627\u0631 \u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629",
      "model": "",
      "bathrooms": 0,
      "bedrooms": 0,
      "agent_name": "",
      "price": 200000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634 \u0645\u0645\u064a\u0632\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0645\u062f\u064a\u0646\u0647 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0642\u0627\u0647\u0631\u0647 new cairo el rehab city",
      "agent_phone": "1090465654",
      "type": "Furnitured",
      "contact": "Direct",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 3.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.30 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.30 PM.webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.31 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.31 PM.webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.32 PM (1)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.32 PM (1).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.32 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.32 PM.webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.34 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.34 PM.webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.35 PM (1)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.35 PM (1).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.35 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.35 PM.webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.36 PM (1)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.36 PM (1).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.36 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.36 PM.webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.37 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.37 PM.webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.39 PM (1)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.39 PM (1).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.39 PM (2)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.39 PM (2).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.39 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.39 PM.webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.40 PM (1)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.40 PM (1).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.40 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.40 PM.webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.41 PM (1)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.41 PM (1).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.41 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.41 PM.webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.42 PM (1)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.42 PM (1).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.42 PM (2)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.42 PM (2).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.42 PM (3)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.42 PM (3).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.42 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.42 PM.webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.43 PM (1)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.43 PM (1).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.43 PM (2)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.43 PM (2).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.43 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.43 PM.webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.45 PM (1)",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.45 PM (1).webp"
        },
        {
          "alt": "Apartment RVR118 - WhatsApp Image 2025-06-03 at 11.15.45 PM",
          "url": "/images/RVR118/WhatsApp Image 2025-06-03 at 11.15.45 PM.webp"
        }
      ]
    },
    {
      "id": "RVR127",
      "address": "Rehab",
      "area": 0,
      "description": "\u0645\u062f\u062f \u0637\u0648\u064a\u0644\u0629",
      "model": "",
      "bathrooms": 0,
      "bedrooms": 0,
      "agent_name": "\u0637\u0627\u0631\u0642 \u0645\u0633\u0639\u062f",
      "price": 75000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634 \u0645\u0645\u064a\u0632\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0645\u062f\u064a\u0646\u0647 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0642\u0627\u0647\u0631\u0647 new cairo el rehab city",
      "agent_phone": "1140585858",
      "type": "Furnitured",
      "contact": "Direct",
      "state": "Availabile",
      "amenities": [],
      "availability_date": "",
      "rating": 3.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (1)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (1).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (10)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (10).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (11)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (11).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (12)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (12).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (13)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (13).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (14)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (14).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (15)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (15).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (16)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (16).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (17)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (17).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (18)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (18).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (19)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (19).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (2)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (2).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (20)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (20).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (21)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (21).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (22)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (22).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (23)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (23).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (24)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (24).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (25)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (25).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (26)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (26).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (3)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (3).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (4)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (4).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (5)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (5).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (6)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (6).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (7)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (7).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (8)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (8).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM (9)",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM (9).webp"
        },
        {
          "alt": "Apartment RVR127 - WhatsApp Image 2025-05-04 at 10.08.24 PM",
          "url": "/images/RVR127/WhatsApp Image 2025-05-04 at 10.08.24 PM.webp"
        }
      ]
    },
    {
      "id": "RVR132",
      "address": "Rehab",
      "area": 0,
      "description": "\u062d\u0645\u0627\u0645 \u0633\u0628\u0627\u062d\u0629\n[7:23 pm, 7/5/2025] Abdelrahman Ayman: * 5 \u0627\u0648\u0636 \u0646\u0648\u0645 \u0628\u0645\u0627 \u0641\u064a\u0647\u0645 \u0627\u0648\u0636\u0647 \u0641\u064a \u0627\u0644\u0628\u064a\u0632\u0645\u0646\u062a + 1 \u0635\u063a\u064a\u0631\u0647.\n* 5 \u062a\u0648\u064a\u0644\u062a \u062c\u0648\u0627 \u0627\u0644\u0641\u064a\u0644\u0627 + \u062a\u0648\u064a\u0644\u062a \u0628\u0631\u0627 \u0627\u0644\u0641\u064a\u0644\u0627 \u0644\u062e\u062f\u0645\u0647 \u0627\u0644 pool , \u0628\u0627\u0644\u0627\u0636\u0627\u0641\u0647 \u0644\u0634\u0627\u0648\u0631 \u0631\u0648\u0648\u0645 \u062e\u0627\u0631\u062c \u0627\u0644\u0641\u064a\u0644\u0627 \u0644\u0644 pool.\n* \u0631\u0633\u0628\u0634\u0646 4 \u0642\u0637\u0639.\n* 2 \u0645\u0637\u0628\u062e \u0645\u0646\u0647\u0645 \u0648\u0627\u062d\u062f American kitchen \u0645\u0641\u062a\u0648\u062d \u0639\u0644\u064a \u0644\u064a\u0641\u0646\u062c \u0643\u0628\u064a\u0631\u0647 .\n* 2 \u0644\u064a\u0641\u0646\u062c \u0631\u0648\u0648\u0645 .\n[7:23 pm, 7/5/2025] Abdelrahman Ayman: \u0644\u0627 \u062d\u0636\u0631\u062a\u0643 \u0627\u062d\u0646\u0627 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 \u0645\u0634 \u0645\u062f\u064a\u0646\u062a\u064a .\n\u0627\u0644\u0631\u062d\u0627\u0628- \u0641\u064a\u0644\u0627 30 \u0645\u062c\u0645\u0648\u0639\u0647 4 \u0634\u0627\u0631\u0639 \u0623\u062d\u0645\u062f \u0631\u0627\u0645",
      "model": "",
      "bathrooms": 0,
      "bedrooms": 0,
      "agent_name": "\u0623 \u0645\u0631\u0648\u0629",
      "price": 170000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634 \u0645\u0645\u064a\u0632\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0645\u062f\u064a\u0646\u0647 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0642\u0627\u0647\u0631\u0647 new cairo el rehab city",
      "agent_phone": "1009989700",
      "type": "Furnitured",
      "contact": "Direct",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 3.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (1)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (1).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (10)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (10).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (11)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (11).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (12)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (12).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (13)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (13).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (14)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (14).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (15)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (15).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (16)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (16).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (17)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (17).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (18)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (18).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (19)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (19).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (2)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (2).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (20)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (20).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (21)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (21).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (22)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (22).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (23)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (23).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (24)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (24).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (25)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (25).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (26)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (26).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (27)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (27).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (28)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (28).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (29)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (29).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (3)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (3).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (30)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (30).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (31)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (31).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (32)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (32).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (33)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (33).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (34)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (34).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (35)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (35).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (36)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (36).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (37)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (37).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (38)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (38).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (39)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (39).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (4)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (4).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (40)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (40).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (41)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (41).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (42)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (42).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (43)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (43).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (44)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (44).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (45)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (45).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (46)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (46).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (47)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (47).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (48)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (48).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (5)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (5).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (6)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (6).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (7)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (7).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (8)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (8).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM (9)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM (9).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.18 PM",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.18 PM.webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.19 PM (1)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.19 PM (1).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.19 PM (2)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.19 PM (2).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.19 PM (3)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.19 PM (3).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.19 PM (4)",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.19 PM (4).webp"
        },
        {
          "alt": "Apartment RVR132 - WhatsApp Image 2025-05-07 at 7.23.19 PM",
          "url": "/images/RVR132/WhatsApp Image 2025-05-07 at 7.23.19 PM.webp"
        }
      ]
    },
    {
      "id": "RVR134",
      "address": "Rehab",
      "area": 260.0,
      "description": "\u0634\u0627\u0631\u0639 \u0628\u064a\u0631\u0645 \u0627\u0644\u062a\u0648\u0646\u0633\u064a \n[6:14 pm, 7/5/2025] Mahmoud Waleed The City: \u0627\u0644\u0643\u0648\u062f: RVR134\n\u0627\u0644\u0645\u0646\u0637\u0642\u0647: \u0627\u0644\u0631\u062d\u0627\u0628\n\u0646\u0645\u0648\u0630\u062c: B\n\u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0645\u0628\u0627\u0646\u064a: 260m\n\u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0627\u0631\u0636: 220m\n\u0627\u0644\u062a\u0634\u0637\u064a\u0628\u0627\u062a: \u062e\u0627\u0635\u0629 \n\u0645\u062f\u062f \u0644\u0644\u0627\u064a\u062c\u0627\u0631: \u0645\u062f\u062f \u0642\u0635\u064a\u0631\u0629 \u0648\u0637\u0648\u064a\u0644\u0629 \n\u0627\u0644\u0633\u0639\u0631: 120,000\n[6:14 pm, 7/5/2025] Mahmoud Waleed The City: \u0627\u0644\u0628\u064a\u0627\u0646:G3/V14/2",
      "model": "b",
      "bathrooms": 0,
      "bedrooms": 0,
      "agent_name": "\u0645.\u0631\u0648\u0627\u0621",
      "price": 120000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634 \u0645\u0645\u064a\u0632\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0645\u062f\u064a\u0646\u0647 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0642\u0627\u0647\u0631\u0647 new cairo el rehab city",
      "agent_phone": "1141777751",
      "type": "Furnitured",
      "contact": "Direct",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 3.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RVR134 - WhatsApp Image 2025-05-07 at 6.14.13 PM",
          "url": "/images/RVR134/WhatsApp Image 2025-05-07 at 6.14.13 PM.webp"
        },
        {
          "alt": "Apartment RVR134 - WhatsApp Image 2025-05-07 at 6.14.14 PM",
          "url": "/images/RVR134/WhatsApp Image 2025-05-07 at 6.14.14 PM.webp"
        },
        {
          "alt": "Apartment RVR134 - WhatsApp Image 2025-05-07 at 6.14.15 PM (1)",
          "url": "/images/RVR134/WhatsApp Image 2025-05-07 at 6.14.15 PM (1).webp"
        },
        {
          "alt": "Apartment RVR134 - WhatsApp Image 2025-05-07 at 6.14.15 PM",
          "url": "/images/RVR134/WhatsApp Image 2025-05-07 at 6.14.15 PM.webp"
        },
        {
          "alt": "Apartment RVR134 - WhatsApp Image 2025-05-07 at 6.14.16 PM (1)",
          "url": "/images/RVR134/WhatsApp Image 2025-05-07 at 6.14.16 PM (1).webp"
        },
        {
          "alt": "Apartment RVR134 - WhatsApp Image 2025-05-07 at 6.14.16 PM (2)",
          "url": "/images/RVR134/WhatsApp Image 2025-05-07 at 6.14.16 PM (2).webp"
        },
        {
          "alt": "Apartment RVR134 - WhatsApp Image 2025-05-07 at 6.14.16 PM",
          "url": "/images/RVR134/WhatsApp Image 2025-05-07 at 6.14.16 PM.webp"
        },
        {
          "alt": "Apartment RVR134 - WhatsApp Image 2025-05-07 at 6.14.17 PM (1)",
          "url": "/images/RVR134/WhatsApp Image 2025-05-07 at 6.14.17 PM (1).webp"
        },
        {
          "alt": "Apartment RVR134 - WhatsApp Image 2025-05-07 at 6.14.17 PM (2)",
          "url": "/images/RVR134/WhatsApp Image 2025-05-07 at 6.14.17 PM (2).webp"
        },
        {
          "alt": "Apartment RVR134 - WhatsApp Image 2025-05-07 at 6.14.17 PM",
          "url": "/images/RVR134/WhatsApp Image 2025-05-07 at 6.14.17 PM.webp"
        }
      ]
    },
    {
      "id": "RVR136",
      "address": "Rehab",
      "area": 0,
      "description": "\u0623\u062c\u0627\u0646\u0628 \u0641\u0642\u0637 \u0645\u062f\u062f \u0637\u0648\u064a\u0644\u0629 \u0645\u0637\u0644\u0648\u0628 \u0634\u0647\u0631\u064a\u0646 \u062a\u0623\u0645\u064a\u0646",
      "model": "",
      "bathrooms": 0,
      "bedrooms": 0,
      "agent_name": "\u0639\u0644\u064a",
      "price": 110000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634 \u0645\u0645\u064a\u0632\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0645\u062f\u064a\u0646\u0647 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0642\u0627\u0647\u0631\u0647 new cairo el rehab city",
      "agent_phone": "1146621577",
      "type": "Furnitured",
      "contact": "Direct",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 3.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (1)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (1).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (10)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (10).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (11)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (11).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (12)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (12).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (13)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (13).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (14)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (14).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (15)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (15).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (16)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (16).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (17)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (17).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (18)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (18).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (19)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (19).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (2)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (2).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (20)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (20).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (21)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (21).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (22)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (22).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (23)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (23).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (24)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (24).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (25)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (25).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (26)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (26).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (27)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (27).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (3)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (3).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (4)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (4).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (5)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (5).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (6)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (6).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (7)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (7).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (8)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (8).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM (9)",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM (9).webp"
        },
        {
          "alt": "Apartment RVR136 - WhatsApp Image 2025-05-07 at 7.25.21 PM",
          "url": "/images/RVR136/WhatsApp Image 2025-05-07 at 7.25.21 PM.webp"
        }
      ]
    },
    {
      "id": "RVR137",
      "address": "Rehab",
      "area": 210.0,
      "description": "\u0627\u0644\u06a4\u064a\u0644\u0627\u062a \u0627\u0644\u0644\u064a \u0639\u0644\u0649 \u0633\u0648\u0631 \u0645\u062d\u0648\u0631 \u0645\u062d\u0645\u062f \u0646\u062c\u064a\u0628\n\u0641\u064a\u0644\u0627 \u0625\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0644\u0631\u062d\u0627\u0628 - \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u0623\u0648\u0644 \u0642\u0631\u064a\u0628\u0647 \u0645\u0646 \u0628\u0648\u0627\u0628\u0647 12 \u0648 \u0645\u0648\u0644 \u062c\u064a\u062a \u0648\u0627\u064a \u0648 \u0645\u0648\u0644 2 \u0648 \u0627\u0644\u0641\u0648\u062f \u0643\u0648\u0631\u062a \n\u0648 \u0645\u0646 \u062e\u0627\u0631\u062c \u0627\u0644\u0631\u062d\u0627\u0628 \u0639\u0644\u064a \u0628\u0639\u062f \u062f\u0642\u0627\u0626\u0642 \u0645\u0646 \u0645\u0648\u0644 \u062c\u0627\u0631\u062f\u0646 8 \u0648 \u0648\u0627\u062a\u0631\u0648\u0627\u064a 1 \u0648 O1 \n\u0648 mar V \u0648 \u063a\u064a\u0631\u0647\u0645 \u0645\u0646 \u0627\u0644\u0645\u0648\u0644\u0627\u062a \n\u0645\u0633\u0627\u062d\u0647 \u0627\u0631\u0636 250\n\u0645\u0628\u0627\u0646\u064a 210 \u0645\u0643\u0648\u0646\u0647 \u0645\u0646 3 \u063a\u0631\u0641 \u0646\u0648\u0645 \u0645\u0646\u0647\u0645 \u0648\u0627\u062d\u062f\u0647 \u0645\u0627\u0633\u062a\u0631 \u0648 \u063a\u0631\u0641\u0647 \u0639\u0644\u064a \u0627\u0644\u0631\u0648\u0641 \n\u0648 3 \u062d\u0645\u0627\u0645 \n\u0648 \u0627\u0644\u0641\u064a\u0644\u0627 \u063a\u064a\u0631 \u0645\u062c\u0631\u0648\u062d\u0647 \u0644\u0623\u0646\u0647\u0627 \u0639\u0644\u064a \u0633\u0648\u0631 \u0645\u062d\u0648\u0631 \u0645\u062d\u0645\u062f \u0646\u062c\u064a\u0628 \u0627\u0647\u0645 \u0645\u062d\u0627\u0648\u0631 \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u062e\u0627\u0645\u0633 \u0648 \u0627\u0644\u0631\u0627\u0628\u0637 \u0628\u064a\u0646 \u0627\u063a\u0644\u0628 \u0627\u0644\u0634\u0648\u0627\u0631\u0639 \u0627\u0644\u0645\u0647\u0645\u0647 \n\n\u0648 \u0628\u0647\u0627 \u0627\u062f\u0648\u0627\u062a \u0645\u0637\u0628\u062e \u062c\u062f\u064a\u062f\u0647 \u0648 \u0627\u062c\u0647\u0632\u0647 \u062c\u062f\u064a\u062f\u0647 \u0648 \u0645\u0643\u064a\u0641\u0647 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0648 \u0628\u0647\u0627 \u0641\u0644\u062a\u0631 \u0645\u064a\u0627\u0647 7 \u0645\u0631\u0627\u062d\u0644 \u0648 \u0646\u062a\n\n\u0627\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0634\u0647\u0631\u064a 80 \u0627\u0644\u0641",
      "model": "",
      "bathrooms": 0,
      "bedrooms": 0,
      "agent_name": "\u0645\u062d\u0645\u062f \u0639\u0642\u0644",
      "price": 80000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634 \u0645\u0645\u064a\u0632\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0645\u062f\u064a\u0646\u0647 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0642\u0627\u0647\u0631\u0647 new cairo el rehab city",
      "agent_phone": "1000803443",
      "type": "Furnitured",
      "contact": "Direct",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 3.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.30 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.30 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.30 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.30 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.31 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.31 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.34 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.34 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.35 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.35 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.35 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.35 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.36 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.36 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.37 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.37 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.45 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.45 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.55 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.55 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.55 PM (2)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.55 PM (2).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.55 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.55 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.56 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.56 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.56 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.56 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.58 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.58 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.58 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.58 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.59 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.59 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.23.59 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.23.59 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.00 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.00 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.00 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.00 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.01 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.01 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.01 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.01 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.02 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.02 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.03 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.03 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.04 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.04 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.04 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.04 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.05 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.05 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.05 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.05 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.06 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.06 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.07 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.07 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.07 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.07 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.08 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.08 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.08 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.08 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.09 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.09 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.09 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.09 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.10 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.10 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.11 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.11 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.11 PM (2)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.11 PM (2).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.11 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.11 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.12 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.12 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.12 PM (2)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.12 PM (2).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.12 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.12 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.13 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.13 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.13 PM (2)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.13 PM (2).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.13 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.13 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.14 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.14 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.14 PM (2)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.14 PM (2).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.14 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.14 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.15 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.15 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.15 PM (2)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.15 PM (2).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.15 PM (3)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.15 PM (3).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.15 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.15 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.16 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.16 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.16 PM (2)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.16 PM (2).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.16 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.16 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.17 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.17 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.17 PM (2)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.17 PM (2).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.17 PM (3)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.17 PM (3).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.17 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.17 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.18 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.18 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.18 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.18 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.19 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.19 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.19 PM (2)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.19 PM (2).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.19 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.19 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.20 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.20 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.20 PM (2)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.20 PM (2).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.20 PM (3)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.20 PM (3).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.20 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.20 PM.webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.21 PM (1)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.21 PM (1).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.21 PM (2)",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.21 PM (2).webp"
        },
        {
          "alt": "Apartment RVR137 - WhatsApp Image 2025-05-07 at 6.24.21 PM",
          "url": "/images/RVR137/WhatsApp Image 2025-05-07 at 6.24.21 PM.webp"
        }
      ]
    },
    {
      "id": "RVR138",
      "address": "Rehab",
      "area": 0,
      "description": "\u0645\u062f\u062f \u0637\u0648\u064a\u0644\u0629",
      "model": "",
      "bathrooms": 0,
      "bedrooms": 0,
      "agent_name": "\u0623\u0645\u0644 \u0639\u0627\u0634\u0648\u0631",
      "price": 100000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0645\u0641\u0631\u0648\u0634 \u0645\u0645\u064a\u0632\u0647 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0641\u064a \u0645\u062f\u064a\u0646\u0647 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0642\u0627\u0647\u0631\u0647 new cairo el rehab city",
      "agent_phone": "1097966660",
      "type": "Furnitured",
      "contact": "Direct",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 3.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.30 PM (1)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.30 PM (1).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.30 PM (2)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.30 PM (2).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.30 PM",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.30 PM.webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.31 PM (1)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.31 PM (1).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.31 PM (2)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.31 PM (2).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.31 PM (3)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.31 PM (3).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.31 PM",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.31 PM.webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.32 PM (1)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.32 PM (1).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.32 PM (2)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.32 PM (2).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.32 PM",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.32 PM.webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.33 PM (1)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.33 PM (1).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.33 PM (2)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.33 PM (2).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.33 PM",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.33 PM.webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.34 PM (1)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.34 PM (1).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.34 PM (2)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.34 PM (2).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.34 PM (3)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.34 PM (3).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.34 PM",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.34 PM.webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.35 PM (1)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.35 PM (1).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.35 PM (2)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.35 PM (2).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.35 PM (3)",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.35 PM (3).webp"
        },
        {
          "alt": "Apartment RVR138 - WhatsApp Image 2025-06-04 at 3.10.35 PM",
          "url": "/images/RVR138/WhatsApp Image 2025-06-04 at 3.10.35 PM.webp"
        }
      ]
    },
    {
      "id": "RVR140",
      "address": "Rehab",
      "area": 180.0,
      "description": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0628\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u0646\u0645\u0648\u0630\u062c B \u0642\u0631\u064a\u0628\u0629 \u0645\u0646 \u0645\u0648\u0644 1 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0627\u0631\u0636 198\u0645\u062a\u0631 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u0628\u0627\u0646\u064a 180\u0645\u062a\u0631 \u062a\u062a\u0643\u0648\u0646 \u0645\u0646 \u0627\u0644\u0627\u0631\u0636\u064a \u0631\u064a\u0633\u0628\u0634\u0646 - \u0645\u0637\u0628\u062e - \u062d\u0645\u0627\u0645 \u0627\u0644\u0627\u0648\u0644 3 \u063a\u0631\u0641 \u0646\u0648\u0645 - 2 \u062d\u0645\u0627\u0645 - - \u063a\u0631\u0641\u0629 \u0645\u0639\u064a\u0634\u0629 - \u0628\u0644\u0643\u0648\u0646\u0629 \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0629 (\u062a\u0634\u0637\u064a\u0628 \u0627\u0644\u0645\u0627\u0644\u0643 ) \u0645\u062c\u0647\u0632\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u0648 \u0627\u0644\u0627\u0633\u062a\u0639\u0644\u0627\u0645 01120000352 01033704781",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 3.0,
      "bedrooms": 3.0,
      "agent_name": "",
      "price": 90000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0645\u0641\u0631\u0648\u0634 \u0628\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628 \u0646\u0645\u0648\u0630\u062c B",
      "agent_phone": "1120000352",
      "type": "Furnitured",
      "contact": "Direct",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.45 PM (1)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.45 PM (1).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.45 PM",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.45 PM.webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.46 PM (1)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.46 PM (1).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.46 PM (2)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.46 PM (2).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.46 PM",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.46 PM.webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.47 PM (1)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.47 PM (1).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.47 PM (2)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.47 PM (2).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.47 PM (3)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.47 PM (3).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.47 PM",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.47 PM.webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.48 PM (1)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.48 PM (1).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.48 PM (2)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.48 PM (2).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.48 PM",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.48 PM.webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.49 PM (1)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.49 PM (1).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.49 PM (2)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.49 PM (2).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.49 PM",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.49 PM.webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.50 PM (1)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.50 PM (1).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.50 PM (2)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.50 PM (2).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.50 PM",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.50 PM.webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.51 PM (1)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.51 PM (1).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.51 PM (2)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.51 PM (2).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.51 PM (3)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.51 PM (3).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.51 PM",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.51 PM.webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.52 PM (1)",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.52 PM (1).webp"
        },
        {
          "alt": "Apartment RVR140 - WhatsApp Image 2025-06-04 at 3.30.52 PM",
          "url": "/images/RVR140/WhatsApp Image 2025-06-04 at 3.30.52 PM.webp"
        }
      ]
    },
    {
      "id": "RVR141",
      "address": "Rehab",
      "area": 229.0,
      "description": "\u0628\u0627\u0644\u0631\u062d\u0627\u0628 \u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0627\u0644\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u0645\u0645\u064a\u0632 \u062c\u062f\u0627 \u0631\u062d\u0627\u0628 1 \u062a\u0634\u0637\u064a\u0628 \u062e\u0627\u0635 \u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0623\u0631\u0636: 200 \u0645\u0633\u0627\u062d\u0647 \u0627\u0644\u0645\u0628\u0627\u0646\u064a : 230\u0645 \u062a\u062a\u0643\u0648\u0646 \u0645\u0646 (3\u063a\u0631\u0641 \u0646\u0648\u0645. . . 3\u0645\u0646\u0647\u0645 \u0645\u0627\u0633\u062a\u0631 ) \u062a\u0634\u0637\u064a\u0628\u0627\u062a \u062e\u0627\u0635\u0647 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0648\u0643\u064a\u0634\u0646 \u0645\u0645\u064a\u0632 \u062e\u0637\u0648\u0627\u062a \u0644\u0644\u062e\u062f\u0645\u0627\u062a \u062e\u0637\u0648\u0627\u062a \u0644\u0645\u0648\u0644 2 - \u062e\u0637\u0648\u0627\u062a \u0644\u0645\u0648\u0644 \u062c\u064a\u062a \u0648\u0627\u0649 - \u062e\u0637\u0648\u0627\u062a \u0644\u0645\u0633\u062c\u062f \u0627\u0644\u0627\u062d\u0645\u0631 - \u062e\u0637\u0648\u0627\u062a \u0644\u0645\u062f\u0631\u0633\u0647 \u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0647 \u0628\u0633\u0639\u0631 \u0645\u0645\u064a\u0632 \u062c\u062f\u0627 ===================== \u0644\u0645\u0639\u0631\u0641\u0629 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0643\u062a\u0631 \u0639\u0646 \u0627\u0644\u0648\u062d\u062f\u0629 \u0627\u0648 \u0645\u0633\u0627\u062d\u0627\u062a \u0645\u062e\u062a\u0644\u0641\u0629 \u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0639\u0644\u0649 \u0631\u0642\u0645: rana gamal 01124322099",
      "model": "\u0641\u064a\u0644\u0627 \u0645\u0646\u0641\u0635\u0644\u0629",
      "bathrooms": 3.0,
      "bedrooms": 3.0,
      "agent_name": "",
      "price": 65000.0,
      "title": "\u0641\u064a\u0644\u0627 \u0644\u0644\u0627\u064a\u062c\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0648\u0634 \u0641\u064a \u0627\u0645\u064a\u0632 \u0645\u0631\u062d\u0644 \u0627\u0644\u0631\u062d\u0627\u0628 \u0627\u0644\u0645\u0631\u062d\u0644\u0647 \u0627\u0644\u062b\u0627\u0646\u064a\u0647 \u0628\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u062d\u0627\u0628",
      "agent_phone": "1124322099",
      "type": "Furnitured",
      "contact": "Direct",
      "state": "",
      "amenities": [],
      "availability_date": "",
      "rating": 4.0,
      "is_premium": false,
      "images": [
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.01 PM (1)",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.01 PM (1).webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.01 PM (2)",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.01 PM (2).webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.01 PM (3)",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.01 PM (3).webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.01 PM",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.01 PM.webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.02 PM (1)",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.02 PM (1).webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.02 PM (2)",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.02 PM (2).webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.02 PM",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.02 PM.webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.03 PM (1)",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.03 PM (1).webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.03 PM (2)",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.03 PM (2).webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.03 PM",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.03 PM.webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.04 PM (1)",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.04 PM (1).webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.04 PM (2)",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.04 PM (2).webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.04 PM (3)",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.04 PM (3).webp"
        },
        {
          "alt": "Apartment RVR141 - WhatsApp Image 2025-05-07 at 6.32.04 PM",
          "url": "/images/RVR141/WhatsApp Image 2025-05-07 at 6.32.04 PM.webp"
        }
      ]
    }
  ];

export const filterOptions = {
  types: ['Apartment', 'Loft', 'Studio', 'Penthouse', 'Townhouse', 'Condo', 'House'],
  amenities: [
    'Parking', 'Balcony', 'Pet Friendly', 'In-unit Laundry', 'Gym', 
    'Garden Access', 'Quiet Neighborhood', 'Bike Storage', 'Shared Laundry', 
    'Utilities Included', 'Private Elevator', 'Panoramic Views', 'Pool', 
    'Concierge', 'Smart Home', 'Garage', 'Patio', 'Fireplace', 'Hardwood Floors'
  ],
  bedrooms: [0, 1, 2, 3, 4, 5], // 0 for studio
  bathrooms: [1, 1.5, 2, 2.5, 3, 3.5, 4],
};
