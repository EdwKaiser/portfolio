import React, { useState } from 'react';
import '../assets/ContactForm.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        botcheck: ''
    });

    const [status, setStatus] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSending) return;

        // Protection honeypot : si ce champ est rempli, c'est sûrement un bot
        if (formData.botcheck) {
            return;
        }

        // Vérifications simples
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus('Tous les champs sont obligatoires.');
            return;
        }

        if (!isValidEmail(formData.email)) {
            setStatus('Adresse email invalide.');
            return;
        }

        if (formData.message.trim().length < 10) {
            setStatus('Le message est trop court.');
            return;
        }

        if (formData.message.trim().length > 2000) {
            setStatus('Le message est trop long.');
            return;
        }

        setIsSending(true);
        setStatus('Envoi en cours...');

        const dataToSend = new FormData();

        dataToSend.append('access_key', 'ef941f00-8f24-4b0c-8ac3-904f33a7b82b');
        dataToSend.append('name', formData.name.trim());
        dataToSend.append('email', formData.email.trim());
        dataToSend.append('message', formData.message.trim());
        dataToSend.append('subject', 'Nouveau message depuis mon site');
        dataToSend.append('from_name', 'Formulaire de contact');
        dataToSend.append('botcheck', formData.botcheck);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: dataToSend
            });

            const data = await response.json();

            if (data.success) {
                setStatus('Message envoyé avec succès !');

                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    botcheck: ''
                });
            } else {
                setStatus("Erreur lors de l'envoi du message.");
            }
        } catch (error) {
            console.error(error);
            setStatus("Impossible d'envoyer le message pour le moment.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className='me__contacter'>
            <h2 className='contact__title'>Me contacter</h2>

            <form className="contact__form" onSubmit={handleSubmit}>
                {/* Champ anti-bot invisible */}
                <input
                    type="text"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                />

                <div className='email__name--message'>
                    <div className='email__name'>
                        <div className='name'>
                            <label className="form__label" htmlFor="name">
                                Nom :
                            </label>

                            <input
                                className="form__input"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                minLength="2"
                                maxLength="80"
                                autoComplete="name"
                            />
                        </div>

                        <div className='email'>
                            <label className="form__label" htmlFor="email">
                                Email :
                            </label>

                            <input
                                className="form__input"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                maxLength="120"
                                autoComplete="email"
                            />
                        </div>
                    </div>

                    <div className='message'>
                        <label className="form__label" htmlFor="message">
                            Message :
                        </label>

                        <textarea
                            className="form__input"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            minLength="10"
                            maxLength="2000"
                        ></textarea>
                    </div>
                </div>

                <button
                    className="form__button"
                    type="submit"
                    disabled={isSending}
                >
                    {isSending ? 'Envoi...' : 'Envoyer'}
                </button>

                {status && (
                    <p className="form__status">
                        {status}
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;