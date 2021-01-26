
import {useState , useEffect} from "react"
import {useQuery} from "react-query"
import axios from "axios"

// components
import Item from "./item/Item"
import {Drawer ,LinearProgress  } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart" 
import Badge from "@material-ui/core/Badge"


// style 
import {Wrapper} from "./App.style"

// types for ts
// this is how you declare an object in ts
export type CartItemType = {
  id:number,
  category:string,
  description:string,
  image:string,
  price:number,
  title:string,
  amount:number
}


// fetching data
// we are gonna do that outside the component 
// because we don't need to create it on each render.

const getProducts = async ():Promise<CartItemType[]> => {
  // we have 2 awaits one for the json 
  // and the other for the api
  return await (await fetch("https://fakestoreapi.com/products")).json()
}

function App() {
  // the useQuery hook is a function used to register your data fetching code 
  // into React Query Library. it takes an arbitrary key and an asynchronous function for fetching data 
  // it returns various values 
  const {data, isLoading , error} = useQuery<CartItemType[]>("products" , getProducts)

    const handleAddToCart = (clickedItem: CartItemType) => null
  if(isLoading) return <LinearProgress />
  if(error) return <h1>Something went wrong ...</h1>

  return (
    <Wrapper>
      {/* since this is the main grid so its gonna be the container */}
      <Grid container spacing={3}>
        {
          // the ? will return undefined if it cant find the data
        data?.map(item  => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))
        }
      </Grid>
    </Wrapper>
  );
}

export default App;
