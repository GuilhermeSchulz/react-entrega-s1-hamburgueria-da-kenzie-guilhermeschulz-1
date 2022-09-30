import {
    createGlobalStyle
} from "styled-components";

export const GlobalStyles = createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    list-style:none;
}
button{
    cursor: pointer;
    transition: .5s;
}


:root{
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;

    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;


    --negative: #E60000;
    --warning: #FFCD07;
    --success: #168821;
    --information: #155BCB;

    --background-color: #FFFFFF

    --title-size-1: 26px;
    --title-size-2: 22px;
    --title-size-3: 18px;
    --title-size-4: 14px;
    --text-size-1: 16px;
    --text-size-2: 14px;
    --text-size-3: 12px;

    --border-radius: 8px;
}

`