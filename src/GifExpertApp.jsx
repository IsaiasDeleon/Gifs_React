import {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GiftExpertApp = () =>{
    const [categorias, setCategorias] = useState(['League of legends'])
    const onAddCategory = (newCategory) =>{
        //if( categorias.include(newCategory) ){return;}
        setCategorias([newCategory, ...categorias])
        //setCategorias([...categorias,'Valorant'] )
    }
    return ( 
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
            onNewCategory = {event => onAddCategory(event)}
                //setCategorias={setCategorias} 
            />
            {  
                categorias.map( (categoria) => (
                    <GifGrid
                        key={categoria}
                        category={categoria} />
                ))
            }  
        </>
       
    )
}