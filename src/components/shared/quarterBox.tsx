import { FC } from "react";

interface IProps {
  header: string;
  disc: string;
  quarterNo: string;
}

const QuarterBox: FC<IProps> = ({ header, disc, quarterNo }) => {
  return (
    <div>
      {/* Boxes */}
      <div className="my-20 flex lg:flex-row flex-col items-stretch gap-5">
        <div className="border border-gray-200 flex-1 flex flex-col justify-center rounded-md px-10 py-16 relative -z-10">
          <h4 className="font-bold text-lg">{header}</h4>
          <p className="mt-2 text-gray-700">{disc}</p>
          <span className="absolute top-6 text-gray-200 right-14 text-9xl -z-10 font-bold hover:translate-y-3 hover:duration-300">
            {quarterNo}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuarterBox;