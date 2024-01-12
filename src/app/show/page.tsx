'use client';

import { H1 } from '@/components/typography/Typography';
import { supabase } from '@/lib/supabaseFn';
import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Styles from './page.module.css';
import { EmaFormType } from '../home/_components/types/EmaFormType';

/**
 * Homeページ
 */
const HomePage: NextPage = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
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
      <div className="flex justify-center items-center h-5/6 bg-secondary relative">
        <Image
          src="/zinzya.png"
          width={500}
          height={500}
          alt="神社"
          style={{
            width: '60vw',
          }}
        />
        <div className={`h-full absolute w-full grid place-items-center ${Styles.embla}`}>
          <div ref={emblaRef} className={Styles.embla__viewport}>
            <div className={Styles.embla__container}>
              {_emaList.map((item) => {
                return (
                  <div key={`${item.aspiration}+${item.name}`} className={Styles.embla__slide}>
                    <div
                      style={{ marginTop: '-30px', paddingBottom: '30px' }}
                      className={Styles.card}
                    >
                      <Image
                        src="/ema.png"
                        width={500}
                        height={500}
                        alt="絵馬"
                        priority
                        style={{ pointerEvents: 'none' }}
                        className={Styles.image}
                      />
                      <div>
                        <Textarea
                          value={item.aspiration}
                          className="text-center border-none text-xl font-bold px-12 resize-none"
                          placeholder="2024年の抱負"
                          readOnly
                          rows={2}
                          style={{
                            marginTop: '-130px',
                            minHeight: '4.5em',
                            backgroundColor: 'transparent',
                            pointerEvents: 'none',
                          }}
                        />
                      </div>
                      <Textarea
                        value={item.name}
                        readOnly
                        className="text-end border-none text-base font-bold px-12 resize-none"
                        style={{
                          marginTop: '-8px',
                          minHeight: '1.5em',
                          backgroundColor: 'transparent',
                          pointerEvents: 'none',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
