import React from 'react';

const Form = props => {
    return(
        <div className="container">
            <Form onSubmit={props.getResult}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <button className="btn btn-warning py-2" name="news">News</button>
                    </div>
                    <div className="col-md-3 offset-md-2">
                        <button className="btn btn-warning py-2" name="jokes">Jokes</button>
                    </div>
                </div>
            </Form>
        </div>

    );
}

export default Form;