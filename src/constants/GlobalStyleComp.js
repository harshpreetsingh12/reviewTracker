import styled from "styled-components";
import { darkTheme } from "./theme";

export const SmallFontSize=12;
export const MedFontSize=18;
export const LgFontSize=22;
export const ExLgFontSize=25;
export const ActiveBtnBg="linear-gradient(173deg, #ff8056, #ff3d00)";

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

export const Mediumh2Bold = styled.h2`
    font-size:${MedFontSize}px;
    font-weight:700;
`;

export const Bigh2Bold = styled.h2`
    font-size:${ExLgFontSize}px;
    font-weight:700;
`;

export const ButtonGlobal = styled.button`
    outline:none;
    border:1px solid ${darkTheme.primary};
    background:transparent;
    color:${darkTheme.primary};
    background: transparent;
    font-weight: bold;
    padding: 3px 12px;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
    margin:0 10px;
`;

export const ActiveButtonGlobal = styled.button`
    outline:none;
    border:1px solid transparent;
    color:white;
    background: ${ActiveBtnBg};
    font-weight: bold;
       padding: 4px 6px;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 10px;
    width: 100px;
`;

export const IconBtnSm = styled.button`
    outline: none;
    height: 30px;
    width: 30px;
    background: #80808021;
    border-radius: 8px;
    font-size: 13px;
    
`;
