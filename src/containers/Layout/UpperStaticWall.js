import React from "react";
import SearchBar from "./SearchBar";
import {StaticWallWrapper } from "./NavbarStylesData";
import { useDispatch, useSelector } from "react-redux";
import { getFormattedDate } from "./LayoutHelpers";
import { toggleTheme } from "../../reduxStore/actionsReducers/themeReducer/themeActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TempUserLogo from "../../assets/images/dashboard/tempLogo.jfif";
import { FlexContainer, FlexContainerCol, SmParaText, UserAvatar } from "../../constants/GlobalStyleComp";

const StaticWall = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeState.theme);

  return (
    <StaticWallWrapper className="pl-24">
      <div className="flex justify-between items-center py-4 px-1">
        <SmParaText>{getFormattedDate()}</SmParaText>
        <SearchBar />
        <FlexContainer>
          <div
            className="cursor-pointer w-10 mr-3 text-center "
            onClick={() => dispatch(toggleTheme())}
          >
            <FontAwesomeIcon icon={theme.theme === "dark" ? "sun" : "moon"} />
          </div>
          <div className="cursor-pointer w-10 mr-3 text-center ">
            <FontAwesomeIcon icon={"bell"} />
          </div>
          <FlexContainer className="cursor-pointer">
            <UserAvatar src={TempUserLogo}/>
            <FlexContainerCol className="items-baseline">
                <SmParaText className='font-normal px-4 flex w-full items-center'>Harshpreet singh
                    <FontAwesomeIcon icon={'angle-down'} size="sm" className="ml-auto"/>

                </SmParaText>
                <SmParaText className='px-4'>Harshpreets362@gmail.com</SmParaText>
            </FlexContainerCol>
          </FlexContainer>

        </FlexContainer>
      </div>
    </StaticWallWrapper>
  );
};

export default StaticWall;
