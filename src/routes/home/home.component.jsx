import CategoriesContainer from "../../components/categories-container/categories-container.component";

const Home = (props) => {
  // eslint-disable-next-line react/prop-types
  const { categories } = props;

  return <CategoriesContainer categories={categories} />;
};

export default Home;
