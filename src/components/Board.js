import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import AddBoardButton from './AddBoardButton';
import DeleteBoardButton from './DeleteBoardButton';
import List from './List';

const StyledListContainer = styled.div`
    margin: 0 auto;
    min-height: 70vh;
    padding: 20px 0;
`;

const Board = (props) => (
    <Fragment>
        <Header title="Board1" />
        <DeleteBoardButton />
        <StyledListContainer>
            <List />
        </StyledListContainer>
        <AddBoardButton />
        <Footer />
    </Fragment>
)

export default Board;