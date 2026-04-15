import CallImg from "@/assets/call.png";
import TextImg from "@/assets/text.png";
import VideoImg from "@/assets/video.png";
import Image from "next/image";
import { FaHistory } from "react-icons/fa";

const FriendDetailsBottom = () => {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full mt-10 shadow-lg">
      <div className="hidden md:block md:col-span-2"></div>

      <div className="md:col-span-3 flex flex-col gap-4 w-full">
        <div className="card  w-full">
          <div className="card-body">
            {" "}
            <div className="flex justify-between items-center">
              <h2 className="text-[#244D3F] font-semibold text-[20px]">
                Recent Interactions
              </h2>
              <h2 className="flex gap-2 items-center text-[20px] text-[#244D3F] font-semibold">
                <FaHistory />
                Full History
              </h2>
            </div>
          </div>
        </div>

        <div className="card  w-full">
          <div className="card-body">
            <div className="flex justify-between items-center shadow-sm px-3 px-3  pb-3">
              <div className="flex gap-3 items-center ">
                <Image src={CallImg} alt="Call_Img" width={50} height={50} />
                <div>
                  <h2 className="font-medium text-[#1F2937] text-[20px]">
                    Text
                  </h2>
                  <p className="text-[#64748B]">Asked for career advice</p>
                </div>
              </div>
              <h2 className="text-[#64748B]">{date}</h2>
            </div>
          </div>
        </div>

        <div className="card  w-full">
          <div className="card-body">
            <div className="flex justify-between items-center shadow-sm px-3  pb-3">
              <div className="flex gap-3 items-center ">
                <Image src={TextImg} alt="Call_Img" width={50} height={50} />
                <div>
                  <h2 className="font-medium text-[#1F2937] text-[20px]">
                    Text
                  </h2>
                  <p className="text-[#64748B]">Asked for career advice</p>
                </div>
              </div>
              <h2 className="text-[#64748B]">{date}</h2>
            </div>
          </div>
        </div>

        <div className="card  w-full">
          <div className="card-body">
            <div className="flex justify-between items-center shadow-sm px-3  pb-3">
              <div className="flex gap-3 items-center ">
                <Image src={VideoImg} alt="Call_Img" width={50} height={50} />
                <div>
                  <h2 className="font-medium text-[#1F2937] text-[20px]">
                    Text
                  </h2>
                  <p className="text-[#64748B]">Industry conference meetup</p>
                </div>
              </div>
              <h2 className="text-[#64748B]">{date}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsBottom;
