'use client';

import { useState } from 'react';

interface ProductCardProps {
  name: string;
  desc: string;
  features: string[];
}

export default function ProductCard({ name, desc, features }: ProductCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: '1000px', height: '280px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          transition: 'transform 800ms',
          WebkitTransition: '-webkit-transform 800ms',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white rounded-lg shadow-md p-8 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-3">{name}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
          <span className="text-sm text-gray-400 mt-4">Klikni za detalje →</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-blue-600 rounded-lg shadow-md p-8 flex flex-col justify-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3 className="text-xl font-bold text-white mb-4">{name}</h3>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="text-white flex items-center">
                <span className="mr-2 text-blue-200">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <span className="text-sm text-blue-200 mt-4">← Klikni za povratak</span>
        </div>
      </div>
    </div>
  );
}
