import { FC } from "react";

interface IProps {
  headered: string;
  discrip: string;
  quarterNum: string;
  haveBorder?: boolean;
}

const QuarterBox: FC<IProps> = ({
  headered,
  discrip,
  quarterNum,
  haveBorder = true,
}) => {
  return (
    <>
      {/* Boxes */}
      <div
        className={`flex-1 flex flex-col justify-center rounded-md px-10 py-16 relative -z-10 ${
          haveBorder && "border"
        } border-gray-200`}
      >
        <h4 className="font-bold text-lg">{headered}</h4>
        <p className="mt-2 text-gray-700">{discrip}</p>
        <span className="absolute top-6 text-gray-200 right-14 text-9xl -z-10 font-bold hover:translate-y-3 hover:duration-300">
          {quarterNum}
        </span>
      </div>
    </>
  );
};

export default QuarterBox;