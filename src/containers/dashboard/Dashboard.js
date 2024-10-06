import React from 'react'

import { DashboardWrapper } from './DashboardStyleData';
import DashBoardUpperBoard from './DashBoardUpperBoard';
import {FlexContainerCol } from '../../constants/GlobalStyleComp';
import DashBoardLowerBoard from './DashBoardLowerBoard';
import DashBoardRightBoard from './DashBoardRightBoard';

const Dashboard = () => {
  
    return (
        <DashboardWrapper>
            <div className='flex w-full gap-4 '>
                <FlexContainerCol className='w-full'>
                    <DashBoardUpperBoard/>
                    <DashBoardLowerBoard/>

                </FlexContainerCol>
                <DashBoardRightBoard/>
            </div>
            
        </DashboardWrapper>
    )
}

export default Dashboard
