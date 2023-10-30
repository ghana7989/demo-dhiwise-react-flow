import React from "react";

import { Img, Text } from "components";

type DashboardScreenAlertsAlertmultiline5Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titlehereOne" | "descriptionhereThree"
> &
  Partial<{ titlehereOne: string; descriptionhereThree: string }>;

const DashboardScreenAlertsAlertmultiline5: React.FC<
  DashboardScreenAlertsAlertmultiline5Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-orange-200 flex flex-row gap-[236px] items-start justify-start p-2 rounded-lg w-auto md:w-full">
          <div className="bg-orange-200 flex flex-col gap-0.5 items-start justify-start p-2">
            <div className="flex flex-row gap-3 items-center justify-start">
              <div className="flex flex-col h-6 items-center justify-start w-6">
                <Img
                  className="h-6 w-6"
                  src="images/img_ioniconwwarningdefault_deep_orange_400.svg"
                  alt="ioniconwwarning"
                />
              </div>
              <Text
                className="text-base text-black-900 w-auto"
                size="txtHelveticaBold16Black900"
              >
                {props?.titlehereOne}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-base text-black-900"
                size="txtHelvetica16Black900"
              >
                {props?.descriptionhereThree}
              </Text>
            </div>
          </div>
          <Img
            className="h-full w-6"
            src="images/img_close_black_900.svg"
            alt="close_One"
          />
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertmultiline5.defaultProps = {
  titlehereOne: "Title Here",
  descriptionhereThree: "Description Here",
};

export default DashboardScreenAlertsAlertmultiline5;
