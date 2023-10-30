import React from "react";

import { Img, Text } from "components";

type DashboardScreenAlertsAlertmultiline1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titlehereOne" | "descriptionhereThree"
> &
  Partial<{ titlehereOne: string; descriptionhereThree: string }>;

const DashboardScreenAlertsAlertmultiline1: React.FC<
  DashboardScreenAlertsAlertmultiline1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gradient2  flex flex-row gap-[236px] items-start justify-start p-2 rounded-lg w-auto md:w-full">
          <div className="flex flex-col gap-0.5 items-start justify-start p-2">
            <div className="flex flex-row gap-3 items-center justify-start">
              <div className="flex flex-col h-6 items-center justify-start w-6">
                <Img
                  className="h-6 w-6"
                  src="images/img_ioniconwwarningdefault_white_a700.svg"
                  alt="ioniconwwarning"
                />
              </div>
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtHelveticaBold16WhiteA700"
              >
                {props?.titlehereOne}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-base text-white-A700"
                size="txtHelvetica16WhiteA700"
              >
                {props?.descriptionhereThree}
              </Text>
            </div>
          </div>
          <Img
            className="h-full w-6"
            src="images/img_close_white_a700.svg"
            alt="close_One"
          />
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertmultiline1.defaultProps = {
  titlehereOne: "Title Here",
  descriptionhereThree: "Description Here",
};

export default DashboardScreenAlertsAlertmultiline1;
