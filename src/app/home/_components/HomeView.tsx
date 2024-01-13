import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@/components/ui/button';
import { H2, H3 } from '@/components/typography/Typography';
import { EmaFormType } from './types/EmaFormType';

type Props = {
  isComplete: boolean;
  value: EmaFormType;
  isFinishedInput: boolean;
  onDrawerOpen: () => void;
};

/**
 * Homeページ/view
 */
const HomeView: FC<Props> = ({
  isComplete,
  value: { aspiration, name },
  isFinishedInput,
  onDrawerOpen,
}) => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isFinishedInput || isComplete) return;
      setTop((prevTop) => (prevTop === 0 ? 12 : 0));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ height: '50vh', opacity: isFinishedInput ? 0 : 1 }}>
        <div style={{ marginTop: '-30px', paddingBottom: '30px' }}>
          <Image
            src="/ema.png"
            width={500}
            height={500}
            alt="絵馬"
            priority
            style={{ pointerEvents: 'none' }}
          />
          <div>
            <Textarea
              value={aspiration}
              className="text-center border-none text-xl font-bold px-12"
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
            value={name}
            readOnly
            className="text-end border-none text-base font-bold px-12"
            style={{
              marginTop: '-8px',
              minHeight: '1.5em',
              backgroundColor: 'transparent',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
      {!isFinishedInput ? (
        <div className="pt-8 space-y-4">
          <H2 isCenter className="text-white pb-2">
            Matsuribaデジタル絵馬🎍
          </H2>
          <div className="flex justify-center items-center">
            <Button
              onClick={onDrawerOpen}
              size="lg"
              variant="secondary"
              className="w-screen mx-8 bg-white space-x-1 border-none"
            >
              <p>Webで奉納</p>
              <EditIcon fontSize="small" />
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <Button
              disabled
              size="lg"
              variant="secondary"
              className="w-screen mx-8 bg-white space-x-1 border-none"
            >
              <p>APIで奉納</p>
              <SearchIcon fontSize="small" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          className="space-y-3 mt-16"
          style={{
            transition: 'padding-top 1s ease-in-out, opacity 1s ease-in-out',
            paddingTop: isComplete ? 0 : top,
            opacity: isComplete ? 0 : 1,
          }}
        >
          <div className="flex justify-center">
            <DoubleArrowIcon
              style={{
                rotate: '270deg',
                fontSize: 60,
                color: 'white',
              }}
            />
          </div>
          <div>
            <H3 isCenter color="white">
              スワイプして絵馬を奉納
            </H3>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeView;
