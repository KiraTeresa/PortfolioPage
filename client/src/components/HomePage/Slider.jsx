import Introduction from '../About/Introduction';
import Quotation from '../About/Quotation';
import ProjectCard from '../Projects/ProjectCard';
import './slider.scss';
import { useState } from 'react';

function Slider({ latestProject }) {
    const elements = ['', 'quote', 'project']
    const [element, setElement] = useState('')

    function back() {
        const index = elements.indexOf(element)

        if (index === 0) {
            setElement(elements[elements.length - 1])
        } else {
            setElement(elements[index - 1])
        }
    }

    function next() {
        const index = elements.indexOf(element)

        if (index === elements.length - 1) {
            setElement(elements[0])
        } else {
            setElement(elements[index + 1])
        }
    }

    return (
        <section className='slider'>
            {/* <button onClick={back} classname={'btn-left'}>back</button> */}
            {element === 'quote' ? <Quotation />
                : element === 'project' ? <ProjectCard props={{ proj: latestProject, isOdd: true }} />
                    : <Introduction />
            }
            {/* <button onClick={next} classname={'btn-right'}>next</button> */}
            <div className='slideNav-wrapper'>
                {elements.map((el) => {
                    return <div key={el} className={`slideNav ${element === el ? 'active' : ''}`} onClick={() => setElement(el)}></div>
                })}
            </div>
        </section >
    )
}

export default Slider;