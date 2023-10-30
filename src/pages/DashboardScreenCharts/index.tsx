import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import DashboardScreenChartsRadarchart from "components/DashboardScreenChartsRadarchart";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const dashboardsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const pagesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const ecommerceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const authenticationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const basicOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const componentsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const changelogOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardScreenChartsPage: React.FC = () => {
  const [inputwithaddonsvalue, setInputwithaddonsvalue] =
    React.useState<string>("");

  return (
    <>
      <div className="flex flex-col font-helvetica items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat sm:h-[2487px] h-[2542px] md:h-[6197px] p-6 md:px-5 relative w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="absolute flex flex-col md:gap-10 gap-[2412px] h-max inset-y-[0] items-center justify-start my-auto right-[2%] w-[83%]">
              <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[6%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[87px]">
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
                        / Charts
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtHelveticaBold14"
                  >
                    Charts
                  </Text>
                </div>
                <Img
                  className="h-6 mb-1.5 md:ml-[0] ml-[109px] md:mt-0 mt-4 w-6"
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
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text className="text-gray-500 text-xs" size="txtHelvetica12">
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
                <div className="flex sm:flex-1 flex-row items-start justify-between w-[15%] sm:w-full">
                  <Text className="text-gray-500 text-xs" size="txtHelvetica12">
                    Creative Tim
                  </Text>
                  <Text className="text-gray-500 text-xs" size="txtHelvetica12">
                    Blog
                  </Text>
                  <Text className="text-gray-500 text-xs" size="txtHelvetica12">
                    License
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row gap-9 h-max inset-[0] items-start justify-between m-auto w-[98%]">
              <div className="flex flex-col gap-8 justify-start w-[13%] md:w-full">
                <div className="flex flex-row gap-3 items-start justify-start ml-3.5 md:ml-[0] w-[83%] md:w-full">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_calculator.svg"
                    alt="calculator"
                  />
                  <Text
                    className="mt-1 text-gray-800 text-xs"
                    size="txtHelveticaBold12Bluegray900"
                  >
                    SOFT UI DASHBOARD PRO
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Line className="bg-gradient7  h-px w-full" />
                  <div className="flex flex-col items-center justify-start mt-[21px] w-full">
                    <SelectBox
                      className="font-bold text-left text-xs w-[94%] sm:w-full"
                      placeholderClassName="text-gray-800"
                      indicator={
                        <Img
                          className="h-[15px] mr-[0] w-[15px]"
                          src="images/img_arrowdown_blue_gray_200.svg"
                          alt="arrow_down"
                        />
                      }
                      isSearchable={false}
                      placeholder="Dashboards"
                      getOptionLabel={(e) =>
                        (
                          <div className="flex items-center">
                            <Img
                              className="h-[15px] mr-[19px] w-[15px]"
                              src="images/img_ioniconhhomedefault.svg"
                              alt="IONIcon/H/home/default"
                            />
                            <span>{e.label}</span>
                          </div>
                        ) as unknown as string
                      }
                      name="dashboards"
                      isMulti={false}
                      options={dashboardsOptionsList}
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    />
                    <div className="flex flex-col items-start justify-start mt-[21px] w-[82%] md:w-full">
                      <Text
                        className="text-gray-800 text-xs"
                        size="txtHelveticaBold12Bluegray900"
                      >
                        PAGES
                      </Text>
                      <div className="flex flex-row gap-3 items-center justify-between mt-[26px] w-full">
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-lg w-[30px]"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[15px]"
                            src="images/img_ioniconddocumentdefault.svg"
                            alt="ioniconddocumen"
                          />
                        </Button>
                        <SelectBox
                          className="sm:flex-1 font-bold text-gray-500 text-left text-xs w-[78%] sm:w-full"
                          placeholderClassName="text-gray-500"
                          indicator={
                            <Img
                              className="h-[15px] mr-[0] w-[15px]"
                              src="images/img_arrowdown_blue_gray_200.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group272"
                          options={pagesOptionsList}
                          isSearchable={false}
                          placeholder="Pages"
                        />
                      </div>
                      <div className="h-[170px] md:h-[186px] mt-6 relative w-full">
                        <div className="absolute bottom-[0] flex flex-col gap-[22px] justify-start right-[0] w-[94%]">
                          <div className="flex flex-row gap-[60px] items-start justify-end md:ml-[0] ml-[29px] w-[84%] md:w-full">
                            <Text
                              className="text-gray-600 text-xs"
                              size="txtHelveticaBold12Bluegray400"
                            >
                              Applications
                            </Text>
                            <Img
                              className="h-[15px] w-[15px]"
                              src="images/img_arrowup.svg"
                              alt="arrowup"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-row gap-6 items-center justify-between w-full">
                                  <Img
                                    className="h-[115px]"
                                    src="images/img_dots.svg"
                                    alt="dots"
                                  />
                                  <div className="flex flex-col gap-[13px] items-start justify-start">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelvetica12"
                                    >
                                      Kanban
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelvetica12"
                                    >
                                      Wizard
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelvetica12"
                                    >
                                      DataTables
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelvetica12"
                                    >
                                      Calendar
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelvetica12"
                                    >
                                      Analytics
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button
                          className="absolute flex h-[30px] items-center justify-center left-[0] rounded-lg top-[0] w-[30px]"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[15px]"
                            src="images/img_ioniconbbuilddefault_blue_gray_800_30x219.svg"
                            alt="ioniconbbuildde"
                          />
                        </Button>
                      </div>
                      <List
                        className="flex flex-col gap-6 items-center mt-[25px] w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-lg w-[30px]"
                            shape="round"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-[15px]"
                              src="images/img_cart_blue_gray_800.svg"
                              alt="cart"
                            />
                          </Button>
                          <SelectBox
                            className="sm:flex-1 font-bold text-gray-500 text-left text-xs w-[78%] sm:w-full"
                            placeholderClassName="text-gray-500"
                            indicator={
                              <Img
                                className="h-[15px] mr-[0] w-[15px]"
                                src="images/img_arrowdown_blue_gray_200.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="group277"
                            options={ecommerceOptionsList}
                            isSearchable={false}
                            placeholder="Ecommerce"
                          />
                        </div>
                        <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-lg w-[30px]"
                            shape="round"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-[15px]"
                              src="images/img_ioniconddocumentsdefault_blue_gray_800.svg"
                              alt="ioniconddocumen"
                            />
                          </Button>
                          <SelectBox
                            className="sm:flex-1 font-bold text-gray-500 text-left text-xs w-[78%] sm:w-full"
                            placeholderClassName="text-gray-500"
                            indicator={
                              <Img
                                className="h-[15px] mr-[0] w-[15px]"
                                src="images/img_arrowdown_blue_gray_200.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="group278"
                            options={authenticationOptionsList}
                            isSearchable={false}
                            placeholder="Authentication"
                          />
                        </div>
                      </List>
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-start mt-6 w-full">
                      <Line className="bg-gradient7  h-px w-full" />
                      <div className="flex flex-col gap-[26px] items-start justify-start w-[82%] md:w-full">
                        <Text
                          className="text-gray-800 text-xs"
                          size="txtHelveticaBold12Bluegray900"
                        >
                          DOCS
                        </Text>
                        <List
                          className="flex flex-col gap-6 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-lg w-[30px]"
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            >
                              <Img
                                className="h-[15px]"
                                src="images/img_ioniconrrocketsharp_blue_gray_800.svg"
                                alt="ioniconrrockets"
                              />
                            </Button>
                            <SelectBox
                              className="sm:flex-1 font-bold text-gray-500 text-left text-xs w-[78%] sm:w-full"
                              placeholderClassName="text-gray-500"
                              indicator={
                                <Img
                                  className="h-[15px] mr-[0] w-[15px]"
                                  src="images/img_arrowdown_blue_gray_200.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="group279"
                              options={basicOptionsList}
                              isSearchable={false}
                              placeholder="Basic"
                            />
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-lg w-[30px]"
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            >
                              <Img
                                className="h-[15px]"
                                src="images/img_offer.svg"
                                alt="offer"
                              />
                            </Button>
                            <SelectBox
                              className="sm:flex-1 font-bold text-gray-500 text-left text-xs w-[78%] sm:w-full"
                              placeholderClassName="text-gray-500"
                              indicator={
                                <Img
                                  className="h-[15px] mr-[0] w-[15px]"
                                  src="images/img_arrowdown_blue_gray_200.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="group280"
                              options={componentsOptionsList}
                              isSearchable={false}
                              placeholder="Components"
                            />
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-lg w-[30px]"
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            >
                              <Img
                                className="h-[15px]"
                                src="images/img_ioniconiinfor.svg"
                                alt="ioniconiinfor"
                              />
                            </Button>
                            <SelectBox
                              className="sm:flex-1 font-bold text-gray-500 text-left text-xs w-[78%] sm:w-full"
                              placeholderClassName="text-gray-500"
                              indicator={
                                <Img
                                  className="h-[15px] mr-[0] w-[15px]"
                                  src="images/img_arrowdown_blue_gray_200.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="group281"
                              options={changelogOptionsList}
                              isSearchable={false}
                              placeholder="Changelog"
                            />
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[15px] mt-[79px] w-[94%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-blue_gray-500_7f flex flex-col items-center justify-start rounded-[16px] w-full">
                        <div className="h-[169px] relative w-full">
                          <Img
                            className="h-[169px] m-auto object-cover rounded-[15px] w-full"
                            src="images/img_whitecurved1.png"
                            alt="whitecurvedOne"
                          />
                          <div className="absolute flex flex-col gap-[11px] h-max inset-[0] items-start justify-center m-auto w-[86%]">
                            <div className="flex flex-col gap-6 items-start justify-start w-[66%] md:w-full">
                              <Button
                                className="flex h-[35px] items-center justify-center rounded-lg w-[35px]"
                                shape="round"
                                color="white_A700"
                                size="xs"
                                variant="fill"
                              >
                                <Img
                                  className="h-6"
                                  src="images/img_ioniconhhelpcircle_blue_gray_500.svg"
                                  alt="ioniconhhelpcir"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtHelveticaBold14WhiteA700"
                                >
                                  Need help?
                                </Text>
                                <Text
                                  className="text-white-A700 text-xs"
                                  size="txtHelvetica12WhiteA700"
                                >
                                  Please check our docs
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white-A700 flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg w-[186px]">
                              <div className="flex flex-col items-center justify-center w-auto">
                                <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <Text
                                      className="text-[10px] text-center text-gray-800"
                                      size="txtHelveticaBold10Bluegray900"
                                    >
                                      DOCUMENTATION
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:mt-0 mt-[91px] w-[86%] md:w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[400px] items-center justify-end p-[19px] w-1/2 md:w-full"
                      style={{
                        backgroundImage: "url('images/img_firstcard.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[38px] items-start justify-start mt-2.5 w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtHelveticaBold18"
                          >
                            Line chart
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="sm:h-[286px] h-[290px] md:h-[534px] relative w-full">
                            <div className="sm:h-[286px] h-[290px] md:h-[534px] m-auto w-full">
                              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[98%]">
                                <div className="flex flex-col gap-3 items-center justify-start w-full">
                                  <Img
                                    className="h-[261px]"
                                    src="images/img_lines_indigo_50.svg"
                                    alt="lines"
                                  />
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
                              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[99%]">
                                <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
                                  <div className="flex flex-col gap-[38px] items-start justify-start">
                                    <Text
                                      className="text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      500
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      400
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      300
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      200
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      100
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[11px] text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      0
                                    </Text>
                                  </div>
                                  <Img
                                    className="h-[260px]"
                                    src="images/img_lines_indigo_50_260x704.svg"
                                    alt="lines_One"
                                  />
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[247px] inset-x-[0] mx-auto top-[1%]"
                              src="images/img_lines_red_a100.svg"
                              alt="lines_Two"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[400px] items-center justify-end p-[21px] sm:px-5 w-1/2 md:w-full"
                      style={{
                        backgroundImage: "url('images/img_firstcard.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[31px] items-start justify-start mb-1 mt-2.5 w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtHelveticaBold18"
                          >
                            Line chart with gradient
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                            <div className="flex flex-col gap-[38px] items-start justify-start">
                              <Text
                                className="text-[10px] text-gray-400 text-right"
                                size="txtHelveticaBold10Bluegray100"
                              >
                                500
                              </Text>
                              <Text
                                className="text-[10px] text-gray-400 text-right"
                                size="txtHelveticaBold10Bluegray100"
                              >
                                400
                              </Text>
                              <Text
                                className="text-[10px] text-gray-400 text-right"
                                size="txtHelveticaBold10Bluegray100"
                              >
                                300
                              </Text>
                              <Text
                                className="text-[10px] text-gray-400 text-right"
                                size="txtHelveticaBold10Bluegray100"
                              >
                                200
                              </Text>
                              <Text
                                className="text-[10px] text-gray-400 text-right"
                                size="txtHelveticaBold10Bluegray100"
                              >
                                100
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[11px] text-[10px] text-gray-400 text-right"
                                size="txtHelveticaBold10Bluegray100"
                              >
                                0
                              </Text>
                            </div>
                            <div className="md:h-[286px] h-[287px] relative w-[98%] md:w-full">
                              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                                <div className="flex flex-col gap-3 items-center justify-start w-full">
                                  <Img
                                    className="h-[261px]"
                                    src="images/img_lines_indigo_50.svg"
                                    alt="lines_Three"
                                  />
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
                                className="absolute h-[249px] inset-x-[0] mx-auto object-cover top-[0]"
                                src="images/img_lines_blue_gray_900_249x706.png"
                                alt="lines_Four"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-1/2 md:w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[400px] items-center justify-end p-5 w-full"
                        style={{
                          backgroundImage: "url('images/img_firstcard.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-[38px] justify-start mt-[9px] w-[99%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              Bar chart
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start ml-1.5 md:ml-[0] w-full">
                            <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
                                  <div className="flex flex-col gap-[38px] items-start justify-start">
                                    <Text
                                      className="h-3 text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      50
                                    </Text>
                                    <Text
                                      className="h-3 text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      40
                                    </Text>
                                    <Text
                                      className="h-3 text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      30
                                    </Text>
                                    <Text
                                      className="h-3 text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      20
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      10
                                    </Text>
                                    <Text
                                      className="ml-1.5 md:ml-[0] text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      0
                                    </Text>
                                  </div>
                                  <div
                                    className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[260px] items-center justify-end pt-[19px] px-[19px] w-[97%] md:w-full"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_lines_indigo_50_260x704.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-[241px] md:h-auto object-cover"
                                      src="images/img_lines_241x620.png"
                                      alt="lines_Five"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-between w-[83%] md:w-full">
                                <Text
                                  className="text-[10px] text-gray-400"
                                  size="txtHelveticaBold10Bluegray100"
                                >
                                  16-20
                                </Text>
                                <Text
                                  className="text-[10px] text-gray-400"
                                  size="txtHelveticaBold10Bluegray100"
                                >
                                  21-25
                                </Text>
                                <Text
                                  className="text-[10px] text-gray-400"
                                  size="txtHelveticaBold10Bluegray100"
                                >
                                  26-30
                                </Text>
                                <Text
                                  className="text-[10px] text-gray-400"
                                  size="txtHelveticaBold10Bluegray100"
                                >
                                  31-36
                                </Text>
                                <Text
                                  className="text-[10px] text-gray-400"
                                  size="txtHelveticaBold10Bluegray100"
                                >
                                  36-42
                                </Text>
                                <Text
                                  className="text-[10px] text-gray-400"
                                  size="txtHelveticaBold10Bluegray100"
                                >
                                  42+
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[400px] items-center justify-end p-[19px] w-full"
                        style={{
                          backgroundImage: "url('images/img_firstcard.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-[38px] items-start justify-start mt-2.5 w-[99%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              Mixed chart
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="sm:h-[286px] h-[290px] md:h-[534px] relative w-full">
                              <div className="sm:h-[286px] h-[290px] md:h-[534px] m-auto w-full">
                                <div className="absolute sm:h-[286px] h-[290px] md:h-[534px] inset-[0] justify-center m-auto w-full">
                                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[97%]">
                                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                                      <Img
                                        className="h-[261px]"
                                        src="images/img_lines_indigo_50.svg"
                                        alt="lines_Six"
                                      />
                                      <div className="flex flex-row items-start justify-between w-[91%] md:w-full">
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
                                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                                    <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
                                      <div className="flex flex-col gap-[38px] items-start justify-start">
                                        <Text
                                          className="text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray100"
                                        >
                                          500
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray100"
                                        >
                                          400
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray100"
                                        >
                                          300
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray100"
                                        >
                                          200
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray100"
                                        >
                                          100
                                        </Text>
                                        <Text
                                          className="md:ml-[0] ml-[11px] text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray100"
                                        >
                                          0
                                        </Text>
                                      </div>
                                      <Img
                                        className="h-[260px]"
                                        src="images/img_lines_indigo_50_260x704.svg"
                                        alt="lines_Seven"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[9%] h-[155px] inset-x-[0] mx-auto object-cover"
                                  src="images/img_tealgraph.png"
                                  alt="tealgraph"
                                />
                              </div>
                              <Img
                                className="absolute h-[229px] inset-[0] justify-center m-auto object-cover"
                                src="images/img_lines_229x624.png"
                                alt="lines_Eight"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col gap-[49px] h-[400px] items-center justify-start p-[21px] sm:px-5 w-full"
                        style={{
                          backgroundImage: "url('images/img_firstcard.svg')",
                        }}
                      >
                        <div className="flex flex-col items-center justify-start mt-2.5">
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtHelveticaBold18"
                          >
                            Doughnut chart
                          </Text>
                        </div>
                        <div className="h-[196px] md:h-[277px] mb-[81px] relative w-[196px]">
                          <div className="!w-[196px] absolute border-solid h-[196px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[196px] absolute border-solid h-[196px] inset-[0] justify-center m-auto overflow-visible"
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
                          <div className="!w-[196px] absolute border-solid h-[196px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[196px] absolute border-solid h-[196px] inset-[0] justify-center m-auto overflow-visible"
                              value={66}
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
                          <div className="!w-[196px] absolute border-solid h-[196px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[196px] absolute border-solid h-[196px] inset-[0] justify-center m-auto overflow-visible"
                              value={52}
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
                          <div className="!w-[196px] absolute border-solid h-[196px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[196px] absolute border-solid h-[196px] inset-[0] justify-center m-auto overflow-visible"
                              value={42}
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
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[637px] items-start justify-start p-[21px] sm:px-5 w-full"
                        style={{
                          backgroundImage: "url('images/img_firstcard.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-6 justify-start mb-[54px] mt-[9px] w-[93%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              Radar chart
                            </Text>
                          </div>
                          <DashboardScreenChartsRadarchart className="md:h-[473px] h-[485px] md:ml-[0] ml-[58px] relative rounded-[30px] w-[92%] md:w-full" />
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-1/2 md:w-full">
                      <div className="h-[822px] relative w-full">
                        <div className="flex flex-col mb-[-355px] mx-auto w-full z-[1]">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-start mx-auto p-[21px] sm:px-5 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="flex flex-col items-center justify-start mb-[327px] mt-[9px]">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Bar chart horizontal
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[-306px] mx-auto w-[95%] z-[1]">
                            <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                              <div className="flex flex-col items-center justify-start mr-1 w-full">
                                <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
                                  <div className="flex flex-col gap-[39px] items-start justify-start">
                                    <Text
                                      className="text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      16-20
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      21-26
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      26-30
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      30-42
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[9px] text-[10px] text-gray-400 text-right"
                                      size="txtHelveticaBold10Bluegray100"
                                    >
                                      42+
                                    </Text>
                                  </div>
                                  <div
                                    className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[260px] items-start justify-start pr-[9px] py-[9px] w-[95%] md:w-full"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_lines_indigo_50_260x704.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-[242px] md:h-auto object-cover"
                                      src="images/img_lines_242x606.png"
                                      alt="lines_Eleven"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col md:gap-10 gap-[127px] items-center justify-start w-[96%] md:w-full">
                                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                                  <Text
                                    className="text-[10px] text-gray-400"
                                    size="txtHelveticaBold10Bluegray100"
                                  >
                                    0
                                  </Text>
                                  <Text
                                    className="h-3 text-[10px] text-gray-400"
                                    size="txtHelveticaBold10Bluegray100"
                                  >
                                    10
                                  </Text>
                                  <Text
                                    className="h-3 text-[10px] text-gray-400"
                                    size="txtHelveticaBold10Bluegray100"
                                  >
                                    20
                                  </Text>
                                  <Text
                                    className="h-3 text-[10px] text-gray-400"
                                    size="txtHelveticaBold10Bluegray100"
                                  >
                                    30
                                  </Text>
                                  <Text
                                    className="h-3 text-[10px] text-gray-400"
                                    size="txtHelveticaBold10Bluegray100"
                                  >
                                    40
                                  </Text>
                                  <Text
                                    className="h-3 text-[10px] text-gray-400"
                                    size="txtHelveticaBold10Bluegray100"
                                  >
                                    50
                                  </Text>
                                  <Text
                                    className="h-3 text-[10px] text-gray-400"
                                    size="txtHelveticaBold10Bluegray100"
                                  >
                                    60
                                  </Text>
                                </div>
                                <Img
                                  className="h-[270px]"
                                  src="images/img_dots_purple_500_270x709.svg"
                                  alt="dots_One"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[400px] items-center justify-end mt-auto mx-auto p-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[38px] items-start justify-start mt-[9px] w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18"
                              >
                                Bubble chart
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="sm:h-[285px] h-[290px] md:h-[533px] relative w-full">
                                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[97%]">
                                  <div className="flex flex-col gap-3 items-center justify-start w-full">
                                    <Img
                                      className="h-[261px]"
                                      src="images/img_lines_indigo_50_261x704.svg"
                                      alt="lines_Nine"
                                    />
                                    <div className="flex flex-row items-center justify-between w-full">
                                      <Text
                                        className="text-[10px] text-center text-gray-400"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        0
                                      </Text>
                                      <Text
                                        className="h-3 text-[10px] text-center text-gray-400"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        10
                                      </Text>
                                      <Text
                                        className="h-3 text-[10px] text-center text-gray-400"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        20
                                      </Text>
                                      <Text
                                        className="h-3 text-[10px] text-center text-gray-400"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        30
                                      </Text>
                                      <Text
                                        className="h-3 text-[10px] text-center text-gray-400"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        40
                                      </Text>
                                      <Text
                                        className="h-3 text-[10px] text-center text-gray-400"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        50
                                      </Text>
                                      <Text
                                        className="h-3 text-[10px] text-center text-gray-400"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        60
                                      </Text>
                                      <Text
                                        className="h-3 text-[10px] text-center text-gray-400"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        70
                                      </Text>
                                      <Text
                                        className="h-3 text-[10px] text-center text-gray-400"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        80
                                      </Text>
                                      <Text
                                        className="h-3 text-[10px] text-center text-gray-400"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        90
                                      </Text>
                                      <Text
                                        className="text-[10px] text-center text-gray-400"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        100
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[99%]">
                                  <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
                                    <div className="flex flex-col gap-[38px] items-start justify-start">
                                      <Text
                                        className="text-[10px] text-gray-400 text-right"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        500
                                      </Text>
                                      <Text
                                        className="text-[10px] text-gray-400 text-right"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        400
                                      </Text>
                                      <Text
                                        className="text-[10px] text-gray-400 text-right"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        300
                                      </Text>
                                      <Text
                                        className="text-[10px] text-gray-400 text-right"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        200
                                      </Text>
                                      <Text
                                        className="text-[10px] text-gray-400 text-right"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        100
                                      </Text>
                                      <Text
                                        className="md:ml-[0] ml-[11px] text-[10px] text-gray-400 text-right"
                                        size="txtHelveticaBold10Bluegray100"
                                      >
                                        0
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[259px]"
                                      src="images/img_lines_indigo_50_259x704.svg"
                                      alt="lines_Ten"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[1102px] relative w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col gap-[25px] h-[400px] items-center justify-center mb-[-14.4px] mx-auto p-[21px] sm:px-5 w-full z-[1]"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col items-center justify-start mt-[9px]">
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              Pie chart
                            </Text>
                          </div>
                          <Img
                            className="h-[246px] mb-14 w-[246px]"
                            src="images/img_chart.svg"
                            alt="chart"
                          />
                        </div>
                        <div className="h-[716px] mt-auto mx-auto w-full">
                          <div className="h-[716px] m-auto w-full">
                            <Img
                              className="absolute h-[637px] inset-[0] justify-center m-auto"
                              src="images/img_firstcard.svg"
                              alt="background"
                            />
                            <div className="absolute h-[716px] inset-[0] justify-center m-auto w-[716px] md:w-full">
                              <div className="md:h-[480px] h-[493px] m-auto w-[68%] sm:w-full">
                                <div className="absolute md:h-[480px] h-[493px] inset-[0] justify-center m-auto w-full">
                                  <div className="absolute flex flex-col sm:h-auto h-max inset-[0] items-center justify-center m-auto outline outline-[0.5px] outline-indigo-50 p-10 sm:px-5 rounded-[50%] w-[480px]">
                                    <div className="flex flex-col h-[400px] sm:h-auto items-center justify-start outline outline-[0.5px] outline-indigo-50 p-10 sm:px-5 rounded-[50%] w-[400px] sm:w-full">
                                      <div className="flex flex-col h-80 items-center justify-start outline outline-[0.5px] outline-indigo-50 p-10 sm:px-5 rounded-[50%] w-80">
                                        <div className="flex flex-col h-60 items-center justify-start outline outline-[0.5px] outline-indigo-50 p-10 sm:px-5 rounded-[50%] w-60">
                                          <div className="flex flex-col h-40 items-center justify-start outline outline-[0.5px] outline-indigo-50 p-10 sm:px-5 rounded-[50%] w-40">
                                            <div className="h-20 outline outline-[0.5px] outline-indigo-50 rounded-[50%] w-20"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-col gap-[27px] inset-x-[0] items-center justify-start mx-auto top-[0]">
                                    <Text
                                      className="h-3 text-[10px] text-center text-gray-500"
                                      size="txtHelveticaBold10Bluegray200"
                                    >
                                      16
                                    </Text>
                                    <Text
                                      className="h-3 text-[10px] text-center text-gray-500"
                                      size="txtHelveticaBold10Bluegray200"
                                    >
                                      14
                                    </Text>
                                    <Text
                                      className="h-3 text-[10px] text-center text-gray-500"
                                      size="txtHelveticaBold10Bluegray200"
                                    >
                                      12
                                    </Text>
                                    <Text
                                      className="h-3 text-[10px] text-center text-gray-500"
                                      size="txtHelveticaBold10Bluegray200"
                                    >
                                      10
                                    </Text>
                                    <Text
                                      className="text-[10px] text-center text-gray-500"
                                      size="txtHelveticaBold10Bluegray200"
                                    >
                                      8
                                    </Text>
                                    <Text
                                      className="text-[10px] text-center text-gray-500"
                                      size="txtHelveticaBold10Bluegray200"
                                    >
                                      6
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="absolute h-[98px] inset-[0] justify-center m-auto w-[98px]"
                                  src="images/img_close_pink_a400.svg"
                                  alt="close"
                                />
                                <Img
                                  className="absolute h-[437px] inset-[0] justify-center m-auto w-[437px]"
                                  src="images/img_12.svg"
                                  alt="Twelve_One"
                                />
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto p-[57px] md:px-10 sm:px-5 w-[716px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group69.svg')",
                                }}
                              >
                                <Img
                                  className="h-[602px] w-[602px]"
                                  src="images/img_14.svg"
                                  alt="Fourteen_One"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col items-center justify-start left-[3%] top-[10%]">
                            <Text
                              className="text-gray-800 text-lg"
                              size="txtHelveticaBold18"
                            >
                              Polar chart
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
        </div>
      </div>
    </>
  );
};

export default DashboardScreenChartsPage;
