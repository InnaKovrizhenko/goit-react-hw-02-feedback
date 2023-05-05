import styled from 'styled-components'

export const Button = styled.button `
margin-right: 10px;

color: #000000;
background-color: #FFEBCD;
font-weight: 500;
font-size: 25px;
line-height: 1.62;
cursor: pointer;

display: inline-block;
border: 1px solid transparent;
border-radius: 20px;
padding: 6px 22px;
min-width: 73px;
text-align: center;
transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1),
            background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
    font-weight: 700;
    background-color: #D2B48C;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12),
                0px 1px 2px rgba(0, 0, 0, 0.08),
                0px 3px 1px rgba(0, 0, 0, 0.1);
`

export const Buttons = styled.div `
text-align: center;
`