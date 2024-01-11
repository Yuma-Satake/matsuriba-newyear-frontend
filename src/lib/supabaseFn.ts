import { Database } from '@/types/database.types';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient<Database>(
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
