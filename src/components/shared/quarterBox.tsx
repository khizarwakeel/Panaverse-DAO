import { FC } from "react";

interface IProps {
  headered: string;
  discrip: string;
  quarterNum: string;
  haveBorder?: boolean;
  paddingX?: boolean;
}

const QuarterBox: FC<IProps> = ({
  headered,
  discrip,
  quarterNum,
  haveBorder = false,
  paddingX = true,
}) => {
  return (
    <>
      {/* Boxes */}
      <div
        className={`flex-1 flex flex-col justify-center rounded-md md:px-10 ${
          paddingX && "px-2"
        } py-16 relative -z-10 ${
          haveBorder && "border border-gray-200"
        }`}
      >
        <h4 className="font-extrabold text-sm md:text-lg">{headered}</h4>
        <p className="mt-2 text-gray-700 text-xs md:text-base">{discrip}</p>
        <span className="absolute top-6 text-gray-200 opacity-60 right-14 text-9xl -z-10 font-bold">
          {quarterNum}
        </span>
      </div>
    </>
  );
};

export default QuarterBox;