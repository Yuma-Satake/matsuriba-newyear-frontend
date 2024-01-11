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
// import { insertAspiration } from '@/lib/supabaseFn';
import HomeView from './HomeView';
import { EmaFormType } from './types/EmaFormType';

/**
 * Homeページ/container
 */
const HomeContainer: FC = () => {
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
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement> | undefined) => {
    if (!e) return;
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement> | undefined) => {
    if (!e) return;
    const endY = e.touches[0].clientY;
    if (startY - endY > 100) {
      setIsComplete(true);
    }
  };

  useEffect(() => {
    if (isComplete) {
      // (async () => {
      //   await insertAspiration(formValue);
      // })();
    }
  }, [isComplete]);

  return (
    <>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        // style={{
        //   position: isFinishedInput ? 'fixed' : 'relative',
        //   top: isFinishedInput ? startY : 'auto',
        //   display: isComplete ? 'none' : 'block',
        // }}
      >
        <HomeView
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
                setIsComplete(true);
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
    </>
  );
};

export default HomeContainer;
