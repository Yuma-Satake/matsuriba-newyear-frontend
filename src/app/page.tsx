'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Indexページ
 */
const IndexPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, []);

  return null;
};

export default IndexPage;
