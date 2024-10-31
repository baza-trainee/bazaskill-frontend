'use client';
import Slider from "@/components/shared/slider/Slider";

export default function HistoryJuniors(): JSX.Element {

const data:string[] =["slid-1","slid-2","slid-3","slid-4","slid-5"]

const p =({data}:any): JSX.Element=>{
  return <p className="h-32">{data}</p>
}

  return (
    <section className="container py-[100px]">
      <h2>Історії джунів</h2>
      <Slider data={data} Component={p}/>

    </section>
  )
}