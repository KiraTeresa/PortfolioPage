import './about.scss'

function Quotation({ position }) {
    return (
        <section className={`${position} quote`}>
            <div>
                “Becoming a programmer means to choose a path of continuous learning opportunities. As I am a person who likes taking on challenges and to expand my knowledge, getting into tech was the right way for me.”
                {/* “If you find passion in what you do, you'll do it good and with joy. That's what I believe in. That's what I found in coding.” */}
                {/* “It is never too late to learn something new. If you've found what you are passionate about, go after it.” */}
            </div>
        </section>
    )
}

export default Quotation;