import React from "react";

import { Text } from "components";

type DashboardScreenCRMButtondefaultProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "buttontext"
> &
  Partial<{ buttontext: string }>;

const DashboardScreenCRMButtondefault: React.FC<
  DashboardScreenCRMButtondefaultProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-6 md:h-auto items-center justify-start px-3 rounded-sm w-auto md:w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtHelveticaBold20"
                >
                  {props?.buttontext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardScreenCRMButtondefault.defaultProps = { buttontext: "Read more" };

export default DashboardScreenCRMButtondefault;
