import React from 'react'
import { DashboardDivWrap } from './DashboardStyleData'
import {  Mediumh2Bold } from '../../constants/GlobalStyleComp'

const DashBoardLowerBoard = () => {
  return (
    <DashboardDivWrap className='w-full mt-4'>
      <div className='flex justify-between'>
        <Mediumh2Bold>LowerBoard</Mediumh2Bold>
      </div>
    </DashboardDivWrap>
  )
}

export default DashBoardLowerBoard
