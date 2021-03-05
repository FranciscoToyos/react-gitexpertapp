import React, { useState } from 'react'
import { Addcategory } from './components/Addcategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categorias =  ['One punch', 'Samurai X', 'Dragon Ball'];

    const [categorias, setCategorias] = useState(['Futbol']);

    // const handleAdd = () => {
    //     // setCategorias( ['Jurasic',...categorias] );
    //     setCategorias(cat => [...cat, 'Jurasic']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <Addcategory setCategorias={setCategorias} />
            <hr />
            
            <ol>
             {
                 categorias.map((category) => 
                    (
                        <GifGrid 
                        key={category}
                        category = {category}
                        />
                    )
                 )
             }
            </ol>
        </>
    )
}

