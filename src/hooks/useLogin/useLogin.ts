import {useState} from 'react';
import {showToast} from '../../utils/showToast';

export default function useLogin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    if (!email || !password) {
      showToast('error', 'Error', 'Please fill all the fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('error', 'Error', 'Please enter a valid email address');
      return;
    }
    if (password.length < 8) {
      showToast(
        'error',
        'Error',
        'Password should be at least 8 characters long',
      );
      return;
    }

    try {
      const data = {
        email: email,
        password: password,
      };
      console.log(data);
      showToast('success', 'Success', 'Logged in successfully');
    } catch (error) {
      showToast('error', error as string);
    }
  };
  return {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
  };
}
