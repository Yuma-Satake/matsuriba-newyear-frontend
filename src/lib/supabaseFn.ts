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
  range,
}: {
  limit: number;
  range: { start: number; end: number };
}) => Promise<Database['public']['Tables']['aspirationTable']['Row'][]>;
/**
 * aspirationTableからデータを取得する関数

 * - range{start: number, end: number}
 */
export const getAspiration: GetAspiration = async ({ limit, range }) => {
  const { data: aspirationData, error: aspirationError } = await supabase
    .from('aspirationTable')
    .select('*')
    .order('id', { ascending: false })
    .range(range.start, range.end)
    .limit(limit);

  if (aspirationError) {
    throw aspirationError;
  }

  return aspirationData;
};
