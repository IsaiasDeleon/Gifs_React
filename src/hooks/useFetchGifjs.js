import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) =>{
     const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() =>{
        const newImages = await getGifs( category );
        setImages(newImages)
        setIsLoading(false)
    }
    //Este use effect indica que solo una ves se va renderizar no importa que otro componente se renderize
    useEffect ( ()=>{
        getImages();
    },[]);

    return{
        images,
        isLoading
    }
}