// Emulated data base
interface Fruits {
  Fruits: Array<any>;
}

interface Countries {
  Countries: Array<any>;
}

const fruits: Fruits = {
  Fruits: [
    {
      id: 1,
      fruit: 'Banana',
      climate: 'Damp',
    },
    {
      id: 2,
      fruit: 'Apple',
      climate: 'Cold',
    },
    {
      id: 3,
      fruit: 'Lemon',
      climate: 'Semi Tropical',
    },
  ],
};

const countries: Countries = {
  Countries: [
    {
      id: 1,
      name: 'Belgium',
    },
    {
      id: 2,
      name: 'Germany',
    },
    {
      id: 3,
      name: 'Italy',
    },
  ],
};

export { fruits, countries };
