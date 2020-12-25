import React, { Fragment, useContext, useEffect, useState } from 'react'
import View from '../../app/common/util/wrapperView';
import ProductFormComponent from './components/ProductFormComponent';
import { RootStoreContext } from "../../app/stores/rootStore";
import { observer } from "mobx-react-lite";
import { history } from '../..';
interface IProps {

}

const ProductFormContainer: React.FC<IProps> = (props) => {

    const rootStore = useContext(RootStoreContext);
    const { product, addProduct, editProduct, isListLoading,
        isProductSave, loadProducts, pagedProducts,
        categories, allCategories } = rootStore.productStore;

    const getEmitedFormData = (event: any) => {
        addProduct(event);
    }

    return (
        <>
            <View.DocumentTitle title="Add Product" />
            <View.ContentDataLayout>
                <ProductFormComponent
                    product={product}
                    categoryList={categories}
                    emitFormData={(e: any) => getEmitedFormData(e)}
                >
                </ProductFormComponent>
            </View.ContentDataLayout>

        </>
    )
}

export default observer(ProductFormContainer);