import React from 'react'
import { DashboardDivWrap, dummyUpperData } from './DashboardStyleData'
import {  ActiveButtonGlobal, Bigh2Bold, ButtonGlobal, FlexContainer, FlexContainerCol, Mediumh2Bold, SmParaText } from '../../constants/GlobalStyleComp'
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
      <FlexContainer className='mt-8 gap-5'>
        {dummyUpperData.map((data)=>{
          return(
            <div className='w-full'  key={data.statName}>
              <FlexContainerCol className='items-baseline font-semibold'>
                <div className='flex justify-between w-full'>
                  <SmParaText className='text-gray-400'>
                    {data.statName}
                  </SmParaText>
                  <SmParaText className={`${data.growth?"text-green-600":"text-red-400"} text-green-600 `}>
                    <FontAwesomeIcon icon={data.growth?"angle-up":"angle-down"} className='mr-1' />
                    {data.percentGrowth}%
                  </SmParaText>
                </div>

                <Bigh2Bold className='relative'>
                  <FontAwesomeIcon icon={'user'} className='absolute top-0 -right-4 text-xs text-gray-500' />
                  {data.value}
                </Bigh2Bold>

              </FlexContainerCol>
            </div>
          )
        })}
      </FlexContainer>
    </DashboardDivWrap>
  )
}

export default DashBoardUpperBoard
