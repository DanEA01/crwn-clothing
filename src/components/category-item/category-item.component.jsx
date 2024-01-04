import "./category-item.styles.scss";

const CategoryItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, imageUrl } = props;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
