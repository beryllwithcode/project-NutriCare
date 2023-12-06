import React from "react";
import { Button, Textarea, Typography } from "@material-tailwind/react";

const DiscussionDetail = () => {
  return (
    <div
      className="relative flex px-10 gap-14 lg:px-24 py-14 text-nutricare-green"
      id="discussion"
    >
      <div className="lg:w-screen">
        <div className="flex justify-between items-center pb-4">
          <div className="w-40 lg:w-full">
            <Typography variant="h3">Discussion Title</Typography>
            <Typography variant="paragraph" className="mb-2">
              Discussion Description
            </Typography>
            <div className="flex gap-4 lg:gap-8">
              <Typography
                variant="paragraph"
                className="text-nutricare-green font-semibold"
              >
                by <span className="text-nutricare-orange">User</span>
              </Typography>
              <Typography
                variant="paragraph"
                className="text-nutricare-green font-semibold"
              >
                18 Nov
              </Typography>
              <Typography
                variant="paragraph"
                className="text-nutricare-green font-semibold"
              >
                99 Comments
              </Typography>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="w-100">
            <Textarea label="Comment" />
          </div>
          <Button className="bg-nutricare-green hover:bg-green-500 mt-2">
            Post Comments
          </Button>
        </div>
        <div>
          <div className="w-100 mb-4">
            <Typography variant="h4">99 Comments</Typography>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 lg:gap-8">
                <Typography
                  variant="paragraph"
                  className="text-nutricare-green font-semibold"
                >
                  <span className="text-nutricare-orange">User</span>
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-nutricare-green font-semibold"
                >
                  18 Nov
                </Typography>
              </div>
              <div>
                <Typography variant="paragraph">
                  Anim proident sunt et officia qui. Eu anim dolor Lorem in
                  laborum mollit voluptate. Esse deserunt do irure velit commodo
                  laborum elit sunt adipisicing ea aliquip. Et consectetur
                  ullamco laboris consequat commodo. Dolor eu laborum irure in
                  aute officia dolor excepteur aliquip.
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 lg:gap-8">
                <Typography
                  variant="paragraph"
                  className="text-nutricare-green font-semibold"
                >
                  <span className="text-nutricare-orange">User</span>
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-nutricare-green font-semibold"
                >
                  18 Nov
                </Typography>
              </div>
              <div>
                <Typography variant="paragraph">
                  Anim proident sunt et officia qui. Eu anim dolor Lorem in
                  laborum mollit voluptate. Esse deserunt do irure velit commodo
                  laborum elit sunt adipisicing ea aliquip. Et consectetur
                  ullamco laboris consequat commodo. Dolor eu laborum irure in
                  aute officia dolor excepteur aliquip.
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 lg:gap-8">
                <Typography
                  variant="paragraph"
                  className="text-nutricare-green font-semibold"
                >
                  <span className="text-nutricare-orange">User</span>
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-nutricare-green font-semibold"
                >
                  18 Nov
                </Typography>
              </div>
              <div>
                <Typography variant="paragraph">
                  Anim proident sunt et officia qui. Eu anim dolor Lorem in
                  laborum mollit voluptate. Esse deserunt do irure velit commodo
                  laborum elit sunt adipisicing ea aliquip. Et consectetur
                  ullamco laboris consequat commodo. Dolor eu laborum irure in
                  aute officia dolor excepteur aliquip.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionDetail;
