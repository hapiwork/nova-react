import React from 'react';
import ReactDOM from 'react-dom';

import FormField from './react-components/FormField';
import DetailField from './react-components/DetailField';
import IndexField from './react-components/IndexField';




function MountIndexField(element, props) {
    ReactDOM.render(
      <IndexField {...props} />,
      element
    );
}

function MountDetailField(element, props) {
    ReactDOM.render(
      <DetailField {...props} />,
      element
    );
}

function MountFormField(element, props) {
    ReactDOM.render(
      <FormField {...props} />,
      element
    );
}

export {
    MountIndexField,
    MountDetailField,
    MountFormField
}


