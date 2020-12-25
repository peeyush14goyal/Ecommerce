import React, { Fragment, useContext, useEffect, useState } from 'react'
import View from '../../app/common/util/wrapperView';
import ProductComponent from './components/ProductComponent';
import { RootStoreContext } from "../../app/stores/rootStore";
import { observer } from "mobx-react-lite";
import { history } from '../..';
interface IProps {

}
const PAGE_LIMIT = +process.env.REACT_APP_PAGE_SIZE!;

const ProductListContainer: React.FC<IProps> = (props) => {
    const rootStore = useContext(RootStoreContext);
    const { addProduct, editProduct, isListLoading,
        isProductSave, loadProducts, pagedProducts, allCategories, categories } = rootStore.productStore;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParam, setSearchParam] = useState<any>(null);

    useEffect(() => {
        loadProducts(currentPage, PAGE_LIMIT, searchParam!);
    }, []);

    useEffect(() => {
        allCategories();
    }, [allCategories]);

    const getEmitedAddProductEvent = () => {
        history.push('/add-product');
    }

    const _handlePage = async (currentPage: any) => {
        setCurrentPage(currentPage);
        await loadProducts(currentPage, PAGE_LIMIT, searchParam!);
    };

    const getEmitedSearchParams = async (event: any) => {
        setSearchParam(event);
        await loadProducts(currentPage, PAGE_LIMIT, searchParam!);
    }

    return (
        <>
            <View.DocumentTitle title="Products" />
            <View.ContentDataLayout>
                <ProductComponent
                    categories={categories}
                    currentPage={currentPage}
                    isListLoading={isListLoading}
                    pagedProducts={pagedProducts!}
                    emitSetCurrentPage={(e: any) => _handlePage(e)}
                    emitSearchParams={(e: any) => getEmitedSearchParams(e)}
                    emitAddProductEvent={() => getEmitedAddProductEvent()}></ProductComponent>
            </View.ContentDataLayout>
        </>
    )
}

export default observer(ProductListContainer);