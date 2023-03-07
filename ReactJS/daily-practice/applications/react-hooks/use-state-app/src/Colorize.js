import {useState} from 'react';

const Colorizer = () => {
    const [color, setColor] = useState('#6d0e0e');

    const getRandomColor = () => {
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return random;
    }

    const changeColor = () => {
        const randomColor = getRandomColor();
        console.log('Color Change');
        setColor(randomColor);
    }

    return(
        <div className="colorizer">
            <div className="box" 
            style={{backgroundColor: color}}>
                <p>{color}</p>
            </div>
            <button onClick={ changeColor }>Change Color</button>
        </div>
    );
 };

 export default Colorizer;