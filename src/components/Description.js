import React from 'react';


function Description(props) {
    return(
        <div className='Desc-text'>
            <p>
                {props.name}
            </p>
            <a href='https://alondubuisi.github.io/myportfolio/'>
            <button>Let's Talk</button>
            </a>
        </div>
    ) 
}
export default Description