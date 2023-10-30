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

const DashboardScreenAccountBillingPage: React.FC = () => {
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
            className="bg-cover bg-no-repeat flex flex-col h-[1296px] items-center justify-end p-[23px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="flex md:flex-col flex-row gap-9 items-start justify-between mt-[19px] mx-auto md:px-5 w-full">
              <Sidebar11 className="!sticky !w-[233px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto top-[0]" />
              <div className="flex flex-1 flex-col gap-[50px] items-center justify-start w-full">
                <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[9%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[136px]">
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
                          / Account / Billing
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="mt-0.5 text-gray-800 text-sm"
                      size="txtHelveticaBold14"
                    >
                      Billing
                    </Text>
                  </div>
                  <Img
                    className="h-6 mb-[7px] md:ml-[0] ml-[60px] md:mt-0 mt-[15px] w-6"
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
                <div className="flex flex-col items-start justify-start w-full">
                  <List
                    className="sm:flex-col flex-row gap-[38px] grid sm:grid-cols-1 grid-cols-4 w-[31%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-col h-[35px] md:h-auto items-center justify-center sm:ml-[0] hover:mx-0 px-2 rounded-[12px] hover:shadow-bs2 shadow-bs2 w-[134px] hover:w-full">
                      <div className="flex flex-col items-center justify-center w-auto">
                        <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                          <div className="flex flex-col items-center justify-center w-auto">
                            <Text
                              className="text-[10px] text-center text-gray-800 w-auto"
                              size="txtHelveticaBold10Bluegray900"
                            >
                              MESSAGES
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
                    <div className="hover:cursor-pointer flex flex-col h-[35px] md:h-auto items-center justify-center sm:ml-[0] hover:mx-0 px-2 hover:shadow-bs2 w-[38px] hover:w-full">
                      <div className="flex flex-col items-center justify-center w-auto">
                        <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                          <div className="flex flex-col items-center justify-center w-auto">
                            <Text
                              className="text-[10px] text-center text-gray-800 w-auto"
                              size="txtHelveticaBold10Bluegray900"
                            >
                              SOCIAL
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
                    <div className="hover:cursor-pointer flex flex-col h-[35px] md:h-auto items-center justify-center sm:ml-[0] hover:mx-0 px-2 hover:shadow-bs2 w-[78px] hover:w-full">
                      <div className="flex flex-col items-center justify-center w-auto">
                        <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                          <div className="flex flex-col items-center justify-center w-auto">
                            <Text
                              className="text-[10px] text-center text-gray-800 w-auto"
                              size="txtHelveticaBold10Bluegray900"
                            >
                              NOTIFICATIONS
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
                    <div className="hover:cursor-pointer flex flex-col h-[35px] md:h-auto items-center justify-center sm:ml-[0] hover:mx-0 px-2 hover:shadow-bs2 w-[43px] hover:w-full">
                      <div className="flex flex-col items-center justify-center w-auto">
                        <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                          <div className="flex flex-col items-center justify-center w-auto">
                            <Text
                              className="text-[10px] text-center text-gray-800 w-auto"
                              size="txtHelveticaBold10Bluegray900"
                            >
                              BACKUP
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
                  <div className="flex flex-col gap-6 items-center justify-start mt-[50px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[23px] items-center justify-start w-[62%] md:w-full">
                          <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                            <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
                              <div className="bg-gradient5  flex flex-col items-center justify-start rounded-[16px] w-full">
                                <div className="h-60 relative w-full">
                                  <Img
                                    className="absolute h-60 inset-[0] justify-center m-auto object-cover rotate-[-17deg] rounded-[15px] w-full"
                                    src="images/img_ellipse30.png"
                                    alt="ellipseThirty"
                                  />
                                  <div className="absolute h-60 inset-y-[0] left-[0] my-auto w-[92%] sm:w-full">
                                    <Img
                                      className="h-60 m-auto object-cover rotate-[-17deg] w-full"
                                      src="images/img_ellipse31.png"
                                      alt="ellipseThirtyOne"
                                    />
                                    <div className="absolute h-52 left-[0] top-[0] w-[68%]">
                                      <div className="border border-solid border-white-A700_28 h-52 m-auto rotate-[-17deg] rounded-[142px] w-full"></div>
                                      <div className="absolute border border-solid border-white-A700_28 h-[98px] left-[0] rotate-[-17deg] rounded-[77px] top-[0] w-[55%]"></div>
                                    </div>
                                  </div>
                                  <div className="absolute h-60 inset-[0] justify-center m-auto w-full">
                                    <Img
                                      className="h-60 m-auto object-cover rounded-[15px] w-full"
                                      src="images/img_texture.png"
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
                            <List
                              className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 w-[51%] md:w-full"
                              orientation="horizontal"
                            >
                              <div className="bg-white-A700 flex flex-col gap-[25px] h-60 items-center justify-end p-[26px] sm:px-5 rounded-[16px] shadow-bs w-full">
                                <Button
                                  className="flex h-16 items-center justify-center mt-[3px] rounded-[12px] w-16"
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
                                <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
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
                              <div className="bg-white-A700 flex flex-col gap-[25px] h-60 items-center justify-end p-[26px] sm:px-5 rounded-[16px] shadow-bs w-full">
                                <Button
                                  className="flex h-16 items-center justify-center mt-[3px] rounded-[12px] w-16"
                                  size="md"
                                  variant="gradient"
                                  color="pink_A400_deep_purple_500"
                                >
                                  <Img src="images/img_logo.svg" alt="logo" />
                                </Button>
                                <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
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
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[172px] items-center justify-start p-6 sm:px-5 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-6 items-center justify-start w-full">
                              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                                <div className="flex flex-col items-center justify-start mt-0.5">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    Payment Method
                                  </Text>
                                </div>
                                <div className="bg-gradient5  flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg w-[134px]">
                                  <div className="flex flex-col items-center justify-center w-auto">
                                    <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <Text
                                          className="text-[10px] text-center text-white-A700"
                                          size="txtHelveticaBold10"
                                        >
                                          ADD A NEW CARD
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
                              <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between w-full">
                                <Input
                                  name="price_One"
                                  placeholder="7812 2139 0823 XXXX"
                                  className="md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-left text-sm w-full"
                                  wrapClassName="border border-gray-300 border-solid flex sm:flex-1 sm:w-full"
                                  prefix={
                                    <Img
                                      className="mt-px mb-0.5 mr-[15px]"
                                      src="images/img_volume_yellow_800_01.svg"
                                      alt="volume"
                                    />
                                  }
                                  suffix={
                                    <Img
                                      className="h-3 ml-[35px] my-0.5"
                                      src="images/img_edit_blue_gray_900.svg"
                                      alt="edit"
                                    />
                                  }
                                  shape="round"
                                  color="white_A700"
                                  size="xl"
                                  variant="fill"
                                ></Input>
                                <Input
                                  name="price_Two"
                                  placeholder="7812 2139 0823 XXXX"
                                  className="md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-left text-sm w-full"
                                  wrapClassName="border border-gray-300 border-solid flex sm:flex-1 sm:w-full"
                                  prefix={
                                    <div className="mt-[3px] mb-1 mr-[15px] bg-deep_purple-A400">
                                      <Img
                                        className="my-auto"
                                        src="images/img_file.svg"
                                        alt="file"
                                      />
                                    </div>
                                  }
                                  suffix={
                                    <Img
                                      className="h-3 ml-[35px] my-0.5"
                                      src="images/img_edit_blue_gray_900.svg"
                                      alt="edit"
                                    />
                                  }
                                  shape="round"
                                  color="white_A700"
                                  size="xl"
                                  variant="fill"
                                ></Input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[436px] items-center justify-start p-[21px] sm:px-5 w-[37%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[25px] items-center justify-start mb-7 mt-0.5 w-full">
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-800 text-lg"
                                  size="txtHelveticaBold18"
                                >
                                  Invoices
                                </Text>
                              </div>
                              <div className="border border-purple-500 border-solid flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg w-[110px]">
                                <div className="flex flex-col items-center justify-center w-auto">
                                  <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <a
                                        href="javascript:"
                                        className="text-[10px] text-center text-purple-500"
                                      >
                                        <Text size="txtHelveticaBold10Purple500">
                                          VIEW ALL
                                        </Text>
                                      </a>
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
                            <div className="flex flex-col items-center justify-start w-full">
                              <List
                                className="flex flex-col gap-[29px] items-center w-full"
                                orientation="vertical"
                              >
                                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                                  <div className="flex flex-col gap-1.5 items-start justify-start">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      March, 01, 2020
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      #MS-415646
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-[16%]">
                                    <Text
                                      className="text-gray-500 text-right text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      $180
                                    </Text>
                                    <Img
                                      className="h-[15px] w-[15px]"
                                      src="images/img_ioniconddocumenttext_blue_gray_900.svg"
                                      alt="ioniconddocumen"
                                    />
                                    <Text
                                      className="text-[10px] text-gray-800"
                                      size="txtHelveticaBold10Bluegray900"
                                    >
                                      PDF
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                                  <div className="flex flex-col gap-[5px] items-start justify-start">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      February, 10, 2021
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      #RV-126749
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-[16%]">
                                    <Text
                                      className="text-gray-500 text-right text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      $250
                                    </Text>
                                    <Img
                                      className="h-[15px] w-[15px]"
                                      src="images/img_ioniconddocumenttext_blue_gray_900.svg"
                                      alt="ioniconddocumen"
                                    />
                                    <Text
                                      className="text-[10px] text-gray-800"
                                      size="txtHelveticaBold10Bluegray900"
                                    >
                                      PDF
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                                  <div className="flex flex-col gap-[5px] items-start justify-start">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      April, 05, 2020
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      #FB-212562
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-[16%]">
                                    <Text
                                      className="text-gray-500 text-right text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      $560
                                    </Text>
                                    <Img
                                      className="h-[15px] w-[15px]"
                                      src="images/img_ioniconddocumenttext_blue_gray_900.svg"
                                      alt="ioniconddocumen"
                                    />
                                    <Text
                                      className="text-[10px] text-gray-800"
                                      size="txtHelveticaBold10Bluegray900"
                                    >
                                      PDF
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                                  <div className="flex flex-col gap-1.5 items-start justify-start">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      June, 25, 2019
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      #QW-103578
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-[16%]">
                                    <Text
                                      className="text-gray-500 text-right text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      $120
                                    </Text>
                                    <Img
                                      className="h-[15px] w-[15px]"
                                      src="images/img_ioniconddocumenttext_blue_gray_900.svg"
                                      alt="ioniconddocumen"
                                    />
                                    <Text
                                      className="text-[10px] text-gray-800"
                                      size="txtHelveticaBold10Bluegray900"
                                    >
                                      PDF
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                                  <div className="flex flex-col gap-1.5 items-start justify-start">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      March, 01, 2019
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      #AR-803481
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-[16%]">
                                    <Text
                                      className="text-gray-500 text-right text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      $300
                                    </Text>
                                    <Img
                                      className="h-[15px] w-[15px]"
                                      src="images/img_ioniconddocumenttext_blue_gray_900.svg"
                                      alt="ioniconddocumen"
                                    />
                                    <Text
                                      className="text-[10px] text-gray-800"
                                      size="txtHelveticaBold10Bluegray900"
                                    >
                                      PDF
                                    </Text>
                                  </div>
                                </div>
                              </List>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[538px] items-center justify-end p-[21px] sm:px-5 w-[57%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_firstcard.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-[17px] items-start justify-start mt-2.5 w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              Billing Information
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <List
                              className="flex flex-col gap-6 items-center w-full"
                              orientation="vertical"
                            >
                              <div
                                className="bg-cover bg-no-repeat flex flex-1 flex-col h-[132px] items-center justify-end my-0 p-[25px] sm:px-5 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_1_gray_50_01.svg')",
                                }}
                              >
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                                    <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-full">
                                      <div className="flex md:flex-1 flex-row sm:gap-10 items-start justify-between w-[93%] md:w-full">
                                        <Text
                                          className="text-gray-600 text-sm"
                                          size="txtHelveticaBold14Bluegray400"
                                        >
                                          Oliver Liam
                                        </Text>
                                        <div className="flex flex-row items-start justify-evenly">
                                          <Img
                                            className="h-[15px] w-[15px]"
                                            src="images/img_delete.svg"
                                            alt="delete"
                                          />
                                          <Text
                                            className="text-[10px] text-red-600"
                                            size="txtHelveticaBold10Red600"
                                          >
                                            DELETE
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex md:flex-1 flex-row items-center justify-evenly w-[5%] md:w-full">
                                        <Img
                                          className="h-3 w-3"
                                          src="images/img_edit_blue_gray_900.svg"
                                          alt="edit"
                                        />
                                        <Text
                                          className="text-[10px] text-gray-800"
                                          size="txtHelveticaBold10Bluegray900"
                                        >
                                          EDIT
                                        </Text>
                                      </div>
                                    </div>
                                    <Text
                                      className="leading-[150.00%] text-gray-500 text-xs"
                                      size="txtHelvetica12"
                                    >
                                      <span className="text-gray-500 font-helvetica text-left font-normal">
                                        Company Name:{" "}
                                      </span>
                                      <span className="text-gray-600 font-helvetica text-left font-bold">
                                        <>
                                          Viking Burrito
                                          <br />
                                        </>
                                      </span>
                                      <span className="text-gray-500 font-helvetica text-left font-normal">
                                        Email Address:{" "}
                                      </span>
                                      <span className="text-gray-600 font-helvetica text-left font-bold">
                                        <>
                                          oliver@burrito.com
                                          <br />
                                        </>
                                      </span>
                                      <span className="text-gray-500 font-helvetica text-left font-normal">
                                        VAT Number:{" "}
                                      </span>
                                      <span className="text-gray-600 font-helvetica text-left font-bold">
                                        FRB1235476
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-1 flex-col h-[132px] items-center justify-end my-0 p-[25px] sm:px-5 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_1_gray_50_01.svg')",
                                }}
                              >
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                                    <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-full">
                                      <div className="flex md:flex-1 flex-row sm:gap-10 items-start justify-between w-[93%] md:w-full">
                                        <Text
                                          className="text-gray-600 text-sm"
                                          size="txtHelveticaBold14Bluegray400"
                                        >
                                          Oliver Liam
                                        </Text>
                                        <div className="flex flex-row items-start justify-evenly">
                                          <Img
                                            className="h-[15px] w-[15px]"
                                            src="images/img_delete.svg"
                                            alt="delete"
                                          />
                                          <Text
                                            className="text-[10px] text-red-600"
                                            size="txtHelveticaBold10Red600"
                                          >
                                            DELETE
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex md:flex-1 flex-row items-center justify-evenly w-[5%] md:w-full">
                                        <Img
                                          className="h-3 w-3"
                                          src="images/img_edit_blue_gray_900.svg"
                                          alt="edit"
                                        />
                                        <Text
                                          className="text-[10px] text-gray-800"
                                          size="txtHelveticaBold10Bluegray900"
                                        >
                                          EDIT
                                        </Text>
                                      </div>
                                    </div>
                                    <Text
                                      className="leading-[150.00%] text-gray-500 text-xs"
                                      size="txtHelvetica12"
                                    >
                                      <span className="text-gray-500 font-helvetica text-left font-normal">
                                        Company Name:{" "}
                                      </span>
                                      <span className="text-gray-600 font-helvetica text-left font-bold">
                                        <>
                                          Viking Burrito
                                          <br />
                                        </>
                                      </span>
                                      <span className="text-gray-500 font-helvetica text-left font-normal">
                                        Email Address:{" "}
                                      </span>
                                      <span className="text-gray-600 font-helvetica text-left font-bold">
                                        <>
                                          oliver@burrito.com
                                          <br />
                                        </>
                                      </span>
                                      <span className="text-gray-500 font-helvetica text-left font-normal">
                                        VAT Number:{" "}
                                      </span>
                                      <span className="text-gray-600 font-helvetica text-left font-bold">
                                        FRB1235476
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-1 flex-col h-[132px] items-center justify-end my-0 p-[25px] sm:px-5 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_1_gray_50_01.svg')",
                                }}
                              >
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                                    <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-full">
                                      <div className="flex md:flex-1 flex-row sm:gap-10 items-start justify-between w-[93%] md:w-full">
                                        <Text
                                          className="text-gray-600 text-sm"
                                          size="txtHelveticaBold14Bluegray400"
                                        >
                                          Oliver Liam
                                        </Text>
                                        <div className="flex flex-row items-start justify-evenly">
                                          <Img
                                            className="h-[15px] w-[15px]"
                                            src="images/img_delete.svg"
                                            alt="delete"
                                          />
                                          <Text
                                            className="text-[10px] text-red-600"
                                            size="txtHelveticaBold10Red600"
                                          >
                                            DELETE
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex md:flex-1 flex-row items-center justify-evenly w-[5%] md:w-full">
                                        <Img
                                          className="h-3 w-3"
                                          src="images/img_edit_blue_gray_900.svg"
                                          alt="edit"
                                        />
                                        <Text
                                          className="text-[10px] text-gray-800"
                                          size="txtHelveticaBold10Bluegray900"
                                        >
                                          EDIT
                                        </Text>
                                      </div>
                                    </div>
                                    <Text
                                      className="leading-[150.00%] text-gray-500 text-xs"
                                      size="txtHelvetica12"
                                    >
                                      <span className="text-gray-500 font-helvetica text-left font-normal">
                                        Company Name:{" "}
                                      </span>
                                      <span className="text-gray-600 font-helvetica text-left font-bold">
                                        <>
                                          Viking Burrito
                                          <br />
                                        </>
                                      </span>
                                      <span className="text-gray-500 font-helvetica text-left font-normal">
                                        Email Address:{" "}
                                      </span>
                                      <span className="text-gray-600 font-helvetica text-left font-bold">
                                        <>
                                          oliver@burrito.com
                                          <br />
                                        </>
                                      </span>
                                      <span className="text-gray-500 font-helvetica text-left font-normal">
                                        VAT Number:{" "}
                                      </span>
                                      <span className="text-gray-600 font-helvetica text-left font-bold">
                                        FRB1235476
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[538px] items-center justify-start p-[21px] sm:px-5 w-[43%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_firstcard.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-5 items-center justify-start my-[9px] w-full">
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
                                alt="calendar_One"
                              />
                              <Text
                                className="text-gray-500 text-sm"
                                size="txtHelveticaBold14Bluegray200"
                              >
                                23 - 30 March 2020
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-[10px] text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                NEWEST
                              </Text>
                              <Input
                                name="One"
                                placeholder=""
                                className="p-0 w-full"
                                wrapClassName="flex mt-5 w-full"
                                prefix={
                                  <Img
                                    className="h-3 mr-[35px] my-auto"
                                    src="images/img_arrowdown.svg"
                                    alt="arrow_down"
                                  />
                                }
                                size="md"
                              ></Input>
                              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[27px] w-full">
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
                                    Apple
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    27 March 2020, at 12:30 PM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[379px] md:mt-0 mt-[7px]">
                                  <Text
                                    className="text-green-500 text-right text-sm"
                                    size="txtHelveticaBold14Green400"
                                  >
                                    +$2500
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-[10px] text-gray-500"
                                size="txtHelveticaBold10Bluegray200"
                              >
                                YESTERDAY
                              </Text>
                              <Input
                                name="One_One"
                                placeholder=""
                                className="p-0 w-full"
                                wrapClassName="flex mt-[21px] w-full"
                                prefix={
                                  <Img
                                    className="h-3 mr-[35px] my-auto"
                                    src="images/img_arrowup_green_400_35x35.svg"
                                    alt="arrow_up"
                                  />
                                }
                                size="md"
                              ></Input>
                              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[27px] w-full">
                                <Button
                                  className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                                  color="green_400"
                                  size="sm"
                                  variant="outline"
                                >
                                  <Img
                                    className="h-3"
                                    src="images/img_arrowup_green_400.svg"
                                    alt="arrowup_Two"
                                  />
                                </Button>
                                <div className="flex flex-col gap-1.5 items-start justify-start ml-3.5 md:ml-[0]">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    HubSpot
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    26 March 2020, at 12:30 PM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[379px] md:mt-0 mt-[7px]">
                                  <Text
                                    className="text-green-500 text-right text-sm"
                                    size="txtHelveticaBold14Green400"
                                  >
                                    +$1700
                                  </Text>
                                </div>
                              </div>
                              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[26px] w-full">
                                <Button
                                  className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                                  color="blue_gray_200"
                                  size="sm"
                                  variant="outline"
                                >
                                  <Img
                                    className="h-3.5"
                                    src="images/img_priorityhigh.svg"
                                    alt="priorityhigh"
                                  />
                                </Button>
                                <div className="flex flex-col gap-2 items-start justify-start ml-3.5 md:ml-[0]">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    Webflow
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    26 March 2020, at 05:00 AM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[370px] md:mt-0 mt-[9px]">
                                  <Text
                                    className="text-gray-800 text-right text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    Pending
                                  </Text>
                                </div>
                              </div>
                              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[26px] w-full">
                                <Button
                                  className="flex h-[35px] items-center justify-center rotate-[180deg] rounded-[17px] w-[35px]"
                                  color="red_600"
                                  size="sm"
                                  variant="outline"
                                >
                                  <Img
                                    className="h-3"
                                    src="images/img_arrowdown_red_600_35x35.svg"
                                    alt="arrowdown_Six"
                                  />
                                </Button>
                                <div className="flex flex-col gap-2 items-start justify-start ml-3.5 md:ml-[0]">
                                  <Text
                                    className="text-gray-800 text-sm"
                                    size="txtHelveticaBold14"
                                  >
                                    Microsoft
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelveticaBold12"
                                  >
                                    25 March 2020, at 16:30 PM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[390px] md:mt-0 mt-2">
                                  <Text
                                    className="text-red-600 text-right text-sm"
                                    size="txtHelveticaBold14Red600"
                                  >
                                    -$987
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between ml-3 md:ml-[0] mt-8 w-[99%] md:w-full">
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

export default DashboardScreenAccountBillingPage;
