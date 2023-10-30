import React from "react";

import { Img, Text } from "components";

type DashboardScreenAlertsAlertmultiline3Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titlehereThree" | "descriptionhereSeven"
> &
  Partial<{ titlehereThree: string; descriptionhereSeven: string }>;

const DashboardScreenAlertsAlertmultiline3: React.FC<
  DashboardScreenAlertsAlertmultiline3Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gradient6  flex flex-row gap-[236px] items-start justify-start p-2 rounded-lg w-auto md:w-full">
          <div className="flex flex-col gap-0.5 items-start justify-start p-2">
            <div className="flex flex-row gap-3 items-center justify-start">
              <div className="flex flex-col h-6 items-center justify-start w-6">
                <Img
                  className="h-6 w-6"
                  src="images/img_checkmark_white_a700.svg"
                  alt="checkmark"
                />
              </div>
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtHelveticaBold16WhiteA700"
              >
                {props?.titlehereThree}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-base text-white-A700"
                size="txtHelvetica16WhiteA700"
              >
                {props?.descriptionhereSeven}
              </Text>
            </div>
          </div>
          <Img
            className="h-full w-6"
            src="images/img_close_white_a700.svg"
            alt="close_Three"
          />
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertmultiline3.defaultProps = {
  titlehereThree: "Title Here",
  descriptionhereSeven: "Description Here",
};

export default DashboardScreenAlertsAlertmultiline3;
