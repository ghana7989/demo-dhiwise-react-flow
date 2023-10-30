import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const DashboardScreenTeamsPage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    { label: "Kanban" },
    { label: "Wizard" },
    { label: "DataTables" },
    { label: "Calendar" },
    { label: "Analytics" },
  ];
  const [inputwithaddonsvalue, setInputwithaddonsvalue] =
    React.useState<string>("");

  return (
    <>
      <div className="flex flex-col font-helvetica items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex md:flex-col flex-row gap-[23px] h-[1770px] items-start justify-evenly p-[21px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <Sidebar1 className="!sticky !w-[236px] flex h-screen md:hidden justify-start md:mt-0 mt-[17px] overflow-auto md:px-5 top-[0]" />
            <div className="flex-1 h-[1725px] sm:h-[1773px] md:h-[3194px] md:px-5 relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[300px] sm:h-[337px] relative w-full">
                      <Img
                        className="h-[300px] m-auto object-cover rounded-[15px] w-full"
                        src="images/img_curved01.png"
                        alt="curvedOne"
                      />
                      <div className="absolute bg-gradient9  flex sm:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto p-[19px] rounded-[15px] w-full">
                        <div className="flex sm:flex-1 flex-col items-start justify-start mb-[215px] ml-1 sm:ml-[0] w-[9%] sm:w-full">
                          <div className="flex flex-col items-start justify-start w-[139px]">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                              size="txtHelvetica24"
                            >
                              <span className="text-white-A700 font-helvetica text-left font-normal">
                                Pages{" "}
                              </span>
                              <span className="text-black-900 font-helvetica text-left font-normal">
                                {" "}
                              </span>
                              <span className="text-white-A700 font-helvetica text-left text-xs font-normal">
                                / Profile Overview
                              </span>
                            </Text>
                          </div>
                          <Text
                            className="text-sm text-white-A700"
                            size="txtHelveticaBold14WhiteA700"
                          >
                            Profile Overview
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-row items-center justify-center mr-1 sm:mt-0 mt-1 w-[22%] sm:w-full">
                          <Input
                            name="inputwithaddons"
                            placeholder="Type here..."
                            value={inputwithaddonsvalue}
                            onChange={(e) => setInputwithaddonsvalue(e)}
                            className="p-0 placeholder:text-gray-500 sm:pr-5 text-left text-xs w-full"
                            wrapClassName="border border-gray-300 border-solid flex pr-[35px] rounded-lg w-3/5"
                            prefix={
                              <Img
                                className="cursor-pointer my-auto"
                                src="images/img_search.svg"
                                alt="search"
                              />
                            }
                            suffix={
                              <CloseSVG
                                fillColor="#a0aec0"
                                className="cursor-pointer my-auto"
                                onClick={() => setInputwithaddonsvalue("")}
                                style={{
                                  visibility:
                                    inputwithaddonsvalue?.length <= 0
                                      ? "hidden"
                                      : "visible",
                                }}
                                height={39}
                                width={37}
                                viewBox="0 0 37 39"
                              />
                            }
                            color="white_A700"
                            variant="fill"
                          ></Input>
                          <div className="flex flex-row gap-1 h-4 md:h-auto items-center justify-start ml-[18px] w-[58px]">
                            <Img
                              className="h-3 w-3"
                              src="images/img_ioniconppersondefault_white_a700.svg"
                              alt="ioniconppersond"
                            />
                            <a
                              href="javascript:"
                              className="text-white-A700 text-xs w-10"
                            >
                              <Text size="txtHelveticaBold12WhiteA700">
                                Sign In
                              </Text>
                            </a>
                          </div>
                          <Img
                            className="h-3 ml-[19px] w-3"
                            src="images/img_ioniconssettingssharp_white_a700.svg"
                            alt="ioniconssetting"
                          />
                          <Img
                            className="h-3 ml-[17px] w-3"
                            src="images/img_ioniconnnotif_white_a700.svg"
                            alt="ioniconnnotif"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[120px] items-center justify-end mt-[74px] p-[21px] sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_firstcard.svg')",
                    }}
                  >
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-1 w-[96%] md:w-full">
                      <div className="flex flex-col gap-2 items-center justify-start w-[4%] md:w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center w-[50px]"
                          shape="circle"
                          size="sm"
                          variant="gradient"
                          color="pink_A400_deep_purple_500"
                        >
                          <Img
                            className="h-6"
                            src="images/img_ioniconaaddoutline_white_a700.svg"
                            alt="ioniconaaddoutl"
                          />
                        </Button>
                        <Text
                          className="text-center text-gray-500 text-xs"
                          size="txtHelvetica12"
                        >
                          Add Story
                        </Text>
                      </div>
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-[69px] grid sm:grid-cols-1 grid-cols-12 md:grid-cols-6 w-[92%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[7px] items-center justify-start sm:ml-[0] w-full">
                          <div className="border border-purple-500 border-solid flex flex-col h-[50px] items-center justify-start p-1 rounded-[50%] w-[50px]">
                            <Img
                              className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                              src="images/img_creditstounsplashcom_42x42.png"
                              alt="creditstounspla"
                            />
                          </div>
                          <Text
                            className="text-center text-gray-500 text-xs"
                            size="txtHelvetica12"
                          >
                            Esthera J
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[7px] items-start justify-start sm:ml-[0] w-full">
                          <div className="border border-purple-500 border-solid flex flex-col h-[50px] items-center justify-start p-1 rounded-[50%] w-[50px]">
                            <Img
                              className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                              src="images/img_creditstounsplashcom_6.png"
                              alt="creditstounspla"
                            />
                          </div>
                          <Text
                            className="ml-0.5 md:ml-[0] text-center text-gray-500 text-xs"
                            size="txtHelvetica12"
                          >
                            Borris U
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start sm:ml-[0] w-full">
                          <div className="border border-purple-500 border-solid flex flex-col h-[50px] items-center justify-start p-1 rounded-[50%] w-[50px]">
                            <Img
                              className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                              src="images/img_creditstounsplashcom_7.png"
                              alt="creditstounspla"
                            />
                          </div>
                          <Text
                            className="text-center text-gray-500 text-xs"
                            size="txtHelvetica12"
                          >
                            Kay R
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[7px] items-center justify-start sm:ml-[0] w-full">
                          <div className="border border-purple-500 border-solid flex flex-col h-[50px] items-center justify-start p-1 rounded-[50%] w-[50px]">
                            <Img
                              className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                              src="images/img_creditstounsplashcom_8.png"
                              alt="creditstounspla"
                            />
                          </div>
                          <Text
                            className="text-center text-gray-500 text-xs"
                            size="txtHelvetica12"
                          >
                            Tom M
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[7px] items-start justify-start sm:ml-[0] w-full">
                          <div className="border border-purple-500 border-solid flex flex-col h-[50px] items-center justify-start p-1 rounded-[50%] w-[50px]">
                            <Img
                              className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                              src="images/img_creditstounsplashcom_9.png"
                              alt="creditstounspla"
                            />
                          </div>
                          <Text
                            className="text-center text-gray-500 text-xs"
                            size="txtHelvetica12"
                          >
                            Nicole N
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[7px] items-start justify-start sm:ml-[0] w-full">
                          <div className="border border-purple-500 border-solid flex flex-col h-[50px] items-center justify-start p-1 rounded-[50%] w-[50px]">
                            <Img
                              className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                              src="images/img_creditstounsplashcom_10.png"
                              alt="creditstounspla"
                            />
                          </div>
                          <Text
                            className="md:ml-[0] ml-[3px] text-center text-gray-500 text-xs"
                            size="txtHelvetica12"
                          >
                            Marie P
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[7px] items-center justify-start sm:ml-[0] w-full">
                          <div className="border border-purple-500 border-solid flex flex-col h-[50px] items-center justify-start p-1 rounded-[50%] w-[50px]">
                            <Img
                              className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                              src="images/img_creditstounsplashcom_11.png"
                              alt="creditstounspla"
                            />
                          </div>
                          <Text
                            className="text-center text-gray-500 text-xs"
                            size="txtHelvetica12"
                          >
                            Bruce M
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[7px] items-center justify-start sm:ml-[0] w-full">
                          <div className="border border-purple-500 border-solid flex flex-col h-[50px] items-center justify-start p-1 rounded-[50%] w-[50px]">
                            <Img
                              className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                              src="images/img_creditstounsplashcom_12.png"
                              alt="creditstounspla"
                            />
                          </div>
                          <Text
                            className="text-center text-gray-500 text-xs"
                            size="txtHelvetica12"
                          >
                            Sandra A
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start sm:ml-[0] w-full">
                          <div className="border border-purple-500 border-solid flex flex-col h-[50px] items-center justify-start p-1 rounded-[50%] w-[50px]">
                            <Img
                              className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                              src="images/img_creditstounsplashcom_13.png"
                              alt="creditstounspla"
                            />
                          </div>
                          <Text
                            className="md:ml-[0] ml-[5px] text-center text-gray-500 text-xs"
                            size="txtHelvetica12"
                          >
                            Katty L
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[7px] items-start justify-start sm:ml-[0] w-full">
                          <div className="border border-purple-500 border-solid flex flex-col h-[50px] items-center justify-start p-1 rounded-[50%] w-[50px]">
                            <Img
                              className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                              src="images/img_creditstounsplashcom_14.png"
                              alt="creditstounspla"
                            />
                          </div>
                          <Text
                            className="text-center text-gray-500 text-xs"
                            size="txtHelvetica12"
                          >
                            Emma O
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[7px] items-center justify-start sm:ml-[0] w-full">
                          <div className="border border-purple-500 border-solid flex flex-col h-[50px] items-center justify-start p-1 rounded-[50%] w-[50px]">
                            <Img
                              className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                              src="images/img_creditstounsplashcom_15.png"
                              alt="creditstounspla"
                            />
                          </div>
                          <Text
                            className="text-center text-gray-500 text-xs"
                            size="txtHelvetica12"
                          >
                            Tao G
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[7px] items-start justify-start sm:ml-[0] w-full">
                          <div className="border border-purple-500 border-solid flex flex-col h-[50px] items-center justify-start p-1 rounded-[50%] w-[50px]">
                            <Img
                              className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                              src="images/img_creditstounsplashcom_16.png"
                              alt="creditstounspla"
                            />
                          </div>
                          <Text
                            className="ml-1 md:ml-[0] text-center text-gray-500 text-xs"
                            size="txtHelvetica12"
                          >
                            John M
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-6 w-full">
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col gap-[21px] h-[1166px] items-center justify-start p-[21px] sm:px-5 w-[67%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_firstcard.svg')",
                        }}
                      >
                        <div className="flex h-[802px] md:h-[804px] justify-end mt-0.5 relative w-full">
                          <div className="flex flex-col h-full items-center justify-start mb-[15px] mt-auto mx-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Line className="bg-gradient7  h-px w-full" />
                              <div className="h-[600px] md:h-[688px] mt-[88px] relative w-full">
                                <Img
                                  className="h-[600px] m-auto object-cover rounded-[12px] w-full"
                                  src="images/img_austindistelw.png"
                                  alt="austindistelw"
                                />
                                <div className="absolute bg-gradient10  h-[600px] inset-[0] justify-center m-auto rounded-[12px] w-full"></div>
                              </div>
                              <div className="flex flex-row sm:gap-10 items-start justify-between mt-3.5 w-[97%] md:w-full">
                                <List
                                  className="sm:flex-col flex-row gap-[19px] grid grid-cols-3 w-[15%]"
                                  orientation="horizontal"
                                >
                                  <div className="flex flex-col h-6 md:h-auto items-center justify-center sm:ml-[0] px-2 w-11">
                                    <div className="flex flex-col items-center justify-center w-auto">
                                      <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                        <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                          <Img
                                            className="h-[13px] md:h-auto object-cover w-[13px]"
                                            src="images/img_icon_13x13.png"
                                            alt="icon"
                                          />
                                          <Text
                                            className="bg-clip-text bg-gradient3  text-transparent text-xs w-auto"
                                            size="txtHelveticaBold12Bluegray700"
                                          >
                                            1502
                                          </Text>
                                        </div>
                                      </div>
                                      <Img
                                        className="h-px w-6"
                                        src="images/img_minwidth.svg"
                                        alt="minwidth"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-6 md:h-auto items-center justify-center sm:ml-[0] px-2 w-[31px]">
                                    <div className="flex flex-col items-center justify-center w-auto">
                                      <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                        <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                          <Img
                                            className="h-[13px] w-[13px]"
                                            src="images/img_icon_blue_gray_400.svg"
                                            alt="icon"
                                          />
                                          <Text
                                            className="text-gray-600 text-xs"
                                            size="txtHelveticaBold12Bluegray400"
                                          >
                                            36
                                          </Text>
                                        </div>
                                      </div>
                                      <Img
                                        className="h-px w-6"
                                        src="images/img_minwidth.svg"
                                        alt="minwidth"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-6 md:h-auto items-center justify-center sm:ml-[0] px-2 w-[31px]">
                                    <div className="flex flex-col items-center justify-center w-auto">
                                      <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                        <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                          <Img
                                            className="h-[13px] w-[13px]"
                                            src="images/img_icon_blue_gray_400_13x13.svg"
                                            alt="icon"
                                          />
                                          <Text
                                            className="text-gray-600 text-xs"
                                            size="txtHelveticaBold12Bluegray400"
                                          >
                                            12
                                          </Text>
                                        </div>
                                      </div>
                                      <Img
                                        className="h-px w-6"
                                        src="images/img_minwidth.svg"
                                        alt="minwidth"
                                      />
                                    </div>
                                  </div>
                                </List>
                                <div className="flex flex-row gap-[7px] items-center justify-start w-[15%]">
                                  <div className="flex relative w-[41%]">
                                    <div className="flex my-auto w-[78%]">
                                      <div className="flex my-auto w-[72%]">
                                        <div className="flex flex-col items-center justify-start my-auto w-[18px]">
                                          <div className="flex flex-col items-center justify-start w-[18px] md:w-full">
                                            <Img
                                              className="h-[19px] md:h-auto object-cover rounded-bl-[9px] rounded-br-[9px] w-[18px] sm:w-full"
                                              src="images/img_creditstounsplashcom_19x18.png"
                                              alt="creditstounspla"
                                            />
                                          </div>
                                        </div>
                                        <div className="flex flex-col h-[19px] items-center justify-start ml-[-5.85px] my-auto w-[19px] z-[1]">
                                          <div className="flex flex-col h-[19px] items-center justify-start outline outline-[2px] outline-white-A700 rounded-[9px] w-[19px]">
                                            <Img
                                              className="h-[19px] md:h-auto rounded-[50%] w-[19px]"
                                              src="images/img_creditstounsplashcom_17.png"
                                              alt="creditstounspla_One"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col h-[19px] items-start justify-start ml-[-6.28px] my-auto outline outline-[2px] outline-white-A700 rounded-[9px] w-[19px] z-[1]">
                                        <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                                          <Img
                                            className="h-[19px] md:h-auto object-cover rounded-bl-[9px] rounded-br-[9px] w-full"
                                            src="images/img_creditstopexelscom_19x17.png"
                                            alt="creditstopexels"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col h-[19px] items-center justify-start ml-[-6.27px] my-auto outline outline-[2px] outline-white-A700 rounded-[9px] w-[19px] z-[1]">
                                      <Img
                                        className="h-[19px] md:h-auto rounded-[50%] w-[19px]"
                                        src="images/img_elipse5_1.png"
                                        alt="elipseFive"
                                      />
                                    </div>
                                  </div>
                                  <Text
                                    className="text-gray-600 text-xs"
                                    size="txtHelveticaBold12Bluegray400"
                                  >
                                    and 30+ more
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                                <div className="flex flex-row gap-[15px] items-center justify-between w-[17%]">
                                  <div className="bg-teal-400 flex flex-col h-[38px] items-center justify-start rounded-bl-[12px] rounded-br-[12px] rounded-tl-lg rounded-tr-lg shadow-bs w-[38px]">
                                    <Img
                                      className="h-[38px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] rounded-tl-lg rounded-tr-lg w-[38px]"
                                      src="images/img_creditstounsplashcom_38x38.png"
                                      alt="creditstounspla_Two"
                                    />
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      Esthera Jackson
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-gray-600 text-sm"
                                      size="txtHelvetica14Bluegray400"
                                    >
                                      3 days ago
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-gradient4  flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg w-[134px]">
                                  <div className="flex flex-col items-center justify-center w-auto">
                                    <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                      <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                        <Img
                                          className="h-[17px] w-[18px]"
                                          src="images/img_ioniconaaddoutline_white_a700.svg"
                                          alt="icon"
                                        />
                                        <Text
                                          className="text-[10px] text-center text-white-A700 w-11"
                                          size="txtHelveticaBold10"
                                        >
                                          FOLLOW
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      className="h-px w-6"
                                      src="images/img_minwidth.svg"
                                      alt="minwidth_One"
                                    />
                                  </div>
                                </div>
                              </div>
                              <Text
                                className="leading-[150.00%] mt-[42px] text-gray-500 text-sm w-[92%] sm:w-full"
                                size="txtHelvetica14"
                              >
                                Personal profiles are the perfect way for you to
                                grab their attention and persuade recruiters to
                                continue reading your CV because you’re telling
                                them from the off exactly why they should hire
                                you.
                              </Text>
                              <Line className="bg-gradient7  h-px ml-1 md:ml-[0] mt-[687px] w-full" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[31px] items-start justify-start mb-1 w-full">
                          <List
                            className="flex flex-col gap-[23px] w-[87%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-col gap-[9px] justify-start mr-[35px] my-0 w-[97%] md:w-full">
                              <div className="flex md:flex-col flex-row gap-[15px] items-end justify-between w-full">
                                <div className="bg-teal-400 flex flex-col h-[50px] items-center justify-start rounded-[50%] shadow-bs w-[50px]">
                                  <Img
                                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                    src="images/img_creditstounsplashcom_18.png"
                                    alt="creditstounspla"
                                  />
                                </div>
                                <div className="flex flex-col gap-2.5 items-start justify-start md:mt-0 mt-[7px]">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    Michael Lewis
                                  </Text>
                                  <Text
                                    className="text-gray-600 text-sm"
                                    size="txtHelvetica14Bluegray400"
                                  >
                                    I always felt like I could do anything.
                                    That’s the main thing people are controlled
                                    by! Thoughts- their perception of
                                    themselves!
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[21px] items-center justify-start ml-16 md:ml-[0] w-[18%] md:w-full">
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center px-2 w-[61px]">
                                  <div className="flex flex-col items-center justify-center w-auto">
                                    <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                      <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                        <Img
                                          className="h-[13px] w-[13px]"
                                          src="images/img_icon_1.svg"
                                          alt="icon"
                                        />
                                        <Text
                                          className="text-gray-600 text-xs w-auto"
                                          size="txtHelvetica12Bluegray400"
                                        >
                                          32 likes
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      className="h-px w-6"
                                      src="images/img_minwidth.svg"
                                      alt="minwidth"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center px-2 w-[66px]">
                                  <div className="flex flex-col items-center justify-center w-auto">
                                    <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                      <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                        <Img
                                          className="h-[13px] w-[13px]"
                                          src="images/img_icon_blue_gray_400_13x13.svg"
                                          alt="icon_One"
                                        />
                                        <Text
                                          className="text-gray-600 text-xs w-auto"
                                          size="txtHelvetica12Bluegray400"
                                        >
                                          4 shares
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      className="h-px w-6"
                                      src="images/img_minwidth.svg"
                                      alt="minwidth_One"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 justify-start my-0 w-full">
                              <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between w-full">
                                <div className="bg-teal-400 flex flex-col h-[50px] items-center justify-start mb-[22px] rounded-[50%] shadow-bs w-[50px]">
                                  <Img
                                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                    src="images/img_creditstounsplashcom_19.png"
                                    alt="creditstounspla"
                                  />
                                </div>
                                <div className="flex flex-col gap-2 items-start justify-start md:mt-0 mt-1.5">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    Jessica Stones
                                  </Text>
                                  <Text
                                    className="leading-[140.00%] text-gray-600 text-sm w-full"
                                    size="txtHelvetica14Bluegray400"
                                  >
                                    Society has put up so many boundaries, so
                                    many limitations on what’s right and wrong
                                    that it’s almost impossible to get a pure
                                    thought out. It’s like a little kid, a
                                    little boy.
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[21px] items-center justify-start ml-16 md:ml-[0] w-[17%] md:w-full">
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center px-2 w-[61px]">
                                  <div className="flex flex-col items-center justify-center w-auto">
                                    <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                      <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                        <Img
                                          className="h-[13px] w-[13px]"
                                          src="images/img_icon_1.svg"
                                          alt="icon"
                                        />
                                        <Text
                                          className="text-gray-600 text-xs w-auto"
                                          size="txtHelvetica12Bluegray400"
                                        >
                                          32 likes
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      className="h-px w-6"
                                      src="images/img_minwidth.svg"
                                      alt="minwidth"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center px-2 w-[66px]">
                                  <div className="flex flex-col items-center justify-center w-auto">
                                    <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                      <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                        <Img
                                          className="h-[13px] w-[13px]"
                                          src="images/img_icon_blue_gray_400_13x13.svg"
                                          alt="icon_One"
                                        />
                                        <Text
                                          className="text-gray-600 text-xs w-auto"
                                          size="txtHelvetica12Bluegray400"
                                        >
                                          4 shares
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      className="h-px w-6"
                                      src="images/img_minwidth.svg"
                                      alt="minwidth_One"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                          <div className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-full">
                            <div className="bg-teal-400 flex flex-col h-[50px] items-center justify-start rounded-[50%] shadow-bs w-[50px]">
                              <Img
                                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                src="images/img_creditstounsplashcom_20.png"
                                alt="creditstounspla_Three"
                              />
                            </div>
                            <Input
                              name="inputwithaddons_One"
                              placeholder="Write your comment..."
                              className="md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-left text-xs w-full"
                              wrapClassName="border border-gray-300 border-solid md:flex-1 md:mt-0 my-[5px] md:w-full"
                              shape="round"
                              color="white_A700"
                              size="lg"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[33%] md:w-full">
                        <List
                          className="flex flex-col gap-6 items-center w-full"
                          orientation="vertical"
                        >
                          <div
                            className="bg-cover bg-no-repeat md:h-[266px] h-[324px] my-0 p-[21px] sm:px-5 relative w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                              <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start">
                                  <Text
                                    className="text-gray-800 text-lg"
                                    size="txtHelveticaBold18"
                                  >
                                    Digital Marketing
                                  </Text>
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    A group of people who collectively are
                                    responsible for all of the work necessary to
                                    produce working, validated assets.
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                                      <div className="flex flex-row items-center justify-between w-full">
                                        <Text
                                          className="text-gray-500 text-xs"
                                          size="txtHelveticaBold12"
                                        >
                                          Industry:
                                        </Text>
                                        <div className="bg-gray-200 flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-[12px] w-[134px]">
                                          <div className="flex flex-col items-center justify-center w-auto">
                                            <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                              <div className="flex flex-col items-center justify-center w-auto">
                                                <Text
                                                  className="text-[10px] text-center text-gray-800 w-auto"
                                                  size="txtHelveticaBold10Bluegray900"
                                                >
                                                  MARKETING TEAM
                                                </Text>
                                              </div>
                                            </div>
                                            <Img
                                              className="h-px w-6"
                                              src="images/img_minwidth.svg"
                                              alt="minwidth"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <Line className="bg-gradient7  h-px w-full" />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                                    <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                                      <div className="flex flex-row items-start justify-between w-full">
                                        <Text
                                          className="text-gray-500 text-xs"
                                          size="txtHelveticaBold12"
                                        >
                                          Rating:
                                        </Text>
                                        <div className="flex flex-row items-center justify-evenly">
                                          <Img
                                            className="h-3.5 w-3.5"
                                            src="images/img_ioniconsstardefault.svg"
                                            alt="ioniconsstardef"
                                          />
                                          <Img
                                            className="h-3.5 w-3.5"
                                            src="images/img_ioniconsstardefault.svg"
                                            alt="ioniconsstardef_One"
                                          />
                                          <Img
                                            className="h-3.5 w-3.5"
                                            src="images/img_ioniconsstardefault.svg"
                                            alt="ioniconsstardef_Two"
                                          />
                                          <Img
                                            className="h-3.5 w-3.5"
                                            src="images/img_ioniconsstardefault.svg"
                                            alt="ioniconsstardef_Three"
                                          />
                                          <Img
                                            className="h-3.5 w-3.5"
                                            src="images/img_airplane.svg"
                                            alt="airplane"
                                          />
                                        </div>
                                      </div>
                                      <Line className="bg-gradient7  h-px w-[99%]" />
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-center justify-between mt-4 w-full">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      Members:
                                    </Text>
                                    <div className="flex py-0.5 relative w-[16%]">
                                      <div className="flex my-auto w-[78%]">
                                        <div className="flex my-auto w-[72%]">
                                          <div className="flex flex-col h-6 items-center justify-start my-auto w-6">
                                            <div className="flex flex-col h-6 items-center justify-start w-6">
                                              <Img
                                                className="h-6 md:h-auto object-cover rounded-bl-[50%] rounded-br-[50%] w-6"
                                                src="images/img_creditstounsplashcom_24x24.png"
                                                alt="creditstounspla"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex flex-col h-6 items-center justify-start ml-[-7.47px] my-auto w-6 z-[1]">
                                            <div className="flex flex-col h-6 items-center justify-start outline outline-[2px] outline-white-A700 rounded-[50%] w-6">
                                              <Img
                                                className="h-6 md:h-auto object-cover rounded-[50%] w-6"
                                                src="images/img_creditstounsplashcom_21.png"
                                                alt="creditstounspla_One"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col h-6 items-start justify-start ml-[-8.01px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                                          <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                                            <Img
                                              className="h-6 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                                              src="images/img_creditstopexelscom_24x22.png"
                                              alt="creditstopexels"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col h-6 items-center justify-start ml-[-8px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                                        <Img
                                          className="h-6 md:h-auto object-cover rounded-[50%] w-6"
                                          src="images/img_elipse5_24x24.png"
                                          alt="elipseFive"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex flex-col h-5 items-center justify-start right-[6%] top-[6%] w-5">
                              <Img
                                className="h-5 w-5"
                                src="images/img_morevert.svg"
                                alt="morevert"
                              />
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat md:h-[266px] h-[324px] my-0 p-[21px] sm:px-5 relative w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                              <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start">
                                  <Text
                                    className="text-gray-800 text-lg"
                                    size="txtHelveticaBold18"
                                  >
                                    Design
                                  </Text>
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    <>
                                      Because it&#39;s about motivating the
                                      doers. Because I’m here to follow my
                                      dreams and inspire other people to follow
                                      their dreams, too.
                                    </>
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                                      <div className="flex flex-row items-center justify-between w-full">
                                        <Text
                                          className="text-gray-500 text-xs"
                                          size="txtHelveticaBold12"
                                        >
                                          Industry:
                                        </Text>
                                        <div className="bg-gray-200 flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-[12px] w-[134px]">
                                          <div className="flex flex-col items-center justify-center w-auto">
                                            <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                              <div className="flex flex-col items-center justify-center w-auto">
                                                <Text
                                                  className="text-[10px] text-center text-gray-800 w-auto"
                                                  size="txtHelveticaBold10Bluegray900"
                                                >
                                                  DESIGN TEAM
                                                </Text>
                                              </div>
                                            </div>
                                            <Img
                                              className="h-px w-6"
                                              src="images/img_minwidth.svg"
                                              alt="minwidth"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <Line className="bg-gradient7  h-px w-full" />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                                    <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                                      <div className="flex flex-row items-start justify-between w-full">
                                        <Text
                                          className="text-gray-500 text-xs"
                                          size="txtHelveticaBold12"
                                        >
                                          Rating:
                                        </Text>
                                        <div className="flex flex-row items-center justify-evenly">
                                          <Img
                                            className="h-3.5 w-3.5"
                                            src="images/img_ioniconsstardefault.svg"
                                            alt="ioniconsstardef"
                                          />
                                          <Img
                                            className="h-3.5 w-3.5"
                                            src="images/img_ioniconsstardefault.svg"
                                            alt="ioniconsstardef_One"
                                          />
                                          <Img
                                            className="h-3.5 w-3.5"
                                            src="images/img_ioniconsstardefault.svg"
                                            alt="ioniconsstardef_Two"
                                          />
                                          <Img
                                            className="h-3.5 w-3.5"
                                            src="images/img_ioniconsstardefault.svg"
                                            alt="ioniconsstardef_Three"
                                          />
                                          <Img
                                            className="h-3.5 w-3.5"
                                            src="images/img_airplane.svg"
                                            alt="airplane"
                                          />
                                        </div>
                                      </div>
                                      <Line className="bg-gradient7  h-px w-[99%]" />
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-center justify-between mt-4 w-full">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      Members:
                                    </Text>
                                    <div className="flex py-0.5 relative w-[16%]">
                                      <div className="flex my-auto w-[78%]">
                                        <div className="flex my-auto w-[72%]">
                                          <div className="flex flex-col h-6 items-center justify-start my-auto w-6">
                                            <div className="flex flex-col h-6 items-center justify-start w-6">
                                              <Img
                                                className="h-6 md:h-auto object-cover rounded-bl-[50%] rounded-br-[50%] w-6"
                                                src="images/img_creditstounsplashcom_24x24.png"
                                                alt="creditstounspla"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex flex-col h-6 items-center justify-start ml-[-7.47px] my-auto w-6 z-[1]">
                                            <div className="flex flex-col h-6 items-center justify-start outline outline-[2px] outline-white-A700 rounded-[50%] w-6">
                                              <Img
                                                className="h-6 md:h-auto object-cover rounded-[50%] w-6"
                                                src="images/img_creditstounsplashcom_21.png"
                                                alt="creditstounspla_One"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col h-6 items-start justify-start ml-[-8.01px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                                          <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                                            <Img
                                              className="h-6 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                                              src="images/img_creditstopexelscom_24x22.png"
                                              alt="creditstopexels"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col h-6 items-center justify-start ml-[-8px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                                        <Img
                                          className="h-6 md:h-auto object-cover rounded-[50%] w-6"
                                          src="images/img_elipse5_2.png"
                                          alt="elipseFive"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex flex-col h-5 items-center justify-start right-[6%] top-[6%] w-5">
                              <Img
                                className="h-5 w-5"
                                src="images/img_morevert.svg"
                                alt="morevert"
                              />
                            </div>
                          </div>
                        </List>
                        <List
                          className="flex flex-col gap-6 items-center w-full"
                          orientation="vertical"
                        >
                          <div
                            className="bg-cover bg-no-repeat flex flex-1 flex-col gap-6 h-[223px] items-start justify-start p-[21px] sm:px-5 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex flex-row gap-3.5 items-start justify-start w-[41%] md:w-full">
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_grid.svg"
                                    alt="grid"
                                  />
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-base text-gray-800"
                                      size="txtHelveticaBold16"
                                    >
                                      Slack Meet
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-gray-500 text-xs"
                                      size="txtHelvetica12"
                                    >
                                      11:00 AM
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="mt-[21px] text-gray-500 text-sm"
                                  size="txtHelvetica14"
                                >
                                  You have an upcoming meet for Marketing
                                  Planning
                                </Text>
                                <Text
                                  className="mt-3.5 text-gray-800 text-sm"
                                  size="txtHelveticaBold14"
                                >
                                  <span className="text-gray-800 font-helvetica text-left font-bold">
                                    Meeting ID:{" "}
                                  </span>
                                  <span className="text-gray-500 font-helvetica text-left font-bold">
                                    111-968-981
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <div className="md:h-[41px] h-[49px] relative w-full">
                              <div className="absolute flex flex-col gap-4 inset-x-[0] items-end justify-start mx-auto top-[0] w-full">
                                <Line className="bg-gradient7  h-px w-full" />
                                <div className="flex py-0.5 relative w-[16%]">
                                  <div className="flex my-auto w-[78%]">
                                    <div className="flex my-auto w-[72%]">
                                      <div className="flex flex-col h-6 items-center justify-start my-auto w-6">
                                        <div className="flex flex-col h-6 items-center justify-start w-6">
                                          <Img
                                            className="h-6 md:h-auto object-cover rounded-bl-[50%] rounded-br-[50%] w-6"
                                            src="images/img_creditstounsplashcom_24x24.png"
                                            alt="creditstounspla"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col h-6 items-center justify-start ml-[-7.47px] my-auto w-6 z-[1]">
                                        <div className="flex flex-col h-6 items-center justify-start outline outline-[2px] outline-white-A700 rounded-[50%] w-6">
                                          <Img
                                            className="h-6 md:h-auto object-cover rounded-[50%] w-6"
                                            src="images/img_creditstounsplashcom_21.png"
                                            alt="creditstounspla_One"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col h-6 items-start justify-start ml-[-8.01px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                                      <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                                        <Img
                                          className="h-6 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                                          src="images/img_creditstopexelscom_24x22.png"
                                          alt="creditstopexels"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-6 items-center justify-start ml-[-8px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                                    <Img
                                      className="h-6 md:h-auto object-cover rounded-[50%] w-6"
                                      src="images/img_elipse5_2.png"
                                      alt="elipseFive"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bg-gradient4  bottom-[0] flex flex-col h-[35px] md:h-auto items-center justify-center left-[0] px-2 rounded-lg w-[90px]">
                                <div className="flex flex-col items-center justify-center w-6">
                                  <div className="flex flex-col h-6 md:h-auto items-center justify-start w-6">
                                    <div className="flex flex-col items-center justify-center w-auto">
                                      <Text
                                        className="text-[10px] text-center text-white-A700 w-auto"
                                        size="txtHelveticaBold10"
                                      >
                                        JOIN
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-px w-6"
                                    src="images/img_minwidth.svg"
                                    alt="minwidth"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-1 flex-col gap-6 h-[223px] items-start justify-start p-[21px] sm:px-5 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="flex flex-col items-center justify-start w-[81%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex flex-row gap-3.5 items-start justify-start w-[29%] md:w-full">
                                  <Button
                                    className="flex h-[33px] items-center justify-center mb-0.5 rounded-[3px] w-[33px]"
                                    color="pink_500"
                                    size="xs"
                                    variant="fill"
                                  >
                                    <Img
                                      src="images/img_vector.svg"
                                      alt="vector"
                                    />
                                  </Button>
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-base text-gray-800"
                                      size="txtHelveticaBold16"
                                    >
                                      Invision
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-gray-500 text-xs"
                                      size="txtHelvetica12"
                                    >
                                      04:50 PM
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="mt-[21px] text-gray-500 text-sm"
                                  size="txtHelvetica14"
                                >
                                  You have an upcoming video call for Soft
                                  Design at 04:50 PM.
                                </Text>
                                <Text
                                  className="mt-[15px] text-gray-800 text-sm"
                                  size="txtHelveticaBold14"
                                >
                                  <span className="text-gray-800 font-helvetica text-left font-bold">
                                    Meeting ID:{" "}
                                  </span>
                                  <span className="text-gray-500 font-helvetica text-left font-bold">
                                    131-892-623
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <div className="md:h-[41px] h-[49px] relative w-full">
                              <div className="absolute flex flex-col gap-4 inset-x-[0] items-end justify-start mx-auto top-[0] w-full">
                                <Line className="bg-gradient7  h-px w-full" />
                                <div className="flex py-0.5 relative w-[16%]">
                                  <div className="flex my-auto w-[78%]">
                                    <div className="flex my-auto w-[72%]">
                                      <div className="flex flex-col h-6 items-center justify-start my-auto w-6">
                                        <div className="flex flex-col h-6 items-center justify-start w-6">
                                          <Img
                                            className="h-6 md:h-auto object-cover rounded-bl-[50%] rounded-br-[50%] w-6"
                                            src="images/img_creditstounsplashcom_24x24.png"
                                            alt="creditstounspla"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col h-6 items-center justify-start ml-[-7.47px] my-auto w-6 z-[1]">
                                        <div className="flex flex-col h-6 items-center justify-start outline outline-[2px] outline-white-A700 rounded-[50%] w-6">
                                          <Img
                                            className="h-6 md:h-auto object-cover rounded-[50%] w-6"
                                            src="images/img_creditstounsplashcom_21.png"
                                            alt="creditstounspla_One"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col h-6 items-start justify-start ml-[-8.01px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                                      <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                                        <Img
                                          className="h-6 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                                          src="images/img_creditstopexelscom_24x22.png"
                                          alt="creditstopexels"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-6 items-center justify-start ml-[-8px] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6 z-[1]">
                                    <Img
                                      className="h-6 md:h-auto object-cover rounded-[50%] w-6"
                                      src="images/img_elipse5_2.png"
                                      alt="elipseFive"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bg-gradient4  bottom-[0] flex flex-col h-[35px] md:h-auto items-center justify-center left-[0] px-2 rounded-lg w-[90px]">
                                <div className="flex flex-col items-center justify-center w-6">
                                  <div className="flex flex-col h-6 md:h-auto items-center justify-start w-6">
                                    <div className="flex flex-col items-center justify-center w-auto">
                                      <Text
                                        className="text-[10px] text-center text-white-A700 w-auto"
                                        size="txtHelveticaBold10"
                                      >
                                        JOIN
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-px w-6"
                                    src="images/img_minwidth.svg"
                                    alt="minwidth"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[25px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtHelvetica12"
                      >
                        <span className="text-gray-500 font-helvetica text-left font-normal">
                          @ 2021, Made with ❤️ by{" "}
                        </span>
                        <span className="text-blue_gray-800 font-helvetica text-left font-bold">
                          Creative Tim
                        </span>
                        <span className="text-gray-500 font-helvetica text-left font-normal">
                          {" "}
                          for a better web.
                        </span>
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-row items-start justify-between w-[14%] sm:w-full">
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtHelvetica12"
                      >
                        Creative Tim
                      </Text>
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtHelvetica12"
                      >
                        Blog
                      </Text>
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtHelvetica12"
                      >
                        License
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[113px] inset-x-[0] items-center justify-end mx-auto p-[11px] top-[14%] w-[97%]"
                style={{
                  backgroundImage: "url('images/img_profileelements.png')",
                }}
              >
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[5px] w-[99%] md:w-full">
                  <div className="flex flex-row gap-[17px] items-center justify-between w-[16%] md:w-full">
                    <div className="md:h-20 h-[85px] relative w-[85px]">
                      <div className="absolute bg-gray-400 flex flex-col h-20 items-center justify-start left-[0] rounded-lg top-[0] w-20">
                        <div className="h-20 relative w-20">
                          <Img
                            className="h-20 m-auto object-cover rounded-[12px] w-20"
                            src="images/img_creditstounsplashcom_80x80.png"
                            alt="creditstounspla_Four"
                          />
                          <Img
                            className="absolute h-20 inset-[0] justify-center m-auto object-cover rounded-[12px] w-20"
                            src="images/img_brucemars1.png"
                            alt="brucemarsOne"
                          />
                        </div>
                      </div>
                      <Button
                        className="absolute bottom-[0] flex h-[26px] items-center justify-center right-[0] rounded-lg w-[26px]"
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-3"
                          src="images/img_edit.png"
                          alt="edit"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-800 text-lg"
                        size="txtHelveticaBold18"
                      >
                        Alec Thompson
                      </Text>
                      <Text
                        className="mt-0.5 text-gray-600 text-sm"
                        size="txtHelvetica14Bluegray400"
                      >
                        CEO / Co-Founder
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-[27%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg hover:shadow-bs2 shadow-bs2 w-[134px] hover:w-full">
                      <div className="flex flex-col items-center justify-center w-auto">
                        <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                          <div className="flex flex-row gap-1 items-center justify-center w-auto">
                            <Img
                              className="h-[11px] w-[11px]"
                              src="images/img_icon.svg"
                              alt="icon"
                            />
                            <Text
                              className="text-[10px] text-center text-gray-800 w-[54px]"
                              size="txtHelveticaBold10Bluegray900"
                            >
                              OVERVIEW
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-px w-6"
                          src="images/img_minwidth.svg"
                          alt="minwidth"
                        />
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-col h-[35px] md:h-auto items-center justify-center px-2 hover:shadow-bs2 w-[134px] hover:w-full">
                      <div className="flex flex-col items-center justify-center w-auto">
                        <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                          <div className="flex flex-row gap-1 items-center justify-center w-auto">
                            <Img
                              className="h-[11px] w-[11px]"
                              src="images/img_icon_black_900.svg"
                              alt="icon"
                            />
                            <Text
                              className="text-[10px] text-center text-gray-800 w-[35px]"
                              size="txtHelveticaBold10Bluegray900"
                            >
                              TEAMS
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-px w-6"
                          src="images/img_minwidth.svg"
                          alt="minwidth"
                        />
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-col h-[35px] md:h-auto items-center justify-center px-2 hover:shadow-bs2 w-[134px] hover:w-full">
                      <div className="flex flex-col items-center justify-center w-auto">
                        <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                          <div className="flex flex-row gap-1 items-center justify-center w-auto">
                            <Img
                              className="h-[11px] w-[11px]"
                              src="images/img_icon_blue_gray_900.svg"
                              alt="icon"
                            />
                            <Text
                              className="text-[10px] text-center text-gray-800 w-[54px]"
                              size="txtHelveticaBold10Bluegray900"
                            >
                              PROJECTS
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-px w-6"
                          src="images/img_minwidth.svg"
                          alt="minwidth"
                        />
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreenTeamsPage;
