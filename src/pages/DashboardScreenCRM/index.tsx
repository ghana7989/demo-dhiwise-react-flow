import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardScreenCRMButtondefault from "components/DashboardScreenCRMButtondefault";
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

const DashboardScreenCRMPage: React.FC = () => {
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
            className="bg-cover bg-no-repeat flex flex-col h-[1326px] items-center justify-start p-[19px] w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between mx-auto my-1 md:px-5 w-full">
              <Sidebar1 className="!sticky !w-[236px] flex h-screen md:hidden justify-start md:mt-0 mt-2 overflow-auto top-[0]" />
              <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-[98%] md:w-full">
                  <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-1 w-[6%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-[79px]">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                          size="txtHelvetica24"
                        >
                          <span className="text-gray-500 font-helvetica text-left font-normal">
                            Pages{" "}
                          </span>
                          <span className="text-black-900 font-helvetica text-left font-normal">
                            {" "}
                          </span>
                          <span className="text-gray-800 font-helvetica text-left text-xs font-normal">
                            / CRM
                          </span>
                        </Text>
                      </div>
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtHelveticaBold14"
                      >
                        CRM
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-row items-center justify-between mb-[11px] md:ml-[0] ml-[1144px] w-[22%] md:w-full">
                      <Input
                        name="inputwithaddons"
                        placeholder="Type here..."
                        value={inputwithaddonsvalue}
                        onChange={(e) => setInputwithaddonsvalue(e)}
                        className="p-0 placeholder:text-gray-500 sm:pr-5 text-left text-xs w-full"
                        wrapClassName="border border-gray-300 border-solid flex pr-[35px]"
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
                        shape="round"
                        color="white_A700"
                        variant="fill"
                      ></Input>
                      <div className="flex flex-row gap-1 h-4 md:h-auto items-center justify-start w-[58px]">
                        <Img
                          className="h-3 w-3"
                          src="images/img_ioniconppersondefault.svg"
                          alt="ioniconppersond"
                        />
                        <a
                          href="javascript:"
                          className="text-gray-600 text-xs w-10"
                        >
                          <Text size="txtHelveticaBold12Bluegray400">
                            Sign In
                          </Text>
                        </a>
                      </div>
                      <Img
                        className="h-3 w-3"
                        src="images/img_ioniconssettingssharp.svg"
                        alt="ioniconssetting"
                      />
                      <Img
                        className="h-3 w-3"
                        src="images/img_ioniconnnotif.svg"
                        alt="ioniconnnotif"
                      />
                    </div>
                  </header>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-800"
                    size="txtHelveticaBold32"
                  >
                    General Statistics
                  </Text>
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[66%] md:w-full">
                          <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                            <List
                              className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                              orientation="horizontal"
                            >
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[184px] items-center justify-end sm:ml-[0] p-[15px] w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_firstcard.svg')",
                                }}
                              >
                                <div className="flex flex-col gap-[11px] items-start justify-start mt-1 w-[96%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-[31%] md:w-full">
                                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                                      <Text
                                        className="text-gray-500 text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        Visitors
                                      </Text>
                                      <div className="flex flex-row gap-[5px] items-center justify-between w-full">
                                        <Text
                                          className="text-gray-800 text-lg"
                                          size="txtHelveticaBold18"
                                        >
                                          5,927
                                        </Text>
                                        <Text
                                          className="text-green-500 text-sm"
                                          size="txtHelveticaBold14Green400"
                                        >
                                          +55%
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col gap-[37px] items-center justify-start">
                                        <Text
                                          className="h-3 text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray100"
                                        >
                                          80
                                        </Text>
                                        <Text
                                          className="h-3 text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray100"
                                        >
                                          40
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-center justify-start w-[95%]">
                                        <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                          <div
                                            className="bg-cover bg-no-repeat flex flex-col h-[72px] items-center justify-start w-[93%] md:w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group1840.svg')",
                                            }}
                                          >
                                            <Img
                                              className="h-[71px] md:h-auto object-cover"
                                              src="images/img_teal.png"
                                              alt="teal"
                                            />
                                          </div>
                                          <div className="flex flex-row items-start justify-between w-full">
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Apr
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              May
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Jun
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Jul
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Aug
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Sep
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Oct
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Nov
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Dec
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[184px] items-center justify-start sm:ml-[0] p-[11px] w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_firstcard.svg')",
                                }}
                              >
                                <div className="flex flex-col gap-[11px] justify-start mb-1 mt-2 w-[97%] md:w-full">
                                  <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] w-[39%] md:w-full">
                                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                                      <Text
                                        className="text-gray-500 text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        Income
                                      </Text>
                                      <div className="flex flex-row items-start justify-evenly w-full">
                                        <Text
                                          className="text-gray-800 text-lg"
                                          size="txtHelveticaBold18"
                                        >
                                          $130,912
                                        </Text>
                                        <Text
                                          className="mt-0.5 text-green-500 text-sm"
                                          size="txtHelveticaBold14Green400"
                                        >
                                          +90%
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col gap-[38px] items-end justify-start">
                                        <Text
                                          className="text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray100"
                                        >
                                          $200
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray100"
                                        >
                                          $50
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-center justify-start w-[92%]">
                                        <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                          <div
                                            className="bg-cover bg-no-repeat flex flex-col h-[72px] items-center justify-start w-[93%] md:w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group1840.svg')",
                                            }}
                                          >
                                            <Img
                                              className="h-[71px] md:h-auto object-cover"
                                              src="images/img_teal.png"
                                              alt="teal"
                                            />
                                          </div>
                                          <div className="flex flex-row items-start justify-between w-full">
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Apr
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              May
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Jun
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Jul
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Aug
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Sep
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Oct
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Nov
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray100"
                                            >
                                              Dec
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </List>
                            <div
                              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[184px] items-center justify-start p-[59px] md:px-10 sm:px-5 w-[32%] md:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_firstcard.svg')",
                              }}
                            >
                              <div className="flex flex-col gap-[13px] items-center justify-start w-[34%] md:w-full">
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_ioniconaaddoutline.svg"
                                  alt="ioniconaaddoutl"
                                />
                                <Text
                                  className="text-center text-gray-600 text-lg"
                                  size="txtHelveticaBold18Bluegray400"
                                >
                                  New Tab
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[570px] items-center justify-end p-[21px] sm:px-5 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] mt-[9px] w-full">
                              <div className="flex flex-col gap-2.5 items-start justify-start">
                                <Text
                                  className="text-gray-800 text-lg"
                                  size="txtHelveticaBold18"
                                >
                                  Calendar
                                </Text>
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtHelvetica14"
                                >
                                  Wednesday, 2021
                                </Text>
                              </div>
                              <div className="flex flex-col font-roboto gap-[5px] items-center justify-start md:ml-[0] ml-[3px] rotate-[-90deg] w-full">
                                <List
                                  className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-center w-full"
                                  orientation="horizontal"
                                >
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-[143px]">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[143px]">
                                      <div className="absolute bg-white-A700 h-3.5 inset-[0] m-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Mon
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-[143px]">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[142px]">
                                      <div className="absolute bg-white-A700 h-3.5 inset-[0] m-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Tue
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-36">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[141px]">
                                      <div className="absolute bg-white-A700 bottom-[0] h-3.5 inset-x-[0] mx-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Wed
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-[142px]">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[142px]">
                                      <div className="absolute bg-white-A700 bottom-[0] h-3.5 inset-x-[0] mx-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Thu
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-[143px]">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[143px]">
                                      <div className="absolute bg-white-A700 bottom-[1%] h-3.5 inset-x-[0] mx-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Fri
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-[142px]">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[141px]">
                                      <div className="absolute bg-white-A700 h-3.5 inset-[0] m-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Sat
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-[143px]">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[143px]">
                                      <div className="absolute bg-white-A700 h-3.5 inset-[0] m-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Sun
                                      </Text>
                                    </div>
                                  </div>
                                </List>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                                      <div className="md:h-[1504px] h-[341px] sm:h-[423px] relative w-[86%] md:w-full">
                                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                          <div className="flex flex-col relative w-full">
                                            <div className="md:h-[289px] h-[85px] mx-auto w-full">
                                              <div className="md:h-[289px] h-[85px] m-auto w-full">
                                                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                                                    <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                      <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                        <Text
                                                          className="h-[19px] mb-[54px] rotate-[90deg] text-base text-gray-500 text-right"
                                                          size="txtRobotoMedium16"
                                                        >
                                                          28
                                                        </Text>
                                                      </div>
                                                    </div>
                                                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[430px] rotate-[90deg] w-[17%] md:w-full">
                                                      <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                        <Text
                                                          className="mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                          size="txtRobotoMedium16Bluegray900"
                                                        >
                                                          2
                                                        </Text>
                                                      </div>
                                                    </div>
                                                    <div className="bg-gray-100 flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                      <div className="bg-gray-50 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                        <Text
                                                          className="mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                          size="txtRobotoMedium16Bluegray900"
                                                        >
                                                          3
                                                        </Text>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[17%] my-auto rotate-[90deg] w-[17%]">
                                                  <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                    <Text
                                                      className="h-[19px] mb-[55px] rotate-[90deg] text-base text-gray-500 text-right"
                                                      size="txtRobotoMedium16"
                                                    >
                                                      29
                                                    </Text>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[33%] rotate-[90deg] w-[17%]">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="md"
                                                  variant="fill"
                                                >
                                                  1
                                                </Button>
                                              </div>
                                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[33%] my-auto rotate-[90deg] w-[17%]">
                                                <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                  <Text
                                                    className="h-[19px] mb-[54px] rotate-[90deg] text-base text-gray-500 text-right"
                                                    size="txtRobotoMedium16"
                                                  >
                                                    30
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                            <Button
                                              className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] ml-auto mt-[-0.7px] rotate-[90deg] text-base text-center z-[1]"
                                              shape="square"
                                              color="gray_50"
                                              size="md"
                                              variant="fill"
                                            >
                                              10
                                            </Button>
                                            <div className="flex flex-col items-center justify-start ml-auto mr-[143px] mt-[-0.7px] rotate-[90deg] w-[17%] z-[1]">
                                              <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                <Text
                                                  className="mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                  size="txtRobotoMedium16Bluegray900"
                                                >
                                                  9
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start ml-auto mr-[287px] mt-[-0.7px] rotate-[90deg] w-[17%] z-[1]">
                                              <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                <Text
                                                  className="mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                  size="txtRobotoMedium16Bluegray900"
                                                >
                                                  8
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start ml-[287px] mt-[-0.7px] rotate-[90deg] w-[17%] z-[1]">
                                              <div className="bg-white-A700 flex flex-col items-end justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                <Text
                                                  className="mb-[54px] mr-[57px] rotate-[90deg] text-base text-gray-800 text-right"
                                                  size="txtRobotoMedium16Bluegray900"
                                                >
                                                  7
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start ml-[143px] mt-[-0.7px] rotate-[90deg] w-[17%] z-[1]">
                                              <Button
                                                className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                shape="square"
                                                color="white_A700"
                                                size="md"
                                                variant="fill"
                                              >
                                                6
                                              </Button>
                                            </div>
                                            <div className="flex flex-col items-center justify-start mt-[-0.7px] rotate-[90deg] w-[17%] z-[1]">
                                              <Button
                                                className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                shape="square"
                                                color="white_A700"
                                                size="md"
                                                variant="fill"
                                              >
                                                5
                                              </Button>
                                            </div>
                                          </div>
                                          <List
                                            className="flex flex-col gap-px items-center w-full"
                                            orientation="vertical"
                                          >
                                            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="md"
                                                  variant="fill"
                                                >
                                                  12
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="md"
                                                  variant="fill"
                                                >
                                                  13
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="md"
                                                  variant="fill"
                                                >
                                                  14
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="md"
                                                  variant="fill"
                                                >
                                                  15
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="md"
                                                  variant="fill"
                                                >
                                                  16
                                                </Button>
                                              </div>
                                              <Button
                                                className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                                shape="square"
                                                color="gray_50"
                                                size="md"
                                                variant="fill"
                                              >
                                                17
                                              </Button>
                                            </div>
                                            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="md"
                                                  variant="fill"
                                                >
                                                  19
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="md"
                                                  variant="fill"
                                                >
                                                  20
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                  <Text
                                                    className="mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                    size="txtRobotoMedium16Bluegray900"
                                                  >
                                                    21
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="md"
                                                  variant="fill"
                                                >
                                                  22
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                  <Text
                                                    className="h-[19px] mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                    size="txtRobotoMedium16Bluegray900"
                                                  >
                                                    23
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="bg-gray-100 flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <div className="bg-gray-50 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                  <Text
                                                    className="h-[19px] mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                    size="txtRobotoMedium16Bluegray900"
                                                  >
                                                    24
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                          </List>
                                        </div>
                                        <div className="absolute bottom-[1%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                                          <div className="flex flex-col items-end justify-start w-full">
                                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                                              <Button
                                                className="!text-white-A700 cursor-pointer font-medium leading-[normal] min-w-[135px] rounded-lg text-center text-xs"
                                                shape="round"
                                                size="xs"
                                                variant="gradient"
                                                color="pink_A400_deep_purple_500"
                                              >
                                                Dinner with family
                                              </Button>
                                              <Button
                                                className="cursor-pointer font-medium leading-[normal] min-w-[280px] sm:ml-[0] ml-[9px] rounded-lg text-center text-xs"
                                                shape="round"
                                                size="xs"
                                                variant="gradient"
                                                color="light_blue_400_indigo_A700"
                                              >
                                                Meeting with Michael
                                              </Button>
                                              <Button
                                                className="cursor-pointer font-medium leading-[normal] min-w-[280px] sm:ml-[0] ml-[150px] rounded-lg text-center text-xs"
                                                shape="round"
                                                size="xs"
                                                variant="gradient"
                                                color="yellow_600_red_500"
                                              >
                                                Digital Event
                                              </Button>
                                            </div>
                                            <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-end mt-[55px] w-1/2 md:w-full">
                                              <Button
                                                className="cursor-pointer font-medium leading-[normal] min-w-[280px] rounded-lg text-center text-xs"
                                                shape="round"
                                                size="xs"
                                                variant="gradient"
                                                color="light_blue_400_indigo_A700"
                                              >
                                                Facebook ADS Webinar
                                              </Button>
                                              <Button
                                                className="cursor-pointer font-medium leading-[normal] min-w-[137px] rounded-lg text-center text-xs"
                                                shape="round"
                                                size="xs"
                                                variant="gradient"
                                                color="pink_300_red_A700"
                                              >
                                                Black Friday
                                              </Button>
                                            </div>
                                            <div className="flex md:flex-col flex-row gap-2 items-center justify-end mt-[141px] w-[84%] md:w-full">
                                              <Button
                                                className="cursor-pointer font-medium leading-[normal] min-w-[423px] sm:min-w-full rounded-lg text-center text-xs"
                                                shape="round"
                                                size="xs"
                                                variant="gradient"
                                                color="pink_300_red_A700"
                                              >
                                                Marketing Online Event
                                              </Button>
                                              <Button
                                                className="!text-white-A700 cursor-pointer font-medium leading-[normal] min-w-[279px] rounded-lg text-center text-xs"
                                                shape="round"
                                                size="xs"
                                                variant="gradient"
                                                color="pink_A400_deep_purple_500"
                                              >
                                                Business Plan Strategy
                                              </Button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex md:flex-1 flex-col items-center justify-start w-[15%] md:w-full">
                                        <Button
                                          className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                          shape="square"
                                          color="gray_50"
                                          size="md"
                                          variant="fill"
                                        >
                                          4
                                        </Button>
                                        <Button
                                          className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                          shape="square"
                                          color="gray_50"
                                          size="md"
                                          variant="fill"
                                        >
                                          11
                                        </Button>
                                        <Button
                                          className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                          shape="square"
                                          color="gray_50"
                                          size="md"
                                          variant="fill"
                                        >
                                          18
                                        </Button>
                                        <Button
                                          className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                          shape="square"
                                          color="gray_50"
                                          size="md"
                                          variant="fill"
                                        >
                                          25
                                        </Button>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                                      <List
                                        className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[72%] md:w-full"
                                        orientation="horizontal"
                                      >
                                        <div className="flex flex-col items-center justify-start sm:ml-[0] rotate-[90deg] w-full">
                                          <Button
                                            className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                            shape="square"
                                            color="white_A700"
                                            size="md"
                                            variant="fill"
                                          >
                                            26
                                          </Button>
                                        </div>
                                        <div className="flex flex-col items-center justify-start sm:ml-[0] rotate-[90deg] w-full">
                                          <Button
                                            className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                            shape="square"
                                            color="white_A700"
                                            size="md"
                                            variant="fill"
                                          >
                                            27
                                          </Button>
                                        </div>
                                        <div className="flex flex-col items-center justify-start sm:ml-[0] rotate-[90deg] w-full">
                                          <Button
                                            className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                            shape="square"
                                            color="white_A700"
                                            size="md"
                                            variant="fill"
                                          >
                                            28
                                          </Button>
                                        </div>
                                        <div className="flex flex-col items-center justify-start sm:ml-[0] rotate-[90deg] w-full">
                                          <Button
                                            className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                            shape="square"
                                            color="white_A700"
                                            size="md"
                                            variant="fill"
                                          >
                                            29
                                          </Button>
                                        </div>
                                        <div className="flex flex-col items-center justify-start sm:ml-[0] rotate-[90deg] w-full">
                                          <Button
                                            className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                            shape="square"
                                            color="white_A700"
                                            size="md"
                                            variant="fill"
                                          >
                                            30
                                          </Button>
                                        </div>
                                      </List>
                                      <Button
                                        className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                        shape="square"
                                        color="gray_50"
                                        size="md"
                                        variant="fill"
                                      >
                                        31
                                      </Button>
                                      <Button
                                        className="!text-gray-500 border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                        shape="square"
                                        color="gray_50"
                                        size="md"
                                        variant="fill"
                                      >
                                        1
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[33%] md:w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[250px] items-center justify-start p-4 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="h-[218px] relative w-full">
                              <Img
                                className="h-[218px] m-auto object-cover rounded-[15px] w-full"
                                src="images/img_brookecagleg1.png"
                                alt="brookecaglegOne"
                              />
                              <div className="absolute bg-gradient8  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[11px] rounded-[15px] w-full">
                                <div className="flex flex-col md:gap-10 gap-[78px] justify-start mb-[9px] mt-[15px] w-[85%] md:w-full">
                                  <div className="flex flex-col gap-1.5 items-start justify-start ml-3 md:ml-[0]">
                                    <Text
                                      className="text-lg text-white-A700"
                                      size="txtHelveticaBold18WhiteA700"
                                    >
                                      Hello, John!
                                    </Text>
                                    <Text
                                      className="leading-[140.00%] text-sm text-white-A700"
                                      size="txtHelvetica14WhiteA700"
                                    >
                                      <>
                                        Wealth creation is an evolutionarily
                                        recent positive-sum game.
                                        <br />
                                        It is all about who take the opportunity
                                        first.
                                      </>
                                    </Text>
                                  </div>
                                  <div className="h-6 md:h-[15px] relative w-[21%]">
                                    <DashboardScreenCRMButtondefault className="absolute flex flex-col h-full inset-y-[0] items-center justify-center left-[0] my-auto w-[76px]" />
                                    <Img
                                      className="absolute bottom-[21%] h-3 right-[0] w-3"
                                      src="images/img_arrowright.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[278px] items-center justify-start p-[21px] sm:px-5 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-[31px] items-start justify-start mt-[9px] w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-800 text-lg"
                                  size="txtHelveticaBold18"
                                >
                                  Invoices
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <List
                                  className="flex flex-col gap-[27px] items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                                    <Button
                                      className="flex h-[38px] items-center justify-center rounded-lg w-[38px]"
                                      shape="round"
                                      size="sm"
                                      variant="gradient"
                                      color="blue_gray_700_gray_900"
                                    >
                                      <Img
                                        className="h-[19px]"
                                        src="images/img_ioniconrrocketsharp.svg"
                                        alt="ioniconrrockets"
                                      />
                                    </Button>
                                    <div className="flex flex-col gap-2 items-start justify-start sm:ml-[0] ml-[17px]">
                                      <Text
                                        className="text-gray-800 text-sm"
                                        size="txtHelveticaBold14"
                                      >
                                        Devices
                                      </Text>
                                      <Text
                                        className="text-gray-500 text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        <span className="text-gray-500 font-helvetica text-left font-bold">
                                          250 in stock,{" "}
                                        </span>
                                        <span className="text-gray-600 font-helvetica text-left font-bold">
                                          346+ sold
                                        </span>
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[15px] sm:ml-[0] ml-[279px] sm:mt-0 mt-3.5 w-[15px]"
                                      src="images/img_arrowright_blue_gray_200.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                                    <Button
                                      className="flex h-[38px] items-center justify-center rounded-lg w-[38px]"
                                      shape="round"
                                      size="sm"
                                      variant="gradient"
                                      color="blue_gray_700_gray_900"
                                    >
                                      <Img
                                        className="h-[19px]"
                                        src="images/img_ioniconbbuilddefault.svg"
                                        alt="ioniconbbuildde"
                                      />
                                    </Button>
                                    <div className="flex flex-col gap-2 items-start justify-start sm:ml-[0] ml-[17px]">
                                      <Text
                                        className="text-gray-800 text-sm"
                                        size="txtHelveticaBold14"
                                      >
                                        Tickets
                                      </Text>
                                      <Text
                                        className="text-gray-500 text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        <span className="text-gray-500 font-helvetica text-left font-bold">
                                          123 closed,{" "}
                                        </span>
                                        <span className="text-gray-600 font-helvetica text-left font-bold">
                                          15 open
                                        </span>
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[15px] sm:ml-[0] ml-[296px] sm:mt-0 mt-3.5 w-[15px]"
                                      src="images/img_arrowright_blue_gray_200.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                                    <Button
                                      className="flex h-[38px] items-center justify-center rounded-lg w-[38px]"
                                      shape="round"
                                      size="sm"
                                      variant="gradient"
                                      color="blue_gray_700_gray_900"
                                    >
                                      <Img
                                        className="h-[19px]"
                                        src="images/img_map.svg"
                                        alt="map"
                                      />
                                    </Button>
                                    <div className="flex flex-col gap-1.5 items-start justify-start sm:ml-[0] ml-[17px]">
                                      <Text
                                        className="text-gray-800 text-sm"
                                        size="txtHelveticaBold14"
                                      >
                                        Error logs
                                      </Text>
                                      <Text
                                        className="text-gray-500 text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        <span className="text-gray-500 font-helvetica text-left font-bold">
                                          1 is active,{" "}
                                        </span>
                                        <span className="text-gray-600 font-helvetica text-left font-bold">
                                          40 closed
                                        </span>
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[15px] sm:ml-[0] ml-[291px] sm:mt-0 mt-3.5 w-[15px]"
                                      src="images/img_arrowright_blue_gray_200.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                </List>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[202px] items-start justify-start p-4 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="flex sm:flex-col flex-row gap-9 items-center justify-start w-[93%] md:w-full">
                              <div className="flex flex-col h-[170px] items-center justify-start w-[170px]">
                                <Img
                                  className="h-[170px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[170px]"
                                  src="images/img_batelstudiott.png"
                                  alt="batelstudiott"
                                />
                              </div>
                              <div className="flex flex-col gap-[21px] items-start justify-start w-[55%] sm:w-full">
                                <Text
                                  className="leading-[140.00%] text-gray-600 text-sm w-full"
                                  size="txtHelveticaBold14Bluegray400"
                                >
                                  <>
                                    Today is Martina&#39;s birthday. Wish her
                                    the best of luck!
                                  </>
                                </Text>
                                <Button
                                  className="cursor-pointer font-bold h-[35px] rounded-lg text-[10px] text-center w-[134px]"
                                  shape="round"
                                  size="sm"
                                  variant="gradient"
                                  color="blue_gray_800_01_gray_900_01"
                                >
                                  SEND MESSAGE
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                        orientation="horizontal"
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[279px] items-center justify-start p-[21px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-7 items-center justify-start my-2 w-full">
                            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Your Transactions
                              </Text>
                              <div className="flex flex-row gap-1.5 items-start justify-start mt-0.5">
                                <Img
                                  className="h-[15px] w-[15px]"
                                  src="images/img_calendar.svg"
                                  alt="calendar"
                                />
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtHelveticaBold14Bluegray200"
                                >
                                  23 - 30 March 2020
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <Button
                                    className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                                    color="red_600"
                                    size="sm"
                                    variant="outline"
                                  >
                                    <Img
                                      className="h-3"
                                      src="images/img_arrowdown.svg"
                                      alt="arrowdown"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-2 items-start justify-start ml-3.5 md:ml-[0]">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      Netflix
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      27 March 2020, at 12:30 PM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[496px] md:mt-0 mt-2">
                                    <Text
                                      className="text-red-600 text-right text-sm"
                                      size="txtHelveticaBold14Red600"
                                    >
                                      -$2500
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <Button
                                    className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                                    color="green_400"
                                    size="sm"
                                    variant="outline"
                                  >
                                    <Img
                                      className="h-3"
                                      src="images/img_arrowup_green_400.svg"
                                      alt="arrowup"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-1.5 items-start justify-start ml-3.5 md:ml-[0]">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      Apple
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      27 March 2020, at 12:30 PM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[493px] md:mt-0 mt-[7px]">
                                    <Text
                                      className="text-green-500 text-right text-sm"
                                      size="txtHelveticaBold14Green400"
                                    >
                                      +$2500
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <Button
                                    className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                                    color="green_400"
                                    size="sm"
                                    variant="outline"
                                  >
                                    <Img
                                      className="h-3"
                                      src="images/img_arrowup_green_400.svg"
                                      alt="arrowup_One"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-1.5 items-start justify-start ml-3.5 md:ml-[0]">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      Stripe
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      26 March 2020, at 10:10 AM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[492px] md:mt-0 mt-[7px]">
                                    <Text
                                      className="text-green-500 text-right text-sm"
                                      size="txtHelveticaBold14Green400"
                                    >
                                      +$9900
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[279px] items-center justify-start p-[21px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[29px] items-center justify-start my-2 w-full">
                            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Revenue
                              </Text>
                              <div className="flex flex-row gap-1.5 items-start justify-start mt-0.5">
                                <Img
                                  className="h-[15px] w-[15px]"
                                  src="images/img_calendar.svg"
                                  alt="calendar"
                                />
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtHelveticaBold14Bluegray200"
                                >
                                  23 - 30 March 2020
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <Button
                                    className="flex h-[35px] items-center justify-center rotate-[180deg] rounded-[17px] w-[35px]"
                                    color="green_400"
                                    size="sm"
                                    variant="outline"
                                  >
                                    <Img
                                      className="h-3"
                                      src="images/img_arrowup_green_400_35x35.svg"
                                      alt="arrowup"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-1.5 items-start justify-start ml-3.5 md:ml-[0]">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      via PayPal
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      27 March 2020, at 12:30 PM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[492px] md:mt-0 mt-[7px]">
                                    <Text
                                      className="text-green-500 text-right text-sm"
                                      size="txtHelveticaBold14Green400"
                                    >
                                      +$8700
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <Button
                                    className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                                    color="green_400"
                                    size="sm"
                                    variant="outline"
                                  >
                                    <Img
                                      className="h-3"
                                      src="images/img_arrowup_green_400.svg"
                                      alt="arrowup_One"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-2 items-start justify-start ml-3.5 md:ml-[0]">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      Partner #01424
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      27 March 2020, at 12:30 PM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[485px] md:mt-0 mt-2">
                                    <Text
                                      className="text-green-500 text-right text-sm"
                                      size="txtHelveticaBold14Green400"
                                    >
                                      +$12000
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <Button
                                    className="flex h-[35px] items-center justify-center rotate-[180deg] rounded-[17px] w-[35px]"
                                    color="red_600"
                                    size="sm"
                                    variant="outline"
                                  >
                                    <Img
                                      className="h-3"
                                      src="images/img_arrowdown_red_600.svg"
                                      alt="arrowdown"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-2 items-start justify-start ml-3.5 md:ml-[0]">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      Services
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      26 March 2020, at 10:10 AM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[496px] md:mt-0 mt-2">
                                    <Text
                                      className="text-red-600 text-right text-sm"
                                      size="txtHelveticaBold14Red600"
                                    >
                                      -$1900
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreenCRMPage;
