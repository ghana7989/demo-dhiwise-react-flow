import React from "react";

import { Button, Img, Text } from "components";

type DashboardScreenChartsRadarchartProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "traveltext"
  | "otherstext"
  | "foodtext"
  | "hereWillBeTheRadarChartFromApexchartsJs"
  | "securitytext"
  | "shoppingtext"
  | "grocerytext"
> &
  Partial<{
    traveltext: string;
    otherstext: string;
    foodtext: string;
    hereWillBeTheRadarChartFromApexchartsJs: string;
    securitytext: string;
    shoppingtext: string;
    grocerytext: string;
  }>;

const DashboardScreenChartsRadarchart: React.FC<
  DashboardScreenChartsRadarchartProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[385px] m-auto w-[385px] sm:w-full">
          <Img
            className="border-2 border-indigo-50_02 border-solid h-[385px] m-auto w-[385px]"
            src="images/img_shape1.svg"
            alt="shapeOne"
          />
          <div className="absolute h-[308px] inset-[0] justify-center m-auto w-[308px]">
            <div className="h-[308px] m-auto w-[308px]">
              <Img
                className="border-2 border-indigo-50_02 border-solid h-[308px] m-auto w-[308px]"
                src="images/img_shape2.svg"
                alt="shapeTwo"
              />
              <div className="absolute h-[231px] inset-[0] justify-center m-auto w-[231px]">
                <Img
                  className="border-2 border-indigo-50_02 border-solid h-[231px] m-auto w-[231px]"
                  src="images/img_shape3.svg"
                  alt="shapeThree"
                />
                <div className="absolute h-[154px] inset-[0] justify-center m-auto w-[154px]">
                  <Img
                    className="border-2 border-indigo-50_02 border-solid h-[154px] m-auto w-[154px]"
                    src="images/img_shape4.svg"
                    alt="shapeFour"
                  />
                  <Img
                    className="absolute border-2 border-indigo-50_02 border-solid h-[77px] inset-[0] justify-center m-auto w-[77px]"
                    src="images/img_shape5.svg"
                    alt="shapeFive"
                  />
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[229px] inset-y-[0] left-[6%] my-auto object-cover"
              src="images/img_vector_cyan_300.png"
              alt="vector"
            />
          </div>
        </div>
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col justify-start w-full">
            <Text
              className="md:ml-[0] ml-[264px] text-blue_gray-300 text-center text-xs tracking-[-0.24px]"
              size="txtDMSansRegular12"
            >
              {props?.traveltext}
            </Text>
            <div className="flex flex-row sm:gap-10 gap-[382px] items-center justify-start ml-5 md:ml-[0] mt-[93px] w-[87%] md:w-full">
              <Text
                className="text-blue_gray-300 text-right text-xs tracking-[-0.24px]"
                size="txtDMSansRegular12"
              >
                {props?.otherstext}
              </Text>
              <Text
                className="text-blue_gray-300 text-xs tracking-[-0.24px]"
                size="txtDMSansRegular12"
              >
                {props?.foodtext}
              </Text>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-bold font-helvetica min-w-[507px] sm:min-w-full mt-9 mx-auto rounded-[23px] text-[18.4px] text-center"
              color="gray_900_03"
              size="lg"
              variant="fill"
            >
              {props?.hereWillBeTheRadarChartFromApexchartsJs}
            </Button>
            <div className="flex flex-row sm:gap-10 items-center justify-between mt-[38px] w-full">
              <Text
                className="text-blue_gray-300 text-right text-xs tracking-[-0.24px]"
                size="txtDMSansRegular12"
              >
                {props?.securitytext}
              </Text>
              <Text
                className="text-blue_gray-300 text-xs tracking-[-0.24px]"
                size="txtDMSansRegular12"
              >
                {props?.shoppingtext}
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[247px] mt-[86px] text-blue_gray-300 text-center text-xs tracking-[-0.24px]"
              size="txtDMSansRegular12"
            >
              {props?.grocerytext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardScreenChartsRadarchart.defaultProps = {
  traveltext: "Travel",
  otherstext: "Others",
  foodtext: "Food",
  securitytext: "Security",
  shoppingtext: "Shopping",
  grocerytext: "Grocery",
};

export default DashboardScreenChartsRadarchart;
