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

const DashboardScreenAllProjectsPage: React.FC = () => {
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
            className="bg-cover bg-no-repeat flex md:flex-col flex-row gap-[31px] h-[1113px] items-start justify-between p-3.5 w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <Sidebar1 className="!sticky !w-[236px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
            <div className="flex-1 h-[1063px] md:h-[1167px] sm:h-[1866px] mb-3 mr-[9px] md:mt-0 mt-[9px] md:px-5 relative w-full">
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
                  <div className="flex flex-col items-center justify-start mt-[95px] w-full">
                    <div className="flex flex-col gap-[45px] items-start justify-start w-full">
                      <div className="flex flex-col gap-[19px] items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg"
                          size="txtHelveticaBold18"
                        >
                          Some of Our Awesome Projects
                        </Text>
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtHelvetica12"
                        >
                          This is the paragraph where you can write more details
                          about your projects. Keep you user engaged by
                          providing meaningful information.
                        </Text>
                      </div>
                      <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                        <div
                          className="bg-cover bg-no-repeat md:h-[186px] h-[231px] p-[18px] relative w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row gap-[22px] items-center justify-start w-[34%] md:w-full">
                                <Button
                                  className="flex h-[70px] items-center justify-center rounded-[12px] w-[70px]"
                                  size="md"
                                  variant="gradient"
                                  color="blue_gray_800_01_gray_900_01"
                                >
                                  <Img
                                    className="h-[33px]"
                                    src="images/img_grid.svg"
                                    alt="grid"
                                  />
                                </Button>
                                <div className="flex flex-col gap-2 items-center justify-start w-[42%]">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      Slack Bot
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex relative w-full">
                                      <div className="flex my-auto w-[77%]">
                                        <div className="flex my-auto w-[72%]">
                                          <div className="flex flex-col items-center justify-start my-auto w-5">
                                            <div className="flex flex-col items-center justify-start w-5 md:w-full">
                                              <Img
                                                className="h-[21px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-5 sm:w-full"
                                                src="images/img_creditstounsplashcom_21x20.png"
                                                alt="creditstounspla"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex flex-col h-[21px] items-center justify-start ml-[-6.46px] my-auto w-[21px] z-[1]">
                                            <div className="flex flex-col h-[21px] items-center justify-start outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px]">
                                              <Img
                                                className="h-[21px] md:h-auto object-cover rounded-[10px] w-[21px]"
                                                src="images/img_creditstounsplashcom_21x21.png"
                                                alt="creditstounspla_One"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col h-[21px] items-start justify-start ml-[-6.92px] my-auto outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px] z-[1]">
                                          <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                                            <Img
                                              className="h-[21px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                                              src="images/img_creditstopexelscom_21x19.png"
                                              alt="creditstopexels"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col h-[21px] items-center justify-start ml-[-6.92px] my-auto outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px] z-[1]">
                                        <Img
                                          className="h-[21px] md:h-auto object-cover rounded-[10px] w-[21px]"
                                          src="images/img_elipse5_21x21.png"
                                          alt="elipseFive"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[19px]">
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtHelvetica14"
                                >
                                  <>
                                    If everything I did failed - which it
                                    doesn&#39;t, I think that it actually
                                    succeeds.
                                  </>
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-6 w-full">
                                <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                                  <Line className="bg-gradient7  h-px w-full" />
                                  <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="text-gray-800 text-xs"
                                        size="txtHelveticaBold12Bluegray900"
                                      >
                                        5
                                      </Text>
                                      <Text
                                        className="mt-[3px] text-gray-500 text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        Participants
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="ml-1 md:ml-[0] text-gray-800 text-right text-xs"
                                        size="txtHelveticaBold12Bluegray900"
                                      >
                                        02.03.22
                                      </Text>
                                      <Text
                                        className="mt-0.5 text-gray-500 text-right text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        Due Date
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col h-5 items-center justify-start right-[8%] top-[10%] w-5">
                            <Img
                              className="h-5 w-5"
                              src="images/img_morevert.svg"
                              alt="morevert"
                            />
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat md:h-[203px] h-[247px] p-[18px] relative w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row gap-[22px] items-center justify-start w-[45%] md:w-full">
                                <Button
                                  className="flex h-[70px] items-center justify-center rounded-[12px] w-[70px]"
                                  size="md"
                                  variant="gradient"
                                  color="blue_gray_800_01_gray_900_01"
                                >
                                  <Img
                                    className="h-[33px]"
                                    src="images/img_signal.svg"
                                    alt="signal"
                                  />
                                </Button>
                                <div className="flex flex-col gap-[7px] items-start justify-start w-[57%]">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      Premium Support
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[55%] md:w-full">
                                    <div className="flex relative w-full">
                                      <div className="flex my-auto w-[55%]">
                                        <div className="flex flex-col items-center justify-start my-auto w-5">
                                          <div className="flex flex-col items-center justify-start w-5 md:w-full">
                                            <Img
                                              className="h-[21px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-5 sm:w-full"
                                              src="images/img_creditstounsplashcom_22.png"
                                              alt="creditstounspla"
                                            />
                                          </div>
                                        </div>
                                        <div className="flex flex-col h-[21px] items-center justify-start ml-[-6.46px] my-auto w-[21px] z-[1]">
                                          <div className="flex flex-col h-[21px] items-center justify-start outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px]">
                                            <Img
                                              className="h-[21px] md:h-auto object-cover rounded-[10px] w-[21px]"
                                              src="images/img_creditstounsplashcom_23.png"
                                              alt="creditstounspla_One"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col h-[21px] items-center justify-start ml-[-6.92px] mr-3 my-auto outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px] z-[1]">
                                        <div className="flex flex-col h-[21px] items-center justify-start w-[21px]">
                                          <Img
                                            className="h-[21px] md:h-auto rounded-[50%] w-[21px]"
                                            src="images/img_creditstopexelscom_21x21.png"
                                            alt="creditstopexels"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[17px]">
                                <Text
                                  className="leading-[150.00%] text-gray-500 text-sm w-full"
                                  size="txtHelvetica14"
                                >
                                  Pink is obviously a better color. Everyone’s
                                  born confident, and everything’s taken away
                                  from you.
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                                <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                                  <Line className="bg-gradient7  h-px w-full" />
                                  <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="text-gray-800 text-xs"
                                        size="txtHelveticaBold12Bluegray900"
                                      >
                                        3
                                      </Text>
                                      <Text
                                        className="mt-1 text-gray-500 text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        Participants
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="ml-1 md:ml-[0] text-gray-800 text-right text-xs"
                                        size="txtHelveticaBold12Bluegray900"
                                      >
                                        22.11.22
                                      </Text>
                                      <Text
                                        className="mt-[3px] text-gray-500 text-right text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        Due Date
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col h-5 items-center justify-start right-[7%] top-[9%] w-5">
                            <Img
                              className="h-5 w-5"
                              src="images/img_morevert.svg"
                              alt="morevert"
                            />
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat md:h-[203px] h-[247px] p-[18px] relative w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row gap-[22px] items-center justify-start w-[39%] md:w-full">
                                <div className="bg-gradient5  flex flex-col h-[70px] items-center justify-start p-[18px] rounded-[12px] w-[70px]">
                                  <Button
                                    className="flex items-center justify-center w-[33px]"
                                    shape="round"
                                    color="gray_900_02"
                                    size="xs"
                                    variant="fill"
                                  >
                                    <Img
                                      src="images/img_lightbulb.svg"
                                      alt="lightbulb"
                                    />
                                  </Button>
                                </div>
                                <div className="flex flex-col gap-[7px] items-start justify-start w-[49%]">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      Design Tools
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[74%] md:w-full">
                                    <div className="flex relative w-full">
                                      <div className="flex my-auto w-[77%]">
                                        <div className="flex my-auto w-[72%]">
                                          <div className="flex flex-col items-center justify-start my-auto w-5">
                                            <div className="flex flex-col items-center justify-start w-5 md:w-full">
                                              <Img
                                                className="h-[21px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-5 sm:w-full"
                                                src="images/img_creditstounsplashcom_24.png"
                                                alt="creditstounspla"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex flex-col h-[21px] items-center justify-start ml-[-6.46px] my-auto w-[21px] z-[1]">
                                            <div className="flex flex-col h-[21px] items-center justify-start outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px]">
                                              <Img
                                                className="h-[21px] md:h-auto object-cover rounded-[10px] w-[21px]"
                                                src="images/img_creditstounsplashcom_25.png"
                                                alt="creditstounspla_One"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col h-[21px] items-start justify-start ml-[-6.92px] my-auto outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px] z-[1]">
                                          <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                                            <Img
                                              className="h-[21px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                                              src="images/img_creditstopexelscom_1.png"
                                              alt="creditstopexels"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col h-[21px] items-center justify-start ml-[-6.92px] my-auto outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px] z-[1]">
                                        <Img
                                          className="h-[21px] md:h-auto object-cover rounded-[10px] w-[21px]"
                                          src="images/img_elipse5_21x21.png"
                                          alt="elipseFive"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[17px]">
                                <Text
                                  className="leading-[150.00%] text-gray-500 text-sm w-full"
                                  size="txtHelvetica14"
                                >
                                  Constantly growing. We’re constantly making
                                  mistakes from which we learn and improve.
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                                <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                                  <Line className="bg-gradient7  h-px w-full" />
                                  <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="text-gray-800 text-xs"
                                        size="txtHelveticaBold12Bluegray900"
                                      >
                                        4
                                      </Text>
                                      <Text
                                        className="mt-1 text-gray-500 text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        Participants
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="ml-1 md:ml-[0] text-gray-800 text-right text-xs"
                                        size="txtHelveticaBold12Bluegray900"
                                      >
                                        06.03.22
                                      </Text>
                                      <Text
                                        className="mt-0.5 text-gray-500 text-right text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        Due Date
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col h-5 items-center justify-start right-[7%] top-[9%] w-5">
                            <Img
                              className="h-5 w-5"
                              src="images/img_morevert.svg"
                              alt="morevert"
                            />
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat md:h-[203px] h-[247px] p-[18px] relative w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row gap-[22px] items-center justify-start w-2/5 md:w-full">
                                <Button
                                  className="flex h-[70px] items-center justify-center rounded-[12px] w-[70px]"
                                  size="md"
                                  variant="gradient"
                                  color="blue_gray_800_01_gray_900_01"
                                >
                                  <Img
                                    src="images/img_logo_blue_a400.png"
                                    alt="logo"
                                  />
                                </Button>
                                <div className="flex flex-col gap-[7px] items-center justify-start w-[51%]">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      Looking Great
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                                    <div className="flex relative w-full">
                                      <div className="flex my-auto w-[84%]">
                                        <div className="flex my-auto w-[83%]">
                                          <div className="flex my-auto w-[77%]">
                                            <div className="flex my-auto w-[72%]">
                                              <div className="flex flex-col items-center justify-start my-auto w-5">
                                                <div className="flex flex-col items-center justify-start w-5 md:w-full">
                                                  <Img
                                                    className="h-[21px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-5 sm:w-full"
                                                    src="images/img_creditstounsplashcom_21x20.png"
                                                    alt="creditstounspla"
                                                  />
                                                </div>
                                              </div>
                                              <div className="flex flex-col h-[21px] items-center justify-start ml-[-6.46px] my-auto w-[21px] z-[1]">
                                                <div className="flex flex-col h-[21px] items-center justify-start outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px]">
                                                  <Img
                                                    className="h-[21px] md:h-auto object-cover rounded-[10px] w-[21px]"
                                                    src="images/img_creditstounsplashcom_21x21.png"
                                                    alt="creditstounspla_One"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex flex-col h-[21px] items-start justify-start ml-[-6.92px] my-auto outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px] z-[1]">
                                              <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                                                <Img
                                                  className="h-[21px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                                                  src="images/img_creditstopexelscom_21x19.png"
                                                  alt="creditstopexels"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="h-[21px] ml-[-6.92px] my-auto w-[21px] z-[1]">
                                            <Img
                                              className="h-[21px] m-auto object-cover rounded-[10px] w-[21px]"
                                              src="images/img_elipse5_21x21.png"
                                              alt="elipseFive"
                                            />
                                            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px]">
                                              <div className="flex flex-col h-[21px] items-center justify-start outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px]">
                                                <Img
                                                  className="h-[21px] md:h-auto object-cover rounded-[10px] w-[21px]"
                                                  src="images/img_elipse5_21x21.png"
                                                  alt="elipseFive_One"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col h-[21px] items-center justify-start ml-[-7.12px] my-auto outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px] z-[1]">
                                          <Img
                                            className="h-[21px] md:h-auto object-cover rounded-[10px] w-[21px]"
                                            src="images/img_elipse5_21x21.png"
                                            alt="elipseFive_Two"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col h-[21px] items-center justify-start ml-[-7.12px] my-auto outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px] z-[1]">
                                        <Img
                                          className="h-[21px] md:h-auto object-cover rounded-[10px] w-[21px]"
                                          src="images/img_elipse5_3.png"
                                          alt="elipseFive_Three"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[17px]">
                                <Text
                                  className="leading-[150.00%] text-gray-500 text-sm w-full"
                                  size="txtHelvetica14"
                                >
                                  You have the opportunity to play this game of
                                  life you need to appreciate every moment.
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                                <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                                  <Line className="bg-gradient7  h-px w-full" />
                                  <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="text-gray-800 text-xs"
                                        size="txtHelveticaBold12Bluegray900"
                                      >
                                        6
                                      </Text>
                                      <Text
                                        className="mt-1 text-gray-500 text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        Participants
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="ml-1 md:ml-[0] text-gray-800 text-right text-xs"
                                        size="txtHelveticaBold12Bluegray900"
                                      >
                                        14.03.22
                                      </Text>
                                      <Text
                                        className="mt-0.5 text-gray-500 text-right text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        Due Date
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col h-5 items-center justify-start right-[7%] top-[9%] w-5">
                            <Img
                              className="h-5 w-5"
                              src="images/img_morevert.svg"
                              alt="morevert"
                            />
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat md:h-[187px] h-[231px] p-[18px] relative w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row gap-[22px] items-center justify-start w-[42%] md:w-full">
                                <div className="bg-gradient5  flex flex-col h-[70px] items-center justify-start p-[18px] rounded-[12px] w-[70px]">
                                  <Button
                                    className="flex h-[33px] items-center justify-center rounded-[3px] w-[33px]"
                                    color="pink_500"
                                    size="xs"
                                    variant="fill"
                                  >
                                    <Img
                                      src="images/img_vector.svg"
                                      alt="vector"
                                    />
                                  </Button>
                                </div>
                                <div className="flex flex-col gap-[7px] items-start justify-start w-[53%]">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14"
                                    >
                                      Developer First
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[63%] md:w-full">
                                    <div className="flex relative w-full">
                                      <div className="flex my-auto w-[77%]">
                                        <div className="flex my-auto w-[72%]">
                                          <div className="flex flex-col items-center justify-start my-auto w-5">
                                            <div className="flex flex-col items-center justify-start w-5 md:w-full">
                                              <Img
                                                className="h-[21px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-5 sm:w-full"
                                                src="images/img_creditstounsplashcom_22.png"
                                                alt="creditstounspla"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex flex-col h-[21px] items-center justify-start ml-[-6.46px] my-auto w-[21px] z-[1]">
                                            <div className="flex flex-col h-[21px] items-center justify-start outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px]">
                                              <Img
                                                className="h-[21px] md:h-auto object-cover rounded-[10px] w-[21px]"
                                                src="images/img_creditstounsplashcom_23.png"
                                                alt="creditstounspla_One"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col h-[21px] items-start justify-start ml-[-6.92px] my-auto outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px] z-[1]">
                                          <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                                            <Img
                                              className="h-[21px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                                              src="images/img_creditstopexelscom_2.png"
                                              alt="creditstopexels"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col h-[21px] items-center justify-start ml-[-6.92px] my-auto outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px] z-[1]">
                                        <Img
                                          className="h-[21px] md:h-auto object-cover rounded-[10px] w-[21px]"
                                          src="images/img_elipse5_21x21.png"
                                          alt="elipseFive"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-5">
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtHelvetica14"
                                >
                                  For standing out. But the time is now to be
                                  okay to be the greatest you.
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-6 w-full">
                                <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                                  <Line className="bg-gradient7  h-px w-full" />
                                  <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="text-gray-800 text-xs"
                                        size="txtHelveticaBold12Bluegray900"
                                      >
                                        4
                                      </Text>
                                      <Text
                                        className="mt-1 text-gray-500 text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        Participants
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="ml-1 md:ml-[0] text-gray-800 text-right text-xs"
                                        size="txtHelveticaBold12Bluegray900"
                                      >
                                        02.03.22
                                      </Text>
                                      <Text
                                        className="mt-0.5 text-gray-500 text-right text-xs"
                                        size="txtHelveticaBold12"
                                      >
                                        Due Date
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col h-5 items-center justify-start right-[8%] top-[10%] w-5">
                            <Img
                              className="h-5 w-5"
                              src="images/img_morevert.svg"
                              alt="morevert"
                            />
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[247px] items-center justify-start p-[90px] md:px-10 sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col items-center justify-start w-[54%] md:w-full">
                            <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                              <Img
                                className="h-[30px] w-[30px]"
                                src="images/img_ioniconaaddoutline.svg"
                                alt="ioniconaaddoutl"
                              />
                              <Text
                                className="text-gray-600 text-lg"
                                size="txtHelveticaBold18Bluegray400"
                              >
                                Create a New Project
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-7 w-[99%] md:w-full">
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
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[113px] inset-x-[0] items-center justify-end mx-auto p-[11px] top-[22%] w-[97%]"
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
                            alt="creditstounspla"
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

export default DashboardScreenAllProjectsPage;
