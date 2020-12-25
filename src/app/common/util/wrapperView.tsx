import React, { useState } from "react";
import Helmet from "react-helmet";
interface IProps {
    title: string
}
const SearchFilter: React.FC<IProps> = (props: any) => {
    return <>
        <form className="form-inline ml-3">
            <div className="input-group input-group-sm">
                <input className="form-control form-control-navbar"
                    type="search"
                    onChange={e => props.onValueChange(e)}
                    placeholder={props.placeholder}
                    aria-label={props.placeholder} />
                {props.isSubmit &&
                    <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit" onClick={e => props.onSearch(e)}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                }
            </div>
        </form></>
}

const NoDataView: React.FC<IProps> = (props: any) => {
    return <section className="content">
        <div className="error-page">
            <h2 className="headline text-warning"> {props?.title}</h2>
            <div className="error-content">
                <h3>
                    <i className="fas fa-exclamation-triangle text-warning"></i> {props?.content}
                </h3>
                <p>
                    We could not find the page you were looking for. Meanwhile, you may
                <a href="javascript:void(0)" >return to Home Page</a>
                </p>
            </div>
        </div>
    </section>
}

const DocumentTitle: React.FC<IProps> = (props: any) => {
    return <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <link rel="icon" type="image/png" href="" sizes="16x16" />
    </Helmet>
}

const MainLayout: React.FC<any> = (props: any) => {
    return <div className="sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
        <div className="wrapper">
            {props.children}
        </div>
    </div>
}

const ContentLayout: React.FC<any> = (props: any) => {
    return <div className="content-wrapper">
        {props.children}
    </div>
}

const ContentHeaderLayout: React.FC<any> = (props: any) => {
    return <div className="content-header">
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
}

const ContentDataLayout: React.FC<any> = (props: any) => {
    return <section className="content">
        <div className="container-fluid">
            {props.children}
        </div>
    </section>
}


const ViewHelper = {
    DocumentTitle,
    SearchFilter,
    MainLayout,
    NoDataView,
    ContentLayout,
    ContentHeaderLayout,
    ContentDataLayout
}
export default ViewHelper;