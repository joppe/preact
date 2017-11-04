import {h} from '../loader';

interface DetailPropsTypeInterface {
    foo:string;
    bar:string;
}

export const Detail:preact.FunctionalComponent<DetailPropsTypeInterface> = (options:DetailPropsTypeInterface):JSX.Element => {
    return (
        <div className="row">
            <article>
                <h1>Food</h1>
                <p>{options.bar}</p>
            </article>
        </div>
    );
};
