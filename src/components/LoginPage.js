import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

const StyledLoginPage = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const StyledHeader = styled.header`
    min-height: 10vh;
    background-color: black;
    position: absolute;
    top: 0;
    width: 100%;
    color: white;
    font-size: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginPage = () => (
    <StyledLoginPage>
        <StyledHeader>
            <p>Workflow</p>
        </StyledHeader>
        <LoginForm />
    </StyledLoginPage>
);

export default LoginPage;