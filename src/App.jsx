import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navigation-bar/navigation-bar.component";
import Home from "./routes/home/home.component";
import LogIn from "./routes/logIn/logIn.component";
import Register from "./routes/register/register.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home categories={categories} />} />
        <Route path="signIn" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
