import React from 'react'

interface IProps {

}

const FooterComponent: React.FC<IProps> = (props) => {
    return (
        <>
            <footer className="main-footer">
                <div className="float-right d-none d-sm-block">
                    <b>Version</b> 3.0.5
                </div>
                <strong>Copyright &copy; 2019-2020 <a href="#">Suri Consumer</a>
                </strong> All rights reserved.
            </footer>
        </>
    )
}

export default FooterComponent;