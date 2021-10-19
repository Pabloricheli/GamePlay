import React from "react";
import { 
  Scroll
} from "./styles";

import { categories } from "../../utils/categories";
import { Category } from "../../components/Category";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  categorySelected?: string;
  setCategory: (categoryId: string) => void;
}

export function CategorySelect({ categorySelected, setCategory }: Props) {

  function handlePressButton(){
    console.log('press')
  }
  return (
      <Scroll 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: RFValue(22) }}
      >
        { 
          categories.map( category => (
            <Category 
              key={category.id} 
              title={category.title} 
              icon={category.icon} 
              checked={category.id === categorySelected}
              onPress={() => setCategory(category.id)}
            />
          ))
        }
      </Scroll>    
  )
}