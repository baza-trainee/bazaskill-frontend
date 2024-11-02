export interface Item{
  id: string;
  img: string;
  name: string;
  role: string;
  date: string | number;
  description: string;
}

export interface PropsJuniorCard {
  data: Item;
}