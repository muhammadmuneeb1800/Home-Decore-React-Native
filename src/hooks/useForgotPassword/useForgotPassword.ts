import {useState} from 'react';
import {showToast} from '../../components/showToast/ShowToast';

export default function useForgotPassword() {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async () => {
    if (!email) {
      showToast('error', 'Please enter your email address');
      return;
    }
    try {
      showToast('success', 'Reset link sent to your email');
    } catch (error) {
      showToast('error', 'Failed to send reset link');
    }
  };
  return {
    email,
    setEmail,
    handleSubmit,
  };
}
