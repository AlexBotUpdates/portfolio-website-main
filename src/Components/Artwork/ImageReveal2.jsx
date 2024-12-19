'use client';
import { motion, useSpring } from 'framer-motion';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ImageReveal2() {
  const [img, setImg] = useState({
    src: '',
    alt: '',
    opacity: 0,
  });
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const list = [
    {
      img: 'https://i.ibb.co/GCQNxTj/image-2.png',
      label: 'Raiden Shogun',
    },
    {
      img: 'https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=1274&auto=format&fit=crop',
      label: 'Arlecchino',
    },
    {
      img: 'https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=1274&auto=format&fit=crop',
      label: 'Concept Art',
    }
  ];

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e) => {
    if (!imageRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;
    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };

  const handleImageInteraction = (item, opacity) => {
    setImg({ src: item.img, alt: item.label, opacity });
  };

  const handleClick = (label) => {
    const path = label.toLowerCase().replace(/ /g, '-');
    navigate(`/artwork/${path}`);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      className="bg-black/30 backdrop-blur-sm relative w-4/5 mx-auto p-4 rounded-lg"
    >
      {list.map((item) => (
        <div
          key={item.label}
          onClick={() => handleClick(item.label)}
          onMouseEnter={() => handleImageInteraction(item, 1)}
          onMouseMove={() => handleImageInteraction(item, 1)}
          onMouseLeave={() => handleImageInteraction(item, 0)}
          className="w-full py-5 cursor-pointer text-center flex justify-between text-white border-b border-white/20 last:border-none hover:bg-white/5 transition-colors"
        >
          <p className="text-3xl md:text-5xl font-light">{item.label}</p>
          <span className="text-sm md:text-base opacity-60">View Gallery</span>
        </div>
      ))}

      <motion.img
        ref={imageRef}
        src={img.src}
        alt={img.alt}
        className="w-[300px] h-[220px] rounded-lg object-cover absolute top-0 left-0 transition-opacity duration-200 ease-in-out pointer-events-none"
        style={{
          x: imagePos.x,
          y: imagePos.y,
          opacity: img.opacity,
        }}
      />
    </section>
  );
}

export default ImageReveal2;
