import { calculateShippingCost } from 'services/boxService';

export const mockBoxes = [
  {
    id: 1,
    receiverName: 'John Smith',
    weight: 2.5,
    boxColour: '255, 0, 0',
    destinationCountry: 'sweden',
    shippingCost: calculateShippingCost(2.5, 'sweden')
  },
  {
    id: 2,
    receiverName: 'Emma Johnson',
    weight: 1.8,
    boxColour: '0, 255, 0',
    destinationCountry: 'china',
    shippingCost: calculateShippingCost(1.8, 'china')
  },
  {
    id: 3,
    receiverName: 'Michael Brown',
    weight: 3.2,
    boxColour: '0, 0, 255',
    destinationCountry: 'brazil',
    shippingCost: calculateShippingCost(3.2, 'brazil')
  },
  {
    id: 4,
    receiverName: 'Sarah Davis',
    weight: 1.5,
    boxColour: '255, 255, 0',
    destinationCountry: 'australia',
    shippingCost: calculateShippingCost(1.5, 'australia')
  },
  {
    id: 5,
    receiverName: 'David Wilson',
    weight: 4.0,
    boxColour: '255, 0, 255',
    destinationCountry: 'sweden',
    shippingCost: calculateShippingCost(4.0, 'sweden')
  },
  {
    id: 6,
    receiverName: 'Lisa Anderson',
    weight: 2.1,
    boxColour: '0, 255, 255',
    destinationCountry: 'china',
    shippingCost: calculateShippingCost(2.1, 'china')
  },
  {
    id: 7,
    receiverName: 'Robert Taylor',
    weight: 3.7,
    boxColour: '128, 0, 128',
    destinationCountry: 'brazil',
    shippingCost: calculateShippingCost(3.7, 'brazil')
  },
  {
    id: 8,
    receiverName: 'Jennifer Martinez',
    weight: 1.2,
    boxColour: '255, 165, 0',
    destinationCountry: 'australia',
    shippingCost: calculateShippingCost(1.2, 'australia')
  },
  {
    id: 9,
    receiverName: 'William Thomas',
    weight: 2.8,
    boxColour: '0, 128, 0',
    destinationCountry: 'sweden',
    shippingCost: calculateShippingCost(2.8, 'sweden')
  },
  {
    id: 10,
    receiverName: 'Amanda Jackson',
    weight: 1.9,
    boxColour: '128, 128, 128',
    destinationCountry: 'china',
    shippingCost: calculateShippingCost(1.9, 'china')
  },
  {
    id: 11,
    receiverName: 'James White',
    weight: 3.5,
    boxColour: '255, 192, 203',
    destinationCountry: 'brazil',
    shippingCost: calculateShippingCost(3.5, 'brazil')
  },
  {
    id: 12,
    receiverName: 'Jessica Harris',
    weight: 2.3,
    boxColour: '0, 0, 128',
    destinationCountry: 'australia',
    shippingCost: calculateShippingCost(2.3, 'australia')
  },
  {
    id: 13,
    receiverName: 'Christopher Martin',
    weight: 1.6,
    boxColour: '255, 20, 147',
    destinationCountry: 'sweden',
    shippingCost: calculateShippingCost(1.6, 'sweden')
  },
  {
    id: 14,
    receiverName: 'Ashley Thompson',
    weight: 4.2,
    boxColour: '50, 205, 50',
    destinationCountry: 'china',
    shippingCost: calculateShippingCost(4.2, 'china')
  },
  {
    id: 15,
    receiverName: 'Daniel Garcia',
    weight: 2.7,
    boxColour: '139, 69, 19',
    destinationCountry: 'brazil',
    shippingCost: calculateShippingCost(2.7, 'brazil')
  },
  {
    id: 16,
    receiverName: 'Michelle Rodriguez',
    weight: 1.4,
    boxColour: '255, 140, 0',
    destinationCountry: 'australia',
    shippingCost: calculateShippingCost(1.4, 'australia')
  },
  {
    id: 17,
    receiverName: 'Matthew Lewis',
    weight: 3.9,
    boxColour: '75, 0, 130',
    destinationCountry: 'sweden',
    shippingCost: calculateShippingCost(3.9, 'sweden')
  },
  {
    id: 18,
    receiverName: 'Emily Walker',
    weight: 2.0,
    boxColour: '220, 20, 60',
    destinationCountry: 'china',
    shippingCost: calculateShippingCost(2.0, 'china')
  },
  {
    id: 19,
    receiverName: 'Andrew Hall',
    weight: 1.7,
    boxColour: '0, 191, 255',
    destinationCountry: 'brazil',
    shippingCost: calculateShippingCost(1.7, 'brazil')
  },
  {
    id: 20,
    receiverName: 'Stephanie Allen',
    weight: 3.1,
    boxColour: '255, 215, 0',
    destinationCountry: 'australia',
    shippingCost: calculateShippingCost(3.1, 'australia')
  },
  {
    id: 21,
    receiverName: 'Joshua Young',
    weight: 2.4,
    boxColour: '34, 139, 34',
    destinationCountry: 'sweden',
    shippingCost: calculateShippingCost(2.4, 'sweden')
  },
  {
    id: 22,
    receiverName: 'Nicole King',
    weight: 1.3,
    boxColour: '186, 85, 211',
    destinationCountry: 'china',
    shippingCost: calculateShippingCost(1.3, 'china')
  },
  {
    id: 23,
    receiverName: 'Ryan Wright',
    weight: 4.5,
    boxColour: '255, 69, 0',
    destinationCountry: 'brazil',
    shippingCost: calculateShippingCost(4.5, 'brazil')
  },
  {
    id: 24,
    receiverName: 'Lauren Scott',
    weight: 2.6,
    boxColour: '0, 206, 209',
    destinationCountry: 'australia',
    shippingCost: calculateShippingCost(2.6, 'australia')
  },
  {
    id: 25,
    receiverName: 'Brandon Green',
    weight: 1.8,
    boxColour: '255, 105, 180',
    destinationCountry: 'sweden',
    shippingCost: calculateShippingCost(1.8, 'sweden')
  },
  {
    id: 26,
    receiverName: 'Rachel Adams',
    weight: 3.3,
    boxColour: '144, 238, 144',
    destinationCountry: 'china',
    shippingCost: calculateShippingCost(3.3, 'china')
  },
  {
    id: 27,
    receiverName: 'Kevin Baker',
    weight: 2.2,
    boxColour: '255, 160, 122',
    destinationCountry: 'brazil',
    shippingCost: calculateShippingCost(2.2, 'brazil')
  },
  {
    id: 28,
    receiverName: 'Samantha Nelson',
    weight: 1.1,
    boxColour: '176, 196, 222',
    destinationCountry: 'australia',
    shippingCost: calculateShippingCost(1.1, 'australia')
  },
  {
    id: 29,
    receiverName: 'Justin Carter',
    weight: 4.8,
    boxColour: '255, 182, 193',
    destinationCountry: 'sweden',
    shippingCost: calculateShippingCost(4.8, 'sweden')
  },
  {
    id: 30,
    receiverName: 'Megan Mitchell',
    weight: 2.9,
    boxColour: '152, 251, 152',
    destinationCountry: 'china',
    shippingCost: calculateShippingCost(2.9, 'china')
  },
  {
    id: 31,
    receiverName: 'Tyler Perez',
    weight: 3.6,
    boxColour: '255, 20, 147',
    destinationCountry: 'brazil',
    shippingCost: calculateShippingCost(3.6, 'brazil')
  },
  {
    id: 32,
    receiverName: 'Olivia Roberts',
    weight: 1.5,
    boxColour: '70, 130, 180',
    destinationCountry: 'australia',
    shippingCost: calculateShippingCost(1.5, 'australia')
  },
  {
    id: 33,
    receiverName: 'Jacob Turner',
    weight: 2.7,
    boxColour: '255, 99, 71',
    destinationCountry: 'sweden',
    shippingCost: calculateShippingCost(2.7, 'sweden')
  },
  {
    id: 34,
    receiverName: 'Isabella Phillips',
    weight: 1.9,
    boxColour: '147, 112, 219',
    destinationCountry: 'china',
    shippingCost: calculateShippingCost(1.9, 'china')
  },
  {
    id: 35,
    receiverName: 'Nathan Campbell',
    weight: 4.1,
    boxColour: '60, 179, 113',
    destinationCountry: 'brazil',
    shippingCost: calculateShippingCost(4.1, 'brazil')
  }
];
