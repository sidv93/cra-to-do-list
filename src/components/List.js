import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const StyledList = styled.div`
    max-width: 200px;
    border: 1px solid black;
    min-height: 200px;
    margin: 0 auto;
`;

const StyledListHeader = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    font-size: 2.4rem;
    margin: 10px;
`;

const StyledHr = styled.hr`
    border-top: 5px solid black;
    width: 80%;
    text-align: center;
    margin-top: 10px;
`;

const Hr = () => <StyledHr />;

const ListHeader = () => (
    <StyledListHeader>
        <p style={{margin: 0}}>Ideas</p>
        <FontAwesomeIcon style={{fontSize: '2.4rem', cursor: 'pointer'}} icon={faPlusSquare} />
        <FontAwesomeIcon style={{fontSize: '2.4rem', cursor: 'pointer'}} icon={faTrash} />
    </StyledListHeader>
)

const List = () => (
    <StyledList>
        <ListHeader />
        <Hr />
    </StyledList>
);

export default List;