import React, { useState, useEffect, useRef } from 'react';
import box from "./assets/box.png";
import question from "./assets/question.png";
import default_image from "./assets/image.png";

function App() {
  const [selected, setselected] = useState();
  const [imagearray, setimagearray] = useState([]);
  const [image, setimage] = useState(null);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 150;  // Adjust the scroll distance as needed
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 150;  // Adjust the scroll distance as needed
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setimage(file);
    imagesetter(file);
  };

  const imagesetter = (file) => {
    console.log("image setter");
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setimagearray((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    console.log(imagearray);
  }, [imagearray]);

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center p-4 md:p-6 max-[1125px]:text-[13px] max-[920px]:text-[10px]">
      <div className="bg-gray-800 w-full md:w-[90%] lg:w-[80%] rounded-xl min-h-[80vh] py-4 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <div></div>
          <div className='flex flex-col justify-center h-full gap-4 p-4'>
            <div className='bg-[#464d55] h-[30vh] md:h-[35vh] w-full rounded-xl flex p-3'>
              <div className='sidebar flex flex-col gap-[60px] w-10'>
                <img src={question} alt="" className='h-6 w-6' />
                <img src={box} alt="" className='bg-[#686f78] h-6 w-6' />
              </div>
              <div className='w-full flex flex-col gap-2'>
                <nav className='w-full h-12 bg-black rounded-xl p-2 flex gap-3'>
                  <button
                    className={`text-white rounded-xl w-full hover:scale-105 ${selected === "about" ? "bg-slate-500" : "bg-slate-900"}`}
                    onClick={() => setselected("about")}
                  >
                    About Me
                  </button>
                  <button
                    className={`text-white rounded-xl w-full hover:scale-105 ${selected === "experience" ? "bg-slate-500" : "bg-slate-900"}`}
                    onClick={() => setselected("experience")}
                  >
                    Experiences
                  </button>
                  <button
                    className={`text-white rounded-xl w-full hover:scale-105 ${selected === "recommend" ? "bg-slate-500" : "bg-slate-900"}`}
                    onClick={() => setselected("recommend")}
                  >
                    Recommended
                  </button>
                </nav>
                <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent p-2 text-slate-200'>
                  {selected === "about" && (
                    <div>
                      Hello, I am Amit Pattanaik. I am from Bhubaneswar, Odisha. Currently pursuing BTech from Trident Academy Of Technology in Computer Science And Engineering.<br /><br />
                      I have experience of 2 years in Front End Development. My passion lies in software development, and I have developed a strong skill set in the MERN stack, Java, C, and Data Structures and Algorithms. Recently, I’ve been working on several projects to enhance my skills. For example, I created a task management app using the MERN stack and implemented authentication features.<br /><br />
                      I’ve also been working on an e-commerce project, where I tackled challenges related to payment processing with Stripe and integrated various functionalities to improve user experience. In addition to my technical skills, I am experienced in UI/UX design using React and Tailwind CSS, and I enjoy finding creative solutions to complex problems.<br />
                      I’m always eager to learn new technologies and take on new challenges that push me to grow as a developer. When I'm not coding, you might find me exploring new tech trends or working on personal projects that allow me to experiment with different tools and frameworks.
                    </div>
                  )}
                  {selected === "experience" && (
                    <div>
                      Accenture UK Developer and Technology Virtual Experience Program on ForageFebruary 2023<br /><br />
                      Virtual Intern<br /><br />

                      • Completed the Developer and Technology Job Simulation gaining end-to-end understanding of the Software Development
                      Lifecycle.<br /><br />
                      • Conducted in-depth research into emerging technology trends, particularly in the field of DevOps.<br /><br />
                      • Designed a custom algorithm using pseudocode and effectively communicated its logic by creating a detailed flow
                      diagram.<br /><br />
                      • Created and delivered a compelling PowerPoint presentation analyzing and comparing Waterfall and Agile
                      methodologies.<br /><br />
                    </div>
                  )}
                  {selected === "recommend" && (
                    <div>
                      <h2 className='text-xl font-bold'>Recommended Resources</h2>
                      <p>Here are some resources that I recommend for further Description of mine:</p>
                      <ul className="list-disc ml-5">
                        <li><a href="https://github.com/amitPattanaik987" className='text-blue-400' target="_blank" rel="noopener noreferrer">Git-Hub</a> - All Projects Created By Me</li>
                        <li><a href="https://e-commerce-client-flax-chi.vercel.app/" className='text-blue-400' target="_blank" rel="noopener noreferrer">E-Commerce</a> - A online Platform where we can can see the products and buy it.</li>
                        <li><a href="https://task-manager-frontend-steel-tau.vercel.app/" className='text-blue-400' target="_blank" rel="noopener noreferrer">Task Management App</a> Manage Your Task </li>
                        <li><a href="https://gem-ai-two.vercel.app/" className='text-blue-400' target="_blank" rel="noopener noreferrer">Gem Ai</a> - Ask Any Thing</li>
                        <li><a href="https://weather-app-beige-pi.vercel.app/" className='text-blue-400' target="_blank" rel="noopener noreferrer">Weather App</a> - A app where we can know the weather of any place</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <hr className='w-[80%] mx-auto' />

            <div className='bg-[#464d55] h-[30vh] md:h-[35vh] w-full rounded-xl flex p-2'>
              <div className='sidebar flex flex-col gap-[60px]'>
                <img src={question} alt="" className='h-6 w-6' />
                <img src={box} alt="" className='bg-[#686f78] h-6 w-6' />
              </div>
              <div className='w-full flex flex-col gap-3'>
                <nav className='flex justify-between h-12 px-4'>
                  <div>
                    <div className='text-white bg-slate-900 px-4 py-2 rounded-xl'>
                      Gallery
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <label htmlFor="file-input">
                      <div className='text-white bg-slate-500 hover:scale-105 px-2 py-2 rounded-full shadow-2xl max-[805px]:text-[8px] max-[810px]:px-1'>
                        + Add Image
                      </div>
                    </label>
                    <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
                    <button className='text-white bg-slate-900 hover:scale-105 w-10 h-10 rounded-full flex justify-center items-center' onClick={scrollLeft} >&larr;</button>
                    <button className='text-white bg-slate-900 hover:scale-105 w-10 h-10 rounded-full flex justify-center items-center' onClick={scrollRight}>&rarr;</button>
                  </div>
                </nav>
                  <div className='px-[20px] w-[100%] h-[70%] overflow-x-auto flex gap-3 scrollbar-none scroll-smooth' ref={scrollRef}>
                    <img src={default_image} alt="" className='w-[20%] h-[100%] md:w-[30%] md:h-[100%]' />
                    <img src={default_image} alt="" className='w-[20%] h-[100%] md:w-[30%] md:h-[100%]' />
                    <img src={default_image} alt="" className='w-[20%] h-[100%] md:w-[30%] md:h-[100%]' />
                    {
                      imagearray.map((item, index) => (
                        <img key={index} src={item} alt={`Uploaded ${index}`} className='w-[20%] h-[100%] md:w-[30%] md:h-[100%] rounded-xl' />
                      ))
                    }
                  </div>
              </div>
            </div>

            <hr className='w-[80%] mx-auto' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
