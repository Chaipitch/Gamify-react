import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
    }
    body{
        font-family: 'Montserrat Alternates', sans-serif;
        width: 100%;
        
    }
    
    img{
        display:block;
    }
`

export default GlobalStyles