import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    min-height: 7vh;
    background-color: grey;
    color: white;
    font-size: 2rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Footer = () => (
    <StyledFooter>
        All rights reserved @ Asteria Aerospace
    </StyledFooter>
);

export default Footer;