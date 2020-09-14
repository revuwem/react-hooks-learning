import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button
                    onClick={() => setValue((v => v + 1))}>+</button>
                <button
                    onClick={() => setVisible(false)}>hide</button>
                {/* <ClassCounter value={value} /> */}
                {/* <HookCounter value={value} /> */}
                {/* <Notification /> */}
                <PlanetInfo id={value} />
            </div>
        );
    } else {
        return <button onClick={() => { setVisible(true) }}>show</button>;
    }
};

class ClassCounter extends Component {
    componentDidMount() {
        console.log('class: mount');
    }

    componentDidUpdate(props) {
        console.log('class: update');
    }

    componentWillUnmount() {
        console.log('class: unmount');
    }

    render() {
        return <p>{this.props.value}</p>;
    }
}

const HookCounter = ({ value }) => {

    // componentDidMount + componentWillUnmount
    useEffect(() => {
        console.log('mounted');
        return () => console.log('unmounted');
    }, [])

    // //componentDidMount
    // useEffect(() => console.log('mounted'), []);

    // componentDidUpdate
    useEffect(() => console.log('updated'), [value]);

    // componentWillUnmount
    // useEffect(() => () => console.log('cleared'), []);    

    return <p>{value}</p>;
}

const Notification = (props) => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 3500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {visible && <p>Hello</p>}
        </div>);
}

const PlanetInfo = ({ id }) => {

    const [name, setName] = useState('Loading ...');

    useEffect(() => {
        let cancelled = false;
        fetch(`https://swapi.dev/api/planets/${id}`)
            .then(res => res.json())
            .then(data => !cancelled && setName(data.name));

        return () => cancelled = true;
    }, [id]);

    return (
        <div>
            {id} - {name}
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);