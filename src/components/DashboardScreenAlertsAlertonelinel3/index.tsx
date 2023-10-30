import React from "react";

import { Img, Text } from "components";

type DashboardScreenAlertsAlertonelinel3Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titlehereThree" | "descriptionhereSeven"
> &
  Partial<{ titlehereThree: string; descriptionhereSeven: string }>;

const DashboardScreenAlertsAlertonelinel3: React.FC<
  DashboardScreenAlertsAlertonelinel3Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-green-200 flex flex-col items-start justify-start p-2 rounded-lg w-full">
          <div className="bg-green-200 flex flex-row sm:gap-10 items-start justify-between w-full">
            <div className="bg-green-200 flex flex-col items-start justify-start p-2 w-auto">
              <div className="flex flex-row gap-3 items-center justify-start">
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <Img
                    className="h-6 w-6"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtHelveticaBold16Black900"
                >
                  {props?.titlehereThree}
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtHelvetica16Black900"
                >
                  {props?.descriptionhereSeven}
                </Text>
              </div>
            </div>
            <Img
              className="h-6 w-6"
              src="images/img_close_black_900.svg"
              alt="close_Three"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertonelinel3.defaultProps = {
  titlehereThree: "Title Here",
  descriptionhereSeven: "Description Here",
};

export default DashboardScreenAlertsAlertonelinel3;
