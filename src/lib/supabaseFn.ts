import { Database } from '@/types/database.types';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
);

type InsertAspiration = ({
  aspiration,
  name,
}: {
  aspiration: string;
  name: string;
}) => Promise<void>;
/**
 * aspirationTableにinsertする関数
 */
export const insertAspiration: InsertAspiration = async ({ aspiration, name }) => {
  const { error: insertAspirationError } = await supabase
    .from('aspirationTable')
    .insert([{ aspiration, name, isWebAccess: true }]);

  if (insertAspirationError) {
    throw insertAspirationError;
  }
};

type GetAspiration = ({
  limit,
}: {
  limit: number;
}) => Promise<Database['public']['Views']['randomaspirationview']['Row'][]>;
/**
 * randomAspirationViewからデータを取得する関数
 * - range{start: number, end: number}
 */
export const getAspiration: GetAspiration = async ({ limit }) => {
  const { data: aspirationData, error: aspirationError } = await supabase
    .from('randomaspirationview')
    .select('*')
    .limit(limit);

  if (aspirationError) {
    throw aspirationError;
  }

  return aspirationData;
};
