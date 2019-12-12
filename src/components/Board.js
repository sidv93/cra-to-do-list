import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import AddBoardButton from './AddBoardButton';

const StyledBoard = styled.div`

`;

const Board = (props) => (
    <Fragment>
        <Header title="Board1" />
        <Footer />
        <AddBoardButton />
    </Fragment>
)

export default Board;