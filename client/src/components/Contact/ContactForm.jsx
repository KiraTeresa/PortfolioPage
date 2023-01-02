import { useRef } from 'react';
import './contact.scss'
// import apiClient from '../../services/apiClient'
import emailjs from '@emailjs/browser';

function ContactForm() {
    // const [data, setData] = useState({ sender: "", email: "", message: "" })
    const form = useRef()

    // function handleChange(e) {
    //     const { name, value } = e.target
    //     setData({ ...data, [name]: value })
    // }

    function handleSubmit(e) {
        e.preventDefault()

        // use emailjs (frontend) for sending email:
        emailjs.sendForm(`${process.env.SERVICE_ID}`, `${process.env.TEMPLATE_ID}`, form.current, `${process.env.USER_ID}`).then((result) => {
            console.log(result.text)
            // setData({ sender: "", email: "", message: "" })
        }).catch(err => console.log('Error: ', err))

        // use nodemailer (backend) for sending email:
        // apiClient.post('/contact', data).then((result) => {
        //     console.log(result.data)
        //     setData({ sender: "", email: "", message: "" })
        // }).catch(err => console.log('Error: ', err))
    }

    return (
        <div className='light'>
            <section className='form'>
                <h2>Get in touch</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <label>Who are you?
                        <input name='sender' type='text' required></input>
                    </label>
                    <label>What's your email address?
                        <input name='email' type='email' required></input>
                    </label>
                    <label>Your message for me
                        <textarea name='message' type='text' required></textarea>
                    </label>
                    <button type='submit'>send</button>
                </form>
                {/* with nodemailer */}
                {/* <form onSubmit={handleSubmit}>
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
                </form> */}
            </section>
        </div>
    )
}

export default ContactForm;