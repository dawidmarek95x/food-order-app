interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const DUMMY_MEALS: Meal[] = [
  {
    id: 'm1',
    name: 'Dumplings with fried onion',
    description: 'Cake filled with cottage cheese and potato mass.',
    price: 14.9,
  },
  {
    id: 'm2',
    name: 'Pork chop with potatoes and fried cabbage',
    description: 'Traditional Polish dinner dish!',
    price: 20.5,
  },
  {
    id: 'm3',
    name: 'Mushroom soup',
    description: 'Soup based on meat and vegetable broth with mushrooms.',
    price: 8.9,
  },
  {
    id: 'm4',
    name: 'Greek salad',
    description:
      'Iceberg lettuce, tomato, cucumber, peppers, olives, and feta cheese in vinaigrette sauce.',
    price: 17.5,
  },
];
