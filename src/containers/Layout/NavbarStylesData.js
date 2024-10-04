import styled from "styled-components";

export const NavItem = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  padding:20px;
  transition: transform 0.3s ease; 
  cursor:pointer;

  &:hover {
    transform: scale(1.3); 
  }
`;

export const NavBarWrap = styled.div`
  border-right:1px solid #7979790f;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
   padding-top:10px;
   z-index:1;
    backdrop-filter: blur(25px);
`;

export const StaticWall = styled.div`
    height: 17vh;
    width: 100%;
    background:linear-gradient(138deg, #0e1d56, #122d2e, #f4673d, #02052d);
    z-index: 0;
`;

export const pathIcons=[
  {
    name:'Dashboard',
    icon:'house',
    path:'/'
  },
  {
    name:'Subscription',
    icon:'chart-simple',
    path:'/'
  },
  {
    name:'Charts',
    icon:'credit-card',
    path:'/'
  },
]
