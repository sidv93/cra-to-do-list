import styled from 'styled-components';
import React from 'react';

const StyledHeader = styled.header`
    min-height: 15vh;
    background-color: grey;
    color: white;
    font-size: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Header = (props) => (
    <StyledHeader>
        {props.title}
    </StyledHeader>
)

export default Header;
