// Personally, to make our code more organized 
// then, make our style in different components 
import Styled from "styled-components"
import {IconButton} from "@material-ui/core"


export const Wrapper = Styled.div`
    margin:40px;
`


export const StyledButton = Styled(IconButton)`
    position:fixed;
    z-index:100;
    right:20px;
    top:20px;
`