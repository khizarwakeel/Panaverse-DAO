import QuartersDetail from "@/components/quartersDetail/quartersDetail";

interface IProps {
  category: string;
}

const Page = ({ params }: { params: IProps }) => {
  return <QuartersDetail params={params} />;
};

export default Page;