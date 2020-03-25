import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi' //pacotes de icones, ma=material desing fa=font awesome!

import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';

import LogoImg from '../../assets/logo.svg';

export default function Logon(){
    const [id,setId] = useState('');
    const history = useHistory();

  async function handleLogin (e) {
    e.preventDefault();

    try {
        const response = await api.post('sessions', { id });

        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', response.data.name);

        history.push('/profile');
    } catch (err) {
        alert('Falha no login, tente novamente.');
    }
   }

    return (
        <div className="logon-container">
            <section className="form">
             <img src={LogoImg}  alt="logo Be the hero" />

             <form onSubmit={handleLogin}>
                 <h1>Faça seu Login!</h1>

                 <input 
                 placeholder="Seu ID"
                 value={id}
                 onChange={e => setId(e.target.value)}
                 />
                 <button className="button" type="submit">Entrar</button>

                 <Link className="back-link" to="/register">
                     <FiLogIn size={16} color="#E02041" />
                     Não tenho Cadastro
                 </Link>
             </form>
            </section>

            <img src={heroesImg}  alt="heroes" />
        </div>
    );
}

//class é uma palavra reservada do JS, para cirar uma classe, por isso que é utilizado className
//Link to é a "mesma coisa" que <a href= />