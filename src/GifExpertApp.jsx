import { useState } from "react"
import { AddCategory,GifGrid } from "./componentes";


export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['dragon ball'])

  const onAddcategory=(newCategory)=>{
   if(categories.includes(newCategory))return;
   setCategories([newCategory,...categories]);
  }
  return (
    <>
     <h1>Gif Expert App</h1>
     <AddCategory
     onNewCategory={event=>onAddcategory(event) }/>

     
     {categories.map( category=>
      (
        <GifGrid key={category} category={category}/>
      ))
     }
     

    </>
  )
}
