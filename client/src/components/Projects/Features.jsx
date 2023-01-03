function Features({ props }) {
    const { description } = props

    return (
        <div className='light'>
            <section className='about'>
                <h2 className='zenDots'>Features</h2>
                <div>
                    {description.map((feat, index) => {
                        return (
                            <div key={index}>
                                <h3>{feat.feature}</h3>
                                <p>{feat.descr}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Features;