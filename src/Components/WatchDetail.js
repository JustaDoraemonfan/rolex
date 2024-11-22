import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WatchDetail = ({
  name,
  imageUrl,
  history,
  specifications,
  technicalDetails
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.5]
  );

  const specTranslateY = useTransform(
    scrollYProgress,
    [0, 1],
    ['100%', '0%']
  );

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          opacity: backgroundOpacity,
          backgroundSize: 'cover'
        }}
      />

      <div className="relative z-10 h-full overflow-y-auto no-scrollbar">
        <div className="h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-20 text-center text-white px-4">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold mb-6"
            >
              {name}
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm max-w-3xl mx-auto leading-relaxed"
            >
              {history}
            </motion.p>
          </div>
        </div>

        <motion.div
          style={{ translateY: specTranslateY }}
          className="bg-white/90 py-16 px-6 md:px-12"
        >
          <h2 className="text-4xl font-light text-center mb-12 tracking-wide">
            Technical Specifications
          </h2>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            {Object.entries(specifications).map(([key, value]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="border-b pb-4 border-gray-200"
              >
                <h3 className="text-xs font-semibold mb-2 text-gray-700">{key}</h3>
                <p className="text-gray-900 text-lg">{value}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 py-16 px-6 md:px-12 mt-8">
            <h2 className="text-4xl font-light text-center mb-12 tracking-wide">
              Engineered Precision
            </h2>
            <div className="max-w-6xl mx-auto">
              {technicalDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-10 bg-white p-8 rounded-lg shadow-lg"
                >
                  <h3 className="text-xs font-semibold mb-4 text-gray-800">{detail.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{detail.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WatchDetail;