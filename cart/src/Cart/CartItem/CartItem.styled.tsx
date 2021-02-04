import styled from "styled-components"


export const Wrapper = styled.div`
display :flex;
justify-content:space-around;
font-family:Arial, Helvetica , sans-serif;
border-bottom: 1px solid lighthouse;
padding-bottom: 20px;
div {
    flex:1;
}
.information, .buttons {
    display:flex;
    justify-content:space-between;
}
img {
    max-width:80px;
    object-fit:cover;
    margin-left: 40px;
}
`