import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { RootStoreContext } from "../../app/stores/rootStore";
import View from '../../app/common/util/wrapperView';
import BreadCrumb from "../../app/layout/BreadCrumb";
import List from './components/List';
import Search from './components/Search';
const PAGE_LIMIT = +process.env.REACT_APP_PAGE_SIZE!;

interface IProps {

}

const ResellerPage: React.FC<IProps> = () => {

    const rootStore = useContext(RootStoreContext);
    const { isResellerLoading, pagedrResellers, loadReseller } = rootStore.resellerStore;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParam, setSearchParam] = useState<any>(null);

    useEffect(() => {
        loadReseller(currentPage, PAGE_LIMIT, searchParam!);
    }, []);

    const _handleSearch = async (param: any) => {
        const searchValue: any = {
          email: searchParam?.email,
          mobile: searchParam?.mobile,
          reseller: searchParam?.reseller,
          name: param.name,
          sortBy: searchParam?.sortBy,
          sortDirection: searchParam?.sortDirection,
        };
        setSearchParam(searchValue);
        await loadReseller(currentPage, PAGE_LIMIT, searchParam!);
      };

    return (
        <>
            <View.DocumentTitle title="Reseller" />
            <View.ContentDataLayout>
                <BreadCrumb pageName="Reseller" />
                <Search onSearch={_handleSearch} />
                <List
                    isListLoading={isResellerLoading}
                    currentPage={currentPage}
                    pagedrResellers={pagedrResellers}
                ></List>
            </View.ContentDataLayout>
        </>
    )
}

export default observer(ResellerPage);