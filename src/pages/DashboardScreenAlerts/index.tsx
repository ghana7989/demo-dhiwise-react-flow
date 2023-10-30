import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardScreenAlertsAlertinfobase from "components/DashboardScreenAlertsAlertinfobase";
import DashboardScreenAlertsAlertmultiline from "components/DashboardScreenAlertsAlertmultiline";
import DashboardScreenAlertsAlertmultiline1 from "components/DashboardScreenAlertsAlertmultiline1";
import DashboardScreenAlertsAlertmultiline2 from "components/DashboardScreenAlertsAlertmultiline2";
import DashboardScreenAlertsAlertmultiline3 from "components/DashboardScreenAlertsAlertmultiline3";
import DashboardScreenAlertsAlertmultiline4 from "components/DashboardScreenAlertsAlertmultiline4";
import DashboardScreenAlertsAlertmultiline5 from "components/DashboardScreenAlertsAlertmultiline5";
import DashboardScreenAlertsAlertmultiline6 from "components/DashboardScreenAlertsAlertmultiline6";
import DashboardScreenAlertsAlertmultiline7 from "components/DashboardScreenAlertsAlertmultiline7";
import DashboardScreenAlertsAlertonelinec from "components/DashboardScreenAlertsAlertonelinec";
import DashboardScreenAlertsAlertonelinec1 from "components/DashboardScreenAlertsAlertonelinec1";
import DashboardScreenAlertsAlertonelinec2 from "components/DashboardScreenAlertsAlertonelinec2";
import DashboardScreenAlertsAlertonelinec3 from "components/DashboardScreenAlertsAlertonelinec3";
import DashboardScreenAlertsAlertonelinel from "components/DashboardScreenAlertsAlertonelinel";
import DashboardScreenAlertsAlertonelinel1 from "components/DashboardScreenAlertsAlertonelinel1";
import DashboardScreenAlertsAlertonelinel2 from "components/DashboardScreenAlertsAlertonelinel2";
import DashboardScreenAlertsAlertonelinel3 from "components/DashboardScreenAlertsAlertonelinel3";
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

