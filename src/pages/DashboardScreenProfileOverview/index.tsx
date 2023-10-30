import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Switch,
  Text,
} from "components";
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

const DashboardScreenProfileOverviewPage: React.FC = () => {
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
            className="bg-cover bg-no-repeat flex md:flex-col flex-row gap-[26px] h-[1353px] items-start justify-between p-[18px] w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <Sidebar1 className="!sticky !w-[236px] flex h-screen md:hidden justify-start md:mt-0 mt-[21px] overflow-auto md:px-5 top-[0]" />
            <div className="flex-1 h-[1305px] sm:h-[2145px] md:h-[2802px] mr-1 md:mt-0 my-1.5 md:px-5 relative w-full">
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
                  <div className="gap-[23px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[73px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col h-[377px] items-start justify-end p-[21px] sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_firstcard.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[19px] items-start justify-start mb-[3px] mt-2.5 w-[62%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtHelveticaBold18"
                          >
                            Platform Settings
                          </Text>
                        </div>
                        <List
                          className="flex flex-col gap-[27px] items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col items-start justify-start w-full">
                            <Text
                              className="text-[10px] text-gray-500"
                              size="txtHelveticaBold10Bluegray200"
                            >
                              ACCOUNT
                            </Text>
                            <div className="flex flex-row gap-2.5 items-start justify-start mt-[21px] w-[83%] md:w-full">
                              <Switch
                                onColor="#141627"
                                offColor="#e2e8f0"
                                onHandleColor="#ffffff"
                                offHandleColor="#ffffff"
                                value={true}
                                className="gap-[9.34px] h-[18px] pl-[1.44px] pr-[2.5px] py-[1.44px] w-9"
                              />
                              <Text
                                className="text-gray-500 text-xs"
                                size="txtHelvetica12"
                              >
                                Email me when someone follows me
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2.5 items-start justify-start mt-[19px] w-full">
                              <Switch
                                onColor="#141627"
                                offColor="#e2e8f0"
                                onHandleColor="#ffffff"
                                offHandleColor="#ffffff"
                                value={false}
                                className="gap-[9.34px] h-[18px] pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-9"
                              />
                              <Text
                                className="mt-0.5 text-gray-500 text-xs"
                                size="txtHelvetica12"
                              >
                                Email me when someone answers on my post
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2.5 items-start justify-start mt-[19px] w-[87%] md:w-full">
                              <Switch
                                onColor="#141627"
                                offColor="#e2e8f0"
                                onHandleColor="#ffffff"
                                offHandleColor="#ffffff"
                                value={true}
                                className="gap-[9.34px] h-[18px] pl-[1.44px] pr-[2.5px] py-[1.44px] w-9"
                              />
                              <Text
                                className="text-gray-500 text-xs"
                                size="txtHelvetica12"
                              >
                                Email me when someone mentions me
                              </Text>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col items-start justify-start w-[66%] md:w-full">
                            <Text
                              className="text-[10px] text-gray-500"
                              size="txtHelveticaBold10Bluegray200"
                            >
                              APPLICATION
                            </Text>
                            <div className="flex flex-row gap-2.5 items-start justify-start mt-[21px] w-full">
                              <Switch
                                onColor="#141627"
                                offColor="#e2e8f0"
                                onHandleColor="#ffffff"
                                offHandleColor="#ffffff"
                                value={false}
                                className="gap-[9.34px] h-[18px] pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-9"
                              />
                              <Text
                                className="mt-0.5 text-gray-500 text-xs"
                                size="txtHelvetica12"
                              >
                                New launches and projects
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2.5 items-start justify-start mt-[19px] w-[94%] md:w-full">
                              <Switch
                                onColor="#141627"
                                offColor="#e2e8f0"
                                onHandleColor="#ffffff"
                                offHandleColor="#ffffff"
                                value={false}
                                className="gap-[9.34px] h-[18px] pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-9"
                              />
                              <Text
                                className="mt-0.5 text-gray-500 text-xs"
                                size="txtHelvetica12"
                              >
                                Monthly product updates
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2.5 items-start justify-start mt-[19px] w-[90%] md:w-full">
                              <Switch
                                onColor="#141627"
                                offColor="#e2e8f0"
                                onHandleColor="#ffffff"
                                offHandleColor="#ffffff"
                                value={true}
                                className="gap-[9.34px] h-[18px] pl-[1.44px] pr-[2.5px] py-[1.44px] w-9"
                              />
                              <Text
                                className="text-gray-500 text-xs"
                                size="txtHelvetica12"
                              >
                                Subscribe to newsletter
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col h-[377px] items-center justify-start p-[21px] sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_firstcard.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-8 items-start justify-start mb-[15px] mt-[9px] w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtHelveticaBold18"
                          >
                            Profile Information
                          </Text>
                          <Text
                            className="leading-[150.00%] mt-[17px] text-gray-500 text-xs w-[98%] sm:w-full"
                            size="txtHelvetica12"
                          >
                            Hi, I’m Alec Thompson, Decisions: If you can’t
                            decide, the answer is no. If two equally difficult
                            paths, choose the one more painful in the short term
                            (pain avoidance is creating an illusion of
                            equality).
                          </Text>
                          <Line className="bg-gradient7  h-px ml-1 md:ml-[0] mt-[30px] w-full" />
                        </div>
                        <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] w-[39%] md:w-full">
                          <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                            <Text
                              className="text-gray-600 text-xs"
                              size="txtHelveticaBold12Bluegray400"
                            >
                              <span className="text-gray-600 font-helvetica text-left font-bold">
                                Full Name:{" "}
                              </span>
                              <span className="text-gray-500 font-helvetica text-left font-normal">
                                Alec M. Thompson
                              </span>
                            </Text>
                            <Text
                              className="text-gray-600 text-xs"
                              size="txtHelveticaBold12Bluegray400"
                            >
                              <span className="text-gray-600 font-helvetica text-left font-bold">
                                Mobile:{" "}
                              </span>
                              <span className="text-gray-500 font-helvetica text-left font-normal">
                                (44) 123 1234 123
                              </span>
                            </Text>
                            <Text
                              className="text-gray-600 text-xs"
                              size="txtHelveticaBold12Bluegray400"
                            >
                              <span className="text-gray-600 font-helvetica text-left font-bold">
                                Email:{" "}
                              </span>
                              <span className="text-gray-500 font-helvetica text-left font-normal">
                                alecthompson@mail.com
                              </span>
                            </Text>
                            <Text
                              className="text-gray-600 text-xs"
                              size="txtHelveticaBold12Bluegray400"
                            >
                              <span className="text-gray-600 font-helvetica text-left font-bold">
                                Location:{" "}
                              </span>
                              <span className="text-gray-500 font-helvetica text-left font-normal">
                                United States
                              </span>
                            </Text>
                            <div className="flex flex-row gap-3.5 items-start justify-start w-[85%] md:w-full">
                              <Text
                                className="text-gray-600 text-xs"
                                size="txtHelveticaBold12Bluegray400"
                              >
                                Social Media:
                              </Text>
                              <PagerIndicator
                                className="flex h-3 w-[62px]"
                                count={3}
                                activeCss="inline-block cursor-pointer h-2.5 bg-gradient2  w-2.5"
                                activeIndex={1}
                                inactiveCss="inline-block cursor-pointer h-3 bg-gradient  w-3"
                                selectedWrapperCss="inline-block mx-[7.00px]"
                                unselectedWrapperCss="inline-block mx-[7.00px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col h-[377px] items-center justify-start p-[21px] sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_firstcard.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[18px] items-start justify-start mb-[23px] mt-[9px] w-full">
                        <Text
                          className="text-gray-800 text-lg"
                          size="txtHelveticaBold18"
                        >
                          Conversations
                        </Text>
                        <List
                          className="flex flex-col gap-[21px] items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <div className="bg-teal-400 flex flex-col h-[50px] items-center justify-start rounded-[12px] shadow-bs w-[50px]">
                              <Img
                                className="h-[50px] md:h-auto object-cover rounded-[12px] w-[50px]"
                                src="images/img_creditstounsplashcom.png"
                                alt="creditstounspla"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[15px]">
                              <Text
                                className="text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                Esthera Jackson
                              </Text>
                              <Text
                                className="mt-0.5 text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                Hi! I need more informations...
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[188px]">
                              <Text
                                className="text-[10px] text-center text-teal-400"
                                size="txtHelveticaBold10Cyan300"
                              >
                                REPLY
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                            <div className="bg-teal-400 flex flex-col h-[50px] items-center justify-start rounded-[12px] shadow-bs w-[50px]">
                              <Img
                                className="h-[50px] md:h-auto object-cover rounded-[12px] w-[50px]"
                                src="images/img_creditstounsplashcom_50x50.png"
                                alt="creditstounspla"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start mb-1 sm:ml-[0] ml-[15px] sm:mt-0 mt-[7px]">
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
                                Awesome work, can you change...
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[162px] sm:mt-0 my-[18px]">
                              <Text
                                className="text-[10px] text-center text-teal-400"
                                size="txtHelveticaBold10Cyan300"
                              >
                                REPLY
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <div className="bg-teal-400 flex flex-col h-[50px] items-center justify-start rounded-[12px] shadow-bs w-[50px]">
                              <Img
                                className="h-[50px] md:h-auto object-cover rounded-[12px] w-[50px]"
                                src="images/img_creditstounsplashcom_1.png"
                                alt="creditstounspla"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[15px]">
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
                                Have a great afternoon...
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[220px]">
                              <Text
                                className="text-[10px] text-center text-teal-400"
                                size="txtHelveticaBold10Cyan300"
                              >
                                REPLY
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <div className="bg-teal-400 flex flex-col h-[50px] items-center justify-start rounded-[12px] shadow-bs w-[50px]">
                              <Img
                                className="h-[50px] md:h-auto object-cover rounded-[12px] w-[50px]"
                                src="images/img_creditstounsplashcom_2.png"
                                alt="creditstounspla"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[15px]">
                              <Text
                                className="text-gray-800 text-sm"
                                size="txtHelveticaBold14"
                              >
                                Esthera Jackson
                              </Text>
                              <Text
                                className="mt-0.5 text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                About files I can...
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[264px]">
                              <Text
                                className="text-[10px] text-center text-teal-400"
                                size="txtHelveticaBold10Cyan300"
                              >
                                REPLY
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[485px] items-center justify-start mt-6 p-[21px] sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_firstcard.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-[25px] items-start justify-start mb-[7px] mt-2.5 w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg"
                          size="txtHelveticaBold18"
                        >
                          Projects
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtHelvetica14"
                        >
                          Architects design houses
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col items-center justify-start w-[24%] md:w-full">
                          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Img
                                className="h-[191px] md:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-full"
                                src="images/img_homedecor11.png"
                                alt="homedecorEleven"
                              />
                            </div>
                            <div className="flex flex-row gap-[31px] items-start justify-between w-[96%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-3/4">
                                <Text
                                  className="text-[10px] text-gray-500"
                                  size="txtHelvetica10"
                                >
                                  Project #1
                                </Text>
                                <Text
                                  className="mt-0.5 text-gray-800 text-lg"
                                  size="txtHelveticaBold18"
                                >
                                  Modern
                                </Text>
                                <Text
                                  className="leading-[150.00%] mt-3 text-gray-500 text-xs"
                                  size="txtHelvetica12"
                                >
                                  <>
                                    As Uber works through a huge amount of
                                    internal
                                    <br />
                                    management turmoil.
                                  </>
                                </Text>
                                <div className="border border-purple-500 border-solid flex flex-col h-[35px] md:h-auto items-center justify-center mt-5 px-2 rounded-lg w-[110px]">
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
                                      alt="minwidth_One"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex mt-[110px] relative w-[17%]">
                                <div className="flex my-auto w-[77%]">
                                  <div className="flex my-auto w-[72%]">
                                    <div className="flex flex-col h-[19px] items-center justify-start my-auto w-[19px]">
                                      <div className="flex flex-col h-[19px] items-center justify-start w-[19px]">
                                        <Img
                                          className="h-[19px] md:h-auto object-cover rounded-bl-[9px] rounded-br-[9px] w-[19px]"
                                          src="images/img_creditstounsplashcom_19x19.png"
                                          alt="creditstounspla"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col h-[19px] items-center justify-start ml-[-5.95px] my-auto w-[19px] z-[1]">
                                      <div className="flex flex-col h-[19px] items-center justify-start outline outline-[2px] outline-white-A700 rounded-[9px] w-[19px]">
                                        <Img
                                          className="h-[19px] md:h-auto object-cover rounded-[9px] w-[19px]"
                                          src="images/img_creditstounsplashcom_3.png"
                                          alt="creditstounspla_One"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[19px] items-start justify-start ml-[-6.37px] my-auto outline outline-[2px] outline-white-A700 rounded-[9px] w-[19px] z-[1]">
                                    <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                                      <Img
                                        className="h-[19px] md:h-auto object-cover rounded-bl-[9px] rounded-br-[9px] w-full"
                                        src="images/img_creditstopexelscom.png"
                                        alt="creditstopexels"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col h-[19px] items-center justify-start ml-[-6.38px] my-auto outline outline-[2px] outline-white-A700 rounded-[9px] w-[19px] z-[1]">
                                  <Img
                                    className="h-[19px] md:h-auto object-cover rounded-[9px] w-[19px]"
                                    src="images/img_elipse5.png"
                                    alt="elipseFive"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[22px] items-center justify-start w-[24%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-[191px] md:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-full"
                              src="images/img_homedecor21.png"
                              alt="homedecorTwentyOne"
                            />
                          </div>
                          <div className="md:h-[116px] h-[139px] relative w-[96%]">
                            <div className="absolute bottom-[4%] flex right-[0] w-[17%]">
                              <div className="flex my-auto w-[77%]">
                                <div className="flex my-auto w-[72%]">
                                  <div className="flex flex-col h-[19px] items-center justify-start my-auto w-[19px]">
                                    <div className="flex flex-col h-[19px] items-center justify-start w-[19px]">
                                      <Img
                                        className="h-[19px] md:h-auto object-cover rounded-bl-[9px] rounded-br-[9px] w-[19px]"
                                        src="images/img_creditstounsplashcom_19x19.png"
                                        alt="creditstounspla_Two"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[19px] items-center justify-start ml-[-5.95px] my-auto w-[19px] z-[1]">
                                    <div className="flex flex-col h-[19px] items-center justify-start outline outline-[2px] outline-white-A700 rounded-[9px] w-[19px]">
                                      <Img
                                        className="h-[19px] md:h-auto object-cover rounded-[9px] w-[19px]"
                                        src="images/img_creditstounsplashcom_3.png"
                                        alt="creditstounspla_Three"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col h-[19px] items-start justify-start ml-[-6.37px] my-auto outline outline-[2px] outline-white-A700 rounded-[9px] w-[19px] z-[1]">
                                  <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                                    <Img
                                      className="h-[19px] md:h-auto object-cover rounded-bl-[9px] rounded-br-[9px] w-full"
                                      src="images/img_creditstopexelscom.png"
                                      alt="creditstopexels_One"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col h-[19px] items-center justify-start ml-[-6.38px] my-auto outline outline-[2px] outline-white-A700 rounded-[9px] w-[19px] z-[1]">
                                <Img
                                  className="h-[19px] md:h-auto object-cover rounded-[9px] w-[19px]"
                                  src="images/img_elipse5_19x19.png"
                                  alt="elipseFive_One"
                                />
                              </div>
                            </div>
                            <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto w-[86%]">
                              <Text
                                className="text-[10px] text-gray-500"
                                size="txtHelvetica10"
                              >
                                Project #2
                              </Text>
                              <Text
                                className="mt-0.5 text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Scandinavian
                              </Text>
                              <Text
                                className="leading-[150.00%] mt-3 text-gray-500 text-xs"
                                size="txtHelvetica12"
                              >
                                <>
                                  Music is something that every person has his
                                  or her own
                                  <br />
                                  specific opinion about.
                                </>
                              </Text>
                              <div className="border border-purple-500 border-solid flex flex-col h-[35px] md:h-auto items-center justify-center mt-5 px-2 rounded-lg w-[110px]">
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
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col items-center justify-start w-[24%] md:w-full">
                          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Img
                                className="h-[191px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                                src="images/img_homedecor31.png"
                                alt="homedecorThirtyOne"
                              />
                            </div>
                            <div className="flex flex-row gap-[34px] items-start justify-between w-[96%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-[74%]">
                                <Text
                                  className="text-[10px] text-gray-500"
                                  size="txtHelvetica10"
                                >
                                  Project #3
                                </Text>
                                <Text
                                  className="mt-0.5 text-gray-800 text-lg"
                                  size="txtHelveticaBold18"
                                >
                                  Minimalist
                                </Text>
                                <Text
                                  className="leading-[150.00%] mt-3 text-gray-500 text-xs"
                                  size="txtHelvetica12"
                                >
                                  <>
                                    Different people have different taste, and
                                    various
                                    <br />
                                    types of music.
                                  </>
                                </Text>
                                <div className="border border-purple-500 border-solid flex flex-col h-[35px] md:h-auto items-center justify-center mt-5 px-2 rounded-lg w-[110px]">
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
                                      alt="minwidth_Three"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex mt-[110px] relative w-[17%]">
                                <div className="flex my-auto w-[77%]">
                                  <div className="flex my-auto w-[72%]">
                                    <div className="flex flex-col h-[19px] items-center justify-start my-auto w-[19px]">
                                      <div className="flex flex-col h-[19px] items-center justify-start w-[19px]">
                                        <Img
                                          className="h-[19px] md:h-auto object-cover rounded-bl-[9px] rounded-br-[9px] w-[19px]"
                                          src="images/img_creditstounsplashcom_4.png"
                                          alt="creditstounspla_Four"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col h-[19px] items-center justify-start ml-[-5.95px] my-auto w-[19px] z-[1]">
                                      <div className="flex flex-col h-[19px] items-center justify-start outline outline-[2px] outline-white-A700 rounded-[9px] w-[19px]">
                                        <Img
                                          className="h-[19px] md:h-auto object-cover rounded-[9px] w-[19px]"
                                          src="images/img_creditstounsplashcom_5.png"
                                          alt="creditstounspla_Five"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[19px] items-start justify-start ml-[-6.37px] my-auto outline outline-[2px] outline-white-A700 rounded-[9px] w-[19px] z-[1]">
                                    <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                                      <Img
                                        className="h-[19px] md:h-auto object-cover rounded-bl-[9px] rounded-br-[9px] w-full"
                                        src="images/img_creditstopexelscom.png"
                                        alt="creditstopexels_Two"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col h-[19px] items-center justify-start ml-[-6.38px] my-auto outline outline-[2px] outline-white-A700 rounded-[9px] w-[19px] z-[1]">
                                  <Img
                                    className="h-[19px] md:h-auto object-cover rounded-[9px] w-[19px]"
                                    src="images/img_elipse5_19x19.png"
                                    alt="elipseFive_Two"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-start p-[98px] md:px-10 sm:px-5 rounded-[15px] w-1/4 md:w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-12 mt-[42px] w-full">
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
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[30px] w-full">
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
                className="absolute bg-cover bg-no-repeat flex flex-col h-[113px] inset-x-[0] items-center justify-end mx-auto p-[11px] top-[18%] w-[97%]"
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
                            alt="creditstounspla_Six"
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

export default DashboardScreenProfileOverviewPage;
