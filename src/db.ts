// Emulated data base
interface Me {
  name: string;
  lastname: string;
  age: number;
  country: string;
  province: string;
  family: Array<string>;
}

const me: Me = {
  name: 'Franco',
  lastname: 'Sánchez',
  age: 23,
  country: 'Argentina',
  province: 'Córdoba',
  family: ['A', 'B', 'C'],
};

export default me;
