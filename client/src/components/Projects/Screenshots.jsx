function Screenshots({ props }) {
    const { screenshots } = props

    return (
        <div className='light'>
            <section className='about'>
                <h2 className='zenDots'>Screenshots</h2>
                <div className='screenshot-wrapper'>
                    {screenshots.map(screen => <img className='screenshot' key={screen.no} src={screen.link} alt={screen.alt} />)}
                </div>
            </section>
        </div>
    )
}

export default Screenshots;