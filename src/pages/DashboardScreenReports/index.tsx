import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardScreenReportsRowellipseone from "components/DashboardScreenReportsRowellipseone";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const DashboardScreenReportsPage: React.FC = () => {
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
            className="bg-cover bg-no-repeat flex flex-col h-[1073px] items-center justify-start p-4 w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[49px] items-start justify-between mx-auto my-1.5 md:px-5 w-full">
              <Sidebar className="!sticky !w-[233px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
                <div className="flex flex-row gap-3 items-start justify-start mb-[998px] ml-3.5 mr-[25px] w-[83%]">
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
                <Line className="bg-gradient7  h-px mb-[965px] mt-[54px] w-full" />
                <Menu
                  menuItemStyles={{
                    button: {
                      padding: "14px 14px 14px 190px",
                      width: "100%",
                      fontSize: "12px",
                      gap: "19px",
                      color: "#a0aec0",
                      fontWeight: 700,
                      borderRadius: "8px",
                      [`&:hover, &.ps-active`]: {
                        color: "#2d3748",
                        backgroundColor: "#ffffffff !important",
                        boxShadow: "0px 3.5px  5.5px 0px #00000005",
                      },
                    },
                  }}
                  renderExpandIcon={() => (
                    <Img
                      className="h-[15px] mb-1.5 w-[15px]"
                      src="images/img_arrowdown_blue_gray_200.svg"
                      alt="arrowdown"
                    />
                  )}
                  className="flex flex-col items-center justify-start mb-[286px] mt-[57px] pt-5 px-1.5 w-[94%]"
                >
                  <div className="flex flex-col items-center justify-start pb-[50px] w-full">
                    <div className="flex flex-col gap-[51px] items-center justify-start pb-5 w-full">
                      <SubMenu
                        icon={
                          <Img
                            className="h-[15px] w-[15px]"
                            src="images/img_ioniconhhomedefault.svg"
                            alt="ioniconhhomedef"
                          />
                        }
                        label={<Text>Dashboards</Text>}
                      >
                        <MenuItem>Submenu Item</MenuItem>
                      </SubMenu>
                      <SubMenu
                        label={
                          <MenuItem>
                            <Text className="md:ml-[0]">Pages</Text>
                          </MenuItem>
                        }
                      >
                        <MenuItem>Submenu Item</MenuItem>
                      </SubMenu>
                    </div>
                    <Text
                      className="text-gray-800 text-xs"
                      size="txtHelveticaBold12Bluegray900"
                    >
                      PAGES
                    </Text>
                  </div>
                  <div className="h-[170px] md:h-[191px] sm:h-[445px] mt-[29px] relative w-full">
                    <div className="absolute bottom-[0] flex flex-col gap-[22px] inset-x-[0] items-center justify-start mx-auto w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start">
                        <MenuItem>
                          <Text className="text-gray-600">Applications</Text>
                        </MenuItem>
                        <Img
                          className="h-[15px] w-[219px]"
                          src="images/img_arrowup.svg"
                          alt="arrowup"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                              <Img
                                className="h-[115px]"
                                src="images/img_dots.svg"
                                alt="dots"
                              />
                              <div className="flex flex-1 flex-col gap-[-25.21px] items-center justify-start w-full">
                                {sideBarMenu?.map((menu, i) => (
                                  <MenuItem
                                    key={`sideBarMenuItem${i}`}
                                    {...menu}
                                  >
                                    {menu.label}
                                  </MenuItem>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="absolute flex inset-x-[0] items-center justify-center mx-auto rounded-lg top-[0] w-full"
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
                  <div className="flex flex-col items-center justify-start mt-[25px] pb-[27px] w-full">
                    <SubMenu
                      label={
                        <MenuItem>
                          <Text className="md:ml-[0]">Ecommerce</Text>
                        </MenuItem>
                      }
                    >
                      <MenuItem>Submenu Item</MenuItem>
                    </SubMenu>
                    <SubMenu
                      label={
                        <Button
                          className="flex h-[30px] items-center justify-center mb-2 rounded-lg w-[30px]"
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
                      }
                    >
                      <MenuItem>Submenu Item</MenuItem>
                    </SubMenu>
                    <SubMenu
                      label={
                        <MenuItem>
                          <Text className="md:ml-[0]">Authentication</Text>
                        </MenuItem>
                      }
                    >
                      <MenuItem>Submenu Item</MenuItem>
                    </SubMenu>
                    <SubMenu
                      label={
                        <Button
                          className="flex h-[30px] items-center justify-center mb-2 rounded-lg w-[30px]"
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
                      }
                    >
                      <MenuItem>Submenu Item</MenuItem>
                    </SubMenu>
                  </div>
                  <Line className="bg-gradient7  h-px mt-6 w-full" />
                  <div className="flex flex-col gap-[26px] items-center justify-end mt-6 w-full">
                    <Text
                      className="text-gray-800 text-xs"
                      size="txtHelveticaBold12Bluegray900"
                    >
                      DOCS
                    </Text>
                    <div className="flex flex-col items-center justify-start pb-[25px] w-full">
                      <SubMenu
                        label={
                          <MenuItem>
                            <Text className="md:ml-[0]">Basic</Text>
                          </MenuItem>
                        }
                      >
                        <MenuItem>Submenu Item</MenuItem>
                      </SubMenu>
                      <SubMenu
                        label={
                          <Button
                            className="flex h-[30px] items-center justify-center mb-2 rounded-lg w-[30px]"
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
                        }
                      >
                        <MenuItem>Submenu Item</MenuItem>
                      </SubMenu>
                      <SubMenu
                        label={
                          <MenuItem>
                            <Text className="md:ml-[0]">Components</Text>
                          </MenuItem>
                        }
                      >
                        <MenuItem>Submenu Item</MenuItem>
                      </SubMenu>
                      <SubMenu
                        label={
                          <Button
                            className="flex h-[30px] items-center justify-center mb-2 rounded-lg w-[30px]"
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
                        }
                      >
                        <MenuItem>Submenu Item</MenuItem>
                      </SubMenu>
                      <SubMenu
                        label={
                          <MenuItem>
                            <Text className="md:ml-[0]">Changelog</Text>
                          </MenuItem>
                        }
                      >
                        <MenuItem>Submenu Item</MenuItem>
                      </SubMenu>
                      <SubMenu
                        label={
                          <Button
                            className="flex h-[30px] items-center justify-center mb-2 rounded-lg w-[30px]"
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
                        }
                      >
                        <MenuItem>Submenu Item</MenuItem>
                      </SubMenu>
                    </div>
                  </div>
                </Menu>
                <div className="md:h-[1020px] h-[169px] ml-3.5 mt-[851px] relative w-[94%]">
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
              </Sidebar>
              <div className="flex flex-1 flex-col gap-[42px] items-center justify-start w-full">
                <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[5px] w-[6%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[93px]">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                        size="txtHelvetica24"
                      >
                        <span className="text-gray-500 font-helvetica text-left font-normal">
                          Pages{" "}
                        </span>
                        <span className="text-black-900 font-helvetica text-left font-normal">
                          {" "}
                        </span>
                        <span className="text-gray-800 font-helvetica text-left text-xs font-normal">
                          / Reports
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="mt-0.5 text-gray-800 text-sm"
                      size="txtHelveticaBold14"
                    >
                      Reports
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row items-center justify-between mb-3 md:ml-[0] ml-[1130px] w-[22%] md:w-full">
                    <Input
                      name="inputwithaddons"
                      placeholder="Type here..."
                      value={inputwithaddonsvalue}
                      onChange={(e) => setInputwithaddonsvalue(e)}
                      className="p-0 placeholder:text-gray-500 sm:pr-5 text-left text-xs w-full"
                      wrapClassName="border border-gray-300 border-solid flex pr-[35px] rounded-lg"
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
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start shadow-bs w-1/2 md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="bg-gradient5  flex flex-col items-center justify-start w-full">
                              <div className="h-[167px] relative w-full">
                                <Img
                                  className="h-[167px] m-auto object-cover w-full"
                                  src="images/img_14577184552761.png"
                                  alt="14577184552761"
                                />
                                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                                  <div className="flex flex-col gap-[46px] items-center justify-start w-full">
                                    <div className="flex flex-row items-start justify-between w-full">
                                      <Button
                                        className="flex h-[50px] items-center justify-center mt-1 rounded-[12px] w-[50px]"
                                        color="white_A700"
                                        size="sm"
                                        variant="fill"
                                      >
                                        <Img
                                          className="h-[25px]"
                                          src="images/img_ioniconppersondefault_blue_gray_800_02.svg"
                                          alt="ioniconppersond"
                                        />
                                      </Button>
                                      <div className="flex flex-col h-5 items-center justify-start rotate-[-90deg] w-5">
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_morevert_white_a700.svg"
                                          alt="morevert"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <Text
                                          className="text-base text-white-A700"
                                          size="txtHelveticaBold16WhiteA700"
                                        >
                                          1600
                                        </Text>
                                        <div className="flex flex-row items-center justify-between w-full">
                                          <Text
                                            className="text-gray-500 text-xs"
                                            size="txtHelveticaBold12"
                                          >
                                            Users Active
                                          </Text>
                                          <Text
                                            className="text-right text-white-A700 text-xs"
                                            size="txtHelveticaBold12WhiteA700"
                                          >
                                            +55%
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="bg-gradient5  flex flex-col items-center justify-start rounded-[15px] w-full">
                              <div className="h-[167px] relative w-full">
                                <Img
                                  className="h-[167px] m-auto object-cover rounded-[15px] w-full"
                                  src="images/img_14577184552761_167x380.png"
                                  alt="14577184552761"
                                />
                                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                                  <div className="flex flex-col gap-[46px] items-center justify-start w-full">
                                    <div className="flex flex-row items-start justify-between w-full">
                                      <Button
                                        className="flex h-[50px] items-center justify-center mt-1 rounded-[12px] w-[50px]"
                                        color="white_A700"
                                        size="sm"
                                        variant="fill"
                                      >
                                        <Img
                                          className="h-[25px]"
                                          src="images/img_ioniconrrocketsharp_blue_gray_800_02.svg"
                                          alt="ioniconrrockets"
                                        />
                                      </Button>
                                      <div className="flex flex-col h-5 items-center justify-start rotate-[-90deg] w-5">
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_morevert_white_a700.svg"
                                          alt="morevert"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <Text
                                          className="text-base text-white-A700"
                                          size="txtHelveticaBold16WhiteA700"
                                        >
                                          357
                                        </Text>
                                        <div className="flex flex-row items-center justify-between w-full">
                                          <Text
                                            className="text-gray-500 text-xs"
                                            size="txtHelveticaBold12"
                                          >
                                            Click Events
                                          </Text>
                                          <Text
                                            className="text-right text-white-A700 text-xs"
                                            size="txtHelveticaBold12WhiteA700"
                                          >
                                            +124%
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="bg-gradient5  flex flex-col items-center justify-start rounded-[15px] w-full">
                              <div className="h-[167px] relative w-full">
                                <Img
                                  className="h-[167px] m-auto object-cover rounded-[15px] w-full"
                                  src="images/img_14577184552761_1.png"
                                  alt="14577184552761"
                                />
                                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                                  <div className="flex flex-col gap-[46px] items-center justify-start w-full">
                                    <div className="flex flex-row items-start justify-between w-full">
                                      <Button
                                        className="flex h-[50px] items-center justify-center mt-1 rounded-[12px] w-[50px]"
                                        color="white_A700"
                                        size="sm"
                                        variant="fill"
                                      >
                                        <Img
                                          className="h-[25px]"
                                          src="images/img_cart_blue_gray_800_02.svg"
                                          alt="cart"
                                        />
                                      </Button>
                                      <div className="flex flex-col h-5 items-center justify-start rotate-[-90deg] w-5">
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_morevert_white_a700.svg"
                                          alt="morevert"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <Text
                                          className="text-base text-white-A700"
                                          size="txtHelveticaBold16WhiteA700"
                                        >
                                          2340
                                        </Text>
                                        <div className="flex flex-row items-center justify-between w-full">
                                          <Text
                                            className="text-gray-500 text-xs"
                                            size="txtHelveticaBold12"
                                          >
                                            Purchases
                                          </Text>
                                          <Text
                                            className="text-right text-white-A700 text-xs"
                                            size="txtHelveticaBold12WhiteA700"
                                          >
                                            +14%
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="bg-gradient5  flex flex-col items-center justify-start rounded-[15px] w-full">
                              <div className="h-[167px] relative w-full">
                                <Img
                                  className="h-[167px] m-auto object-cover rounded-[15px] w-full"
                                  src="images/img_14577184552761_1.png"
                                  alt="14577184552761"
                                />
                                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                                  <div className="flex flex-col gap-[46px] items-center justify-start w-full">
                                    <div className="flex flex-row items-start justify-between w-full">
                                      <Button
                                        className="flex h-[50px] items-center justify-center mt-1 rounded-[12px] w-[50px]"
                                        color="white_A700"
                                        size="sm"
                                        variant="fill"
                                      >
                                        <Img
                                          className="h-[25px]"
                                          src="images/img_ionicontthumbsupsharp.svg"
                                          alt="ionicontthumbsu"
                                        />
                                      </Button>
                                      <div className="flex flex-col h-5 items-center justify-start rotate-[-90deg] w-5">
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_morevert_white_a700.svg"
                                          alt="morevert"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <Text
                                          className="text-base text-white-A700"
                                          size="txtHelveticaBold16WhiteA700"
                                        >
                                          940
                                        </Text>
                                        <div className="flex flex-row items-center justify-between w-full">
                                          <Text
                                            className="text-gray-500 text-xs"
                                            size="txtHelveticaBold12"
                                          >
                                            Likes
                                          </Text>
                                          <Text
                                            className="text-right text-white-A700 text-xs"
                                            size="txtHelveticaBold12WhiteA700"
                                          >
                                            +90%
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
                    <div
                      className="bg-cover bg-no-repeat md:h-[182px] sm:h-[298px] h-[357px] p-[21px] sm:px-5 relative w-1/2 md:w-full"
                      style={{
                        backgroundImage: "url('images/img_firstcard.svg')",
                      }}
                    >
                      <div className="absolute bottom-[9%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[95%]">
                        <div className="flex flex-col md:gap-10 gap-[69px] items-end justify-start w-full">
                          <List
                            className="flex flex-col gap-6 items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      Positive Reviews
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-right text-sm"
                                      size="txtHelveticaBold14Bluegray200"
                                    >
                                      80%
                                    </Text>
                                  </div>
                                  <div className="flex flex-col relative w-full">
                                    <Line className="bg-gray-300 h-[3px] mx-auto w-full" />
                                    <Line className="bg-gradient  h-[5px] mt-[-2px] w-[82%] z-[1]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-2 items-center justify-start w-full">
                                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      Neutral Reviews
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-right text-sm"
                                      size="txtHelveticaBold14Bluegray200"
                                    >
                                      17%
                                    </Text>
                                  </div>
                                  <div className="flex flex-col relative w-full">
                                    <Line className="bg-gray-300 h-[3px] mx-auto w-full" />
                                    <Line className="bg-gray-800 h-[5px] mt-[-2px] w-[15%] z-[1]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12"
                                    >
                                      Negative Reviews
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-right text-sm"
                                      size="txtHelveticaBold14Bluegray200"
                                    >
                                      3%
                                    </Text>
                                  </div>
                                  <div className="flex flex-col relative w-full">
                                    <Line className="bg-gray-300 h-[3px] mx-auto w-full" />
                                    <Line className="bg-red-600 h-[5px] mt-[-2px] w-[3%] z-[1]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                          <div className="bg-gradient5  flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg w-[134px]">
                            <div className="flex flex-col items-center justify-center w-auto">
                              <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <Text
                                    className="text-[10px] text-center text-white-A700 w-auto"
                                    size="txtHelveticaBold10"
                                  >
                                    VIEW ALL REVIEWS
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
                      <div className="absolute flex flex-col md:gap-10 gap-[236px] h-max inset-y-[0] items-start justify-start left-[6%] my-auto">
                        <Text
                          className="text-gray-800 text-lg"
                          size="txtHelveticaBold18"
                        >
                          Reviews
                        </Text>
                        <Text
                          className="leading-[150.00%] text-gray-500 text-sm w-full"
                          size="txtHelvetica14"
                        >
                          <span className="text-gray-500 font-helvetica text-left font-normal">
                            More than{" "}
                          </span>
                          <span className="text-gray-600 font-helvetica text-left font-bold">
                            1,500,000 developers
                          </span>
                          <span className="text-gray-500 font-helvetica text-left font-normal">
                            <> used Creative Tim&#39;s products and over </>
                          </span>
                          <span className="text-gray-600 font-helvetica text-left font-bold">
                            700,000 projects
                          </span>
                          <span className="text-gray-500 font-helvetica text-left font-normal">
                            {" "}
                            were created.
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[434px] items-center justify-end mt-6 p-[22px] sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_firstcard.svg')",
                    }}
                  >
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
                        <Text
                          className="text-[10px] text-gray-500"
                          size="txtHelveticaBold10Bluegray200"
                        >
                          NAME
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[427px] text-[10px] text-gray-500"
                          size="txtHelveticaBold10Bluegray200"
                        >
                          FUNCTION
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[201px] text-[10px] text-gray-500"
                          size="txtHelveticaBold10Bluegray200"
                        >
                          REVIEW
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[249px] text-[10px] text-gray-500"
                          size="txtHelveticaBold10Bluegray200"
                        >
                          EMAIL
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[228px] text-[10px] text-gray-500"
                          size="txtHelveticaBold10Bluegray200"
                        >
                          EMPLOYED
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[183px] text-[10px] text-center text-gray-500"
                          size="txtHelveticaBold10Bluegray200"
                        >
                          ID
                        </Text>
                      </div>
                      <Img
                        className="h-px mt-3.5"
                        src="images/img_line.svg"
                        alt="lines"
                      />
                      <List
                        className="flex flex-col gap-[11px] items-center mt-[11px] w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-between w-[11%] md:w-full">
                              <div className="bg-teal-400 flex flex-col h-10 items-center justify-start rounded-[12px] shadow-bs w-10">
                                <Img
                                  className="h-10 md:h-auto object-cover rounded-[12px] w-10"
                                  src="images/img_creditstounsplashcom_40x40.png"
                                  alt="creditstounspla"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-800 text-sm"
                                  size="txtHelveticaBold14"
                                >
                                  Esthera Jackson
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[291px]">
                              <Text
                                className="text-gray-600 text-sm"
                                size="txtHelveticaBold14Bluegray400"
                              >
                                Manager
                              </Text>
                            </div>
                            <DashboardScreenReportsRowellipseone className="flex flex-col items-center justify-start md:ml-[0] ml-[186px] w-[5%] md:w-full" />
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[164px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                esthera@simmmple.com
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[166px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                14/06/21
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[171px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                32124
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-px"
                            src="images/img_line.svg"
                            alt="line"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-between w-[9%] md:w-full">
                              <div className="bg-teal-400 flex flex-col h-10 items-center justify-start rounded-[12px] shadow-bs w-10">
                                <Img
                                  className="h-10 md:h-auto object-cover rounded-[12px] w-10"
                                  src="images/img_creditstounsplashcom_26.png"
                                  alt="creditstounspla"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-800 text-sm"
                                  size="txtHelveticaBold14"
                                >
                                  Alexa Liras
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[327px]">
                              <Text
                                className="text-gray-600 text-sm"
                                size="txtHelveticaBold14Bluegray400"
                              >
                                Programmer
                              </Text>
                            </div>
                            <DashboardScreenReportsRowellipseone className="flex flex-col items-center justify-start ml-40 md:ml-[0] w-[5%] md:w-full" />
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[170px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                alexa@simmmple.com
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[173px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                14/06/21
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[171px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                93041
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-px"
                            src="images/img_line.svg"
                            alt="line"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-between w-[11%] md:w-full">
                              <div className="bg-teal-400 flex flex-col h-10 items-center justify-start rounded-[12px] shadow-bs w-10">
                                <Img
                                  className="h-10 md:h-auto object-cover rounded-[12px] w-10"
                                  src="images/img_creditstounsplashcom_27.png"
                                  alt="creditstounspla"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-800 text-sm"
                                  size="txtHelveticaBold14"
                                >
                                  Laurent Michael
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[295px]">
                              <Text
                                className="text-gray-600 text-sm"
                                size="txtHelveticaBold14Bluegray400"
                              >
                                Executive
                              </Text>
                            </div>
                            <DashboardScreenReportsRowellipseone className="flex flex-col items-center justify-start md:ml-[0] ml-[178px] w-[5%] md:w-full" />
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[170px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                laurent@simmmple.com
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[168px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                14/06/21
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[171px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                84120
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-px"
                            src="images/img_line.svg"
                            alt="line"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-between w-[10%] md:w-full">
                              <div className="bg-teal-400 flex flex-col h-10 items-center justify-start rounded-[12px] shadow-bs w-10">
                                <Img
                                  className="h-10 md:h-auto object-cover rounded-[12px] w-10"
                                  src="images/img_creditstounsplashcom_28.png"
                                  alt="creditstounspla"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-800 text-sm"
                                  size="txtHelveticaBold14"
                                >
                                  Freduardo Hill
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[307px]">
                              <Text
                                className="text-gray-600 text-sm"
                                size="txtHelveticaBold14Bluegray400"
                              >
                                Manager
                              </Text>
                            </div>
                            <DashboardScreenReportsRowellipseone className="flex flex-col items-center justify-start md:ml-[0] ml-[186px] w-[5%] md:w-full" />
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[157px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                freduardo@simmmple.com
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start ml-40 md:ml-[0]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                14/06/21
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[171px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                42155
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-px"
                            src="images/img_line.svg"
                            alt="line"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-between w-[11%] md:w-full">
                              <div className="bg-teal-400 flex flex-col h-10 items-center justify-start rounded-[12px] shadow-bs w-10">
                                <Img
                                  className="h-10 md:h-auto object-cover rounded-[12px] w-10"
                                  src="images/img_creditstounsplashcom_29.png"
                                  alt="creditstounspla"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-800 text-sm"
                                  size="txtHelveticaBold14"
                                >
                                  Daniel Thomas
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[302px]">
                              <Text
                                className="text-gray-600 text-sm"
                                size="txtHelveticaBold14Bluegray400"
                              >
                                Programmer
                              </Text>
                            </div>
                            <DashboardScreenReportsRowellipseone className="flex flex-col items-center justify-start ml-40 md:ml-[0] w-[6%] md:w-full" />
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[162px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                daniel@simmmple.com
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[171px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                14/06/21
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[171px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                14244
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-px"
                            src="images/img_line.svg"
                            alt="line"
                          />
                        </div>
                        <div className="flex md:flex-1 flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <div className="flex md:flex-1 flex-row gap-[15px] items-center justify-between w-[9%] md:w-full">
                              <div className="bg-teal-400 flex flex-col h-10 items-center justify-start rounded-[12px] shadow-bs w-10">
                                <Img
                                  className="h-10 md:h-auto object-cover rounded-[12px] w-10"
                                  src="images/img_creditstounsplashcom_30.png"
                                  alt="creditstounspla"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-800 text-sm"
                                  size="txtHelveticaBold14"
                                >
                                  Mark Wilson
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start ml-80 md:ml-[0]">
                              <Text
                                className="text-gray-600 text-sm"
                                size="txtHelveticaBold14Bluegray400"
                              >
                                Designer
                              </Text>
                            </div>
                            <DashboardScreenReportsRowellipseone className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[184px] w-[5%] md:w-full" />
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[172px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                mark@simmmple.com
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[174px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                14/06/21
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[171px]">
                              <Text
                                className="text-center text-gray-600 text-sm"
                                size="txtHelvetica14Bluegray400"
                              >
                                78226
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[102px] w-[99%] md:w-full">
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

export default DashboardScreenReportsPage;
