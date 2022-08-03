import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --yellow: #FBC139;

    --principal-blue: #0565FF;
    --main-blue: #004AC0;
    --dark-blue: #003384;

    --dark-100: #202020;
    --dark-80: #312E38;
    --dark-60: #808080;
    --dark-50: #C8C8C8;

    --light-900: #F4EDE8;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button{
    font: 400 1rem 'Roboto', sans-serif;
  }
  
  button{
    cursor: pointer;

    transition: filter .2s ease;

    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }
  }
  
  button, input {
    border: none;
    outline: 0;
  }
  button, a, input[type="submit"] {
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: none;
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }
`;
