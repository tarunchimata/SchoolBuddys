import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input type="text" placeholder="Full Name" className="w-full p-2 border mb-4" />
        <input type="email" placeholder="Email" className="w-full p-2 border mb-4" />
        <input type="password" placeholder="Password" className="w-full p-2 border mb-4" />
        <button className="bg-green-500 text-white w-full py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
