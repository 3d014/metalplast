'use client';

import { useState } from 'react';

interface ProductCardProps {
  name: string;
  desc: string;
  features: string[];
  clickForDetails: string;
  clickToGoBack: string;
}

export default function ProductCard({ name, desc, features, clickForDetails, clickToGoBack }: ProductCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer h-72"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className="absolute inset-0 bg-white rounded-xl shadow-md p-8 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-3">{name}</h3>
            <p className="text-slate-600 leading-relaxed">{desc}</p>
          </div>
          <span className="text-sm text-slate-400">{clickForDetails} →</span>
        </div>

        <div
          className="absolute inset-0 bg-blue-600 rounded-xl shadow-md p-8 flex flex-col justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-xl font-bold text-white mb-4">{name}</h3>
          <ul className="space-y-2 mb-6">
            {features.map((feature) => (
              <li key={feature} className="text-white flex items-center gap-2">
                <span className="text-blue-200 flex-shrink-0">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <span className="text-sm text-blue-200">← {clickToGoBack}</span>
        </div>
      </div>
    </div>
  );
}
