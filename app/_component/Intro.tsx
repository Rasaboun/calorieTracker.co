function Intro() {
  return (
    <div className=" flex flex-col justify-center text-center items-center max-w-5xl mx-4 mt-32 space-y-4">
      <h1 className="font-extrabold bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text text-5xl "> 
        Welcome to our food calorie calculator !
      </h1>
        <h2 className="text-slate-600 text-xl font-medium max-w-3xl ">
          Are you trying to manage your weight, improve your nutrition, or
          simply become more aware of the calories in the foods you eat? Look no
          further! Our tool allows you to easily calculate the calorie content
          of your meals and snacks, so you can make informed decisions about
          your diet.
        </h2>
    </div>
  );
}

export default Intro;
