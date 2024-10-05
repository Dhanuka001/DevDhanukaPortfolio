export default function Header() {
    return (
      <header className="flex justify-center gap-44 items-center py-4 px-8 bg-white">
        <div className="text-3xl font-bold">DevDhanuka<span className="text-4xl text-green-500">.</span></div>
        <nav>
          <ul className="flex space-x-8 font-semibold">
            {['Home', 'Works', 'About', 'Projects', 'Services'].map((item) => (
              <li 
                key={item} 
                className="text-black relative group"
              >
                <span className="">{item}</span>
                
                <span className="absolute left-0 bottom-0 w-0 h-1 rounded-xl bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>
        <button className="border-2 border-black text-black font-semibold px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
          Let’s chat
        </button>
      </header>
    );
  }
  