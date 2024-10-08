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

export const StaticWallWrapper = styled.div`
    height: 150px;
    width: 100%;
    // background:linear-gradient(94deg, #014a37, #122d2e, #4f1800, #02052d);
    z-index: 0;
    color:white;
    position:fixed;
    background: linear-gradient(135deg, #00c1d4, #1b2f41 25%, #1b2f41 50%, #ff4d3d 75%, #d458ff);
    background-color: #1b2f41; /* Dark background to match */
    background-blend-mode: screen;
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
  {
    name:'User',
    icon:'user',
    path:'/'
  },
]
