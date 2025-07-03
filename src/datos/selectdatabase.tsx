import { createClient } from '@/utils/supabase/client';

interface Plato {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export async function getPlatos(): Promise<Plato[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('comidas')
    .select('id, plato, precio, descripcion, imagen, categoria')
    .eq('categoria', 'China');

  if (error) {
    console.error('Error fetching platos:', error);
    return [];
  }

  // Map database fields to match the Plato interface
  return (
    data?.map((item) => ({
      id: item.id,
      name: item.plato,
      price: item.precio,
      description: item.descripcion,
      image: item.imagen,
      category: item.categoria,
    })) || []
  );
}