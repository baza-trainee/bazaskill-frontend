import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { JuniorAdvantagesData } from './data'

const JuniorsAdvantages = () => {
  const t = useTranslations('Main.juniors-advantages');
  return (
    <section
      className='mt-[100px] container flex gap-2 flex-col w-full'
      aria-labelledby="advantages-title"
    >
      <h2
        id="junior`s-advantages-title"
        className="text-center mb-[66px] font-tahoma text-[24px] font-bold not-italic
         text-white md:text-2xl lg:text-[40px]">{t('title')}</h2>
      <h4 className='text-[24px] font-[700] text-center text-transparent main-gradient mb-[24px]
      bg-clip-text'>{t('subtitle')}</h4>
      <div className="flex flex-col">
        {JuniorAdvantagesData.map((item, i) => (
          <div key={i} className={`flex flex-col lg:flex-row text-white w-full gap-4 p-4 
          ${i%2!==0?'justify-center lg:justify-end':'justify-center lg:justify-start'}`}>
          <Image src={item.icon}
           alt="advantages image" 
           width={124}
            height={124}/>
           <div className="flex flex-col w-full lg:w-[516px] items-start gap-2 p-2">
            <h6 className='text-[24px] font-[700] '>{i+1}. {t(item.title)}</h6>
           <p className='text-[20px] leading-[28px] tracking-[2%] '>{t(item.text)}</p>
           </div>
        </div>
        ))}
      </div>
    </section>
  )
}

export default JuniorsAdvantages
