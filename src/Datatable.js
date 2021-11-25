import React from "react";

export default function Datatable({ data }) {
    
    const columns = data[0] && Object.keys(data[0]);
    
    return (
        <div >
            <table class="table">
                <thead>
                    <tr>{ data[0] && columns.map((heading) => <th>{heading} </th>) }</tr>
                </thead>
                <tbody>
                    {data.map((user, idx) => (
                        <tr key={idx}>
                            <td>{user.id}</td>
                            <th scope="row">{user.name}</th>
                            <th scope="row">{user.username}</th>
                            <td>{user.email}</td>
                            <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}`}</td>
                            <td>{user.phone}</td>
                            
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
