interface ButtonProps {
  content: string;
}

const ArrowButton = ({ content }: ButtonProps) => {
  return (
    <button className="border flex gap-2 group items-center hover:bg-slate-50 border-[#00616c] text-[#00616c] outline-none rounded-md md:px-6 md:py-2.5 px-3 py-2 font-semibold">
      {content}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 group-hover:translate-x-1 duration-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    </button>
  );
};

export default ArrowButton;