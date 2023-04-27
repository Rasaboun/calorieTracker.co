export const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 flex justify-center items-center text-green-700 my-4">
      <div className="backdrop-blur-md bg-white/50 flex flex-row p-3 rounded-3xl shadow-2xl shadow-sky-950/40 text-xl font-semibold w-fit">
        <a href="https://www.rasaboun.me" className="font-semibold">
          Home
        </a>
        <div className="ml-6 flex flex-row space-x-3 md:space-x-8 ">
          <a href="https://www.rasaboun.me/Portfolio">Calculator</a>
          <a className="text-teal-700" href="https://www.rasaboun.me/">Rasaboun.me</a>
        </div>
      </div>
    </nav>
  );
};
