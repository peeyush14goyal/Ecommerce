import React, { Fragment } from 'react';
import View from '../../app/common/util/wrapperView';
import CustomerContainer from './CustomerContainer';

const CustomerPage:React.FC = () => {
    return (
        <Fragment>
            <View.DocumentTitle title="Customer" />
            <View.ContentDataLayout>
                <CustomerContainer />
            </View.ContentDataLayout>
        </Fragment>
    )
}

export default CustomerPage;