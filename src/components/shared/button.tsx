interface ButtonProps {
  content: string;
}

const Button = ({ content }: ButtonProps) => {
  return (
    <>
      <button className="bg-[#00616c] text-white outline-none rounded-full px-5 py-2 md:px-7 md:py-3 active:scale-95 hover:shadow-xl hover:scale-105 duration-300">
        {content}
      </button>
    </>
  );
};

export default Button;