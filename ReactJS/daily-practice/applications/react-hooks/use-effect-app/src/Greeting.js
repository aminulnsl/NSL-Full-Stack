import { useState, useEffect } from 'react';
import './Greeting.css';

const Greeting = ({ randomMax }) => {
    const [randomNumber, setRandomNumber] = useState(
        Math.floor(Math.random() * randomMax) + 1
    );

    const [greeting, setGreeting] = useState('');

    useEffect (() => {
        console.log("Greeting.js: useEffect()");
    }, []);

    useEffect (() => {
        window.localStorage.setItem('random', randomNumber);
        if (randomMax === randomNumber) {
            window.localStorage.setItem("jackpot", true);
        } else {
            window.localStorage.setItem('jackpot', false);
        }

        switch(randomNumber) {
            case 1:
                setGreeting('Hello');
                break;
            case 2:
                setGreeting('Howdy');
                break;
            case 3:
                setGreeting('Hi');
                break;
            case 4:
                setGreeting('Hey');
                break;
            case 5:
                setGreeting('Yo');
                break;
            default:
                setGreeting('Hello!');
        }
        return function cleanUp() {
            console.log('Cleaning up');
            window.localStorage.removeItem('random');
            window.localStorage.removeItem('jackpot');
        }
    }, [randomNumber, randomMax]); 

    return (
        <div className="gretting">
            <h1>Random Gretting</h1>
            <h2 className='message'>{ greeting }</h2>
        </div>
    );
};

export default Greeting;

