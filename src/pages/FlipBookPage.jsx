import React, { useState, useEffect } from "react";

const FlipBookPage = () => { 
  const DecemberEdition = [
    "/assets/marchEdition/a.jpg",
    "/assets/marchEdition/b.jpg",
    "/assets/marchEdition/c.jpg",
    "/assets/marchEdition/d.jpg",
    "/assets/marchEdition/e.jpg",
    "/assets/marchEdition/f.jpg",
    "/assets/marchEdition/g.jpg",
    "/assets/marchEdition/h.jpg",
    "/assets/marchEdition/i.jpg",
    "/assets/marchEdition/j.jpg",
    "/assets/marchEdition/k.jpg",
    "/assets/marchEdition/l.jpg",
    "/assets/marchEdition/m.jpg",
    "/assets/marchEdition/n.jpg",
    "/assets/marchEdition/o.jpg",
    "/assets/marchEdition/p.jpg",
    "/assets/marchEdition/q.jpg",
    "/assets/marchEdition/r.jpg",
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1530);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1530);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextPage = () => {
    if (currentPage < DecemberEdition.length - 2) {
      setCurrentPage((prev) => prev + (isWideScreen ? 2 : 1));
    } else {
      setCurrentPage(0)
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - (isWideScreen ? 2 : 1));
    } else {
      setCurrentPage(0);
    }
  };

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-[80vh] mx-4 bg-pink-50 py-20">
      <div className="text-4xl font-semibold font-serif mt-[16px]">
        Winter Edition
      </div>
      <div className="flex items-center justify-between mt-10 mb-5 gap-8">
        <button
          onClick={prevPage}
          className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
        >
          &#8592;
        </button>
        <div className="flex space-x-8">
          <img
            src={DecemberEdition[currentPage]}
            alt={`Page ${currentPage}`}
            className={`aspect-[3/4] [1360px]:w-[600px] md:w-[667px] w-[500px] object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300
      ${fullscreenImage === null ? "hover:shadow-2xl hover:scale-105" : ""}
    `}
            onClick={() => openFullscreen(DecemberEdition[currentPage])}
          />
          {isWideScreen && currentPage + 1 < DecemberEdition.length && (
            <div>
              <img
                src={DecemberEdition[currentPage + 1]}
                alt={`Page ${currentPage + 1}`}
                className="aspect-[3/4] [1360px]:w-[600px] md:w-[667px] w-[500px] object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onClick={() => openFullscreen(DecemberEdition[currentPage + 1])}
              />
            </div>
          )}
        </div>
        <button
          onClick={nextPage}
          className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
        >
          &#8594;
        </button>

        {fullscreenImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
            <button
              className="absolute top-6 right-6 text-white text-4xl font-bold cursor-pointer hover:text-gray-400 transition"
              onClick={closeFullscreen}
            >
              &times;
            </button>
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl transition-transform duration-300 scale-100"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FlipBookPage;
