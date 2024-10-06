import styled from "styled-components";


export const DashboardWrapper = styled.div`
    z-index:1;
    position:relative;
    width:85%;
    margin:0px auto;
    margin-top:70px;
`;
export const DashboardDivWrap = styled.div`
    display:flex;
    flex-direction:column;
    background:black;
    display: flex;
    flex-direction: column;
    background: #000000b8;
    backdrop-filter: blur(18px);
    border-radius: 13px;
    padding: 24px;
`;



export const dummyUpperData=[
    {
      value:"1000.00",
      statName:"Total Users",
      percentGrowth:"24",
      growth:true,
    },
    {
      value:"12000.00",
      statName:"Premium",
      percentGrowth:"243",
      growth:true,
    },
    {
      value:"12000.00",
      statName:"Profit",
      percentGrowth:"4",
      growth:false,
    },
    {
      value:"6000.00",
      statName:"Active now",
      percentGrowth:"32",
      growth:true,
    },
  ]