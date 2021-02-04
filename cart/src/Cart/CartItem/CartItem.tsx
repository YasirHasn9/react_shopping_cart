import {Button} from "@material-ui/core"

// style
import {Wrapper} from "./CartItem.styled"
// types
import {CartItemType}  from "../../App"


type Props = {
    item:CartItemType;
    addToCart:(clickedItem: CartItemType) => void;
    removeFromCart:(id:number) => void
}
const CartItem:React.FC<Props> = ({item,addToCart, removeFromCart}) => {
    console.log("from the cart item" , item )
return (
    <Wrapper>
        <h1>Hello world</h1>
        {/* <div>
            <h3>{item.title}</h3>
            <div className="information">
                <p>Price: ${item.price}</p>
                <p>Total: ${item.amount * item.price}.toFixed(2)</p>
            </div>

            <div className="buttons">
            <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => removeFromCart(item.id)}
                 >

                     -
                 </Button>
                <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => addToCart(item)}
                 >

                     +
                 </Button>

            </div>
        </div>
        <img src={item.image} alt={item.title} /> */}
    </Wrapper>
)
}

export default CartItem