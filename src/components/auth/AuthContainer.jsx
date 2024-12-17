import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        {isLogin ? (
          <LoginForm onToggleForm={toggleForm} />
        ) : (
          <SignUpForm onToggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default AuthContainer;