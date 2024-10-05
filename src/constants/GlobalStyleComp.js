import styled from "styled-components";

export const SmallFontSize=13;

export const UserAvatar = styled.img`
    height:2em;
    width:2em;
    border-radius:50%;
`;


export const FlexContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const FlexContainerCol = styled.div`
  display:flex;
  flex-direction:column;
`;

export const SmParaText = styled.p`
    font-size:${SmallFontSize}px;
`;
