import React from "react";

import { Img, Text } from "components";

type DashboardScreenAlertsAlertonelinel1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titlehereOne" | "descriptionhereThree"
> &
  Partial<{ titlehereOne: string; descriptionhereThree: string }>;

const DashboardScreenAlertsAlertonelinel1: React.FC<
  DashboardScreenAlertsAlertonelinel1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-orange-200 flex flex-col items-start justify-start p-2 rounded-lg w-full">
          <div className="bg-orange-200 flex flex-row sm:gap-10 items-start justify-between w-full">
            <div className="bg-orange-200 flex flex-col items-start justify-start p-2 w-auto">
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
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtHelvetica16Black900"
                >
                  {props?.descriptionhereThree}
                </Text>
              </div>
            </div>
            <Img
              className="h-6 w-6"
              src="images/img_close_black_900.svg"
              alt="close_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertonelinel1.defaultProps = {
  titlehereOne: "Title Here",
  descriptionhereThree: "Description Here",
};

export default DashboardScreenAlertsAlertonelinel1;
