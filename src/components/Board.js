import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import AddBoardButton from './AddBoardButton';
import DeleteBoardButton from './DeleteBoardButton';
import List from './List';

const StyledBoard = styled.div`

`;

const Board = (props) => (
    <Fragment>
        <Header title="Board1" />
        <DeleteBoardButton />
        <List />
        <AddBoardButton />
        <Footer />
    </Fragment>
)

export default Board;