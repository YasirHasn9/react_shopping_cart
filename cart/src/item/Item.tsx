import {Button} from "@material-ui/core"
// Types 
import {CartItemType} from "../App"

// style 
import { Wrapper } from "./item.style";
type Props = {
    item:CartItemType,
    handleAddToCart: (clickedItem:CartItemType) => void 
}


// to specify the react functional comp in react using ts
// 
const Item: React.FC<Props> = ({item , handleAddToCart}) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
)

export default Item