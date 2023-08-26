import React from 'react';

const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full flex items-center justify-center'>
        {children}
    </div>
  );
};

export default Auth;
