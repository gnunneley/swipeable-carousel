import styled from "styled-components";
import React from 'react';

export const NEXT = "NEXT";
export const PREV = "PREV";

// export const Item = styled.div`
//   text-align: center;
//   padding: 100px;
//   background-image: ${props => `url(${props.img})`};S
//   background-size: cover;
// `;

export const Item = (props) => {return <img draggable="false" style={{maxHeight:"100%"}} src={props.img}></img>}

// export const CarouselContainer = styled.div`
//   display: flex;
//   transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
//   transform: ${props => {
//     if (!props.sliding) return "translateX(calc(-80% - 20px))";
//     if (props.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))";
//     return "translateX(0%)";
//   }};
//   align-items: center;
//   justify-content: flex-start;
// `;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  align-items: center;
  justify-content: flex-start;
`;

export const Wrapper = styled.div`
  width: 100%
  overflow: hidden;
  box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
`;

export const CarouselSlot = styled.div`
  flex: 1 0 10%;
  order: ${props => props.order};
  height: ${props => props.size}vh;
`;

export const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 100%;
`;
