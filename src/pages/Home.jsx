import Cart from "../Components/Cart";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div className="max-h-full min-w-96 ">
      <div>
      <Hero></Hero>
      </div>
      <div>
        <h1 className=" text-center font-semibold text-3xl mx-auto ">Features Products</h1>
        <div className="flex justify-between">
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
