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

        </Wrapper>
    )
} 

export default Cart