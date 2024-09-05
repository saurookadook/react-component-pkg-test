import React from 'react';

import { PageContentWrapper__div } from './styled';

function PageContentWrapper({ children, ...props}) {
    return (
        <PageContentWrapper__div {...props}>
            {children}
        </PageContentWrapper__div>
    );
}

export default PageContentWrapper;
