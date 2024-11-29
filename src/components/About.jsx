import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { workers } from '../constants';
import Section from './Section';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % workers.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? workers.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section crosses id="about" className="min-h-screen bg-n-8 text-white p-8 flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-4 text-center">
        About Us
      </h1>

      <p className="text-lg text-center max-w-2xl mb-12 text-gray-300">
        We are a dedicated team of professionals committed to innovation, 
        creativity, and delivering exceptional results. Our passion drives 
        us to push boundaries and create meaningful solutions.
      </p>

      <div className="relative w-full max-w-4xl flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-white/20 hover:bg-white/40 rounded-full p-2 m-2"
        >
          <ChevronLeft color="white" size={32} />
        </button>

        <div className="w-full max-w-md">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 ease-in-out">
            <img
              src={workers[currentIndex].image}
              alt={workers[currentIndex].name}
              className="w-full h-96 object-cover"
            />

            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold">
                {workers[currentIndex].name}
              </h2>
              <p className="text-gray-400 mt-2">
                {workers[currentIndex].role}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white/20 hover:bg-white/40 rounded-full p-2 m-2"
        >
          <ChevronRight color="white" size={32} />
        </button>
      </div>

      <div className="flex space-x-2 mt-6">
        {workers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? 'bg-white'
                : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </Section>
  );
};

export default About;