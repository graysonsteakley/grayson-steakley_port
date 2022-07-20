import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



*,
*::before,
*::after{

    box-sizing: inherit;
    font-size: 62.5%;
    margin: 0;
    padding: 0;

}


body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

        font-weight: 400;
        line-height: 1.6;
        min-height: 100vh;
        font-size: inherit;
        min-height: 100vh;
        background-color: #333333!important;
    
    }

html{
    box-sizing: border-box;
}

code {
        monospace;
    }



div{
    text-align: center;
}



`;

export default GlobalStyle;
