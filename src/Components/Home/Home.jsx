/** @format */
import MainSlider from "../MainSlider/MainSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import { Helmet } from "react-helmet";
import Products from "../Products/Products";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="container m-auto">
        <MainSlider></MainSlider>
        <h2 className="my-2">Shop Popular Categories</h2>
        <CategoriesSlider></CategoriesSlider>
        <Products limit={true}></Products>
      </div>
    </>
  );
}
