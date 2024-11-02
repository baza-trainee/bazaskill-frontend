'use client';
import Slider from "@/components/shared/slider/Slider";
import JuniorCard from "./junior_card/JuniorCard";

export default function HistoryJuniors(): JSX.Element {

  interface Item{
    id: string;
    img: string;
    name: string;
    role: string;
    date: string;
    description: string;
  }

  // травень, 2023
  const ItemsData: Item[] = [
    {
      id:'100001',
      img:'/history-juniors/avatar.jpg',
      name:'Ірина',
      role: 'учасниця, QA',
      date: '1730457278762',
      description: 'Lorem ipsum dolor sit amet consectetur. Pharetra blandit rutrum sed tellus molestie facilisis malesuada vel nec. Consequat pulvinar nunc lacus nunc pharetra etiam. Rhoncus dui sit pretium pretium a. Malesuada morbi amet urna bibendum tortor sociis vitae habitant orci.Lorem ipsum dolor sit amet consectetur. Pharetra blandit rutrum sed tellus molestie facilisis malesuada vel nec. Consequat pulvinar nunc lacus nunc pharetra etiam. Rhoncus dui sit pretium pretium a.'
    },
    {
      id:'100002',
      img:'/history-juniors/avatar.jpg',
      name:'Ірина',
      role: 'учасниця, Front end',
      date: '1730457278762',
      description: 'Lorem ipsum dolor sit amet consectetur. Pharetra blandit rutrum sed tellus molestie facilisis malesuada vel nec. Consequat pulvinar nunc lacus nunc pharetra etiam. Rhoncus dui sit pretium pretium a. Malesuada morbi amet urna bibendum tortor sociis vitae habitant orci.Lorem ipsum dolor sit amet consectetur. Pharetra blandit rutrum sed tellus molestie facilisis malesuada vel nec. Consequat pulvinar nunc lacus nunc pharetra etiam. Rhoncus dui sit pretium pretium a.'
    },
    {
      id:'100003',
      img:'/history-juniors/avatar.jpg',
      name:'Ірина',
      role: 'учасниця, QA',
      date: '1730457278762',
      description: 'Lorem ipsum dolor sit amet consectetur. Pharetra blandit rutrum sed tellus molestie facilisis malesuada vel nec. Consequat pulvinar nunc lacus nunc pharetra etiam. Rhoncus dui sit pretium pretium a. Malesuada morbi amet urna bibendum tortor sociis vitae habitant orci.Lorem ipsum dolor sit amet consectetur. Pharetra blandit rutrum sed tellus molestie facilisis malesuada vel nec. Consequat pulvinar nunc lacus nunc pharetra etiam. Rhoncus dui sit pretium pretium a.'
    },
    {
      id:'100004',
      img:'/history-juniors/avatar.jpg',
      name:'Ірина',
      role: 'учасниця, QA',
      date: '1730457278762',
      description: 'Lorem ipsum dolor sit amet consectetur. Pharetra blandit rutrum sed tellus molestie facilisis malesuada vel nec. Consequat pulvinar nunc lacus nunc pharetra etiam. Rhoncus dui sit pretium pretium a. Malesuada morbi amet urna bibendum tortor sociis vitae habitant orci.Lorem ipsum dolor sit amet consectetur. Pharetra blandit rutrum sed tellus molestie facilisis malesuada vel nec. Consequat pulvinar nunc lacus nunc pharetra etiam. Rhoncus dui sit pretium pretium a.'
    },
  ]


  return (
    <section className="container py-[100px]">
      <Slider data={ItemsData} Component={JuniorCard} title="Історії джунів"/>
    </section>
  )
}