import CartItem from "./CartItem/CartItem"

// styles
import {Wrapper} from "./Cart.styled"

// types
import {CartItemType} from "../App"


type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart:(id:number) => void
}

    
const Cart: React.FC<Props> = ({cartItems , addToCart , removeFromCart}) => {

    const total = (items:CartItemType[]) => items.reduce((acc:number , item ) => {
        return acc + (item.amount * item.price)
    },0)
    return (
        <Wrapper>
            {cartItems.length === 0 ? <p>No items in cart</p>:null}

            {cartItems.map(item => {
                return <CartItem
                item={item}
                key={item.id}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                />
            })}
            <h2>Total: ${total(cartItems)}</h2>
        </Wrapper>
    )
} 

export default Cart