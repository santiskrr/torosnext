// utils/selectdatabase.tsx
import { createClient } from '@/utils/supabase/client';

interface Plato {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  comida?: string; // Para compatibilidad con Botonpedido
  precio?: number; // Para compatibilidad con Botonpedido
}

export async function getPlatos(category: string, limit?: number): Promise<Plato[]> {
  const supabase = createClient();
  let query = supabase
    .from('comidas')
    .select('id, plato, precio, descripcion, imagen, categoria')
    .eq('categoria', category);

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error(`Error fetching platos for category ${category}:`, error.message);
    return [];
  }

  if (!data || data.length === 0) {
    console.warn(`No data found for category ${category}`);
    return [];
  }

  return data.map((item) => ({
    id: item.id,
    name: item.plato,
    price: item.precio,
    description: item.descripcion,
    image: item.imagen,
    category: item.categoria,
    comida: item.plato, // Para compatibilidad con Botonpedido
    precio: item.precio, // Para compatibilidad con Botonpedido
  }));
}