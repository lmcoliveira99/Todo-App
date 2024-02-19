function About() {
    return (
      <section className="text-center mt-16">
        <h1 className="uppercase text-2xl font-bold mb-8"> About Us</h1>
  
        <div className="flex justify-center items-center flex-wrap">
          
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gradient-to-b from-blue-300 to-light-blue-400 p-8 flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/116581678?v=4"
              alt="Leonardo Oliveira"
              className="w-48 h-48 object-cover rounded-full mb-4"
            />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-grey-800">Leonardo Oliveira</div>
              <p className="text-gray-700 text-base">
                Full-Stack Web Developer
              </p>
            </div>
            <div className="px-6 py-4">
              <a
                href="https://github.com/lmcoliveira99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-bold"
              >
                GitHub
              </a>
            </div>
          </div>
  
          
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gradient-to-b from-blue-300 to-light-blue-400 p-8 flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/155987682?v=4"
              alt="André Rodrigues"
              className="w-48 h-48 object-cover rounded-full mb-4"
            />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-grey-800">André Rodrigues</div>
              <p className="text-gray-700 text-base">
              Full-Stack Web Developer
              </p>
            </div>
            <div className="px-6 py-4">
              <a
                href="https://github.com/Andr3L4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-bold"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  