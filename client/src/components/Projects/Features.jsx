function Features({ props }) {
    const { description } = props

    return (
        <div className='light'>
            <section className='about'>
                <h2 className='zenDots'>Features</h2>
                <div>
                    <p>{description}</p>
                </div>
            </section>
        </div>
    )
}

export default Features;