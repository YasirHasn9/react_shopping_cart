
import {useState , useEffect} from "react"
import {useQuery} from "react-query"
import axios from "axios"

// components
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

  if(isLoading) return <LinearProgress />
  if(error) return <h1>Something went wrong ...</h1>

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
