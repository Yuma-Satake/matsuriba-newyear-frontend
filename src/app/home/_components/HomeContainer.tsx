'use client';

import { FC, TouchEvent, useEffect, useState } from 'react';
import { FormChangeEvent } from '@/types/eventType';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { insertAspiration } from '@/lib/supabaseFn';
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';
import HomeView from './HomeView';
import { EmaFormType } from './types/EmaFormType';

const COMPLEAT_DISTANCE = 150;

/**
 * Homeページ/container
 */
const HomeContainer: FC = () => {
  const router = useRouter();

  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [isFinishedInput, setIsFinishedInput] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const [formValue, setFormValue] = useState<EmaFormType>({
    aspiration: '',
    name: '',
  });

  const handleInput = (e: FormChangeEvent) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const [isComplete, setIsComplete] = useState(false);
  const [movement, setMovement] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement> | undefined) => {
    if (!e) return;
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement> | undefined) => {
    if (!e || isComplete || !isFinishedInput) return;
    const endY = e.touches[0].clientY;
    const diff = startY - endY;

    if (diff < 0) return;
    setMovement(diff);

    if (diff > COMPLEAT_DISTANCE) {
      setIsComplete(true);
      setMovement(250);
    }
  };

  const handleTouchEnd = () => {
    if (isComplete) return;
    setMovement(0);
  };

  const handleBackHome = () => {
    router.push('/home');
    setIsOpenDialog(false);
    setIsFinishedInput(false);
    setIsDrawerOpen(false);
    setIsComplete(false);
    setMovement(0);
    setStartY(0);
    setFormValue({
      aspiration: '',
      name: '',
    });
  };

  useEffect(() => {
    if (isComplete) {
      (async () => {
        await insertAspiration(formValue);
        setTimeout(() => {
          setIsOpenDialog(true);
        }, 1000);
      })();
    }
  }, [isComplete]);

  return (
    <>
      <div
        style={{
          opacity: isFinishedInput ? 1 : 0,
          pointerEvents: isFinishedInput ? 'auto' : 'none',
          transition: isComplete ? 'top 1s ease-in-out' : 'top 0.3s ease-in-out',
          position: 'fixed',
          top: -movement * 10,
        }}
      >
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
              value={formValue.aspiration}
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
            value={formValue.name}
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
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ height: '100vh' }}
      >
        <HomeView
          isComplete={isComplete}
          value={formValue}
          isFinishedInput={isFinishedInput}
          onDrawerOpen={() => setIsDrawerOpen(true)}
        />
      </div>
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerContent>
          <DrawerHeader className="pt-5">
            <DrawerTitle>今年の抱負を書きましょう🎍</DrawerTitle>
          </DrawerHeader>
          <div className="p-3 rounded-t-xl bg-white w-screen space-y-3">
            <Textarea
              value={formValue.aspiration}
              onChange={handleInput}
              name="aspiration"
              placeholder="2024年の抱負"
              className="w-full"
            />
            <Input
              value={formValue.name}
              onChange={handleInput}
              name="name"
              placeholder="名前"
              className="w-full"
            />
          </div>
          <DrawerFooter>
            <Button
              onClick={() => {
                setIsFinishedInput(true);
                setIsDrawerOpen(false);
              }}
              variant="default"
              className="text-white"
              disabled={!formValue.aspiration || !formValue.name}
            >
              奉納する
            </Button>
            <Button
              onClick={() => {
                setIsDrawerOpen(false);
              }}
              variant="outline"
            >
              キャンセル
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <AlertDialog open={isOpenDialog}>
        <AlertDialogContent
          style={{
            transition: 'opacity 5s ease-in-out',
            opacity: isComplete ? 1 : 0,
          }}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>絵馬の奉納が完了しました</AlertDialogTitle>
            <AlertDialogDescription>今年もMatsuribaをよろしくお願い致します</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="text-white" onClick={handleBackHome}>
              ホームに戻る
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default HomeContainer;
