import { useContext, useState } from 'react';
import './usersEdit.scss';
import { UserContext } from '../../context/userContex';
import type { User } from '../../hooks/userReducer';
import { Link, useParams } from 'react-router-dom';

function UserEdit() {
  const { user, setUser } = useContext(UserContext);
  const { itemID } = useParams();
  const ID = Number(itemID);

  const editingUser = user.find((userId) => userId.id === ID);

  if (!editingUser) {
    return <h2>Keine user gefunden</h2>;
  }

  const [formatData, setFormatData] = useState<User>({
    id: 0,
    name: editingUser.name,
    birthDate: editingUser.birthDate,
    gender: editingUser.gender,
    email: editingUser.email,
    post: editingUser.post,
    phone: editingUser.phone,
    webseite: editingUser.webseite,
  });

  function addUser() {
    const newUser = {
      ...formatData,
      id: ID ? Number(ID) : Date.now(),
    };
    setUser({ type: 'EDIT', payload: newUser });
    alert('Änderung wurde erfolgreich gespeichert');
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
        <h4>User name </h4>
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

      <Link
        className="save-btnEl"
        to={`/Nutzerverwaltung/users`}
        onClick={addUser}
      >
        Speichern
      </Link>
    </div>
  );
}

export default UserEdit;
