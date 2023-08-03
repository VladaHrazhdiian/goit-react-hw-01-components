import styled from 'styled-components';

export const StatWrapper = styled.div`
  margin: 30px auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px 8px;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`;

export const List = styled.ul`
    display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightsteelblue;
  padding-left: 0px;
  width: 100%;
`;

export const Item = styled.li`
  width: calc(100% / 5);
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  border-top: 2px solid #d3d3d3;
  &:not(:last-child) {
    border-right: 2px solid #d3d3d3;
  }
 
`;

export const Label = styled.span`
  padding: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #303030;
`;

export const Percentage = styled.span`
  padding: 5px;
  font-size: 18px;
  font-weight: 400;
`;