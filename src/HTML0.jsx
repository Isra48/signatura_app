import React from 'react';

const HTML0 = ({htmlCode}) => {

    return  (
        <pre dangerouslySetInnerHTML={{ __html: htmlCode }}></pre>

    );
}

export default HTML0;
