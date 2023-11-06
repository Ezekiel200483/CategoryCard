import { categoryData } from "../data/categoryData";
import  SingleCard from "../components/SingleCard";

const Category = () => {
  return (
    <div className="card-container">
      {categoryData.map((item) => {
        const { title, img } = item;
        return <SingleCard title={title} img={img} />;
      })}
      
    </div>
  );
};
export default Category;
