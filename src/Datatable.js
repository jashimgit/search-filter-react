import React from "react";

export default function Datatable({ data }) {
    // console.log(data);
    const columns = data[0] && Object.keys(data[0]);
    console.log(columns)
    return (
        <div >
            <table class="table">
                <thead>
                    <tr>{ data[0] && columns.map((heading) => <th>{heading} </th>) }</tr>
                    {/* <tr>
                        <th scope="col">ID#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Address</th>
                        <th scope="col">phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr> */}
                </thead>
                <tbody>
                    {data.map((user, idx) => (
                        <tr key={idx}>
                            <td>{user.id}</td>
                            <th scope="row">{user.name}</th>
                            <th scope="row">{user.username}</th>
                            <td>{user.address.street}, {user.address.suite}, {user.address.city}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
