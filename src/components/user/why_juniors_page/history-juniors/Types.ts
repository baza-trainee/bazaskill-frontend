export interface Item{
  id: string;
  img: string;
  name: string;
  role: string;
  date: string | number | Date;
  description: string;
}

export interface PropsJuniorCard {
  data: Item;
}