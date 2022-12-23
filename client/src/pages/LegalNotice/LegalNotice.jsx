import './legalNotice.scss'

function LegalNotice() {
    return (
        <div className='legal-notice dark'>
            <section className='top'>
                <h2>Legal notice</h2>

                <h3>Information according to § 5 TMG</h3>
                <p>Max Mustermann<br />
                    Musterstra&szlig;e 111<br />
                    Geb&auml;ude 44<br />
                    90210 Musterstadt</p>

                <h3>Contact</h3>
                <p>Phone: +49 (0) 123 44 55 66<br />
                    Email: mustermann@musterfirma.de</p>

                <p>Source: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
            </section>
        </div>
    )
}

export default LegalNotice;