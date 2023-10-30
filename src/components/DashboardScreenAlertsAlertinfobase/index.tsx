import React from "react";

import { Img, Text } from "components";

type DashboardScreenAlertsAlertinfobaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "title" | "description"
> &
  Partial<{ userimage: string; title: string; description: string }>;

const DashboardScreenAlertsAlertinfobase: React.FC<
  DashboardScreenAlertsAlertinfobaseProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-start">
          <div className="flex flex-col h-6 items-center justify-start w-6">
            <Img
              className="h-6 w-6"
              alt="alerticonserror"
              src={props?.userimage}
            />
          </div>
          <Text
            className="text-base text-white-A700 w-auto"
            size="txtHelveticaBold16WhiteA700"
          >
            {props?.title}
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start">
          {!!props?.description ? (
            <Text
              className="text-base text-white-A700"
              size="txtHelvetica16WhiteA700"
            >
              {props?.description}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertinfobase.defaultProps = { title: "Title Here" };

export default DashboardScreenAlertsAlertinfobase;
