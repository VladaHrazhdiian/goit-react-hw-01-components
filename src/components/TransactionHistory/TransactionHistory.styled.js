import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  margin: 30px auto;
  box-shadow:  0 2px 5px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.5);
`;

export const THead = styled.thead`
  background-color: lightsteelblue;
`;

export const TBody = styled.tbody``;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f3f6f9;
  }
`;

export const Th = styled.th`
  padding: 6px;
`;

export const Td = styled.td`
  padding: 6px;
  text-align: center;
`;