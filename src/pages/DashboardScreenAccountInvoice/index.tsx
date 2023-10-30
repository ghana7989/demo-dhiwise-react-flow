import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

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

const DashboardScreenAccountInvoicePage: React.FC = () => {
  const [inputwithaddonsvalue, setInputwithaddonsvalue] =
    React.useState<string>("");

  return (
    <>
      <div className="flex flex-col font-helvetica items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[1198px] items-center justify-end p-[26px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[49px] items-start justify-between max-w-[1857px] mb-[11px] mt-[17px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-8 justify-start md:mt-0 mt-1.5 w-[13%] md:w-full">
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
                          name="group2075"
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
                            name="group2080"
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
                            name="group2081"
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
                              name="group2082"
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
                              name="group2083"
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
                              name="group2084"
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
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[76px] items-center justify-start w-[85%] md:w-full">
                <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[10%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[142px]">
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
                          / Account / Invoice
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtHelveticaBold14"
                    >
                      Invoice
                    </Text>
                  </div>
                  <Img
                    className="h-6 mb-1.5 md:ml-[0] ml-[54px] md:mt-0 mt-[15px] w-6"
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
                <div
                  className="bg-cover bg-no-repeat md:h-[1107px] sm:h-[769px] h-[902px] p-7 sm:px-5 relative w-[56%] md:w-full"
                  style={{ backgroundImage: "url('images/img_firstcard.svg')" }}
                >
                  <div className="absolute bottom-[5%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[90%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col md:gap-10 gap-[93px] items-center justify-start w-full">
                          <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                            <div className="flex flex-col gap-[11px] items-start justify-start mt-[17px]">
                              <Text
                                className="leading-[140.00%] text-gray-600 text-sm w-full"
                                size="txtHelveticaBold14Bluegray400"
                              >
                                St. Independence Embankment, 050105 Bucharest,
                                Romania
                              </Text>
                              <Text
                                className="text-gray-500 text-xs"
                                size="txtHelvetica12"
                              >
                                tel: +4 (074) 1090873
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-start mb-[3px]">
                              <Text
                                className="text-gray-600 text-right text-sm"
                                size="txtHelveticaBold14Bluegray400"
                              >
                                Billed to: John Doe
                              </Text>
                              <Text
                                className="leading-[150.00%] text-gray-500 text-right text-xs"
                                size="txtHelvetica12"
                              >
                                <>
                                  4006 Locust View Drive
                                  <br />
                                  San Francisco CA
                                  <br />
                                  California
                                </>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                            <div className="flex flex-col gap-2.5 items-start justify-start">
                              <Text
                                className="text-gray-500 text-xs"
                                size="txtHelvetica12"
                              >
                                Invoice no
                              </Text>
                              <Text
                                className="text-gray-600 text-sm"
                                size="txtHelveticaBold14Bluegray400"
                              >
                                #0453119
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[11px] items-end justify-start w-[22%]">
                              <div className="flex flex-row gap-[33px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtHelvetica12"
                                >
                                  Invoice date:
                                </Text>
                                <Text
                                  className="text-gray-600 text-right text-sm"
                                  size="txtHelveticaBold14Bluegray400"
                                >
                                  20/07/2021
                                </Text>
                              </div>
                              <div className="flex flex-row gap-8 items-center justify-end w-[90%] md:w-full">
                                <Text
                                  className="text-gray-500 text-right text-xs"
                                  size="txtHelvetica12"
                                >
                                  Due date:
                                </Text>
                                <Text
                                  className="text-gray-600 text-right text-sm"
                                  size="txtHelveticaBold14Bluegray400"
                                >
                                  29/07/2021
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[13px] justify-start mt-[59px] w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-2 md:ml-[0] w-[91%] md:w-full">
                          <Text
                            className="text-[10px] text-gray-500"
                            size="txtHelveticaBold10Bluegray200"
                          >
                            ITEM
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[353px] text-[10px] text-center text-gray-500"
                            size="txtHelveticaBold10Bluegray200"
                          >
                            QUANTITY
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[97px] text-[10px] text-gray-500"
                            size="txtHelveticaBold10Bluegray200"
                          >
                            RATE
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[114px] text-[10px] text-gray-500"
                            size="txtHelveticaBold10Bluegray200"
                          >
                            AMOUNT
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <Img
                            className="h-px"
                            src="images/img_line.svg"
                            alt="lines"
                          />
                          <div className="flex flex-col items-start justify-start w-full">
                            <List
                              className="flex flex-col gap-[23px] items-center w-full"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 flex-col gap-5 justify-start my-0 w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-2 md:ml-[0] w-[90%] md:w-full">
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="text-gray-600 text-sm"
                                      size="txtHelvetica14Bluegray400"
                                    >
                                      Premium Support{" "}
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start ml-72 md:ml-[0]">
                                    <Text
                                      className="text-center text-gray-600 text-sm"
                                      size="txtHelvetica14Bluegray400"
                                    >
                                      1
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[121px]">
                                    <Text
                                      className="text-gray-600 text-sm"
                                      size="txtHelvetica14Bluegray400"
                                    >
                                      $ 9.00{" "}
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[101px]">
                                    <Text
                                      className="text-gray-600 text-sm"
                                      size="txtHelvetica14Bluegray400"
                                    >
                                      $ 9.00{" "}
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="h-px"
                                  src="images/img_line.svg"
                                  alt="line"
                                />
                              </div>
                              <div className="flex flex-1 flex-col gap-[21px] justify-start my-0 w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-2 md:ml-[0] w-[92%] md:w-full">
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="text-gray-600 text-sm"
                                      size="txtHelvetica14Bluegray400"
                                    >
                                      Chakra UI - Dashboard PRO
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[219px]">
                                    <Text
                                      className="text-center text-gray-600 text-sm"
                                      size="txtHelvetica14Bluegray400"
                                    >
                                      3
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[119px]">
                                    <Text
                                      className="text-gray-600 text-sm"
                                      size="txtHelvetica14Bluegray400"
                                    >
                                      $ 99.00{" "}
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[93px]">
                                    <Text
                                      className="text-gray-600 text-sm"
                                      size="txtHelvetica14Bluegray400"
                                    >
                                      $ 297.00{" "}
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="h-px"
                                  src="images/img_line.svg"
                                  alt="line"
                                />
                              </div>
                            </List>
                            <div className="flex flex-col items-center justify-start ml-2 md:ml-[0] mt-[23px] w-[91%] md:w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start">
                                  <Text
                                    className="text-gray-600 text-sm"
                                    size="txtHelvetica14Bluegray400"
                                  >
                                    Parts for Service
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[294px]">
                                  <Text
                                    className="text-center text-gray-600 text-sm"
                                    size="txtHelvetica14Bluegray400"
                                  >
                                    1
                                  </Text>
                                </div>
                                <List
                                  className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[93px] grid grid-cols-2 md:ml-[0] ml-[121px] w-[27%] md:w-full"
                                  orientation="horizontal"
                                >
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="text-gray-600 text-sm"
                                      size="txtHelvetica14Bluegray400"
                                    >
                                      $ 89.00{" "}
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Text
                                      className="text-gray-600 text-sm"
                                      size="txtHelvetica14Bluegray400"
                                    >
                                      $ 89.00{" "}
                                    </Text>
                                  </div>
                                </List>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[57px] w-full">
                              <div className="flex flex-col gap-[23px] justify-start w-full">
                                <div className="flex flex-row gap-[99px] items-center justify-end md:ml-[0] ml-[534px] w-[27%] md:w-full">
                                  <Text
                                    className="text-gray-800 text-lg"
                                    size="txtHelveticaBold18"
                                  >
                                    Total
                                  </Text>
                                  <Text
                                    className="text-gray-800 text-lg"
                                    size="txtHelveticaBold18"
                                  >
                                    $395.00
                                  </Text>
                                </div>
                                <Img
                                  className="h-px"
                                  src="images/img_line.svg"
                                  alt="line"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row sm:gap-10 items-end justify-between mt-[87px] w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-600 text-lg"
                            size="txtHelveticaBold18Bluegray400"
                          >
                            Thank you!
                          </Text>
                          <Text
                            className="leading-[150.00%] mt-1.5 text-gray-500 text-xs w-full"
                            size="txtHelvetica12"
                          >
                            If you encounter any issues related to the invoice
                            you can contact us at:
                          </Text>
                          <Text
                            className="mt-[35px] text-gray-600 text-sm"
                            size="txtHelveticaBold14Bluegray400"
                          >
                            email: support@creative-tim.com
                          </Text>
                        </div>
                        <div className="bg-gradient  flex flex-col h-[35px] md:h-auto items-center justify-center mt-[76px] px-2 rounded-lg w-[100px]">
                          <div className="flex flex-col items-center justify-center w-auto">
                            <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-[10px] text-center text-white-A700"
                                  size="txtHelveticaBold10"
                                >
                                  PRINT
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
                    </div>
                  </div>
                  <Img
                    className="absolute h-[58px] left-[5%] top-[3%] w-[58px]"
                    src="images/img_calculator.svg"
                    alt="calculator_One"
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
                  <div className="flex sm:flex-1 flex-row items-start justify-between w-[15%] sm:w-full">
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

export default DashboardScreenAccountInvoicePage;
