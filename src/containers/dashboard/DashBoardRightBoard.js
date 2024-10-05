import React from 'react'
import { DashboardDivWrap } from './DashboardStyleData'
import {  Mediumh2Bold } from '../../constants/GlobalStyleComp'

const DashBoardRightBoard = () => {
  return (
    <DashboardDivWrap className='w-60 mt-4'>
      <div className='flex justify-between'>
        <Mediumh2Bold>RightBoard</Mediumh2Bold>
      </div>
    </DashboardDivWrap>
  )
}

export default DashBoardRightBoard
