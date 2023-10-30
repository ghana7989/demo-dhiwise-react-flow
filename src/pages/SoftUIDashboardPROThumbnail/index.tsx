import React from "react";

import { Img } from "components";

const SoftUIDashboardPROThumbnailPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-end mx-auto p-[61px] md:px-10 sm:px-5 w-full">
        <Img
          className="h-[1207px] md:h-auto md:ml-[0] ml-[168px] object-cover rounded-[30px] w-[79%]"
          src="images/img_optsdpthumbnail.png"
          alt="optsdpthumbnail"
        />
      </div>
    </>
  );
};

export default SoftUIDashboardPROThumbnailPage;
