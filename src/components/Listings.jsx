import React from 'react';
import Stays from '../stays.json'
import styled from 'styled-components';



const Wrapper = styled.div`
padding: 4em;
`

const Listimg = styled.img`
width: 395px;
height: 269px;
left: 94px;
top: 209px;
border-radius:24px;
`
const DetailsListing = styled.div`
margin-top:10px;
margin-bottom:10px;
display:flex;
justify-content: space-evenly;
align-items: center;
`
const Host = styled.span`
    border:1px solid black;
    border-radius:24px;
    padding: 5px 8px;
    `





function Listings() {
  return <>{Stays.map(( postDetail,index) =>{
      return <Wrapper key={index}>
          <Listimg src={postDetail.photo}/>
                <DetailsListing> 
                    {postDetail.superHost ? true : <Host>Super Host</Host>} 
                    <span> 
                    {postDetail.type} 
                    </span>
                    <span> 
                    {postDetail.beds + " beds"}
                    </span>
                    <span>
                    {postDetail.rating}
                    </span>
                </DetailsListing>
                <h1>{postDetail.title}</h1>
             </Wrapper>
  })}</>;
}

export default Listings;
