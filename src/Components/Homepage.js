import React, { useEffect, useRef, useState } from 'react';
import Video1 from '../Videos/Rolex-DeepConfiedence.mp4'
import Video2 from '../Videos/Video3.mp4'
import Video3 from '../Videos/Rolex-Submariner.mp4'

const ProgressIndicator = ({ totalSections, activeSection, scrollToSection }) => {
  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-50">
      {Array.from({ length: totalSections }).map((_, index) => (
        <div
          key={index}
          className="relative group cursor-pointer flex justify-center items-center"
          onClick={() => scrollToSection(index)}
        >
          {/* Dynamic shape: circle or elongated line */}
          <div
            className={`transition-all duration-300 
              ${index === activeSection
                ? 'w-[1px] h-5 bg-[#CCA355]' // Elongated line for active section
                : 'w-1 h-1 bg-white/50 group-hover:bg-white rounded-full' // Circle for inactive sections
              }`}
          />
          {/* Section label that appears on hover */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="whitespace-nowrap text-white text-sm bg-black/50 px-2 py-1 rounded">
              Section {index + 1}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};



// VideoSection component remains the same
const VideoSection = ({ videoUrl, heading, watchType, isVisible }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(err => console.log("Autoplay prevented:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div className="h-screen relative snap-center font-helvetica">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          muted
          loop
          preload="metadata"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="flex flex-col justify-center h-full max-w-3xl mx-auto px-8 text-white text-center">
        <p className="text-xs tracking-wide">{watchType}</p>
          <h2 className="text-5xl font-bold mb-4 tracking-wider">{heading}</h2>
          <button className="inline-flex text-xxs items-center font-bold justify-center space-x-2 px-4 py-2 bg-gray-500/50 text-white rounded-full hover:bg-gray-500/70 transition duration-300 w-fit mx-auto">
            <span>Learn More</span>
            <span>&gt;</span>
          </button>
        </div>
      </div>


    </div>
  );
};

// Enhanced main container component
const VideoSections = () => {
  const [visibleSection, setVisibleSection] = useState(0);
  const sectionRefs = useRef([]);

  const videos = [
    {
      id: 1,
      videoUrl: Video1,
      watchType: "Oyster-Perpetual",
      heading: "DAY-DATE 40",
    },
    {
      id: 2,
      videoUrl: Video2,
      watchType: "Oyster-Perpetual",
      heading: "COSMOGRAPH DAYTONA",
    },
    {
      id: 3,
      videoUrl: Video3,
      watchType: "Oyster-Perpetual",
      heading: "DATEJUST",

    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.75,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          setVisibleSection(index);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Handle manual navigation
  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Progress Indicator */}
      <ProgressIndicator
        totalSections={videos.length}
        activeSection={visibleSection}
        scrollToSection={scrollToSection}
      />

      {/* Video Sections */}
      {videos.map((video, index) => (
        <div
          key={video.id}
          ref={el => sectionRefs.current[index] = el}
          onClick={() => scrollToSection(index + 1)} // Optional: scroll to next section on click
        >
          <VideoSection
            {...video}
            isVisible={index === visibleSection}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoSections;