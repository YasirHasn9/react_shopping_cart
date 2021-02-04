
import {useState , useEffect} from "react"
import {useQuery} from "react-query"
import axios from "axios"

// components
import Item from "./item/Item"
import Cart from "./Cart/Cart"
import {Drawer ,LinearProgress ,Grid ,Badge } from "@material-ui/core"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart" 


// style 
import {Wrapper , StyledButton} from "./App.style"

// types for ts
// this is how you declare an object in ts
// this is represents one object : we we see CartItemType --> it means the array is having object element as CartItemType
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
  const [cartItems , setCartItems] = useState([] as CartItemType[])


  // the useQuery hook is a function used to register your data fetching code 
  // into React Query Library. it takes an arbitrary key and an asynchronous function for fetching data 
  // it returns various values 
  const {data, isLoading , error} = useQuery<CartItemType[]>("products" , getProducts)

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. check the item if it is already exited in the cart
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if(isItemInCart){
        return prev.map(item => item.id === clickedItem.id 
          ? {...item , amount:item.amount + 1} : item)
      }

      // if it it not already in the cart
      return [...prev , {...clickedItem, amount : 1}]
     }
    
    )
  }
    

  const handleRemoveFromCart = (ItemId:number) =>  {
    setCartItems((prev) => {
      return prev.reduce((acc, item)=>{
        if(item.id === ItemId){
          if(item.amount === 1) return acc
          return [...acc , {...item,amount:item.amount - 1}]
        } else {
          return [...acc , item]
        }
      } , [] as CartItemType[])
    })
  }

  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((acc:number , item) => acc + item.amount, 0)
  }



  if(isLoading) return <LinearProgress />
  if(error) return <h1>Something went wrong ...</h1>

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpn} onClose={() => setCartOpn(false)} >
          <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart} 
          removeFromCart={handleRemoveFromCart}
          />
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
