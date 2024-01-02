import { quartersData } from "../utils/data";

interface QuartersDetailProps {
  category: string;
}

const QuartersDetail = ({ params }: { params: QuartersDetailProps }) => {
  const filteredCategory = quartersData.find(
    (item) => params.category === item.category
  );

  if (!filteredCategory) {
    return <div>Category not found</div>;
  }

  const { category, title, courseDescription } = filteredCategory;

  return (
    <div>
      <p>{category}</p>
      <p>{title}</p>
      <p>{courseDescription}</p>
    </div>
  );
};

export default QuartersDetail;