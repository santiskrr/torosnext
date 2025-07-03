'use client'
import React, { useState,useEffect } from "react";
import { createClient } from '@/utils/supabase/client'


interface plato{
  id:number, plato:string, precio:number, descripcion:string, imagen:string, categoria:string}

export default function database(){
    const [platos, setPlatos]=useState<plato[]>([])

    useEffect(() => {
        getPlato();
      }, []);
      async function getPlato() {
       const supabase = createClient()
        const { data } = await supabase.from("comidas").select().eq('categoria', 'China');
        setPlatos(data);
  
    }
return(
      
      platos
)}


