
import {useState , useEffect} from "react"
import {useQuery} from "react-query"
import axios from "axios"

// components
import Item from "./item/Item"
import {Drawer ,LinearProgress ,Grid ,Badge } from "@material-ui/core"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart" 


// style 
import {Wrapper , StyledButton} from "./App.style"

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
  // these states for the cart
  const [cartOpn , setCartOpn] = useState(false)
  const [cartItems , setItems] = useState([] as CartItemType[])


  // the useQuery hook is a function used to register your data fetching code 
  // into React Query Library. it takes an arbitrary key and an asynchronous function for fetching data 
  // it returns various values 
  const {data, isLoading , error} = useQuery<CartItemType[]>("products" , getProducts)

  const handleAddToCart = (clickedItem: CartItemType) => null
  const getTotalItems = (items: CartItemType[]) => null



  if(isLoading) return <LinearProgress />
  if(error) return <h1>Something went wrong ...</h1>

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpn} onClose={() => setCartOpn(false)} >
        cart goes here
      </Drawer>
      <StyledButton onClick={() => setCartOpn(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>



      {/* since this is the main grid so its gonna be the container */}
      <Grid container spacing={3}>
        {
          // the ? will return undefined if it cant find the data
        data?.map(item  => (
          // xs = extra small
          // sm = small medium
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
