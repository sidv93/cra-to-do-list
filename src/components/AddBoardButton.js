import React from 'react';
import styled from 'styled-components';

const AddButton = styled.div`
    background-color: grey;
    color: white;
    position: absolute;
    bottom: 10vh;
    right: 5%;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 3rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AddBoardButton = () => (
    <AddButton>+</AddButton>
);

export default AddBoardButton;