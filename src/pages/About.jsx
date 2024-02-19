function About() {
    return (
      <section className="text-center mt-16">
        <h1 className="uppercase text-2xl font-bold mb-8"> About Us</h1>
  
        <div className="flex justify-center items-center flex-wrap">
          {/* Card for Leonardo Oliveira */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gradient-to-b from-blue-300 to-light-blue-400 p-8 flex flex-col items-center">
            <img
              src="https://placekitten.com/300/200"
              alt="Leonardo Oliveira"
              className="w-48 h-48 object-cover rounded-full mb-4"
            />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-grey-800">Leonardo Oliveira</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula aliquet
                elit, in ultrices est fermentum eu.
              </p>
            </div>
            <div className="px-6 py-4">
              <a
                href="https://github.com/leonardo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-bold"
              >
                GitHub
              </a>
            </div>
          </div>
  
          {/* Card for André Rodrigues */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gradient-to-b from-blue-300 to-light-blue-400 p-8 flex flex-col items-center">
            <img
              src="https://placekitten.com/300/200"
              alt="André Rodrigues"
              className="w-48 h-48 object-cover rounded-full mb-4"
            />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-grey-800">André Rodrigues</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula aliquet
                elit, in ultrices est fermentum eu.
              </p>
            </div>
            <div className="px-6 py-4">
              <a
                href="https://github.com/andre"
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
  