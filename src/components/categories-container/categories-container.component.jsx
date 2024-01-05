import "./categories-container.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoriesContainer = (props) => {
  // eslint-disable-next-line react/prop-types
  const { categories } = props;

  return (
    <div className="categories-container">
      {
        // eslint-disable-next-line react/prop-types
        categories.map(({ id, title, imageUrl }) => {
          return <CategoryItem key={id} title={title} imageUrl={imageUrl} />;
        })
      }
    </div>
  );
};

export default CategoriesContainer;
