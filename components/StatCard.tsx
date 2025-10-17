'use client';

interface StatCardProps {
  value: number | string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function StatCard({ 
  value, 
  label, 
  description, 
  icon, 
  className = "" 
}: StatCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-ubuntu-blue/10 text-ubuntu-blue">
            {icon}
          </div>
        </div>
      )}
      
      <div className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-2">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {label}
      </h3>
      
      {description && (
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      )}
    </div>
  );
}
