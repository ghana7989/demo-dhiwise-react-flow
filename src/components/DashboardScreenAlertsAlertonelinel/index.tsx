import React from "react";

import { Img, Text } from "components";

type DashboardScreenAlertsAlertonelinelProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "title" | "description"
> &
  Partial<{ title: string; description: string }>;

const DashboardScreenAlertsAlertonelinel: React.FC<
  DashboardScreenAlertsAlertonelinelProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-red-200 flex flex-col items-start justify-start p-2 rounded-lg w-full">
          <div className="bg-red-200 flex flex-row sm:gap-10 items-start justify-between w-full">
            <div className="bg-red-200 flex flex-col items-start justify-start p-2 w-auto">
              <div className="flex flex-row gap-3 items-center justify-start">
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <Img
                    className="h-6 w-6"
                    src="images/img_alerticonserror_red_800.svg"
                    alt="alerticonserror"
                  />
                </div>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtHelveticaBold16Black900"
                >
                  {props?.title}
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtHelvetica16Black900"
                >
                  {props?.description}
                </Text>
              </div>
            </div>
            <Img
              className="h-6 w-6"
              src="images/img_close_black_900.svg"
              alt="close"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertonelinel.defaultProps = {
  title: "Title Here",
  description: "Description Here",
};

export default DashboardScreenAlertsAlertonelinel;
