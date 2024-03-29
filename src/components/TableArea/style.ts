import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #20212C;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  padding: 10px 0;
  text-align: left;
`;
