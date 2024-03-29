import { ScrollView } from 'react-native'
import React,{ useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanity';
import { urlFor } from '../sanity';

export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "category"]`).then((data) => {
      setCategories(data);
    })
  }, []);
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }} 
    horizontal
    showsHorizontalScrollIndicator={false}
    >

      {
        categories?.map((category) => (
          <CategoryCard
          key={category._id} 
          imgUrl={urlFor(category.image).width(200).url()} 
          title={category.name}
          />
        ))
      }
      
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="hey"/>
      
    </ScrollView>
  )
}