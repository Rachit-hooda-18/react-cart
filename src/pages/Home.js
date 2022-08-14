import Products from "../components/Products";

const Home = () => {
  return (
    <>
    <div className="hero py-16">
      <div className="container mx-auto flex items-center justify-between pl-24">
        <div className="w-1/2 py-0.">
          <h6 className="text-lg">
            <em>Are you hungry?</em>
          </h6>
          <h1 className="text-3xl md:text-6xl font-bold">Don't wait !</h1>
          <p className="py-3 text-gray-600">Lorem Ipsum is simply dummy text of the printing and,<br></br> typesetting industry. Lorem Ipsum has been the industry's standard <br></br>dummy text ever since the 1500s</p>
          <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">
            Order Now
          </button>
        </div>
        <div className="w-1/2">
          <img className="w-4/5" src="/images/pizza.png" alt="pizza" />
        </div>
      </div>
    </div>
    <div className="pb-24">
        <Products />
    </div>
    </>
  );
};

export default Home;
