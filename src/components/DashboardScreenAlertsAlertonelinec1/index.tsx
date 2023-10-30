import React from "react";

import { Img, Text } from "components";

type DashboardScreenAlertsAlertonelinec1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "title" | "description"
> &
  Partial<{ title: string; description: string }>;

const DashboardScreenAlertsAlertonelinec1: React.FC<
  DashboardScreenAlertsAlertonelinec1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-orange-200 flex flex-col items-start justify-start px-3 py-2 rounded-lg w-auto md:w-full">
          <div className="bg-orange-200 flex flex-row sm:gap-10 items-center justify-between md:pl-10 sm:pl-5 pl-[226px] w-full">
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
              alt="close_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertonelinec1.defaultProps = {
  title: "Title Here",
  description: "Description Here",
};

export default DashboardScreenAlertsAlertonelinec1;
