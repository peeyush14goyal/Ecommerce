import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { RootStoreContext } from '../stores/rootStore';

const LoadingComponent = () => {

    const rootStore = useContext(RootStoreContext);
    const { loader } = rootStore.commonStore;

    return (
        <div className={loader===true?"body-loading loader-active":"body-loading"} ></div>
    )
}

export default observer(LoadingComponent);