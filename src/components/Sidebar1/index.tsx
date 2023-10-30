import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

type Sidebar1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;
type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Sidebar1: React.FC<Sidebar1Props> = (props) => {
  const sideBarMenu: SideBarMenuType = [
    { label: "Kanban" },
    { label: "Wizard" },
    { label: "DataTables" },
    { label: "Calendar" },
    { label: "Analytics" },
  ];

  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-row gap-3 items-start justify-start mb-[1012px] ml-3.5 mr-[29px] w-[82%]">
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
        <Line className="bg-gradient7  h-px mb-[979px] mr-[3px] mt-[54px] w-[99%]" />
        <Menu
          menuItemStyles={{
            button: {
              padding: "14px 14px 14px 190px",
              width: "100%",
              fontFamily: "Helvetica",
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
          className="flex flex-col items-center justify-start mb-[300px] mt-[57px] pl-[7px] pr-2.5 pt-5 w-[93%]"
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
                          <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
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
        <div className="md:h-[1034px] h-[169px] ml-[18px] mt-[865px] relative w-[93%]">
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
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
