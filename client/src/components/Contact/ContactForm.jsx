import { useState } from 'react';
import './contact.scss'
import apiClient from '../../services/apiClient'

function ContactForm() {
    const [data, setData] = useState({ sender: "", email: "", message: "" })

    function handleChange(e) {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        apiClient.post('/contact', data).then((result) => {
            console.log(result.data)
            setData({ sender: "", email: "", message: "" })
        }).catch(err => console.log('Error: ', err))
    }

    return (
        <div className='light'>
            <section className='form'>
                <h2>Get in touch</h2>
                <form onSubmit={handleSubmit}>
                    <label>Who are you?
                        <input name='sender' type='text' value={data.sender} onChange={handleChange}></input>
                    </label>
                    <label>What's your email address?
                        <input name='email' type='email' value={data.email} onChange={handleChange}></input>
                    </label>
                    <label>Your message for me
                        <textarea name='message' type='text' value={data.message} onChange={handleChange}></textarea>
                    </label>
                    <button type='submit'>send</button>
                </form>
            </section>
        </div>
    )
}

export default ContactForm;