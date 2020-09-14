import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

const SomeContext = React.createContext();

const App=()=>{
    return(
        <SomeContext.Provider value={'Tinky Winky'}>
            <Para />
        </SomeContext.Provider>
    );
}

const Para = () =>{
    const value = useContext(SomeContext);
    
    return <p>{value}</p>;
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);