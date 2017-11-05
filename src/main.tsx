import {Component, h, render} from 'preact';

/**
 * @inheritDoc IHelloWorldProps
 */
export interface IHelloWorldProps {
    /**
     * @type {string}
     */
    name: string;
}

class HelloWorld extends Component<IHelloWorldProps, {}> {
    /**
     * @param {IHelloWorldProps} props
     * @returns {JSX.Element}
     */
    public render(props: IHelloWorldProps): JSX.Element {
        return (
            <p>Hello { props.name }!</p>
        );
    }
}

// Render the component as a child of the body element
render(<HelloWorld name='Joppe' />, window.document.getElementById('app'));

window.console.log('foo');
