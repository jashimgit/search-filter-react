/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import Datatable from "./Datatable";

function App() {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    const [searchColumn, setSearchColumn] = useState(["name", "username"]);
    console.log(query);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    function search(rows) {
        //
        return rows.filter((row) =>
            searchColumn.some(
                (column) =>
                    row[column]
                        .toString()
                        .toLowerCase()
                        .indexOf(query.toLowerCase()) > -1
            )
        );
    }

    const columns = users[0] && Object.keys(users[0]);
    return (
        <div className="container">
            <h3 className="text-center text-primary">Search table</h3>
            <div className="d-flex mb-4">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div>
                {columns &&
                    columns.map((column) => (
                        <label className="form-check-label">
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                checked={searchColumn.includes(column)}
                                onChange={(e) => {
                                    const checked =
                                        searchColumn.includes(column);
                                    setSearchColumn((prev) =>
                                        checked
                                            ? prev.filter((sc) => sc !== column)
                                            : [...prev, column]
                                    );
                                }}
                            />
                            {column}
                        </label>
                    ))}
            </div>

            <div>
                <Datatable data={search(users)} />
            </div>
        </div>
    );
}

export default App;
