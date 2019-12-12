import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.div`
    background-color: grey;
    color: white;
    height: 40px;
    width: 40px;
    border-radius: 30%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    position: absolute;
    top: 17vh;
    right: 5%;
`;

const DeleteBoardButton = () => (
    <StyledDeleteButton>x</StyledDeleteButton>
);

export default DeleteBoardButton;