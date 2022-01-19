import React from 'react';
import styled from 'styled-components';
import Listings from './Listings';

const Wrapperlist = styled.div`
display:flex;
flex-wrap:wrap;
margin:0 auto;
justify-content: space-evenly;
`

function List() {
  return <Wrapperlist>
      <Listings/>
  </Wrapperlist>;
}

export default List;
