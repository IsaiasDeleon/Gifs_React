import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifjs';


export const GifGrid = ({ category }) =>{
    const {images, isloading} = useFetchGifs(category)

   
    
    return(
        <>
            <h3>{category}</h3>
            {
            isloading && (<h2>Cargando..</h2>)
            } 
            <div className="card-grid">
                {
                    images.map((imagen) =>(
                       <GifItem 
                        key={imagen.id} 
                        { ...imagen }
                       />
                    ))
                }
            </div>
        </>
    )
}