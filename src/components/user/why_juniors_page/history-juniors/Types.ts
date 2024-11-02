export interface Item{
  id: string;
  img: string;
  name: string;
  role: string;
  date: string;
  description: string;
}

export interface PropsJuniorCard {
  data: Item;
}