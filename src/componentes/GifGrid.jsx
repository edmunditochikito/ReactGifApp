
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const { images,isLoading }=useFetchGifs(category);
    
  return (
   <>
    <h3>{category}</h3>
    <button> Eliminar </button>
    {
        isLoading? (<h2>cargando...</h2>):null
    }
    <div className="card-grid">
       {
         images.map(({id,title,url})=>{
            return(
                <GifItem key={id} title={title} url={url}/>
            )
        })
       }
    </div>
   </>
  )
}
