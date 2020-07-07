import {createGlobalStyle} from 'styled-components'



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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

        font-weight: 400;
        line-height: 1.6;
        min-height: 100vh;
        font-size: inherit;
        min-height: 100vh;
    
    }

html{
    box-sizing: border-box;
}

code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }



div{
    text-align: center;
}



`;





export default GlobalStyle;