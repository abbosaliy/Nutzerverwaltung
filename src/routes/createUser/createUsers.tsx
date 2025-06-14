import { Button } from '@mui/material';
import './createUsers.scss';
import { UserContext } from '../../context/userContex';
import React, { useContext, useState } from 'react';
import type { User } from '../../hooks/userReducer';

function CreateUser() {
  const { setUser } = useContext(UserContext);
  const [formatData, setFormatData] = useState<User>({
    id: 0,
    name: '',
    birthDate: '',
    gender: '',
    email: '',
    post: '',
    phone: '',
    webseite: '',
  });

  function addUser() {
    if (
      !formatData.name ||
      !formatData.birthDate ||
      !formatData.gender ||
      !formatData.email ||
      !formatData.post ||
      !formatData.phone ||
      !formatData.webseite
    ) {
      alert('Bitte füllen Sie alle Pflichtfelder aus');
    } else {
      const newUser = { ...formatData, id: Date.now() };
      setUser({ type: 'ADD', payload: newUser });
      alert('Die Daten wurden erfolgreich gespeichert');
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormatData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="create-user">
      <div className="input-box">
        <h4>User name</h4>
        <input
          value={formatData.name}
          name="name"
          type="text"
          placeholder="Name eingeben"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <div className="input-box">
        <h4>Geburtsdatum</h4>
        <input
          value={formatData.birthDate}
          name="birthDate"
          type="date"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <div className="input-box">
        <h4>Geschlecht</h4>
        <select
          value={formatData.gender}
          name="gender"
          onChange={handleChange}
        >
          <option value="">Geschlecht wählen</option>
          <option value="mann">Mann</option>
          <option value="frau">Frau</option>
        </select>
      </div>
      <div className="input-box">
        <h4>Email Adresse</h4>
        <input
          value={formatData.email}
          name="email"
          type="email"
          placeholder="example@mail.com"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <div className="input-box">
        <h4>Post Adresse</h4>
        <input
          value={formatData.post}
          name="post"
          type="text"
          placeholder="Beispiel str 2"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <div className="input-box">
        <h4>Telefon nummer</h4>
        <input
          value={formatData.phone}
          name="phone"
          type="tel"
          placeholder="+49"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <div className="input-box">
        <h4>Webseite</h4>
        <input
          value={formatData.webseite}
          name="webseite"
          type="url"
          placeholder="www.beispiel.de"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <br />
      <br />
      <Button
        type="submit"
        variant="contained"
        onClick={addUser}
      >
        Speichern
      </Button>
    </div>
  );
}

export default CreateUser;
