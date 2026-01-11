import "./App.css";

function App() {
  return (
    <>
      <div>
        <header className="flex items-center justify-between pt-4 pb-4 pr-10 pl-10 bg-black text-white">
          <div className="text-3xl">SB</div>
          <div>
            <ul className="flex">
              <li className="pr-4">Home</li>
              <li className="pr-4">Featured Projects</li>
              <li className="pr-4">About me</li>
              <li className="pr-4">Contact me</li>
              <li className="pr-4">View Resume</li>
            </ul>
          </div>
        </header>
        <div className="bg-black h-[60vh] flex flex-col justify-center">
          <h1 className="text-white text-center text-3xl">
            Hi, I am Peter Boluwatife Akintola
          </h1>
          <p className="text-white text-center">
            A seasoned Frontend Developer transforming ideas into stunning
            digital experiences. Let's create something amazing.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
