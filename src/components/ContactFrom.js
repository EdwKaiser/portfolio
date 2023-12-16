
import React, { useState } from 'react';
import '../assets/ContactForm.scss'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour traiter le formulaire
        console.log('Formulaire soumis :', formData);
        // Réinitialisez le formulaire après la soumission si nécessaire
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='me__contacter'>
            <h2 className='contact__title'>Me contacter</h2>
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className='email__name--message'>
                    <div className='email__name'>
                        <div className='name'>
                            <label className="form__label" htmlFor="name">Nom :</label>
                            <input
                                    className="form__input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                            />
                        </div>
                        <div className='email'>
                            <label className="form__label" htmlFor="email">Email :</label>
                            <input
                                    className="form__input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    />
                        </div>
                    </div>
                    <div className='message'>
                        <label className="form__label" htmlFor="message">Message :</label>
                        <textarea
                            className="form__input"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>
                <button className="form__button" type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default ContactForm;