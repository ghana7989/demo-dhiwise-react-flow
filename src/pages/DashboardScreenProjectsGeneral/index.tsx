import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const DashboardScreenProjectsGeneralPage: React.FC = () => {
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
            className="bg-cover bg-no-repeat flex flex-col h-[1073px] items-center justify-end p-[19px] w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between mb-[7px] mt-5 mx-auto md:px-5 w-full">
              <Sidebar11 className="!sticky !w-[233px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
              <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-[3px] w-full">
                <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[10%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[147px]">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                        size="txtHelvetica24"
                      >
                        <span className="text-gray-500 font-helvetica text-left font-normal">
                          Pages
                        </span>
                        <span className="text-gray-800 font-helvetica text-left font-normal">
                          {" "}
                        </span>
                        <span className="text-black-900 font-helvetica text-left font-normal">
                          {" "}
                        </span>
                        <span className="text-gray-800 font-helvetica text-left text-xs font-normal">
                          / Projects / General
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtHelveticaBold14"
                    >
                      General
                    </Text>
                  </div>
                  <Img
                    className="h-6 mb-1.5 md:ml-[0] ml-[49px] md:mt-0 mt-4 w-6"
                    src="images/img_ioniconmmenudefault.svg"
                    alt="ioniconmmenudef"
                  />
                  <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[993px] md:mt-0 mt-[7px] w-[22%] md:w-full">
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
                <div className="flex flex-col items-center justify-start mt-[51px] w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[24%] md:w-full">
                        <div className="bg-gradient4  flex flex-col items-center justify-start rounded-[16px] shadow-bs w-full">
                          <div className="h-[300px] relative w-full">
                            <Img
                              className="h-[300px] m-auto object-cover rounded-[15px] w-full"
                              src="images/img_14577184552761_300x370.png"
                              alt="14577184552761"
                            />
                            <div className="absolute flex flex-col gap-[26px] h-max inset-[0] items-center justify-center m-auto w-[44%]">
                              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Text
                                    className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                                    size="txtHelvetica22"
                                  >
                                    Earnings
                                  </Text>
                                  <Text
                                    className="mt-1 sm:text-[34px] md:text-[40px] text-[44px] text-center text-white-A700"
                                    size="txtHelveticaBold44"
                                  >
                                    $15,800
                                  </Text>
                                </div>
                                <Button
                                  className="cursor-pointer font-bold h-[25px] rounded-lg text-[10px] text-center w-[154px]"
                                  shape="round"
                                  size="xs"
                                  variant="gradient"
                                  color="blue_gray_800_01_gray_900_01"
                                >
                                  +15% SINCE LAST WEEK
                                </Button>
                              </div>
                              <div className="bg-gradient11  flex flex-col items-center justify-center outline outline-[1px] outline-white-A700 px-2 rounded-[12px] shadow-bs3 w-[154px]">
                                <div className="flex flex-col items-center justify-center w-auto">
                                  <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <a
                                        href="javascript:"
                                        className="text-[10px] text-center text-white-A700"
                                      >
                                        <Text size="txtHelveticaBold10">
                                          VIEW MORE
                                        </Text>
                                      </a>
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
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[37%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="sm:gap-5 gap-6 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
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
                                className="flex h-[45px] items-center justify-center rounded-[12px] w-[45px]"
                                size="sm"
                                variant="gradient"
                                color="blue_gray_800_01_gray_900_01"
                              >
                                <Img
                                  className="h-[22px]"
                                  src="images/img_ioniconwwalletdefault.svg"
                                  alt="ioniconwwalletd"
                                />
                              </Button>
                            </div>
                            <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-[17px] rounded-[16px] shadow-bs w-full">
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
                                className="flex h-[45px] items-center justify-center rounded-[12px] w-[45px]"
                                size="sm"
                                variant="gradient"
                                color="blue_gray_800_01_gray_900_01"
                              >
                                <Img
                                  className="h-[22px]"
                                  src="images/img_ioniconddocumenttext.svg"
                                  alt="ioniconddocumen"
                                />
                              </Button>
                            </div>
                            <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-[17px] rounded-[16px] shadow-bs w-full">
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
                                className="flex h-[45px] items-center justify-center rounded-[12px] w-[45px]"
                                size="sm"
                                variant="gradient"
                                color="blue_gray_800_01_gray_900_01"
                              >
                                <Img
                                  className="h-[22px]"
                                  src="images/img_ionicongglobeoutline.svg"
                                  alt="ionicongglobeou"
                                />
                              </Button>
                            </div>
                            <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-[17px] rounded-[16px] shadow-bs w-full">
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
                                className="flex h-[45px] items-center justify-center rounded-[12px] w-[45px]"
                                size="sm"
                                variant="gradient"
                                color="blue_gray_800_01_gray_900_01"
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
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[300px] items-center justify-start p-6 sm:px-5 w-[38%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_firstcard.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                          <div className="flex flex-row gap-[15px] items-start justify-start w-[31%] md:w-full">
                            <div className="bg-teal-400 flex flex-col h-10 items-center justify-start rounded-[12px] shadow-bs w-10">
                              <Img
                                className="h-10 md:h-auto object-cover rounded-[12px] w-10"
                                src="images/img_creditstounsplashcom_40x40.png"
                                alt="creditstounspla"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start mt-0.5">
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
                                2h ago
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              I need a Ruby developer for my new website.
                            </Text>
                            <Text
                              className="leading-[150.00%] mt-[3px] text-gray-500 text-sm w-[96%] sm:w-full"
                              size="txtHelvetica14"
                            >
                              The website was initially built in PHP, I need a
                              professional ruby programmer to shift it.
                            </Text>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[85px] items-center justify-start p-[25px] sm:px-5 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_offer_gray_50_01.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="flex flex-row items-center justify-evenly mt-1">
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtHelvetica14"
                                >
                                  $
                                </Text>
                                <Text
                                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                                  size="txtHelveticaBold24Bluegray900"
                                >
                                  3,000
                                </Text>
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtHelvetica14"
                                >
                                  /month
                                </Text>
                              </div>
                              <Button
                                className="cursor-pointer font-bold h-[35px] rounded-lg text-[10px] text-center w-[120px]"
                                shape="round"
                                color="blue_gray_400"
                                size="sm"
                                variant="outline"
                              >
                                APPLY
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-between w-full">
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[538px] items-center justify-start p-[21px] sm:px-5 w-[62%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_firstcard.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-3.5 items-center justify-start mb-[15px] mt-2.5 w-full">
                          <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-800 text-lg"
                                  size="txtHelveticaBold18"
                                >
                                  To do List
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtHelveticaBold14Bluegray200"
                                >
                                  23 - 30 March 2020
                                </Text>
                              </div>
                            </div>
                            <Img
                              className="md:h-auto h-px object-cover"
                              src="images/img_line_1x930.png"
                              alt="line"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <List
                              className="flex flex-col gap-3 items-center w-full"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                    <Img
                                      className="h-24"
                                      src="images/img_coloredline.svg"
                                      alt="coloredline"
                                    />
                                    <Img
                                      className="h-5 md:mt-0 mt-[5px] w-5"
                                      src="images/img_ioniconccheckboxdefault.svg"
                                      alt="ioniconccheckbo"
                                    />
                                    <div className="flex flex-col gap-[17px] items-start justify-start md:mt-0 mt-[5px]">
                                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                                        <div className="flex flex-col items-center justify-start">
                                          <Text
                                            className="text-gray-800 text-sm"
                                            size="txtHelveticaBold14"
                                          >
                                            Check status
                                          </Text>
                                        </div>
                                        <div className="flex flex-col h-5 items-center justify-start rotate-[-90deg] w-5">
                                          <Img
                                            className="h-5 w-5"
                                            src="images/img_morevert_blue_gray_200.svg"
                                            alt="morevert"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[72%] md:w-full">
                                        <Text
                                          className="leading-[150.00%] text-gray-500 text-xs"
                                          size="txtHelvetica12"
                                        >
                                          <span className="text-gray-500 font-helvetica text-left font-normal">
                                            <>
                                              Date
                                              <br />
                                            </>
                                          </span>
                                          <span className="text-gray-600 font-helvetica text-left font-bold">
                                            22 July 2021
                                          </span>
                                        </Text>
                                        <Text
                                          className="leading-[150.00%] sm:ml-[0] ml-[188px] text-gray-500 text-xs"
                                          size="txtHelvetica12"
                                        >
                                          <span className="text-gray-500 font-helvetica text-left font-normal">
                                            <>
                                              Project
                                              <br />
                                            </>
                                          </span>
                                          <span className="text-gray-600 font-helvetica text-left font-bold">
                                            2414_VR4sf3#
                                          </span>
                                        </Text>
                                        <Text
                                          className="leading-[150.00%] sm:ml-[0] ml-[177px] text-gray-500 text-xs"
                                          size="txtHelvetica12"
                                        >
                                          <span className="text-gray-500 font-helvetica text-left font-normal">
                                            <>
                                              Company
                                              <br />
                                            </>
                                          </span>
                                          <span className="text-gray-600 font-helvetica text-left font-bold">
                                            Creative Tim
                                          </span>
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <Img
                                    className="md:h-auto h-px object-cover"
                                    src="images/img_line_1x930.png"
                                    alt="line"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                    <Img
                                      className="h-24"
                                      src="images/img_coloredline_orange_300.svg"
                                      alt="coloredline"
                                    />
                                    <div className="border border-gray-300 border-solid h-4 md:mt-0 mt-[7px] rounded-sm w-4"></div>
                                    <div className="flex flex-col gap-[17px] items-start justify-start md:mt-0 mt-[5px]">
                                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                                        <div className="flex flex-col items-center justify-start mt-0.5">
                                          <Text
                                            className="text-gray-800 text-sm"
                                            size="txtHelveticaBold14"
                                          >
                                            Management discussion
                                          </Text>
                                        </div>
                                        <div className="flex flex-col h-5 items-center justify-start rotate-[-90deg] w-5">
                                          <Img
                                            className="h-5 w-5"
                                            src="images/img_morevert_blue_gray_200.svg"
                                            alt="morevert"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[69%] md:w-full">
                                        <Text
                                          className="leading-[150.00%] text-gray-500 text-xs"
                                          size="txtHelvetica12"
                                        >
                                          <span className="text-gray-500 font-helvetica text-left font-normal">
                                            <>
                                              Date
                                              <br />
                                            </>
                                          </span>
                                          <span className="text-gray-600 font-helvetica text-left font-bold">
                                            22 July 2021
                                          </span>
                                        </Text>
                                        <Text
                                          className="leading-[150.00%] sm:ml-[0] ml-[188px] text-gray-500 text-xs"
                                          size="txtHelvetica12"
                                        >
                                          <span className="text-gray-500 font-helvetica text-left font-normal">
                                            <>
                                              Project
                                              <br />
                                            </>
                                          </span>
                                          <span className="text-gray-600 font-helvetica text-left font-bold">
                                            4411_8sIsdd23
                                          </span>
                                        </Text>
                                        <Text
                                          className="leading-[150.00%] sm:ml-[0] ml-[173px] text-gray-500 text-xs"
                                          size="txtHelvetica12"
                                        >
                                          <span className="text-gray-500 font-helvetica text-left font-normal">
                                            <>
                                              Company
                                              <br />
                                            </>
                                          </span>
                                          <span className="text-gray-600 font-helvetica text-left font-bold">
                                            Apple
                                          </span>
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <Img
                                    className="md:h-auto h-px object-cover"
                                    src="images/img_line_1x930.png"
                                    alt="line"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                    <Img
                                      className="h-24"
                                      src="images/img_coloredline_pink_200.svg"
                                      alt="coloredline"
                                    />
                                    <div className="border border-gray-300 border-solid h-4 md:mt-0 mt-[7px] rounded-sm w-4"></div>
                                    <div className="flex flex-col gap-[17px] items-start justify-start md:mt-0 mt-[5px]">
                                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                                        <div className="flex flex-col items-center justify-start">
                                          <Text
                                            className="text-gray-800 text-sm"
                                            size="txtHelveticaBold14"
                                          >
                                            New channel distribution
                                          </Text>
                                        </div>
                                        <div className="flex flex-col h-5 items-center justify-start rotate-[-90deg] w-5">
                                          <Img
                                            className="h-5 w-5"
                                            src="images/img_morevert_blue_gray_200.svg"
                                            alt="morevert"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[70%] md:w-full">
                                        <Text
                                          className="leading-[150.00%] text-gray-500 text-xs"
                                          size="txtHelvetica12"
                                        >
                                          <span className="text-gray-500 font-helvetica text-left font-normal">
                                            <>
                                              Date
                                              <br />
                                            </>
                                          </span>
                                          <span className="text-gray-600 font-helvetica text-left font-bold">
                                            23 July 2021
                                          </span>
                                        </Text>
                                        <Text
                                          className="leading-[150.00%] sm:ml-[0] ml-[188px] text-gray-500 text-xs"
                                          size="txtHelvetica12"
                                        >
                                          <span className="text-gray-500 font-helvetica text-left font-normal">
                                            <>
                                              Project
                                              <br />
                                            </>
                                          </span>
                                          <span className="text-gray-600 font-helvetica text-left font-bold">
                                            827d_kdl33D1s
                                          </span>
                                        </Text>
                                        <Text
                                          className="leading-[150.00%] sm:ml-[0] ml-[171px] text-gray-500 text-xs"
                                          size="txtHelvetica12"
                                        >
                                          <span className="text-gray-500 font-helvetica text-left font-normal">
                                            <>
                                              Company
                                              <br />
                                            </>
                                          </span>
                                          <span className="text-gray-600 font-helvetica text-left font-bold">
                                            Microsoft
                                          </span>
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <Img
                                    className="md:h-auto h-px object-cover"
                                    src="images/img_line_1x930.png"
                                    alt="line"
                                  />
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-col items-center justify-start mr-9 my-0 w-[97%] md:w-full">
                                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                                  <Img
                                    className="h-24"
                                    src="images/img_coloredline_deep_purple_400.svg"
                                    alt="coloredline"
                                  />
                                  <Img
                                    className="h-5 md:mt-0 mt-[5px] w-5"
                                    src="images/img_ioniconccheckboxdefault.svg"
                                    alt="ioniconccheckbo"
                                  />
                                  <div className="flex flex-col gap-[17px] items-start justify-start md:mt-0 mt-[5px]">
                                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                                      <div className="flex flex-col items-center justify-start mt-0.5">
                                        <Text
                                          className="text-gray-800 text-sm"
                                          size="txtHelveticaBold14"
                                        >
                                          IOS App development
                                        </Text>
                                      </div>
                                      <div className="flex flex-col h-5 items-center justify-start rotate-[-90deg] w-5">
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_morevert_blue_gray_200.svg"
                                          alt="morevert"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[70%] md:w-full">
                                      <Text
                                        className="leading-[150.00%] text-gray-500 text-xs"
                                        size="txtHelvetica12"
                                      >
                                        <span className="text-gray-500 font-helvetica text-left font-normal">
                                          <>
                                            Date
                                            <br />
                                          </>
                                        </span>
                                        <span className="text-gray-600 font-helvetica text-left font-bold">
                                          25 July 2021
                                        </span>
                                      </Text>
                                      <Text
                                        className="leading-[150.00%] sm:ml-[0] ml-[188px] text-gray-500 text-xs"
                                        size="txtHelvetica12"
                                      >
                                        <span className="text-gray-500 font-helvetica text-left font-normal">
                                          <>
                                            Project
                                            <br />
                                          </>
                                        </span>
                                        <span className="text-gray-600 font-helvetica text-left font-bold">
                                          88s1_349DA2a
                                        </span>
                                      </Text>
                                      <Text
                                        className="leading-[150.00%] sm:ml-[0] ml-[173px] text-gray-500 text-xs"
                                        size="txtHelvetica12"
                                      >
                                        <span className="text-gray-500 font-helvetica text-left font-normal">
                                          <>
                                            Company
                                            <br />
                                          </>
                                        </span>
                                        <span className="text-gray-600 font-helvetica text-left font-bold">
                                          Facebook
                                        </span>
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[38%] md:w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[232px] items-center justify-start p-[22px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[25px] items-center justify-start mb-2 w-full">
                            <div className="flex flex-row sm:gap-10 items-end justify-between w-[99%] md:w-full">
                              <div className="flex flex-row gap-[15px] items-center justify-between w-[18%]">
                                <Button
                                  className="flex h-[45px] items-center justify-center rounded-[12px] shadow-bs w-[45px]"
                                  size="sm"
                                  variant="gradient"
                                  color="blue_gray_700_gray_900"
                                >
                                  <Img
                                    className="h-[22px]"
                                    src="images/img_ioniconccheckmarkccircle.png"
                                    alt="ioniconccheckma"
                                  />
                                </Button>
                                <div className="flex flex-col gap-[5px] items-start justify-start">
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    Tasks
                                  </Text>
                                  <Text
                                    className="text-gray-800 text-lg"
                                    size="txtHelveticaBold18"
                                  >
                                    480
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start mb-[3px] mt-[11px] w-[23%]">
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtHelveticaBold12"
                                >
                                  60%
                                </Text>
                                <Line className="bg-gray-300 h-[3px] mt-2.5 w-full" />
                                <Line className="bg-gradient3  h-[5px] w-[68%]" />
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
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
                                <div className="md:h-[106px] h-[108px] relative w-[96%] sm:w-full">
                                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                                    <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-start w-[97%] md:w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group183.svg')",
                                        }}
                                      >
                                        <Img
                                          className="h-[82px] md:h-auto object-cover"
                                          src="images/img_teal_cyan_300.png"
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
                                  <Img
                                    className="absolute h-[55px] inset-x-[0] mx-auto top-[0]"
                                    src="images/img_dots_cyan_300.svg"
                                    alt="dots_One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[232px] relative w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="bg-white-A700 h-[232px] rounded-[16px] shadow-bs w-full"></div>
                          </div>
                          <div className="absolute flex flex-row items-start justify-between left-[4%] top-[9%] w-[81%]">
                            <div className="md:h-[120px] h-[123px] relative w-[23%]">
                              <div className="absolute flex flex-col gap-[41px] h-max inset-[0] justify-center m-auto w-full">
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[60px]">
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    Projects
                                  </Text>
                                  <Text
                                    className="mt-1 text-gray-800 text-lg"
                                    size="txtHelveticaBold18"
                                  >
                                    115
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-3 items-start justify-start mr-[30px] w-[73%] md:w-full">
                                  <div className="flex flex-row gap-[7px] items-center justify-start w-[59%] md:w-full">
                                    <div className="bg-teal-400 h-2.5 rounded-[50%] w-2.5"></div>
                                    <Text
                                      className="text-gray-800 text-xs"
                                      size="txtHelvetica12Bluegray900"
                                    >
                                      Done
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                                    <div className="bg-gray-400 h-2.5 mb-[3px] rounded-[50%] w-2.5"></div>
                                    <Text
                                      className="text-gray-800 text-xs"
                                      size="txtHelvetica12Bluegray900"
                                    >
                                      In progress
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Button
                                className="absolute flex h-[45px] items-center justify-center left-[0] rounded-[12px] shadow-bs top-[0] w-[45px]"
                                size="sm"
                                variant="gradient"
                                color="blue_gray_700_gray_900"
                              >
                                <Img
                                  className="h-[22px]"
                                  src="images/img_ionicongglobeoutline_white_a700.png"
                                  alt="ionicongglobeou"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[11px] w-[165px]">
                              <div className="!w-[165px] border-solid h-[164px] overflow-visible rotate-[180deg]">
                                <CircularProgressbar
                                  className="!w-[165px] border-solid h-[164px] overflow-visible rotate-[180deg]"
                                  value={80}
                                  counterClockwise
                                  strokeWidth={1}
                                  styles={{
                                    trail: { strokeWidth: 50, stroke: "" },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(180deg)",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[27px] w-[99%] md:w-full">
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
                  <div className="flex flex-row items-start justify-between w-[15%] sm:w-full">
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
    </>
  );
};

export default DashboardScreenProjectsGeneralPage;
