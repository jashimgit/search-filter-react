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
        const columns = rows[0] && Object.keys(rows[0]);
        return rows.filter((row) =>
            columns.some(
                (column) =>
                    row[column]
                        .toString()
                        .toLowerCase()
                        .indexOf(query.toLowerCase()) > -1
            )
        );
    }
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
                <Datatable data={search(users)} />
            </div>
        </div>
    );
}

export default App;
