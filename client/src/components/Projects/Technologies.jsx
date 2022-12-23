function Technologies({ props }) {
    const { tech } = props

    return (
        <div className='dark'>
            <section className='stack-wrapper'>
                <h2>Technologies</h2>
                <ul>
                    {tech.map((t => <li key={t}>{t}</li>))}
                </ul>
            </section>
        </div>
    )
}

export default Technologies;