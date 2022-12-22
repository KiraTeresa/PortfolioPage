import './contact.scss'

function ContactForm() {
    return (
        <div className='light'>
            <section className='form'>
                <h2>Get in touch</h2>
                <form>
                    <label>Who are you?
                        <input></input>
                    </label>
                    <label>What's your email address?
                        <input></input>
                    </label>
                    <label>Your message for me
                        <textarea></textarea>
                    </label>
                    <button>send</button>
                </form>
            </section>
        </div>
    )
}

export default ContactForm;