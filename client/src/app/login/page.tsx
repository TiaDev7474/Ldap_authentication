'use client';
import React, { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    matricule: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    matricule: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { matricule: '', password: '' };

    if (formData.matricule === '') {
      newErrors.matricule = 'Veuillez entrer votre numéro de matricule.';
      isValid = false;
    }

    if (formData.password === '') {
      newErrors.password = 'Veuillez entrer votre mot de passe.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Le formulaire est valide, effectuez le traitement ici
      console.log('Formulaire valide, soumission effectuée.');
    }
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as typeof e.target & {
      name: string;
      value: string;
    };

    setFormData((prevData) => ({ ...prevData, [target.name]: target.value }));
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[30%] h-[50%]">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="mb-6 mt-6">
            <label
              className="block text-gray-700 font-sans mb-3"
              htmlFor="matricule"
            >
              Matricules :
            </label>
            <input
              className="border border-gray-300 bg-white focus:border-blue-500 text-gray-400 rounded-md px-3 py-2 mt-1 w-full focus:ring focus:ring-blue-500 font-sans"
              type="text"
              id="matricule"
              name="matricule"
              placeholder="Numéro de matricule"
              value={formData.matricule}
              onChange={handleInputChange}
            />
            <p className="text-red-500">{errors.matricule}</p>
          </div>
          <div>
            <label
              className="block text-gray-700 font-sans mb-3"
              htmlFor="password"
            >
              Mot de passe :
            </label>
            <input
              className="border border-gray-300 bg-white focus:border-blue-500 text-gray-400 rounded-md px-3 py-2 mt-1 w-full focus:ring focus:ring-blue-500 font-sans"
              type="password"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              value={formData.password}
              onChange={handleInputChange}
            />
            <p className="text-red-500">{errors.password}</p>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-sans font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
            type="submit"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
