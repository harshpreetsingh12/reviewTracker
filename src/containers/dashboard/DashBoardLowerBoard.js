import React from 'react'
import { DashboardDivWrap } from './DashboardStyleData'
import {  FlexContainer, IconBtnSm, Mediumh2Bold } from '../../constants/GlobalStyleComp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserDashBoardChart from './dashboardComponents/LineChart'

const DashBoardLowerBoard = () => {
  return (
    <DashboardDivWrap className='w-full mt-4'>
      <div className='flex justify-between'>
        <Mediumh2Bold>OverAll Statistics</Mediumh2Bold>
        <FlexContainer className='gap-2'>
            <IconBtnSm>
                <FontAwesomeIcon icon='star'/>
            </IconBtnSm>
            <IconBtnSm>
                <FontAwesomeIcon icon='gear'/>
            </IconBtnSm>
            <IconBtnSm>
                <FontAwesomeIcon icon='copy'/>
            </IconBtnSm>
        </FlexContainer>

      </div>
        <UserDashBoardChart/>
      
    </DashboardDivWrap>
  )
}

export default DashBoardLowerBoard
