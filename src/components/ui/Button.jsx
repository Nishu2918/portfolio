import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  let variantStyles = "";

  switch (variant) {
    case 'primary':
      variantStyles = "bg-[#76553e] text-on-primary hover:bg-[#5a4433]";
      break;
    case 'secondary':
      variantStyles = "bg-[#f0eee9] text-[#76553e] hover:bg-[#e9e6df] border border-[#d1c5b8]/30";
      break;
    case 'outline':
      variantStyles = "bg-transparent border border-[#76553e] text-[#76553e] hover:bg-[#76553e]/5";
      break;
    default:
      break;
  }

  return (
    <button 
      className={`btn-refined ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
