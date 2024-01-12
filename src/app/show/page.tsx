import { H1 } from '@/components/typography/Typography';
import { supabase } from '@/lib/supabaseFn';
import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { EmaFormType } from '../home/_components/types/EmaFormType';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/ui/carousel';

/**
 * Homeページ
 */
const HomePage: NextPage = () => {
  //   const [api, setApi] = useState<CarouselApi>();
  const [_emaList, setEmaList] = useState<EmaFormType[]>([]);

  supabase
    .channel('aspirationTable')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'aspirationTable',
      },
      (payload) => {
        const newValue = payload.new as EmaFormType;
        setEmaList((prev) => [...prev, newValue]);
      }
    )
    .subscribe();

  return (
    <>
      <div className="flex justify-center bg-primary h-1/6 items-center">
        <H1 isCenter color="white" className=" text-7xl">
          Matsuriba神社🏮
        </H1>
      </div>
      <div className="flex justify-center items-center h-5/6 bg-secondary">
        <Image
          src="/zinzya.png"
          width={500}
          height={500}
          alt="神社"
          style={{
            width: '60vw',
          }}
        />
      </div>
      <div>
        {/* <Carousel setApi={setApi}>
          <CarouselContent>
            {emaList.map((item) => {
              return (
                <CarouselItem key={`${item.aspiration}+${item.name}`}>
                  {item.aspiration}
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel> */}
      </div>
    </>
  );
};

export default HomePage;
