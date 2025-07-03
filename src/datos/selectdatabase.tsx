import { createClient } from '@/utils/supabase/client';

interface Plato {
  id: number;
  plato: string;
  precio: number;
  descripcion: string;
  imagen: string;
  categoria: string;
}

export async function getPlatos(): Promise<Plato[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('comidas')
    .select()
    .eq('categoria', 'China');

  if (error) {
    console.error('Error fetching platos:', error);
    return [];
  }

  return data || [];
}