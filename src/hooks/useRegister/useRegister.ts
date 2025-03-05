import {useState} from 'react';
import {showToast} from '../../utils/showToast';

export default function useRegister() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    if (!name || !email || !phoneNumber || !dob || !password) {
      showToast('error', 'Please fill all the fields.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      showToast('error', 'Name should contain only alphabets.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('error', 'Email is not valid.');
      return;
    }

    if (!/^\d{10,11}$/.test(phoneNumber)) {
      showToast('error', 'Phone number should be 10 or 11 digits.');
      return;
    }

    if (
      !/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.test(dob) &&
      !/^(\d{4})-(\d{2})-(\d{2})$/.test(dob)
    ) {
      showToast('error', 'Date of birth is not valid.');
      return;
    }
    if (new Date(dob) >= new Date()) {
      showToast('error', 'Date of birth should be in the past.');
      return;
    }

    if (password.length < 8) {
      showToast('error', 'Password should be at least 8 characters.');
      return;
    }

    try {
      const data = {
        name,
        email,
        phoneNumber,
        dob,
        password,
      };
      console.log(data);
      showToast('success', 'Registration successful');
    } catch (error) {
      showToast('error', error as string);
    }
  };

  return {
    name,
    email,
    phoneNumber,
    dob,
    password,
    setName,
    setEmail,
    setPhoneNumber,
    setDob,
    setPassword,
    handleSubmit,
  };
}
