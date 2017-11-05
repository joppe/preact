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

render(<HelloWorld name='Joppe' />, window.document.body);
