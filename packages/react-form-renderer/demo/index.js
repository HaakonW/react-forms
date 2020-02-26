/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import FormRenderer from '../src';
import formFieldsMapper from './form-fields-mapper';
import FormTemplate from './form-template';
import sandboxSchema from './sandbox'

const App = () => (
    <div style={{ padding: 20 }}>
        <FormRenderer
            initialValues={{
                text_box_1: 'hue',
                text_box_3: 'initial'
            }}
            clearedValue={'bla'}
            formFieldsMapper={formFieldsMapper}
            onSubmit={(values) => console.log(values)}
            onCancel={console.log}
            canReset
            onReset={() => console.log('i am resseting')}
            schema={sandboxSchema}
            formTemplate={FormTemplate}
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
