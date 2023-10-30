import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Text,
} from "components";

const howCanIMakeThePaymentOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const howMuchTimeDoesItTakeToReceiveTheOrderOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const canIResellTheProductsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const whereDoIFindTheShippingDetailsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardScreenPricingPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-helvetica items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat md:h-[1670px] h-[1980px] sm:h-[2249px] p-6 md:px-5 relative w-full"
            style={{
              backgroundImage: "url('images/img_maindashboard_white_a700.svg')",
            }}
          >
            <div className="flex flex-col h-full items-center justify-start m-auto w-[98%]">
              <div className="flex flex-col md:gap-10 gap-[246px] items-center justify-start w-full">
                <div className="bg-gradient4  h-[605px] relative rounded-[15px] w-full">
                  <Img
                    className="absolute h-[605px] inset-y-[0] left-[0] my-auto object-cover rounded-[15px] w-[87%]"
                    src="images/img_14577184552761_605x1619.png"
                    alt="14577184552761"
                  />
                  <div className="absolute h-[605px] inset-y-[0] my-auto right-[0] w-[87%] md:w-full">
                    <Img
                      className="h-[605px] m-auto object-cover rounded-[15px] w-full"
                      src="images/img_14577184552762.png"
                      alt="14577184552762"
                    />
                    <div className="absolute flex flex-col items-center justify-start left-[13%] top-[6%] w-[58%]">
                      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                        <div className="flex md:flex-1 flex-row gap-3 items-start justify-start md:mt-0 my-1.5 w-[21%] md:w-full">
                          <Img
                            className="h-[22px] w-[22px]"
                            src="images/img_computer.svg"
                            alt="computer"
                          />
                          <Text
                            className="mt-1 text-white-A700 text-xs"
                            size="txtHelveticaBold12WhiteA700"
                          >
                            SOFT UI DASHBOARD PRO
                          </Text>
                        </div>
                        <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-center md:ml-[0] ml-[74px] md:mt-0 my-[5px] w-[49%] md:w-full">
                          <div className="flex flex-col h-6 md:h-auto items-center justify-center px-2 w-[54px]">
                            <div className="flex flex-col items-center justify-center w-auto">
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center w-auto">
                                <div className="flex flex-row items-center justify-center w-auto">
                                  <Text
                                    className="text-[10px] text-center text-white-A700 w-[34px]"
                                    size="txtHelveticaBold10"
                                  >
                                    PAGES
                                  </Text>
                                  <Img
                                    className="h-[11px] w-[11px]"
                                    src="images/img_arrowdown_white_a700.svg"
                                    alt="arrowdown"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col h-6 md:h-auto items-center justify-center sm:ml-[0] ml-[17px] px-2 w-[105px]">
                            <div className="flex flex-col items-center justify-center w-auto">
                              <div className="flex flex-col h-6 md:h-auto items-center justify-center w-auto">
                                <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                  <Text
                                    className="text-[10px] text-center text-white-A700 uppercase w-auto"
                                    size="txtHelveticaBold10"
                                  >
                                    Authentication
                                  </Text>
                                  <Img
                                    className="h-[11px] w-[11px]"
                                    src="images/img_arrowdown_white_a700.svg"
                                    alt="arrowdown_One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-[18px] grid grid-cols-3 sm:ml-[0] ml-[18px] w-[58%] sm:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col h-6 md:h-auto items-center justify-center px-2 w-[94px]">
                              <div className="flex flex-col items-center justify-center w-auto">
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center w-auto">
                                  <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                    <Text
                                      className="text-[10px] text-center text-white-A700 uppercase w-auto"
                                      size="txtHelveticaBold10"
                                    >
                                      APPLICATIONS
                                    </Text>
                                    <Img
                                      className="h-[11px] w-[11px]"
                                      src="images/img_arrowdown_white_a700.svg"
                                      alt="arrowdown"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col h-6 md:h-auto items-center justify-center px-2 w-[85px]">
                              <div className="flex flex-col items-center justify-center w-auto">
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center w-auto">
                                  <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                    <Text
                                      className="text-[10px] text-center text-white-A700 uppercase w-auto"
                                      size="txtHelveticaBold10"
                                    >
                                      ECOMMERCE
                                    </Text>
                                    <Img
                                      className="h-[11px] w-[11px]"
                                      src="images/img_arrowdown_white_a700.svg"
                                      alt="arrowdown"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col h-6 md:h-auto items-center justify-center px-2 w-[46px]">
                              <div className="flex flex-col items-center justify-center w-auto">
                                <div className="flex flex-col h-6 md:h-auto items-center justify-center w-auto">
                                  <div className="flex flex-row gap-1 items-center justify-center w-auto">
                                    <Text
                                      className="text-[10px] text-center text-white-A700 uppercase w-auto"
                                      size="txtHelveticaBold10"
                                    >
                                      docs
                                    </Text>
                                    <Img
                                      className="h-[11px] w-[11px]"
                                      src="images/img_arrowdown_white_a700.svg"
                                      alt="arrowdown"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                        <Button
                          className="!text-gray-800 cursor-pointer font-bold h-[35px] md:ml-[0] ml-[107px] rounded-[17px] text-[10px] text-center w-[110px]"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        >
                          BUY NOW
                        </Button>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mt-[60px]">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                          size="txtHelveticaBold32WhiteA700"
                        >
                          See our pricing
                        </Text>
                        <Text
                          className="leading-[140.00%] text-center text-sm text-white-A700 w-full"
                          size="txtHelvetica14WhiteA700"
                        >
                          You have Free Unlimited Updates and Premium Support on
                          each package.
                        </Text>
                      </div>
                      <List
                        className="bg-gray-100 sm:flex-col flex-row gap-10 grid grid-cols-2 justify-center mt-[38px] p-1 rounded-lg w-[29%]"
                        orientation="horizontal"
                      >
                        <div className="bg-white-A700 hover:cursor-pointer flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg hover:shadow-bs2 shadow-bs2 w-[134px] hover:w-full">
                          <div className="flex flex-col items-center justify-center w-auto">
                            <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                              <div className="flex flex-col items-center justify-center w-auto">
                                <Text
                                  className="text-[10px] text-center text-gray-800 w-auto"
                                  size="txtHelveticaBold10Bluegray900"
                                >
                                  MONTHLY
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
                        <div className="hover:cursor-pointer flex flex-col h-[35px] md:h-auto items-center justify-center px-2 hover:shadow-bs2 w-10 hover:w-full">
                          <div className="flex flex-col items-center justify-center w-auto">
                            <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                              <div className="flex flex-col items-center justify-center w-auto">
                                <Text
                                  className="text-[10px] text-center text-gray-800 w-auto"
                                  size="txtHelveticaBold10Bluegray900"
                                >
                                  YEARLY
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
                <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                  <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-center text-gray-400"
                        size="txtHelveticaBold16Bluegray100"
                      >
                        More than 50+ brands trust Soft UI Dashboard
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                      <Img
                        className="h-[38px]"
                        src="images/img_google2015logo.svg"
                        alt="google2015logo"
                      />
                      <Img
                        className="h-9"
                        src="images/img_2015msnlogo1.svg"
                        alt="2015msnlogoOne"
                      />
                      <Img
                        className="h-[21px] sm:mt-0 mt-[9px]"
                        src="images/img_microsoftlogo2012.svg"
                        alt="microsoftlogoTwenty"
                      />
                      <Img
                        className="h-[31px] sm:mt-0 mt-0.5"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Img
                        className="h-[39px]"
                        src="images/img_georgiatechlogo.svg"
                        alt="georgiatechlogo"
                      />
                      <Img
                        className="h-[25px] sm:mt-0 mt-[9px]"
                        src="images/img_deloitte1.svg"
                        alt="deloitteOne"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start mt-[118px] w-full">
                    <div className="flex flex-col gap-[11px] items-center justify-start">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-800"
                        size="txtHelveticaBold32"
                      >
                        Frequently Asked Questions
                      </Text>
                      <Text
                        className="leading-[140.00%] text-base text-center text-gray-500 w-full"
                        size="txtHelvetica16"
                      >
                        <>
                          A lot of people don&#39;t appreciate the moment until
                          it’s passed. I&#39;m not trying my hardest, and
                          I&#39;m not trying to do
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-gray-600 text-lg"
                            size="txtHelveticaBold18Bluegray400"
                          >
                            How do I order?
                          </Text>
                          <Img
                            className="h-[19px] w-[18px]"
                            src="images/img_arrowup.svg"
                            alt="arrowup"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                            <Line className="bg-gray-400 h-px w-full" />
                            <Text
                              className="leading-[140.00%] text-base text-gray-500 w-full"
                              size="txtHelvetica16"
                            >
                              We’re not always in the position that we want to
                              be at. We’re constantly growing. We’re constantly
                              making mistakes. We’re constantly trying to
                              express ourselves and actualize our dreams. If you
                              have the opportunity to play this game of life you
                              need to appreciate every moment. A lot of people
                              don’t appreciate the moment until it’s passed.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[19px] items-center justify-start mt-11 w-full">
                        <SelectBox
                          className="font-bold text-gray-600 text-left text-lg w-full"
                          placeholderClassName="text-gray-600"
                          indicator={
                            <Img
                              className="h-[19px] mr-[0] w-[18px]"
                              src="images/img_arrowdown_blue_gray_400.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group2035"
                          options={howCanIMakeThePaymentOptionsList}
                          isSearchable={false}
                          placeholder="How can I make the payment?"
                        />
                        <Line className="bg-gray-400 h-px w-full" />
                      </div>
                      <div className="flex flex-col gap-[19px] items-center justify-start mt-[42px] w-full">
                        <SelectBox
                          className="font-bold text-gray-600 text-left text-lg w-full"
                          placeholderClassName="text-gray-600"
                          indicator={
                            <Img
                              className="h-[19px] mr-[0] w-[18px]"
                              src="images/img_arrowdown_blue_gray_400.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group2036"
                          options={
                            howMuchTimeDoesItTakeToReceiveTheOrderOptionsList
                          }
                          isSearchable={false}
                          placeholder="How much time does it take to receive the order?"
                        />
                        <Line className="bg-gray-400 h-px w-full" />
                      </div>
                      <div className="flex flex-col gap-[19px] items-center justify-start mt-[43px] w-full">
                        <SelectBox
                          className="font-bold text-gray-600 text-left text-lg w-full"
                          placeholderClassName="text-gray-600"
                          indicator={
                            <Img
                              className="h-[19px] mr-[0] w-[18px]"
                              src="images/img_arrowdown_blue_gray_400.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group2037"
                          options={canIResellTheProductsOptionsList}
                          isSearchable={false}
                          placeholder="Can I resell the products?"
                        />
                        <Line className="bg-gray-400 h-px w-full" />
                      </div>
                      <div className="flex flex-col gap-[19px] items-center justify-start mt-[43px] w-full">
                        <SelectBox
                          className="font-bold text-gray-600 text-left text-lg w-full"
                          placeholderClassName="text-gray-600"
                          indicator={
                            <Img
                              className="h-[19px] mr-[0] w-[18px]"
                              src="images/img_arrowdown_blue_gray_400.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group2038"
                          options={whereDoIFindTheShippingDetailsOptionsList}
                          isSearchable={false}
                          placeholder="Where do I find the shipping details?"
                        />
                        <Line className="bg-gray-400 h-px w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[25px] items-center justify-start mt-32 w-[53%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
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
                        Simmmple
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
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtHelvetica12"
                      >
                        About
                      </Text>
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtHelvetica12"
                      >
                        Products
                      </Text>
                    </div>
                    <PagerIndicator
                      className="flex h-[22px] justify-center w-[212px]"
                      count={6}
                      activeCss="inline-block cursor-pointer h-[22px] bg-gray-500 w-[22px]"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer h-5 bg-gray-500 w-5"
                      selectedWrapperCss="inline-block md:ml-[0] mx-[9.00px] sm:ml-[0]"
                      unselectedWrapperCss="inline-block md:ml-[0] mx-[9.00px] sm:ml-[0]"
                    />
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
                </div>
              </div>
            </div>
            <div className="absolute gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] items-center justify-center mx-auto top-[19%] w-[49%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[420px] items-center justify-end p-[18px] w-full"
                style={{ backgroundImage: "url('images/img_firstcard.svg')" }}
              >
                <div className="flex flex-col justify-start mt-2 w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[100px] w-auto">
                    <Button
                      className="cursor-pointer font-bold h-[22px] min-w-[63px] rounded-[11px] text-[10px] text-center"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      STARTER
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[94px] mt-2.5">
                    <Text
                      className="sm:text-4xl md:text-[42px] text-[46px] text-center text-gray-800"
                      size="txtHelveticaBold46"
                    >
                      $59
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start ml-2.5 md:ml-[0] mt-[25px] w-[71%] md:w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[74%] md:w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_ioniconccheckmarkccircle_20x20.png"
                        alt="ioniconccheckma"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          2 Team Members
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-[85%] md:w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_ioniconccheckmarkccircle_20x20.png"
                        alt="ioniconccheckma_One"
                      />
                      <div className="flex flex-col items-center justify-start mt-0.5">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          20GB Cloud Storage
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-[69%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_ioniconccloseccircle.svg"
                        alt="ioniconcclosecc"
                      />
                      <div className="flex flex-col items-center justify-start mt-[3px]">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          Integration Help
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-[57%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_ioniconccloseccircle.svg"
                        alt="ioniconcclosecc_One"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          Sketch Files
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-[54%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_ioniconccloseccircle.svg"
                        alt="ioniconcclosecc_Two"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          API Access
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_ioniconccloseccircle.svg"
                        alt="ioniconcclosecc_Three"
                      />
                      <div className="flex flex-col items-center justify-start mt-0.5">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          Complete Documentation
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-[35px] mt-[35px] rounded-lg text-[10px] text-center w-[264px]"
                    shape="round"
                    size="sm"
                    variant="gradient"
                    color="blue_gray_800_01_gray_900_01"
                  >
                    JOIN NOW
                  </Button>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[420px] items-center justify-end p-[18px] w-full"
                style={{ backgroundImage: "url('images/img_firstcard.svg')" }}
              >
                <div className="flex flex-col justify-start mt-2 w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[100px] w-auto">
                    <Button
                      className="cursor-pointer font-bold h-[22px] min-w-[64px] rounded-[11px] text-[10px] text-center"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      PREMIUM
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[94px] mt-2.5">
                    <Text
                      className="sm:text-4xl md:text-[42px] text-[46px] text-center text-gray-800"
                      size="txtHelveticaBold46"
                    >
                      $89
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start ml-2.5 md:ml-[0] mt-[25px] w-[71%] md:w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[78%] md:w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_ioniconccheckmarkccircle_20x20.png"
                        alt="ioniconccheckma_Two"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          10 Team Members
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-[85%] md:w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_ioniconccheckmarkccircle_20x20.png"
                        alt="ioniconccheckma_Three"
                      />
                      <div className="flex flex-col items-center justify-start mt-0.5">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          40GB Cloud Storage
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-[69%] md:w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_ioniconccheckmarkccircle_20x20.png"
                        alt="ioniconccheckma_Four"
                      />
                      <div className="flex flex-col items-center justify-start mt-[3px]">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          Integration Help
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-[57%] md:w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_ioniconccheckmarkccircle_20x20.png"
                        alt="ioniconccheckma_Five"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          Sketch Files
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-[54%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_ioniconccloseccircle.svg"
                        alt="ioniconcclosecc_Four"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          API Access
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_ioniconccloseccircle.svg"
                        alt="ioniconcclosecc_Five"
                      />
                      <div className="flex flex-col items-center justify-start mt-0.5">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          Complete Documentation
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="!text-white-A700 cursor-pointer font-bold h-[35px] mt-[35px] rounded-lg text-[10px] text-center w-[264px]"
                    shape="round"
                    size="sm"
                    variant="gradient"
                    color="pink_A400_deep_purple_500"
                  >
                    TRY PREMIUM
                  </Button>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[420px] items-center justify-end p-[18px] w-full"
                style={{ backgroundImage: "url('images/img_firstcard.svg')" }}
              >
                <div className="flex flex-col justify-start mt-2 w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[92px] w-[31%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                      <Input
                        name="tagbase"
                        placeholder="ENTERPRISE"
                        className="font-bold md:h-auto p-0 placeholder:text-gray-800 sm:h-auto text-[10px] text-center w-full"
                        wrapClassName="rounded-[11px] w-full"
                        color="blue_gray_50"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="sm:text-4xl md:text-[42px] text-[46px] text-center text-gray-800"
                        size="txtHelveticaBold46"
                      >
                        $99
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start ml-2.5 md:ml-[0] mt-[25px] w-[71%] md:w-full">
                    <div className="flex flex-row gap-2 items-center justify-between w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_ioniconccheckmarkccircle_20x20.png"
                        alt="ioniconccheckma_Six"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          Unlimited Team Members
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-[89%] md:w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_ioniconccheckmarkccircle_20x20.png"
                        alt="ioniconccheckma_Seven"
                      />
                      <div className="flex flex-col items-center justify-start mt-0.5">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          100GB Cloud Storage
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-[68%] md:w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_ioniconccheckmarkccircle_20x20.png"
                        alt="ioniconccheckma_Eight"
                      />
                      <div className="flex flex-col items-center justify-start mt-[3px]">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          Integration Help
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-[57%] md:w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_ioniconccheckmarkccircle_20x20.png"
                        alt="ioniconccheckma_Nine"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          Sketch Files
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-[53%] md:w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_ioniconccheckmarkccircle_20x20.png"
                        alt="ioniconccheckma_Ten"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          API Access
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_ioniconccheckmarkccircle_20x20.png"
                        alt="ioniconccheckma_Eleven"
                      />
                      <div className="flex flex-col items-center justify-start mt-0.5">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray400"
                        >
                          Complete Documentation
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-[35px] mt-[35px] rounded-lg text-[10px] text-center w-[264px]"
                    shape="round"
                    size="sm"
                    variant="gradient"
                    color="blue_gray_800_01_gray_900_01"
                  >
                    JOIN NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreenPricingPage;