const DashboardScreenAlertsPage: React.FC = () => {
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
            className="bg-cover bg-no-repeat flex flex-col h-[1838px] items-center justify-end p-[21px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between mb-1.5 mt-[22px] mx-auto md:px-5 w-full">
              <Sidebar11 className="!sticky !w-[233px] flex h-screen md:hidden justify-start md:mt-0 mt-1 overflow-auto top-[0]" />
              <div className="flex flex-1 flex-col gap-[51px] items-center justify-start w-full">
                <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[6%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[81px]">
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
                          / Alerts
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtHelveticaBold14"
                    >
                      Alerts
                    </Text>
                  </div>
                  <Img
                    className="h-6 mb-1.5 md:ml-[0] ml-[115px] md:mt-0 mt-[15px] w-6"
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
                <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[490px] items-center justify-start p-[21px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[26px] items-start justify-start mb-[3px] mt-2 w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Solid Alert - Left
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[55px] items-center justify-start md:ml-[0] ml-[3px] w-full">
                              <div className="flex flex-col items-start justify-start max-w-[738px] w-full">
                                <div className="bg-gradient1  flex flex-col items-start justify-start p-2 rounded-lg w-full">
                                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                                    <DashboardScreenAlertsAlertinfobase className="flex flex-col gap-0.5 items-start justify-start p-2 w-auto" />
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_close_white_a700.svg"
                                      alt="close"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start max-w-[738px] w-full">
                                <div className="bg-gradient2  flex flex-col items-start justify-start p-2 rounded-lg w-full">
                                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                                    <DashboardScreenAlertsAlertinfobase className="flex flex-col gap-0.5 items-start justify-start p-2 w-auto" />
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_close_white_a700.svg"
                                      alt="close_One"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start max-w-[738px] w-full">
                                <div className="bg-gradient  flex flex-col items-start justify-start p-2 rounded-lg w-full">
                                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                                    <DashboardScreenAlertsAlertinfobase className="flex flex-col gap-0.5 items-start justify-start p-2 w-auto" />
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_close_white_a700.svg"
                                      alt="close_Two"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start max-w-[738px] w-full">
                                <div className="bg-gradient6  flex flex-col items-start justify-start p-2 rounded-lg w-full">
                                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                                    <DashboardScreenAlertsAlertinfobase className="flex flex-col gap-0.5 items-start justify-start p-2 w-auto" />
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_close_white_a700.svg"
                                      alt="close_Three"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[490px] items-center justify-start p-[21px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[25px] items-start justify-start mb-[3px] mt-[9px] w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Solid Alert - Center
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[55px] items-center justify-start md:ml-[0] ml-[3px] w-full">
                              <div className="flex flex-col items-start justify-start max-w-[738px] w-full">
                                <div className="bg-gradient1  flex flex-col items-start justify-start p-2 rounded-lg w-full">
                                  <div className="flex flex-row sm:gap-10 items-center justify-between md:pl-10 sm:pl-5 pl-[238px] w-full">
                                    <DashboardScreenAlertsAlertinfobase className="flex flex-col gap-0.5 items-start justify-start p-2 w-auto" />
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_close_white_a700.svg"
                                      alt="close"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start max-w-[738px] w-full">
                                <div className="bg-gradient2  flex flex-col items-start justify-start p-2 rounded-lg w-full">
                                  <div className="flex flex-row sm:gap-10 items-center justify-between md:pl-10 sm:pl-5 pl-[238px] w-full">
                                    <DashboardScreenAlertsAlertinfobase className="flex flex-col gap-0.5 items-start justify-start p-2 w-auto" />
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_close_white_a700.svg"
                                      alt="close_One"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start max-w-[738px] w-full">
                                <div className="bg-gradient  flex flex-col items-start justify-start p-2 rounded-lg w-full">
                                  <div className="flex flex-row sm:gap-10 items-center justify-between md:pl-10 sm:pl-5 pl-[238px] w-full">
                                    <DashboardScreenAlertsAlertinfobase className="flex flex-col gap-0.5 items-start justify-start p-2 w-auto" />
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_close_white_a700.svg"
                                      alt="close_Two"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start max-w-[738px] w-full">
                                <div className="bg-gradient6  flex flex-col items-start justify-start p-2 rounded-lg w-full">
                                  <div className="flex flex-row sm:gap-10 items-center justify-between md:pl-10 sm:pl-5 pl-[238px] w-full">
                                    <DashboardScreenAlertsAlertinfobase className="flex flex-col gap-0.5 items-start justify-start p-2 w-auto" />
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_close_white_a700.svg"
                                      alt="close_Three"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[490px] items-center justify-end p-[21px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[26px] items-start justify-start mb-[3px] mt-2 w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Subtle Alert - Left
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[55px] items-center justify-start ml-0.5 md:ml-[0] w-full">
                              <DashboardScreenAlertsAlertonelinel className="flex flex-col items-start justify-start max-w-[741px] rounded-lg w-full" />
                              <DashboardScreenAlertsAlertonelinel1 className="flex flex-col items-start justify-start max-w-[741px] w-full" />
                              <DashboardScreenAlertsAlertonelinel2 className="flex flex-col items-start justify-start max-w-[741px] w-full" />
                              <DashboardScreenAlertsAlertonelinel3 className="flex flex-col items-start justify-start max-w-[741px] w-full" />
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[490px] items-center justify-end p-[21px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[25px] items-start justify-start mb-[3px] mt-[9px] w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Subtle Alert - Center
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[55px] items-center justify-start ml-0.5 md:ml-[0] w-full">
                              <DashboardScreenAlertsAlertonelinec className="flex flex-col items-start justify-start max-w-[741px] w-full" />
                              <DashboardScreenAlertsAlertonelinec1 className="flex flex-col items-start justify-start max-w-[741px] w-full" />
                              <DashboardScreenAlertsAlertonelinec2 className="flex flex-col items-start justify-start max-w-[741px] w-full" />
                              <DashboardScreenAlertsAlertonelinec3 className="flex flex-col items-start justify-start max-w-[741px] w-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-center w-[64%]"
                        orientation="horizontal"
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[600px] items-center justify-end p-[21px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[26px] items-start justify-start mb-[3px] mt-2 w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Solid MultiAlert
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[57px] items-center justify-start md:ml-[0] ml-[3px] w-full">
                              <DashboardScreenAlertsAlertmultiline className="flex flex-col items-center justify-start w-auto sm:w-full" />
                              <DashboardScreenAlertsAlertmultiline1 className="flex flex-col items-center justify-start w-auto sm:w-full" />
                              <DashboardScreenAlertsAlertmultiline2 className="flex flex-col items-center justify-start w-auto sm:w-full" />
                              <DashboardScreenAlertsAlertmultiline3 className="flex flex-col items-center justify-start w-auto sm:w-full" />
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[600px] items-center justify-end p-[21px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[26px] items-start justify-start mb-[3px] mt-2 w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Subtle MultiAlert
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[57px] items-center justify-start md:ml-[0] ml-[3px] w-full">
                              <DashboardScreenAlertsAlertmultiline4 className="flex flex-col items-center justify-start rounded-lg w-auto sm:w-full" />
                              <DashboardScreenAlertsAlertmultiline5 className="flex flex-col items-center justify-start rounded-lg w-auto sm:w-full" />
                              <DashboardScreenAlertsAlertmultiline6 className="flex flex-col items-center justify-start rounded-lg w-auto sm:w-full" />
                              <DashboardScreenAlertsAlertmultiline7 className="flex flex-col items-center justify-start rounded-lg w-auto sm:w-full" />
                            </div>
                          </div>
                        </div>
                      </List>
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

export default DashboardScreenAlertsPage;
