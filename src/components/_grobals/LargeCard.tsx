import React from 'react';
import Link from 'next/link';

interface LargeCardProps {
  id: string;
  title: string;
  description: string;
}

export const LargeCard: React.FC<LargeCardProps> = ({
  id,
  title,
  description,
}) => {
  return (
    <Link href={`/service/${id}`}>
      <div className="block w-full bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in cursor-pointer text-white">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
};
