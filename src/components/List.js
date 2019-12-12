import React from 'react';
import styled from 'styled-components';

const StyledList = styled.div`
    min-width: 150px;
    border: 1px solid black;
    min-height: 200px;
`;

const List = () => (
    <StyledList>
        Hello
    </StyledList>
);

export default List;