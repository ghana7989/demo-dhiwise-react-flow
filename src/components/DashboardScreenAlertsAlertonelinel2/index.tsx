import React from "react";

import { Img, Text } from "components";

type DashboardScreenAlertsAlertonelinel2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titlehereTwo" | "descriptionhereFive"
> &
  Partial<{ titlehereTwo: string; descriptionhereFive: string }>;

const DashboardScreenAlertsAlertonelinel2: React.FC<
  DashboardScreenAlertsAlertonelinel2Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-light_blue-50 flex flex-col items-start justify-start p-2 rounded-lg w-full">
          <div className="bg-light_blue-50 flex flex-row sm:gap-10 items-start justify-between w-full">
            <div className="bg-light_blue-50 flex flex-col items-start justify-start p-2 w-auto">
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
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtHelvetica16Black900"
                >
                  {props?.descriptionhereFive}
                </Text>
              </div>
            </div>
            <Img
              className="h-6 w-6"
              src="images/img_close_black_900.svg"
              alt="close_Two"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertonelinel2.defaultProps = {
  titlehereTwo: "Title Here",
  descriptionhereFive: "Description Here",
};

export default DashboardScreenAlertsAlertonelinel2;
