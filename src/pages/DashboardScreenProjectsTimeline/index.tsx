import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
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

const DashboardScreenProjectsTimelinePage: React.FC = () => {
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
            className="bg-cover bg-no-repeat flex flex-col h-[1831px] items-center justify-end p-[23px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="flex md:flex-col flex-row gap-9 items-start justify-between mt-[19px] mx-auto md:px-5 w-full">
              <Sidebar11 className="!sticky !w-[233px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto top-[0]" />
              <div className="flex flex-1 flex-col gap-[51px] items-center justify-start w-full">
                <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[10%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[149px]">
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
                          / Projects / Timeline
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtHelveticaBold14"
                    >
                      Timeline
                    </Text>
                  </div>
                  <Img
                    className="h-6 mb-1.5 md:ml-[0] ml-[47px] md:mt-0 mt-[15px] w-6"
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
                <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                  <List
                    className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col h-[1620px] items-start justify-end sm:ml-[0] p-[21px] sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_firstcard.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[34px] items-start justify-start mb-0.5 mt-[9px] w-[81%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtHelveticaBold18"
                          >
                            Timeline with dotted line
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 md:h-auto object-cover w-4"
                                    src="images/img_ioniconnnotif_16x16.png"
                                    alt="ioniconnnotif"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col gap-[19px] items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
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
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="leading-[150.00%] text-gray-500 text-sm w-full"
                                      size="txtHelvetica14"
                                    >
                                      People care about how you see the world,
                                      how you think, what motivates you, what
                                      you’re struggling with or afraid of.
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Button
                                    className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                    size="xs"
                                    variant="gradient"
                                    color="light_blue_400_indigo_A700"
                                  >
                                    DESIGN
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[5px] w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_ioniconllogocss3.svg"
                                    alt="ioniconllogocss"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_One"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[7px] items-start justify-start">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    New order #1832412
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    21 DEC 11:01 PM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    People care about how you see the world, how
                                    you think, what motivates you, what you’re
                                    struggling with or afraid of.
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start mt-[18px] w-[28%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="pink_300_red_A700"
                                    >
                                      ORDER
                                    </Button>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="pink_300_red_A700"
                                    >
                                      #1832412
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[7px] w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_cart_blue_400.svg"
                                    alt="cart"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Two"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[5px] items-start justify-start">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    Server payments for April
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    21 DEC 9:34 PM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    People care about how you see the world, how
                                    you think, what motivates you, what you’re
                                    struggling with or afraid of.
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start w-[31%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="light_blue_400_indigo_A700"
                                    >
                                      SERVER
                                    </Button>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[90px]"
                                      size="xs"
                                      variant="gradient"
                                      color="light_blue_400_indigo_A700"
                                    >
                                      PAYMENTS
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-1.5 w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_volume_orange_300.svg"
                                    alt="volume"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Three"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[7px] items-start justify-start">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    New card added for order #4395133
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    20 DEC 2:20 AM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    People care about how you see the world, how
                                    you think, what motivates you, what you’re
                                    struggling with or afraid of.
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start mt-[18px] w-[28%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="yellow_600_red_500"
                                    >
                                      CARD
                                    </Button>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[78px]"
                                      size="xs"
                                      variant="gradient"
                                      color="yellow_600_red_500"
                                    >
                                      #4395133
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-1.5 w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Four"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col gap-[19px] items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-full">
                                  <div className="flex flex-col gap-[5px] items-start justify-start">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      Unlock packages for development
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      18 DEC 4:54 AM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="leading-[150.00%] text-gray-500 text-sm w-full"
                                      size="txtHelvetica14"
                                    >
                                      People care about how you see the world,
                                      how you think, what motivates you, what
                                      you’re struggling with or afraid of.
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Button
                                    className="!text-white-A700 cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[114px]"
                                    size="xs"
                                    variant="gradient"
                                    color="pink_A400_deep_purple_500"
                                  >
                                    DEVELOPMENT
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-1.5 w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 md:h-auto object-cover w-4"
                                    src="images/img_ioniconnnotif_16x16.png"
                                    alt="ioniconnnotif_One"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Five"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col gap-[19px] items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
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
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="leading-[150.00%] text-gray-500 text-sm w-full"
                                      size="txtHelvetica14"
                                    >
                                      People care about how you see the world,
                                      how you think, what motivates you, what
                                      you’re struggling with or afraid of.
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Button
                                    className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                    size="xs"
                                    variant="gradient"
                                    color="light_blue_400_indigo_A700"
                                  >
                                    DESIGN
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[5px] w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_ioniconllogocss3.svg"
                                    alt="ioniconllogocss_One"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Six"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[7px] items-start justify-start">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    New order #1832412
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    21 DEC 11:01 PM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    People care about how you see the world, how
                                    you think, what motivates you, what you’re
                                    struggling with or afraid of.
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start mt-[18px] w-[28%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="pink_300_red_A700"
                                    >
                                      ORDER
                                    </Button>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="pink_300_red_A700"
                                    >
                                      #1832412
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[7px] w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_cart_blue_400.svg"
                                    alt="cart_One"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Seven"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[5px] items-start justify-start">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    Server payments for April
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    21 DEC 9:34 PM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    People care about how you see the world, how
                                    you think, what motivates you, what you’re
                                    struggling with or afraid of.
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start w-[31%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="light_blue_400_indigo_A700"
                                    >
                                      SERVER
                                    </Button>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[90px]"
                                      size="xs"
                                      variant="gradient"
                                      color="light_blue_400_indigo_A700"
                                    >
                                      PAYMENTS
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-1.5 w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_volume_orange_300.svg"
                                    alt="volume_One"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Eight"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[7px] items-start justify-start">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    New card added for order #4395133
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    20 DEC 2:20 AM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    People care about how you see the world, how
                                    you think, what motivates you, what you’re
                                    struggling with or afraid of.
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start mt-[18px] w-[28%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="yellow_600_red_500"
                                    >
                                      CARD
                                    </Button>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[78px]"
                                      size="xs"
                                      variant="gradient"
                                      color="yellow_600_red_500"
                                    >
                                      #4395133
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col h-[1620px] items-start justify-start sm:ml-[0] p-[21px] sm:px-5 w-full"
                      style={{ backgroundImage: "url('images/img_graph.png')" }}
                    >
                      <div className="flex flex-col gap-[27px] items-start justify-start my-[9px] w-[81%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtHelveticaBold18WhiteA700"
                          >
                            Timeline dark with dashed line
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px] w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 md:h-auto object-cover w-4"
                                    src="images/img_ioniconnnotif_16x16.png"
                                    alt="ioniconnnotif"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col gap-[19px] items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                                  <div className="flex flex-col gap-1.5 items-start justify-start">
                                    <Text
                                      className="text-sm text-white-A700"
                                      size="txtHelveticaBold14WhiteA700"
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
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="leading-[150.00%] text-gray-500 text-sm w-full"
                                      size="txtHelvetica14"
                                    >
                                      People care about how you see the world,
                                      how you think, what motivates you, what
                                      you’re struggling with or afraid of.
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Button
                                    className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                    size="xs"
                                    variant="gradient"
                                    color="light_blue_400_indigo_A700"
                                  >
                                    DESIGN
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[5px] w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_ioniconllogocss3.svg"
                                    alt="ioniconllogocss"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_One"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[7px] items-start justify-start">
                                  <Text
                                    className="text-sm text-white-A700"
                                    size="txtHelveticaBold14WhiteA700"
                                  >
                                    New order #1832412
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    21 DEC 11:01 PM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    People care about how you see the world, how
                                    you think, what motivates you, what you’re
                                    struggling with or afraid of.
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start mt-[18px] w-[28%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="pink_300_red_A700"
                                    >
                                      ORDER
                                    </Button>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="pink_300_red_A700"
                                    >
                                      #1832412
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[7px] w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_cart_blue_400.svg"
                                    alt="cart"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Two"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[5px] items-start justify-start">
                                  <Text
                                    className="text-sm text-white-A700"
                                    size="txtHelveticaBold14WhiteA700"
                                  >
                                    Server payments for April
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    21 DEC 9:34 PM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    People care about how you see the world, how
                                    you think, what motivates you, what you’re
                                    struggling with or afraid of.
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start w-[31%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="light_blue_400_indigo_A700"
                                    >
                                      SERVER
                                    </Button>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[90px]"
                                      size="xs"
                                      variant="gradient"
                                      color="light_blue_400_indigo_A700"
                                    >
                                      PAYMENTS
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-1.5 w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_volume_orange_300.svg"
                                    alt="volume"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Three"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[7px] items-start justify-start">
                                  <Text
                                    className="text-sm text-white-A700"
                                    size="txtHelveticaBold14WhiteA700"
                                  >
                                    New card added for order #4395133
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    20 DEC 2:20 AM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    People care about how you see the world, how
                                    you think, what motivates you, what you’re
                                    struggling with or afraid of.
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start mt-[18px] w-[28%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="yellow_600_red_500"
                                    >
                                      CARD
                                    </Button>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[78px]"
                                      size="xs"
                                      variant="gradient"
                                      color="yellow_600_red_500"
                                    >
                                      #4395133
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-1.5 w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Four"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col gap-[19px] items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-full">
                                  <div className="flex flex-col gap-[5px] items-start justify-start">
                                    <Text
                                      className="text-sm text-white-A700"
                                      size="txtHelveticaBold14WhiteA700"
                                    >
                                      Unlock packages for development
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      18 DEC 4:54 AM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="leading-[150.00%] text-gray-500 text-sm w-full"
                                      size="txtHelvetica14"
                                    >
                                      People care about how you see the world,
                                      how you think, what motivates you, what
                                      you’re struggling with or afraid of.
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Button
                                    className="!text-white-A700 cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[114px]"
                                    size="xs"
                                    variant="gradient"
                                    color="pink_A400_deep_purple_500"
                                  >
                                    DEVELOPMENT
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-1.5 w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 md:h-auto object-cover w-4"
                                    src="images/img_ioniconnnotif_16x16.png"
                                    alt="ioniconnnotif_One"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Five"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col gap-[19px] items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                                  <div className="flex flex-col gap-1.5 items-start justify-start">
                                    <Text
                                      className="text-sm text-white-A700"
                                      size="txtHelveticaBold14WhiteA700"
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
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="leading-[150.00%] text-gray-500 text-sm w-full"
                                      size="txtHelvetica14"
                                    >
                                      People care about how you see the world,
                                      how you think, what motivates you, what
                                      you’re struggling with or afraid of.
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Button
                                    className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                    size="xs"
                                    variant="gradient"
                                    color="light_blue_400_indigo_A700"
                                  >
                                    DESIGN
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[5px] w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_ioniconllogocss3.svg"
                                    alt="ioniconllogocss_One"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Six"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[7px] items-start justify-start">
                                  <Text
                                    className="text-sm text-white-A700"
                                    size="txtHelveticaBold14WhiteA700"
                                  >
                                    New order #1832412
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    21 DEC 11:01 PM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    People care about how you see the world, how
                                    you think, what motivates you, what you’re
                                    struggling with or afraid of.
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start mt-[18px] w-[28%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="pink_300_red_A700"
                                    >
                                      ORDER
                                    </Button>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="pink_300_red_A700"
                                    >
                                      #1832412
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[7px] w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_cart_blue_400.svg"
                                    alt="cart_One"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Seven"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[5px] items-start justify-start">
                                  <Text
                                    className="text-sm text-white-A700"
                                    size="txtHelveticaBold14WhiteA700"
                                  >
                                    Server payments for April
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    21 DEC 9:34 PM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    People care about how you see the world, how
                                    you think, what motivates you, what you’re
                                    struggling with or afraid of.
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start w-[31%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="light_blue_400_indigo_A700"
                                    >
                                      SERVER
                                    </Button>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[90px]"
                                      size="xs"
                                      variant="gradient"
                                      color="light_blue_400_indigo_A700"
                                    >
                                      PAYMENTS
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-1.5 w-full">
                            <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-center justify-start w-[3%] sm:w-full">
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_volume_orange_300.svg"
                                    alt="volume_One"
                                  />
                                </div>
                                <Img
                                  className="h-[140px]"
                                  src="images/img_line_indigo_50.svg"
                                  alt="line_Eight"
                                />
                              </div>
                              <div className="flex sm:flex-1 flex-col items-start justify-start w-[95%] sm:w-full">
                                <div className="flex flex-col gap-[7px] items-start justify-start">
                                  <Text
                                    className="text-sm text-white-A700"
                                    size="txtHelveticaBold14WhiteA700"
                                  >
                                    New card added for order #4395133
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    20 DEC 2:20 AM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                  <Text
                                    className="leading-[150.00%] text-gray-500 text-sm w-full"
                                    size="txtHelvetica14"
                                  >
                                    People care about how you see the world, how
                                    you think, what motivates you, what you’re
                                    struggling with or afraid of.
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-1.5 items-center justify-start mt-[18px] w-[28%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[74px]"
                                      size="xs"
                                      variant="gradient"
                                      color="yellow_600_red_500"
                                    >
                                      CARD
                                    </Button>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-bold h-7 rounded text-[10px] text-center w-[78px]"
                                      size="xs"
                                      variant="gradient"
                                      color="yellow_600_red_500"
                                    >
                                      #4395133
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
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

export default DashboardScreenProjectsTimelinePage;
