import React from "react";

import { Img, Text } from "components";

type DashboardScreenAlertsAlertmultiline6Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titlehereTwo" | "descriptionhereFive"
> &
  Partial<{ titlehereTwo: string; descriptionhereFive: string }>;

const DashboardScreenAlertsAlertmultiline6: React.FC<
  DashboardScreenAlertsAlertmultiline6Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-light_blue-50 flex flex-row gap-[236px] items-start justify-start p-2 rounded-lg w-auto md:w-full">
          <div className="bg-light_blue-50 flex flex-col gap-0.5 items-start justify-start p-2">
            <div className="flex flex-row gap-3 items-center justify-start">
              <div className="flex flex-col h-6 items-center justify-start w-6">
                <Img
                  className="h-6 w-6"
                  src="images/img_ioniconiinformationcircle_blue_800.svg"
                  alt="ioniconiinforma"
                />
              </div>
              <Text
                className="text-base text-black-900 w-auto"
                size="txtHelveticaBold16Black900"
              >
                {props?.titlehereTwo}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-base text-black-900"
                size="txtHelvetica16Black900"
              >
                {props?.descriptionhereFive}
              </Text>
            </div>
          </div>
          <Img
            className="h-full w-6"
            src="images/img_close_black_900.svg"
            alt="close_Two"
          />
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertmultiline6.defaultProps = {
  titlehereTwo: "Title Here",
  descriptionhereFive: "Description Here",
};

export default DashboardScreenAlertsAlertmultiline6;
