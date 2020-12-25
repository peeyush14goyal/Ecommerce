import React from 'react'

const List = (props: any) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="line-loader" style={{ display: props.isListLoading ? '' : 'none' }}></div>
                    <div className="card-body table-responsive p-0" style={{ height: '48vh' }}>
                        <table className="table table-head-fixed text-nowrap">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>Pincode</th>
                                    <th>State</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {props.pagedrResellers &&
                                    props.pagedrResellers.resellers.map((reseller: any) => (
                                        <tr key={reseller.id}>
                                            <td>{reseller.name}</td>
                                            <td>{reseller.email}</td>
                                            <td>{reseller.mobile}</td>
                                            <td>{reseller.address}, {reseller.city}, {reseller.locality} </td>
                                            <td>{reseller.pincode}</td>
                                            <td>{reseller.state} </td>
                                            <td>
                                                <button type="button"
                                                    className="btn btn-sm btn-outline-secondary mr-2">
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;