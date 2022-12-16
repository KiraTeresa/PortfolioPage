import './Projects.scss'

function ProjectCard() {
    return (
        <div className='dark'>
            <section className='project-card'>
                <div className='info'>
                    <h3>Project name</h3>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    <button>Read more</button>
                </div>
                <div>
                    image
                </div>
            </section>
        </div>
    )
}

export default ProjectCard;