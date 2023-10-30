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

const DashboardScreenDefaultPage: React.FC = () => {
  const [inputwithaddonsvalue, setInputwithaddonsvalue] =
    React.useState<string>("");
  const sideBarMenu: SideBarMenuType = [
    { label: "Kanban" },
    { label: "Wizard" },
    { label: "DataTables" },
    { label: "Calendar" },
    { label: "Analytics" },
  ];

  return (
    <>
      <div className="flex flex-col font-helvetica items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat sm:h-[1174px] h-[1301px] md:h-[1523px] p-[22px] md:px-5 relative w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="absolute bottom-[2%] h-[1171px] sm:h-[1174px] md:h-[1523px] right-[2%] w-[84%] md:w-full">
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[354px] justify-start w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[820px] w-[48%] md:w-full">
                    <Img
                      className="h-[791px] md:h-auto object-cover w-full"
                      src="images/img_screenshot20210622.png"
                      alt="screenshot20210"
                    />
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
              <div className="absolute bottom-[4%] flex md:flex-col flex-row gap-6 inset-x-[0] items-center justify-between mx-auto w-full">
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[445px] items-center justify-start p-4 w-[41%] md:w-full"
                  style={{ backgroundImage: "url('images/img_firstcard.svg')" }}
                >
                  <div className="flex flex-col items-start justify-start mb-3.5 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[222px] items-center justify-start p-[30px] sm:px-5 w-full"
                      style={{ backgroundImage: "url('images/img_graph.png')" }}
                    >
                      <div className="flex sm:flex-col flex-row sm:gap-[51px] items-center justify-between my-0.5 w-full">
                        <div className="flex flex-col gap-4 items-start justify-start">
                          <Text
                            className="text-[10px] text-white-A700"
                            size="txtHelveticaBold10"
                          >
                            500
                          </Text>
                          <Text
                            className="text-[10px] text-white-A700"
                            size="txtHelveticaBold10"
                          >
                            400
                          </Text>
                          <Text
                            className="text-[10px] text-white-A700"
                            size="txtHelveticaBold10"
                          >
                            300
                          </Text>
                          <Text
                            className="text-[10px] text-white-A700"
                            size="txtHelveticaBold10"
                          >
                            200
                          </Text>
                          <Text
                            className="text-[10px] text-white-A700"
                            size="txtHelveticaBold10"
                          >
                            100
                          </Text>
                          <Text
                            className="text-[10px] text-white-A700"
                            size="txtHelveticaBold10"
                          >
                            0
                          </Text>
                        </div>
                        <Img
                          className="h-[153px]"
                          src="images/img_lines.svg"
                          alt="lines"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px] mt-[26px]">
                      <Text
                        className="text-gray-800 text-lg"
                        size="txtHelveticaBold18"
                      >
                        Active Users
                      </Text>
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtHelvetica14"
                      >
                        (+23) than last week
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[55px] grid sm:grid-cols-1 grid-cols-4 md:ml-[0] ml-[5px] mt-9 w-[92%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <div className="md:h-[49px] h-[55px] relative w-[69%]">
                          <div className="absolute bottom-[0] flex flex-col gap-3.5 inset-x-[0] justify-start mx-auto w-full">
                            <Text
                              className="md:ml-[0] ml-[35px] text-gray-500 text-xs"
                              size="txtHelveticaBold12"
                            >
                              Users
                            </Text>
                            <Text
                              className="mr-[13px] text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              32,984
                            </Text>
                          </div>
                          <Button
                            className="absolute flex h-[25px] items-center justify-center left-[0] top-[0] w-[25px]"
                            shape="round"
                            size="xs"
                            variant="gradient"
                            color="pink_A400_deep_purple_500"
                          >
                            <Img
                              className="h-3"
                              src="images/img_ioniconwwalletdefault.svg"
                              alt="ioniconwwalletd"
                            />
                          </Button>
                        </div>
                        <Img
                          className="h-px"
                          src="images/img_progress.svg"
                          alt="progress"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <div className="md:h-[49px] h-[55px] relative w-[71%]">
                          <div className="absolute bottom-[0] flex flex-col gap-3.5 inset-x-[0] justify-start mx-auto w-full">
                            <Text
                              className="md:ml-[0] ml-[35px] text-gray-500 text-xs"
                              size="txtHelveticaBold12"
                            >
                              Clicks
                            </Text>
                            <Text
                              className="mr-[19px] text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              2,42m
                            </Text>
                          </div>
                          <Button
                            className="absolute flex h-[25px] items-center justify-center left-[0] shadow-bs top-[0] w-[25px]"
                            shape="round"
                            size="xs"
                            variant="gradient"
                            color="light_blue_400_indigo_A700"
                          >
                            <Img
                              className="h-3"
                              src="images/img_ioniconrrocketsharp.svg"
                              alt="ioniconrrockets"
                            />
                          </Button>
                        </div>
                        <Img
                          className="h-px"
                          src="images/img_progress.svg"
                          alt="progress"
                        />
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                        <div className="md:h-[49px] h-[54px] relative w-[67%]">
                          <div className="absolute bottom-[0] flex flex-col gap-3.5 inset-x-[0] justify-start mx-auto w-full">
                            <Text
                              className="md:ml-[0] ml-[35px] text-gray-500 text-xs"
                              size="txtHelveticaBold12"
                            >
                              Sales
                            </Text>
                            <Text
                              className="mr-[11px] text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              2,400$
                            </Text>
                          </div>
                          <Button
                            className="absolute flex h-[25px] items-center justify-center left-[0] shadow-bs top-[0] w-[25px]"
                            shape="round"
                            size="xs"
                            variant="gradient"
                            color="yellow_600_red_500"
                          >
                            <Img
                              className="h-3"
                              src="images/img_cart.svg"
                              alt="cart"
                            />
                          </Button>
                        </div>
                        <Img
                          className="h-px"
                          src="images/img_progress.svg"
                          alt="progress"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <div className="md:h-12 h-[53px] relative w-[67%]">
                          <div className="absolute bottom-[0] flex flex-col gap-[13px] inset-x-[0] justify-start mx-auto w-full">
                            <Text
                              className="md:ml-[0] ml-[35px] text-gray-500 text-xs"
                              size="txtHelveticaBold12"
                            >
                              Items
                            </Text>
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              320
                            </Text>
                          </div>
                          <Button
                            className="absolute flex h-[25px] items-center justify-center left-[0] shadow-bs top-[0] w-[25px]"
                            shape="round"
                            size="xs"
                            variant="gradient"
                            color="pink_300_red_A700"
                          >
                            <Img
                              className="h-3"
                              src="images/img_ioniconbbuilddefault.svg"
                              alt="ioniconbbuildde"
                            />
                          </Button>
                        </div>
                        <Img
                          className="h-px"
                          src="images/img_progress.svg"
                          alt="progress"
                        />
                      </div>
                    </List>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[445px] items-center justify-start p-[19px] w-[58%] md:w-full"
                  style={{ backgroundImage: "url('images/img_firstcard.svg')" }}
                >
                  <div className="flex flex-col gap-[43px] items-start justify-start my-2.5 w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="text-gray-800 text-lg"
                        size="txtHelveticaBold18"
                      >
                        Sales overview
                      </Text>
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtHelvetica14"
                      >
                        (+5) more in 2021
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-5 items-end justify-start w-full">
                        <div className="flex flex-col items-center justify-start mr-0.5 w-full">
                          <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                            <div className="flex flex-col gap-[37px] items-start justify-start">
                              <Text
                                className="text-[10px] text-gray-400"
                                size="txtHelveticaBold10Bluegray100"
                              >
                                500
                              </Text>
                              <Text
                                className="text-[10px] text-gray-400"
                                size="txtHelveticaBold10Bluegray100"
                              >
                                400
                              </Text>
                              <Text
                                className="text-[10px] text-gray-400"
                                size="txtHelveticaBold10Bluegray100"
                              >
                                300
                              </Text>
                              <Text
                                className="text-[10px] text-gray-400"
                                size="txtHelveticaBold10Bluegray100"
                              >
                                200
                              </Text>
                              <Text
                                className="text-[10px] text-gray-400"
                                size="txtHelveticaBold10Bluegray100"
                              >
                                100
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[11px] text-[10px] text-gray-400"
                                size="txtHelveticaBold10Bluegray100"
                              >
                                0
                              </Text>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[250px] items-center justify-start w-[96%] md:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group1695.svg')",
                              }}
                            >
                              <Img
                                className="h-[249px] md:h-auto object-cover"
                                src="images/img_lines_blue_gray_900.png"
                                alt="lines_One"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[96%] md:w-full">
                          <Text
                            className="text-[10px] text-gray-400"
                            size="txtHelveticaBold10Bluegray100"
                          >
                            Jan
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[57px] text-[10px] text-gray-400"
                            size="txtHelveticaBold10Bluegray100"
                          >
                            Feb
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[57px] text-[10px] text-gray-400"
                            size="txtHelveticaBold10Bluegray100"
                          >
                            Mar
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[57px] text-[10px] text-gray-400"
                            size="txtHelveticaBold10Bluegray100"
                          >
                            Apr
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[57px] text-[10px] text-gray-400"
                            size="txtHelveticaBold10Bluegray100"
                          >
                            May
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[57px] text-[10px] text-gray-400"
                            size="txtHelveticaBold10Bluegray100"
                          >
                            Jun
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[57px] text-[10px] text-gray-400"
                            size="txtHelveticaBold10Bluegray100"
                          >
                            Jul
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[57px] text-[10px] text-gray-400"
                            size="txtHelveticaBold10Bluegray100"
                          >
                            Aug
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[57px] text-[10px] text-gray-400"
                            size="txtHelveticaBold10Bluegray100"
                          >
                            Sep
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[57px] text-[10px] text-gray-400"
                            size="txtHelveticaBold10Bluegray100"
                          >
                            Oct
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[57px] text-[10px] text-gray-400"
                            size="txtHelveticaBold10Bluegray100"
                          >
                            Nov
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[57px] text-[10px] text-gray-400"
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
              <div className="absolute flex flex-col items-center justify-start left-[0] top-[24%] w-1/2">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-96 items-center justify-start p-4 w-full"
                  style={{ backgroundImage: "url('images/img_firstcard.svg')" }}
                >
                  <div className="flex flex-col gap-[35px] items-start justify-start mb-[11px] mt-[15px] w-full">
                    <div className="flex flex-col items-center justify-start ml-1 md:ml-[0]">
                      <Text
                        className="text-gray-800 text-lg"
                        size="txtHelveticaBold18"
                      >
                        Sales by Country
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <List
                        className="flex flex-col gap-5 items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col gap-[18px] items-center justify-start my-0 w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[97%] md:w-full">
                            <div className="flex flex-col items-center justify-start md:mt-0 mt-2.5 w-[4%] md:w-full">
                              <Img
                                className="h-7 md:h-auto object-cover w-full"
                                src="images/img_.png"
                                alt="One"
                              />
                            </div>
                            <div className="flex flex-col gap-[5px] items-start justify-start mb-1 md:ml-[0] ml-[17px]">
                              <Text
                                className="text-[10px] text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                COUNTRY:
                              </Text>
                              <Text
                                className="text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                United States
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[5px] items-center justify-start mb-1 md:ml-[0] ml-[183px]">
                              <Text
                                className="text-[10px] text-center text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                SALES:
                              </Text>
                              <Text
                                className="text-center text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                2500
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[5px] items-center justify-start mb-[3px] md:ml-[0] ml-[137px]">
                              <Text
                                className="text-[10px] text-center text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                VALUE:
                              </Text>
                              <Text
                                className="text-center text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                $214,000
                              </Text>
                            </div>
                            <div className="flex flex-col gap-1.5 items-center justify-start mb-[3px] md:ml-[0] ml-[137px]">
                              <Text
                                className="text-[10px] text-center text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                BOUNCE:
                              </Text>
                              <Text
                                className="text-center text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                29,9%
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-px"
                            src="images/img_line.svg"
                            alt="line"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-[18px] items-center justify-start my-0 w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[97%] md:w-full">
                            <div className="flex flex-col items-center justify-start md:mt-0 mt-2.5 w-[4%] md:w-full">
                              <Img
                                className="h-7 md:h-auto object-cover w-full"
                                src="images/img__28x24.png"
                                alt="Two"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] md:ml-[0] ml-[17px]">
                              <Text
                                className="text-[10px] text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                COUNTRY:
                              </Text>
                              <Text
                                className="text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                Germany
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[5px] items-center justify-start mb-1 md:ml-[0] ml-[212px]">
                              <Text
                                className="text-[10px] text-center text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                SALES:
                              </Text>
                              <Text
                                className="text-center text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                3900
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[5px] items-center justify-start mb-[3px] md:ml-[0] ml-[137px]">
                              <Text
                                className="text-[10px] text-center text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                VALUE:
                              </Text>
                              <Text
                                className="text-center text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                $446,700
                              </Text>
                            </div>
                            <div className="flex flex-col gap-1.5 items-center justify-start mb-[3px] md:ml-[0] ml-[136px]">
                              <Text
                                className="text-[10px] text-center text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                BOUNCE:
                              </Text>
                              <Text
                                className="text-center text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                40,22%
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-px"
                            src="images/img_line.svg"
                            alt="line"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-[18px] items-center justify-start my-0 w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[97%] md:w-full">
                            <div className="flex flex-col items-center justify-start md:mt-0 mt-2.5 w-[4%] md:w-full">
                              <Img
                                className="h-7 md:h-auto object-cover w-full"
                                src="images/img__1.png"
                                alt="Three"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] md:ml-[0] ml-[17px]">
                              <Text
                                className="text-[10px] text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                COUNTRY:
                              </Text>
                              <Text
                                className="text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                United Kingdom
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[5px] items-center justify-start mb-1 md:ml-[0] ml-[165px]">
                              <Text
                                className="text-[10px] text-center text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                SALES:
                              </Text>
                              <Text
                                className="text-center text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                1300
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[5px] items-center justify-start mb-[3px] md:ml-[0] ml-[137px]">
                              <Text
                                className="text-[10px] text-center text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                VALUE:
                              </Text>
                              <Text
                                className="text-center text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                $121,900
                              </Text>
                            </div>
                            <div className="flex flex-col gap-1.5 items-center justify-start mb-[3px] md:ml-[0] ml-[136px]">
                              <Text
                                className="text-[10px] text-center text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                BOUNCE:
                              </Text>
                              <Text
                                className="text-center text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                19,22%
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-px"
                            src="images/img_line.svg"
                            alt="line"
                          />
                        </div>
                        <div className="flex md:flex-1 flex-col items-center justify-start ml-[3px] mr-[19px] my-0 w-[97%] md:w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-2.5 w-[4%] md:w-full">
                              <Img
                                className="h-7 md:h-auto object-cover w-full"
                                src="images/img__2.png"
                                alt="Four"
                              />
                            </div>
                            <div className="flex flex-col gap-[5px] items-start justify-start mb-1 md:ml-[0] ml-[17px]">
                              <Text
                                className="text-[10px] text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                COUNTRY:
                              </Text>
                              <Text
                                className="text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                Brasil
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[5px] items-center justify-start mb-1 md:ml-[0] ml-[221px]">
                              <Text
                                className="text-[10px] text-center text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                SALES:
                              </Text>
                              <Text
                                className="text-center text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                920
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[5px] items-center justify-start mb-[3px] md:ml-[0] ml-[140px]">
                              <Text
                                className="text-[10px] text-center text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                VALUE:
                              </Text>
                              <Text
                                className="text-center text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                $52,100
                              </Text>
                            </div>
                            <div className="flex flex-col gap-1.5 items-center justify-start mb-[3px] md:ml-[0] ml-[140px]">
                              <Text
                                className="text-[10px] text-center text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                BOUNCE:
                              </Text>
                              <Text
                                className="text-center text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                39,22%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col items-center justify-start left-[0] top-[6%] w-1/2">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-[17px] rounded-[16px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start ml-1">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <Text
                            className="text-gray-500 text-xs"
                            size="txtHelveticaBold12"
                          >
                            Today’s Money
                          </Text>
                          <div className="flex flex-row gap-[5px] items-start justify-evenly w-full">
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              $53,000
                            </Text>
                            <Text
                              className="mt-0.5 text-green-500 text-sm"
                              size="txtHelveticaBold14Green400"
                            >
                              +55%
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="flex h-[45px] items-center justify-center rounded-lg w-[45px]"
                        shape="round"
                        size="sm"
                        variant="gradient"
                        color="pink_A400_deep_purple_500"
                      >
                        <Img
                          className="h-[22px]"
                          src="images/img_ioniconwwalletdefault.svg"
                          alt="ioniconwwalletd"
                        />
                      </Button>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-[17px] rounded-[15px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start ml-1">
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <Text
                            className="text-gray-500 text-xs"
                            size="txtHelveticaBold12"
                          >
                            New Clients
                          </Text>
                          <div className="flex flex-row items-center justify-evenly w-full">
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              +3,052
                            </Text>
                            <Text
                              className="text-red-600 text-sm"
                              size="txtHelveticaBold14Red600"
                            >
                              -14%
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="flex h-[45px] items-center justify-center rounded-lg w-[45px]"
                        shape="round"
                        size="sm"
                        variant="gradient"
                        color="pink_A400_deep_purple_500"
                      >
                        <Img
                          className="h-[22px]"
                          src="images/img_ioniconddocumenttext.svg"
                          alt="ioniconddocumen"
                        />
                      </Button>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-[17px] rounded-[15px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start ml-1">
                        <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                          <Text
                            className="text-gray-500 text-xs"
                            size="txtHelveticaBold12"
                          >
                            Today’s Users
                          </Text>
                          <div className="flex flex-row gap-[5px] items-center justify-evenly w-[98%] md:w-full">
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              2,300
                            </Text>
                            <Text
                              className="text-green-500 text-sm"
                              size="txtHelveticaBold14Green400"
                            >
                              +5%
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="flex h-[45px] items-center justify-center rounded-lg w-[45px]"
                        shape="round"
                        size="sm"
                        variant="gradient"
                        color="pink_A400_deep_purple_500"
                      >
                        <Img
                          className="h-[22px]"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                      </Button>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-[17px] rounded-[15px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start ml-1">
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <Text
                            className="text-gray-500 text-xs"
                            size="txtHelveticaBold12"
                          >
                            Total Sales
                          </Text>
                          <div className="flex flex-row gap-[5px] items-start justify-evenly w-full">
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              $173,000
                            </Text>
                            <Text
                              className="mt-0.5 text-green-500 text-sm"
                              size="txtHelveticaBold14Green400"
                            >
                              +8%
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="flex h-[45px] items-center justify-center rounded-lg w-[45px]"
                        shape="round"
                        size="sm"
                        variant="gradient"
                        color="pink_A400_deep_purple_500"
                      >
                        <Img
                          className="h-[22px]"
                          src="images/img_cart.svg"
                          alt="cart"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="absolute left-[1%] md:text-3xl sm:text-[28px] text-[32px] text-gray-800 top-[0]"
                size="txtHelveticaBold32"
              >
                General Statistics
              </Text>
            </div>
            <header className="absolute flex md:flex-col flex-row md:gap-5 items-center justify-center right-[2%] top-[2%] w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-1 w-[6%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[89px]">
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
                      / Default
                    </span>
                  </Text>
                </div>
                <Text
                  className="text-gray-800 text-sm"
                  size="txtHelveticaBold14"
                >
                  Default
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row items-center justify-between mb-[11px] md:ml-[0] ml-[1134px] w-[22%] md:w-full">
                <Input
                  name="inputwithaddons"
                  placeholder="Type here..."
                  value={inputwithaddonsvalue}
                  onChange={(e) => setInputwithaddonsvalue(e)}
                  className="p-0 placeholder:text-gray-500 sm:pr-5 text-left text-xs w-full"
                  wrapClassName="border border-gray-300 border-solid flex pr-[35px] rounded-lg"
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
                <div className="flex flex-row gap-1 h-4 md:h-auto items-center justify-start w-[58px]">
                  <Img
                    className="h-3 w-3"
                    src="images/img_ioniconppersondefault.svg"
                    alt="ioniconppersond"
                  />
                  <a
                    href="javascript:"
                    className="ml-[0] text-gray-600 text-xs w-10"
                  >
                    <Text size="txtHelveticaBold12Bluegray400">Sign In</Text>
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
            <Sidebar1 className="!sticky !w-[236px] flex h-screen md:hidden justify-start left-[1%] overflow-auto top-[0]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreenDefaultPage;
