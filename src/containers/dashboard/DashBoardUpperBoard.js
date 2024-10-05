import React from 'react'
import { DashboardDivWrap } from './DashboardStyleData'
import {  ActiveButtonGlobal, ButtonGlobal, Mediumh2Bold } from '../../constants/GlobalStyleComp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DashBoardUpperBoard = () => {
  return (
    <DashboardDivWrap className='w-full mt-4'>
      <div className='flex justify-between'>
        <Mediumh2Bold>Total Usage</Mediumh2Bold>
        <div>
            <ButtonGlobal>Today</ButtonGlobal>
            <ActiveButtonGlobal>Premium
                <FontAwesomeIcon icon='plus' size='sm' className='ml-1'/>

            </ActiveButtonGlobal>
        </div>
      </div>
    </DashboardDivWrap>
  )
}

export default DashBoardUpperBoard
