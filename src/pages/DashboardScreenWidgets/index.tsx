import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Switch, Text } from "components";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const DashboardScreenWidgetsPage: React.FC = () => {
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
            className="bg-cover bg-no-repeat flex flex-col h-[1466px] items-center justify-end p-[22px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mt-5 mx-auto md:px-5 w-full">
              <Sidebar11 className="!sticky !w-[233px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto top-[0]" />
              <div className="flex flex-1 flex-col gap-[50px] items-center justify-start w-full">
                <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[7%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[95px]">
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
                          / Widgets
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="mt-0.5 text-gray-800 text-sm"
                      size="txtHelveticaBold14"
                    >
                      Widgets
                    </Text>
                  </div>
                  <Img
                    className="h-6 mb-[7px] md:ml-[0] ml-[101px] md:mt-0 mt-[15px] w-6"
                    src="images/img_ioniconmmenudefault.svg"
                    alt="ioniconmmenudef"
                  />
                  <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[993px] md:mt-0 mt-1.5 w-[22%] md:w-full">
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
                <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                        <List
                          className="flex flex-col gap-6 w-[22%]"
                          orientation="vertical"
                        >
                          <div className="bg-gradient4  flex flex-row items-center justify-between my-0 p-[21px] sm:px-5 rounded-[16px] w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-white-A700 text-xs"
                                size="txtHelveticaBold12WhiteA700"
                              >
                                Battery Health
                              </Text>
                              <Text
                                className="mt-1 text-lg text-white-A700"
                                size="txtHelveticaBold18WhiteA700"
                              >
                                99%
                              </Text>
                            </div>
                            <Button
                              className="flex h-[45px] items-center justify-center rounded-[12px] w-[45px]"
                              color="white_A700"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                className="h-[22px]"
                                src="images/img_ioniconbbatte.png"
                                alt="ioniconbbatte"
                              />
                            </Button>
                          </div>
                          <div className="bg-gradient4  flex flex-row items-center justify-between my-0 p-[21px] sm:px-5 rounded-[16px] w-full">
                            <div className="flex flex-col gap-[5px] items-start justify-start">
                              <Text
                                className="text-white-A700 text-xs"
                                size="txtHelveticaBold12WhiteA700"
                              >
                                Music Volume
                              </Text>
                              <Text
                                className="text-lg text-white-A700"
                                size="txtHelveticaBold18WhiteA700"
                              >
                                15/100
                              </Text>
                            </div>
                            <Button
                              className="flex h-[45px] items-center justify-center rounded-[12px] w-[45px]"
                              color="white_A700"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                className="h-[22px]"
                                src="images/img_ioniconmmusicalnotes.png"
                                alt="ioniconmmusical"
                              />
                            </Button>
                          </div>
                        </List>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[206px] items-center justify-end p-[15px] w-[21%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[33px] justify-start mt-1 w-full">
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] w-[39%] md:w-full">
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
                                          "url('images/img_group154.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[71px] md:h-auto object-cover"
                                        src="images/img_teal_blue_gray_800.png"
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
                          className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[206px] items-center justify-end p-[15px] w-[55%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-3.5 items-center justify-start mt-[7px] w-[98%] md:w-full">
                            <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                              <div className="flex flex-row gap-[15px] items-center justify-between w-[12%]">
                                <Button
                                  className="flex h-[45px] items-center justify-center rounded-[12px] w-[45px]"
                                  size="sm"
                                  variant="gradient"
                                  color="pink_A400_deep_purple_500"
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
                              <div className="flex flex-col items-start justify-start mb-[3px] mt-[11px] w-[16%]">
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtHelveticaBold12"
                                >
                                  60%
                                </Text>
                                <Line className="bg-gray-300 h-[3px] mt-2.5 w-full" />
                                <Line className="bg-gradient4  h-[5px] w-[68%]" />
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
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
                                <div className="md:h-[106px] h-[108px] relative w-[98%] md:w-full">
                                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                                    <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                      <div className="h-[82px] relative w-[98%] md:w-full">
                                        <Img
                                          className="absolute h-[82px] inset-[0] justify-center m-auto"
                                          src="images/img_group183.svg"
                                          alt="lines"
                                        />
                                        <Img
                                          className="absolute h-[78px] inset-[0] justify-center m-auto object-cover"
                                          src="images/img_teal_purple_500.png"
                                          alt="teal_One"
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
                                    src="images/img_dots_purple_500.svg"
                                    alt="dots_One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[21px] w-[98%] md:w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[235px] items-start justify-end p-[21px] sm:px-5 w-[34%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col items-start justify-start mt-2.5 w-[51%] md:w-full">
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              Upcoming events
                            </Text>
                            <Text
                              className="mt-1 text-gray-500 text-sm"
                              size="txtHelveticaBold14Bluegray200"
                            >
                              Joined
                            </Text>
                            <List
                              className="flex flex-col gap-[21px] items-center mt-[18px] w-full"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                                <Button
                                  className="flex h-[50px] items-center justify-center rounded-[12px] shadow-bs w-[50px]"
                                  color="blue_gray_50"
                                  size="sm"
                                  variant="fill"
                                >
                                  <Img
                                    className="h-[22px]"
                                    src="images/img_ioniconwwalletdefault_50x50.png"
                                    alt="ioniconwwalletd"
                                  />
                                </Button>
                                <div className="flex flex-col items-start justify-start">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    Cyber Week
                                  </Text>
                                  <Text
                                    className="mt-0.5 text-gray-600 text-sm"
                                    size="txtHelvetica14Bluegray400"
                                  >
                                    27 March 2020, at 12:30 PM
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                                <Button
                                  className="flex h-[50px] items-center justify-center rounded-[12px] shadow-bs w-[50px]"
                                  color="blue_gray_50"
                                  size="sm"
                                  variant="fill"
                                >
                                  <Img
                                    className="h-[22px]"
                                    src="images/img_ioniconnnotif_16x16.png"
                                    alt="ioniconnnotif"
                                  />
                                </Button>
                                <div className="flex flex-col items-start justify-start">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    Meeting with Marry
                                  </Text>
                                  <Text
                                    className="mt-0.5 text-gray-600 text-sm"
                                    size="txtHelvetica14Bluegray400"
                                  >
                                    24 March 2020, at 10:00 PM
                                  </Text>
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 ml-6 md:ml-[0] w-[33%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="bg-white-A700 flex flex-col gap-[25px] items-center justify-start p-[25px] sm:px-5 rounded-[16px] shadow-bs w-full">
                            <Button
                              className="flex h-16 items-center justify-center rounded-[12px] w-16"
                              size="md"
                              variant="gradient"
                              color="pink_A400_deep_purple_500"
                            >
                              <Img
                                className="h-[26px]"
                                src="images/img_ioniconwwalletdefault.svg"
                                alt="ioniconwwalletd"
                              />
                            </Button>
                            <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                              <Text
                                className="text-center text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Salary
                              </Text>
                              <Text
                                className="mt-1.5 text-center text-gray-500 text-xs"
                                size="txtHelveticaBold12"
                              >
                                Belong Interactive
                              </Text>
                              <Line className="bg-gradient7  h-px mt-3.5 w-full" />
                              <Text
                                className="mt-[15px] text-center text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                +$2000
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col gap-[25px] items-center justify-start p-[25px] sm:px-5 rounded-[16px] shadow-bs w-full">
                            <Button
                              className="flex h-16 items-center justify-center rounded-[12px] w-16"
                              size="md"
                              variant="gradient"
                              color="pink_A400_deep_purple_500"
                            >
                              <Img src="images/img_logo.svg" alt="logo" />
                            </Button>
                            <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                              <Text
                                className="text-center text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Paypal
                              </Text>
                              <Text
                                className="mt-1.5 text-center text-gray-500 text-xs"
                                size="txtHelveticaBold12"
                              >
                                Freelance Payment
                              </Text>
                              <Line className="bg-gradient7  h-px mt-3.5 w-full" />
                              <Text
                                className="mt-[15px] text-center text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                $455.00
                              </Text>
                            </div>
                          </div>
                        </List>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[58px] w-[30%] md:w-full">
                          <div className="bg-gradient5  flex flex-col items-center justify-start rounded-[16px] w-full">
                            <div className="h-60 relative w-full">
                              <Img
                                className="absolute h-60 inset-[0] justify-center m-auto object-cover rotate-[-17deg] rounded-[15px] w-full"
                                src="images/img_ellipse30_240x461.png"
                                alt="ellipseThirty"
                              />
                              <div className="absolute h-60 inset-y-[0] left-[0] my-auto w-[92%] sm:w-full">
                                <div className="border border-solid border-white-A700_28 h-60 m-auto rotate-[-17deg] rounded-[211px] w-full"></div>
                                <div className="absolute h-52 left-[0] top-[0] w-[68%]">
                                  <div className="border border-solid border-white-A700_28 h-52 m-auto rotate-[-17deg] rounded-[142px] w-full"></div>
                                  <div className="absolute border border-solid border-white-A700_28 h-[98px] left-[0] rotate-[-17deg] rounded-[77px] top-[0] w-[55%]"></div>
                                </div>
                              </div>
                              <div className="absolute h-60 inset-[0] justify-center m-auto w-full">
                                <Img
                                  className="h-60 m-auto object-cover rounded-[15px] w-full"
                                  src="images/img_texture_240x461.png"
                                  alt="texture"
                                />
                                <div className="absolute flex flex-col gap-7 inset-x-[0] justify-start mx-auto top-[9%] w-[88%]">
                                  <Img
                                    className="h-8 md:ml-[0] ml-[355px]"
                                    src="images/img_volume.svg"
                                    alt="volume"
                                  />
                                  <div className="flex flex-col gap-[59px] items-start justify-start mr-40 w-[61%] md:w-full">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <Text
                                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                        size="txtHelveticaBold24"
                                      >
                                        7812 2139 0823 XXXX
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-7 items-center justify-start w-[65%] md:w-full">
                                      <div className="flex flex-col items-start justify-start">
                                        <Text
                                          className="text-[10px] text-white-A700"
                                          size="txtHelvetica10WhiteA700"
                                        >
                                          Card Holder
                                        </Text>
                                        <Text
                                          className="mt-[3px] text-sm text-white-A700"
                                          size="txtHelveticaBold14WhiteA700"
                                        >
                                          Jack Peterson
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-center justify-start">
                                        <Text
                                          className="text-[10px] text-white-A700"
                                          size="txtHelvetica10WhiteA700"
                                        >
                                          Expires{" "}
                                        </Text>
                                        <Text
                                          className="text-sm text-white-A700"
                                          size="txtHelveticaBold14WhiteA700"
                                        >
                                          11/22
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-5 w-full">
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[172px] items-center justify-start p-5 w-[27%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col items-center justify-start mb-9 mt-2 w-full">
                            <div className="flex flex-col gap-6 items-start justify-start w-full">
                              <div className="flex flex-row items-start justify-between w-full">
                                <Text
                                  className="mt-[3px] text-gray-800 text-lg"
                                  size="txtHelveticaBold18"
                                >
                                  Full Body
                                </Text>
                                <div className="h-6 px-2 relative w-[84px]">
                                  <div className="absolute bg-red-200 h-6 inset-[0] m-auto rounded-lg shadow-bs2 w-full"></div>
                                  <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-auto">
                                    <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                      <div className="flex flex-col items-center justify-center w-auto">
                                        <Text
                                          className="text-[10px] text-center text-red-600 w-auto"
                                          size="txtHelveticaBold10Red600"
                                        >
                                          MODERATE
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
                                className="leading-[140.00%] text-gray-600 text-sm w-[82%] sm:w-full"
                                size="txtHelvetica14Bluegray400"
                              >
                                What matters is the people who are sparked by
                                it. And the people who are liked.
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[172px] items-center justify-start p-[11px] w-[16%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_lights.svg')",
                          }}
                        >
                          <div className="flex flex-row items-start justify-between mb-3 mt-[9px] w-[96%] md:w-full">
                            <div className="h-[126px] md:h-[73px] relative w-[27%]">
                              <div className="absolute flex flex-col md:gap-10 gap-[93px] h-full inset-y-[0] items-start justify-start my-auto right-[0]">
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtHelvetica12"
                                >
                                  OFF
                                </Text>
                                <Text
                                  className="text-base text-gray-800"
                                  size="txtHelveticaBold16"
                                >
                                  Lights
                                </Text>
                              </div>
                              <Img
                                className="absolute h-[52px] inset-y-[0] left-[0] my-auto w-[52px]"
                                src="images/img_lightbulb_blue_gray_200.svg"
                                alt="lightbulb"
                              />
                            </div>
                            <Switch
                              onColor="#e2e8f0"
                              offColor="#e2e8f0"
                              onHandleColor="#ffffff"
                              offHandleColor="#ffffff"
                              value={false}
                              className="gap-[9.34px] h-[18px] pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-9"
                            />
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[172px] items-center justify-end pt-[19px] w-[21%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-5 justify-start w-full">
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px] w-[19%] md:w-full">
                              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtHelveticaBold12"
                                >
                                  Calories
                                </Text>
                                <div className="flex flex-row items-start justify-evenly w-full">
                                  <Text
                                    className="text-gray-800 text-lg"
                                    size="txtHelveticaBold18"
                                  >
                                    187
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-green-500 text-sm"
                                    size="txtHelveticaBold14Green400"
                                  >
                                    +5%
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="h-[92px] md:h-auto object-cover"
                              src="images/img_graph_blue_gray_900.png"
                              alt="graph"
                            />
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[172px] items-start justify-start p-[22px] sm:px-5 w-[16%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[27px] items-start justify-start mb-1 w-[43%] md:w-full">
                            <Button
                              className="flex h-[45px] items-center justify-center rounded-[12px] w-[45px]"
                              size="sm"
                              variant="gradient"
                              color="pink_A400_deep_purple_500"
                            >
                              <Img
                                className="h-[22px]"
                                src="images/img_ioniconaarrowredosharp.png"
                                alt="ioniconaarrowre"
                              />
                            </Button>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                                <div className="flex flex-row items-end justify-start w-[63%] md:w-full">
                                  <Text
                                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                                    size="txtHelveticaBold24Bluegray900"
                                  >
                                    754
                                  </Text>
                                  <Text
                                    className="mt-[9px] text-gray-500 text-sm"
                                    size="txtHelveticaBold14Bluegray200"
                                  >
                                    m
                                  </Text>
                                </div>
                                <Text
                                  className="text-gray-600 text-sm"
                                  size="txtHelvetica14Bluegray400"
                                >
                                  New York City
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[172px] items-start justify-start p-[22px] sm:px-5 w-[16%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col items-start justify-start my-0.5 w-[31%] md:w-full">
                            <Text
                              className="text-gray-500 text-xs"
                              size="txtHelvetica12"
                            >
                              STEPS
                            </Text>
                            <Text
                              className="mt-[46px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                              size="txtHelveticaBold24Bluegray900"
                            >
                              11.4K
                            </Text>
                            <div className="h-6 md:h-[33px] md:ml-[0] ml-[3px] mt-[9px] px-2 relative w-[50px]">
                              <div className="absolute bg-green-200 h-6 inset-[0] m-auto rounded-lg shadow-bs2 w-full"></div>
                              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-auto">
                                <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                  <div className="flex flex-col items-center justify-center w-auto">
                                    <Text
                                      className="text-[10px] text-center text-green-500 w-auto"
                                      size="txtHelveticaBold10Green400"
                                    >
                                      +4.3%
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="h-px w-6"
                                  src="images/img_minwidth.svg"
                                  alt="minwidth_Two"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-6 w-full">
                        <div className="sm:h-[569px] h-[570px] md:h-[961px] relative w-[44%] md:w-full">
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[21px] sm:px-5 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-2.5 items-start justify-start mb-[470px] mt-[9px]">
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
                          </div>
                          <div className="absolute bottom-[4%] flex flex-col font-roboto gap-[5px] inset-x-[0] items-center justify-start mx-auto rotate-[-90deg] w-full">
                            <div className="md:h-[15px] h-[30px] relative w-full">
                              <div className="absolute md:h-[15px] h-[30px] inset-y-[0] my-auto right-[0] w-[87%] md:w-full">
                                <div className="absolute md:h-[15px] h-[30px] inset-y-[0] my-auto right-[0] w-[85%] sm:w-full">
                                  <div className="absolute md:h-[15px] h-[30px] inset-y-[0] my-auto right-[0] w-[83%] sm:w-full">
                                    <div className="absolute md:h-[15px] h-[30px] inset-y-[0] my-auto right-[0] w-[79%]">
                                      <div className="absolute md:h-[15px] h-[30px] inset-y-[0] my-auto right-[0] w-[72%]">
                                        <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-center my-auto right-[0] rotate-[90deg] w-[143px]">
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
                                        <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-center left-[0] my-auto rotate-[90deg] w-[141px]">
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
                                      </div>
                                      <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-center left-[0] my-auto rotate-[90deg] w-[143px]">
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
                                    </div>
                                    <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-center left-[0] my-auto rotate-[90deg] w-[142px]">
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
                                  </div>
                                  <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-center left-[0] my-auto rotate-[90deg] w-[141px]">
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
                                </div>
                                <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-center left-[0] my-auto rotate-[90deg] w-[142px]">
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
                              </div>
                              <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-center left-[0] my-auto rotate-[90deg] w-[143px]">
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
                            </div>
                            <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                                  <div className="md:h-[296px] h-[341px] sm:h-[459px] relative w-[86%] md:w-full">
                                    <div className="md:h-[255px] h-[341px] sm:h-[459px] m-auto w-full">
                                      <div className="flex flex-col h-full items-end justify-start m-auto w-full">
                                        <div className="md:h-[170px] h-[255px] sm:h-[374px] relative w-full">
                                          <div className="flex flex-col h-full items-end justify-start m-auto w-full">
                                            <div className="h-[170px] sm:h-[289px] md:h-[85px] relative w-full">
                                              <div className="flex flex-col m-auto w-full">
                                                <div className="sm:h-[289px] h-[85px] mx-auto w-full">
                                                  <div className="sm:h-[289px] h-[85px] m-auto w-full">
                                                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                                                        <div className="flex sm:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] sm:w-full">
                                                          <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                            <Text
                                                              className="h-[19px] mb-[54px] ml-1 md:ml-[0] rotate-[90deg] text-base text-gray-500 text-right"
                                                              size="txtRobotoMedium16"
                                                            >
                                                              28
                                                            </Text>
                                                          </div>
                                                        </div>
                                                        <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[274px] rotate-[90deg] w-[17%] sm:w-full">
                                                          <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                            <Text
                                                              className="mb-[54px] md:ml-[0] ml-[9px] rotate-[90deg] text-base text-gray-800 text-right"
                                                              size="txtRobotoMedium16Bluegray900"
                                                            >
                                                              2
                                                            </Text>
                                                          </div>
                                                        </div>
                                                        <div className="bg-gray-100 flex sm:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] sm:w-full">
                                                          <div className="bg-gray-50 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                            <Text
                                                              className="mb-[54px] md:ml-[0] ml-[9px] rotate-[90deg] text-base text-gray-800 text-right"
                                                              size="txtRobotoMedium16Bluegray900"
                                                            >
                                                              3
                                                            </Text>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[17%] my-auto rotate-[90deg] w-[17%]">
                                                      <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                        <Text
                                                          className="h-[19px] mb-[55px] ml-1 md:ml-[0] rotate-[90deg] text-base text-gray-500 text-right"
                                                          size="txtRobotoMedium16"
                                                        >
                                                          29
                                                        </Text>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[33%] rotate-[90deg]">
                                                    <Text
                                                      className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                                      size="txtRobotoMedium16Bluegray900"
                                                    >
                                                      1
                                                    </Text>
                                                  </div>
                                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[33%] my-auto rotate-[90deg] w-[17%]">
                                                    <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                      <Text
                                                        className="h-[19px] mb-[54px] md:ml-[0] ml-[3px] rotate-[90deg] text-base text-gray-500 text-right"
                                                        size="txtRobotoMedium16"
                                                      >
                                                        30
                                                      </Text>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="bg-gray-100 flex flex-col items-center justify-start ml-auto mt-[-0.7px] rotate-[90deg] w-[17%] z-[1]">
                                                  <div className="bg-gray-50 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                    <Text
                                                      className="mb-[54px] md:ml-[0] ml-[5px] rotate-[90deg] text-base text-gray-800 text-right"
                                                      size="txtRobotoMedium16Bluegray900"
                                                    >
                                                      10
                                                    </Text>
                                                  </div>
                                                </div>
                                                <div className="flex flex-col items-center justify-start ml-auto mr-[91px] mt-[-0.7px] rotate-[90deg] w-[17%] z-[1]">
                                                  <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                    <Text
                                                      className="mb-[54px] ml-2 md:ml-[0] rotate-[90deg] text-base text-gray-800 text-right"
                                                      size="txtRobotoMedium16Bluegray900"
                                                    >
                                                      9
                                                    </Text>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[33%] rotate-[90deg] w-[17%]">
                                                <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                  <Text
                                                    className="mb-[54px] md:ml-[0] ml-[9px] rotate-[90deg] text-base text-gray-800 text-right"
                                                    size="txtRobotoMedium16Bluegray900"
                                                  >
                                                    8
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[33%] rotate-[90deg] w-[17%]">
                                                <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                  <Text
                                                    className="mb-[54px] ml-3 md:ml-[0] rotate-[90deg] text-base text-gray-800 text-right"
                                                    size="txtRobotoMedium16Bluegray900"
                                                  >
                                                    7
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[17%] rotate-[90deg]">
                                                <Text
                                                  className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                                  size="txtRobotoMedium16Bluegray900"
                                                >
                                                  6
                                                </Text>
                                              </div>
                                              <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] rotate-[90deg]">
                                                <Text
                                                  className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                                  size="txtRobotoMedium16Bluegray900"
                                                >
                                                  5
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-row items-center justify-end w-[34%] md:w-full">
                                              <div className="flex flex-col items-center justify-start rotate-[90deg]">
                                                <Text
                                                  className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-[11px] sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                                  size="txtRobotoMedium16Bluegray900"
                                                >
                                                  16
                                                </Text>
                                              </div>
                                              <div className="bg-gray-100 flex flex-col items-center justify-start rotate-[90deg] w-1/2">
                                                <div className="bg-gray-50 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                  <Text
                                                    className="mb-[54px] md:ml-[0] ml-[5px] rotate-[90deg] text-base text-gray-800 text-right"
                                                    size="txtRobotoMedium16Bluegray900"
                                                  >
                                                    17
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[33%] rotate-[90deg]">
                                            <Text
                                              className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-[11px] sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                              size="txtRobotoMedium16Bluegray900"
                                            >
                                              15
                                            </Text>
                                          </div>
                                          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[33%] rotate-[90deg]">
                                            <Text
                                              className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-2.5 sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                              size="txtRobotoMedium16Bluegray900"
                                            >
                                              14
                                            </Text>
                                          </div>
                                          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[17%] rotate-[90deg]">
                                            <Text
                                              className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-2.5 sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                              size="txtRobotoMedium16Bluegray900"
                                            >
                                              13
                                            </Text>
                                          </div>
                                          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] rotate-[90deg]">
                                            <Text
                                              className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-2.5 sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                              size="txtRobotoMedium16Bluegray900"
                                            >
                                              12
                                            </Text>
                                          </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-end w-[34%] md:w-full">
                                          <div className="flex flex-col items-center justify-start rotate-[90deg] w-1/2">
                                            <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                              <Text
                                                className="h-[19px] mb-[54px] ml-1 md:ml-[0] rotate-[90deg] text-base text-gray-800 text-right"
                                                size="txtRobotoMedium16Bluegray900"
                                              >
                                                23
                                              </Text>
                                            </div>
                                          </div>
                                          <div className="bg-gray-100 flex flex-col items-center justify-start rotate-[90deg] w-1/2">
                                            <div className="bg-gray-50 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                              <Text
                                                className="h-[19px] mb-[54px] ml-1 md:ml-[0] rotate-[90deg] text-base text-gray-800 text-right"
                                                size="txtRobotoMedium16Bluegray900"
                                              >
                                                24
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[33%] rotate-[90deg] w-[17%]">
                                        <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                          <Text
                                            className="h-[19px] mb-[54px] ml-1 md:ml-[0] rotate-[90deg] text-base text-gray-800 text-right"
                                            size="txtRobotoMedium16Bluegray900"
                                          >
                                            22
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[33%] rotate-[90deg] w-[17%]">
                                        <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                          <Text
                                            className="mb-[54px] ml-1 md:ml-[0] rotate-[90deg] text-base text-gray-800 text-right"
                                            size="txtRobotoMedium16Bluegray900"
                                          >
                                            21
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[17%] rotate-[90deg] w-[17%]">
                                        <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                          <Text
                                            className="h-[19px] mb-[54px] ml-1 md:ml-[0] rotate-[90deg] text-base text-gray-800 text-right"
                                            size="txtRobotoMedium16Bluegray900"
                                          >
                                            20
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] rotate-[90deg]">
                                        <Text
                                          className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-[11px] sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                          size="txtRobotoMedium16Bluegray900"
                                        >
                                          19
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[1%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                                      <div className="flex flex-col items-end justify-start w-full">
                                        <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                                          <div className="bg-gradient6  flex flex-col items-center justify-end p-[5px] rounded-lg">
                                            <Text
                                              className="mt-0.5 rotate-[90deg] text-white-A700 text-xs w-[81%] sm:w-full"
                                              size="txtRobotoMedium12WhiteA700"
                                            >
                                              Dinner with family
                                            </Text>
                                          </div>
                                          <Button
                                            className="cursor-pointer font-medium leading-[normal] min-w-[178px] sm:ml-[0] ml-[5px] sm:mt-0 mt-2.5 rounded-lg text-center text-xs"
                                            shape="round"
                                            size="xs"
                                            variant="gradient"
                                            color="yellow_600_red_500"
                                          >
                                            Meeting with Michael
                                          </Button>
                                          <Button
                                            className="!text-white-A700 cursor-pointer font-medium leading-[normal] min-w-[178px] sm:ml-[0] ml-[95px] sm:mt-0 mt-2.5 rounded-lg text-center text-xs"
                                            shape="round"
                                            size="xs"
                                            variant="gradient"
                                            color="pink_A400_deep_purple_500"
                                          >
                                            Digital Event
                                          </Button>
                                        </div>
                                        <div className="flex flex-row items-center justify-end mt-[55px] w-1/2 md:w-full">
                                          <Button
                                            className="cursor-pointer font-medium leading-[normal] min-w-[178px] rounded-lg text-center text-xs"
                                            shape="round"
                                            size="xs"
                                            variant="gradient"
                                            color="light_blue_400_indigo_A700"
                                          >
                                            Facebook ADS Webinar
                                          </Button>
                                          <Button
                                            className="cursor-pointer font-medium leading-[normal] min-w-[87px] ml-1 rounded-lg text-center text-xs"
                                            shape="round"
                                            size="xs"
                                            variant="gradient"
                                            color="pink_300_red_A700"
                                          >
                                            Black Friday
                                          </Button>
                                        </div>
                                        <div className="flex sm:flex-col flex-row gap-[5px] items-center justify-end mt-[141px] w-[84%] md:w-full">
                                          <Button
                                            className="!text-white-A700 cursor-pointer font-medium leading-[normal] min-w-[269px] rounded-lg text-center text-xs"
                                            shape="round"
                                            size="xs"
                                            variant="gradient"
                                            color="pink_A400_deep_purple_500"
                                          >
                                            Marketing Online Event
                                          </Button>
                                          <Button
                                            className="cursor-pointer font-medium leading-[normal] min-w-[177px] rounded-lg text-center text-xs"
                                            shape="round"
                                            size="xs"
                                            variant="gradient"
                                            color="pink_300_red_A700"
                                          >
                                            Business Plan Strategy
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex md:flex-1 flex-col items-center justify-start w-[15%] md:w-full">
                                    <div className="bg-gray-100 flex flex-col items-center justify-start rotate-[90deg] w-full">
                                      <div className="bg-gray-50 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                        <Text
                                          className="mb-[54px] ml-2 md:ml-[0] rotate-[90deg] text-base text-gray-800 text-right"
                                          size="txtRobotoMedium16Bluegray900"
                                        >
                                          4
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="bg-gray-100 flex flex-col items-center justify-start rotate-[90deg] w-full">
                                      <div className="bg-gray-50 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                        <Text
                                          className="mb-[54px] ml-1 md:ml-[0] rotate-[90deg] text-base text-gray-800 text-right"
                                          size="txtRobotoMedium16Bluegray900"
                                        >
                                          11
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="bg-gray-100 flex flex-col items-center justify-start rotate-[90deg] w-full">
                                      <div className="bg-gray-50 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                        <Text
                                          className="mb-[54px] md:ml-[0] ml-[5px] rotate-[90deg] text-base text-gray-800 text-right"
                                          size="txtRobotoMedium16Bluegray900"
                                        >
                                          18
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="bg-gray-100 flex flex-col items-center justify-start rotate-[90deg] w-full">
                                      <div className="bg-gray-50 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                        <Text
                                          className="h-[19px] mb-[54px] md:ml-[0] ml-[3px] rotate-[90deg] text-base text-gray-800 text-right"
                                          size="txtRobotoMedium16Bluegray900"
                                        >
                                          25
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                                  <List
                                    className="md:flex-1 sm:flex-col flex-row grid grid-cols-3 w-[43%] md:w-full"
                                    orientation="horizontal"
                                  >
                                    <div className="flex flex-col items-center justify-start rotate-[90deg] w-full">
                                      <Text
                                        className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-2.5 sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                        size="txtRobotoMedium16Bluegray900"
                                      >
                                        26
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-center justify-start rotate-[90deg] w-full">
                                      <Text
                                        className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-2.5 sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                        size="txtRobotoMedium16Bluegray900"
                                      >
                                        27
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-center justify-start rotate-[90deg] w-full">
                                      <Text
                                        className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-2.5 sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                        size="txtRobotoMedium16Bluegray900"
                                      >
                                        28
                                      </Text>
                                    </div>
                                  </List>
                                  <div className="h-[85px] relative w-[29%] md:w-full">
                                    <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] rotate-[90deg]">
                                      <Text
                                        className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-2.5 sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                        size="txtRobotoMedium16Bluegray900"
                                      >
                                        30
                                      </Text>
                                    </div>
                                    <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto rotate-[90deg]">
                                      <Text
                                        className="bg-white-A700 h-[85px] justify-end outline outline-[1px] outline-indigo-50 pb-[35px] pl-2.5 sm:pr-5 pr-[35px] pt-[5px] rotate-[-90deg] text-base text-gray-800 text-right w-[91px]"
                                        size="txtRobotoMedium16Bluegray900"
                                      >
                                        29
                                      </Text>
                                    </div>
                                  </div>
                                  <List
                                    className="md:flex-1 sm:flex-col flex-row grid grid-cols-2 w-[29%] md:w-full"
                                    orientation="horizontal"
                                  >
                                    <div className="bg-gray-100 flex flex-col items-center justify-start rotate-[90deg] w-full">
                                      <div className="bg-gray-50 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                        <Text
                                          className="mb-[54px] ml-1 md:ml-[0] rotate-[90deg] text-base text-gray-800 text-right"
                                          size="txtRobotoMedium16Bluegray900"
                                        >
                                          31
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="bg-gray-100 flex flex-col items-center justify-start rotate-[90deg] w-full">
                                      <div className="bg-gray-50 flex flex-col items-start justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                        <Text
                                          className="mb-[54px] md:ml-[0] ml-[9px] rotate-[90deg] text-base text-gray-500 text-right"
                                          size="txtRobotoMedium16"
                                        >
                                          1
                                        </Text>
                                      </div>
                                    </div>
                                  </List>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[21%] md:w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[350px] items-center justify-start p-[21px] sm:px-5 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-[30px] items-start justify-start my-[9px] w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-800 text-lg"
                                  size="txtHelveticaBold18"
                                >
                                  Categories
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <List
                                  className="flex flex-col gap-[27px] items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-1 flex-row items-start justify-start my-0 w-full">
                                    <Button
                                      className="flex h-[38px] items-center justify-center rounded-[12px] w-[38px]"
                                      size="sm"
                                      variant="gradient"
                                      color="blue_gray_800_01_gray_900_01"
                                    >
                                      <Img
                                        className="h-[19px]"
                                        src="images/img_ioniconrrocketsharp.svg"
                                        alt="ioniconrrockets"
                                      />
                                    </Button>
                                    <div className="flex flex-col gap-2 items-start justify-start ml-[17px]">
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
                                      className="h-[15px] ml-[91px] mt-3.5 w-[15px]"
                                      src="images/img_arrowright_blue_gray_200.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                  <div className="flex flex-1 flex-row items-start justify-start my-0 w-full">
                                    <Button
                                      className="flex h-[38px] items-center justify-center rounded-[12px] w-[38px]"
                                      size="sm"
                                      variant="gradient"
                                      color="blue_gray_800_01_gray_900_01"
                                    >
                                      <Img
                                        className="h-[19px]"
                                        src="images/img_ioniconbbuilddefault.svg"
                                        alt="ioniconbbuildde"
                                      />
                                    </Button>
                                    <div className="flex flex-col gap-2 items-start justify-start ml-[17px]">
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
                                      className="h-[15px] ml-[108px] mt-3.5 w-[15px]"
                                      src="images/img_arrowright_blue_gray_200.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                  <div className="flex flex-1 flex-row items-start justify-start my-0 w-full">
                                    <Button
                                      className="flex h-[38px] items-center justify-center rounded-[12px] w-[38px]"
                                      size="sm"
                                      variant="gradient"
                                      color="blue_gray_800_01_gray_900_01"
                                    >
                                      <Img
                                        className="h-[19px]"
                                        src="images/img_map.svg"
                                        alt="map"
                                      />
                                    </Button>
                                    <div className="flex flex-col gap-1.5 items-start justify-start ml-[17px]">
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
                                      className="h-[15px] ml-[103px] mt-3.5 w-[15px]"
                                      src="images/img_arrowright_blue_gray_200.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                  <div className="flex flex-1 flex-row items-start justify-start my-0 w-full">
                                    <Button
                                      className="flex h-[38px] items-center justify-center rounded-[12px] w-[38px]"
                                      size="sm"
                                      variant="gradient"
                                      color="blue_gray_800_01_gray_900_01"
                                    >
                                      <Img
                                        className="h-[19px]"
                                        src="images/img_ioniconppersondefault_white_a700.svg"
                                        alt="ioniconppersond"
                                      />
                                    </Button>
                                    <div className="flex flex-col gap-[5px] items-start justify-start ml-[17px]">
                                      <Text
                                        className="text-gray-800 text-sm"
                                        size="txtHelveticaBold14"
                                      >
                                        Happy users
                                      </Text>
                                      <Text
                                        className="text-gray-600 text-xs"
                                        size="txtHelveticaBold12Bluegray400"
                                      >
                                        +430
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[15px] ml-[137px] mt-3.5 w-[15px]"
                                      src="images/img_arrowright_blue_gray_200.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                </List>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="bg-gradient5  flex flex-col items-center justify-start rounded-[15px] w-full">
                              <div className="h-[196px] relative w-full">
                                <Img
                                  className="h-[196px] m-auto object-cover rounded-[15px] w-full"
                                  src="images/img_14577184552761_196x335.png"
                                  alt="14577184552761"
                                />
                                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[5%] my-auto w-[52%]">
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtHelveticaBold18WhiteA700"
                                  >
                                    Some Kind of Blues
                                  </Text>
                                  <Text
                                    className="mt-1 text-sm text-white-A700"
                                    size="txtHelvetica14WhiteA700"
                                  >
                                    Deftones
                                  </Text>
                                  <div className="flex flex-row items-center justify-start mt-[66px] w-[92%] md:w-full">
                                    <Button
                                      className="border border-solid border-white-A700 flex h-10 items-center justify-center rotate-[180deg] rounded-[50%] w-10"
                                      shape="circle"
                                      color="white_A700_26"
                                      size="sm"
                                      variant="fill"
                                    >
                                      <Img
                                        className="h-4"
                                        src="images/img_ioniconpplaydefault.svg"
                                        alt="ioniconpplaydef"
                                      />
                                    </Button>
                                    <Button
                                      className="border border-solid border-white-A700 flex h-10 items-center justify-center ml-[17px] rounded-[50%] w-10"
                                      shape="circle"
                                      color="white_A700_26"
                                      size="xs"
                                      variant="fill"
                                    >
                                      <Img
                                        src="images/img_trash.svg"
                                        alt="trash"
                                      />
                                    </Button>
                                    <Button
                                      className="border border-solid border-white-A700 flex h-10 items-center justify-center ml-[17px] rounded-[50%] w-10"
                                      shape="circle"
                                      color="white_A700_26"
                                      size="sm"
                                      variant="fill"
                                    >
                                      <Img
                                        className="h-4"
                                        src="images/img_ioniconpplaydefault_white_a700.svg"
                                        alt="ioniconpplaydef_One"
                                      />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[570px] items-start justify-start p-[19px] w-[33%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[37px] items-start justify-start mb-[63px] mt-[11px] w-[56%] md:w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start ml-0.5 md:ml-[0]">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Orders overview
                              </Text>
                              <Text
                                className="text-gray-500 text-sm"
                                size="txtHelvetica14"
                              >
                                +30% this month
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <List
                                  className="flex flex-col gap-[7px] items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex md:flex-1 flex-col items-center justify-start ml-0.5 mr-[81px] my-0 w-[70%] md:w-full">
                                    <div className="flex flex-row gap-[19px] items-start justify-between w-full">
                                      <div className="flex flex-col gap-1.5 items-center justify-start w-[9%]">
                                        <div className="flex flex-col h-4 items-center justify-start w-4">
                                          <Img
                                            className="h-4 w-4"
                                            src="images/img_ioniconnnotif_cyan_300.svg"
                                            alt="ioniconnnotif"
                                          />
                                        </div>
                                        <Img
                                          className="h-[37px]"
                                          src="images/img_line_indigo_50.svg"
                                          alt="line"
                                        />
                                      </div>
                                      <div className="flex flex-col gap-1.5 items-start justify-start">
                                        <Text
                                          className="text-gray-800 text-sm"
                                          size="txtHelveticaBold14"
                                        >
                                          $2400, Design changes
                                        </Text>
                                        <Text
                                          className="text-gray-500 text-xs"
                                          size="txtHelveticaBold12"
                                        >
                                          22 DEC 7:20 PM
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex md:flex-1 flex-col items-center justify-start ml-0.5 mr-[101px] my-0 w-[63%] md:w-full">
                                    <div className="flex flex-row gap-[19px] items-start justify-between w-full">
                                      <div className="flex flex-col gap-1.5 items-center justify-start w-[10%]">
                                        <div className="flex flex-col h-4 items-center justify-start w-4">
                                          <Img
                                            className="h-4 w-4"
                                            src="images/img_ioniconllogocss3.svg"
                                            alt="ioniconllogocss"
                                          />
                                        </div>
                                        <Img
                                          className="h-[37px]"
                                          src="images/img_line_indigo_50.svg"
                                          alt="line"
                                        />
                                      </div>
                                      <div className="flex flex-col gap-[7px] items-start justify-start">
                                        <Text
                                          className="text-gray-800 text-sm"
                                          size="txtHelveticaBold14"
                                        >
                                          New order #4219423
                                        </Text>
                                        <Text
                                          className="text-gray-500 text-xs"
                                          size="txtHelveticaBold12"
                                        >
                                          21 DEC 11:21 PM
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex md:flex-1 flex-col items-center justify-start ml-0.5 mr-16 my-0 w-[76%] md:w-full">
                                    <div className="flex flex-row gap-[19px] items-start justify-between w-full">
                                      <div className="flex flex-col gap-[7px] items-center justify-start w-[8%]">
                                        <div className="flex flex-col h-4 items-center justify-start w-4">
                                          <Img
                                            className="h-4 w-4"
                                            src="images/img_cart_blue_400.svg"
                                            alt="cart"
                                          />
                                        </div>
                                        <Img
                                          className="h-[37px]"
                                          src="images/img_line_indigo_50.svg"
                                          alt="line"
                                        />
                                      </div>
                                      <div className="flex flex-col gap-[5px] items-start justify-start">
                                        <Text
                                          className="text-gray-800 text-sm"
                                          size="txtHelveticaBold14"
                                        >
                                          Server Payments for April
                                        </Text>
                                        <Text
                                          className="text-gray-500 text-xs"
                                          size="txtHelveticaBold12"
                                        >
                                          21 DEC 9:28 PM
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 flex-col items-center justify-start ml-0.5 my-0 w-full">
                                    <div className="flex flex-row gap-[19px] items-start justify-between w-full">
                                      <div className="flex flex-col gap-1.5 items-center justify-start w-[6%]">
                                        <div className="flex flex-col h-4 items-center justify-start w-4">
                                          <Img
                                            className="h-4 w-4"
                                            src="images/img_volume_orange_300.svg"
                                            alt="volume"
                                          />
                                        </div>
                                        <Img
                                          className="h-[37px]"
                                          src="images/img_line_indigo_50.svg"
                                          alt="line"
                                        />
                                      </div>
                                      <div className="flex flex-col gap-[7px] items-start justify-start">
                                        <Text
                                          className="text-gray-800 text-sm"
                                          size="txtHelveticaBold14"
                                        >
                                          New card added for order #3210145
                                        </Text>
                                        <Text
                                          className="text-gray-500 text-xs"
                                          size="txtHelveticaBold12"
                                        >
                                          20 DEC 3:52 PM
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex md:flex-1 flex-col items-center justify-start ml-0.5 mr-[7px] my-0 w-[97%] md:w-full">
                                    <div className="flex flex-row gap-[19px] items-start justify-between w-full">
                                      <div className="flex flex-col gap-[7px] items-center justify-start w-[7%]">
                                        <div className="flex flex-col h-4 items-center justify-start w-4">
                                          <Img
                                            className="h-4 w-4"
                                            src="images/img_close.svg"
                                            alt="close"
                                          />
                                        </div>
                                        <Img
                                          className="h-[37px]"
                                          src="images/img_line_indigo_50.svg"
                                          alt="line"
                                        />
                                      </div>
                                      <div className="flex flex-col gap-[5px] items-start justify-start">
                                        <Text
                                          className="text-gray-800 text-sm"
                                          size="txtHelveticaBold14"
                                        >
                                          Unlock packages for Development
                                        </Text>
                                        <Text
                                          className="text-gray-500 text-xs"
                                          size="txtHelveticaBold12"
                                        >
                                          19 DEC 11:35 PM
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex md:flex-1 flex-col items-center justify-start mr-[101px] my-0 w-[64%] md:w-full">
                                    <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                                      <div className="flex flex-col gap-[5px] items-center justify-start w-[12%]">
                                        <Img
                                          className="h-[19px] w-5"
                                          src="images/img_layer21.svg"
                                          alt="layerTwentyOne"
                                        />
                                        <Img
                                          className="h-[18px]"
                                          src="images/img_line_indigo_50.svg"
                                          alt="line"
                                        />
                                      </div>
                                      <div className="flex flex-col gap-[7px] items-start justify-start">
                                        <Text
                                          className="text-gray-800 text-sm"
                                          size="txtHelveticaBold14"
                                        >
                                          New order #9851258
                                        </Text>
                                        <Text
                                          className="text-gray-500 text-xs"
                                          size="txtHelveticaBold12"
                                        >
                                          18 DEC 4:41 PM
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </List>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
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
      </div>
    </>
  );
};

export default DashboardScreenWidgetsPage;
