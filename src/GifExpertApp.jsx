import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

  const peli = ['Goku'];
  const [categories, setCategories] = useState(peli);
  
  const onAddCategory = (newCategory) =>{

    if(categories.includes(newCategory)) return; 

    console.log(newCategory);
    setCategories([...categories, newCategory])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={(event)=>onAddCategory(event)}
      />
      {
        categories.map((category) => (
            <GifGrid
              key={category}
              category={category}
            />
        ))
      }
    </>
  )
}