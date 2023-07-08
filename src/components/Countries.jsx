import { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "./Spinner";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v2/all");
                setCountries(response.data);
                setFiltered(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getCountries();
    }, []);

    useEffect(() => {
        const filteredCountries = countries.filter(
            (country) =>
                country.name.toLowerCase().includes(input.toLowerCase()) ||
                (country.capital && country.capital.toLowerCase().includes(input.toLowerCase())) ||
                country.region.toLowerCase().includes(input.toLowerCase()) ||
                country.subregion.toLowerCase().includes(input.toLowerCase())
        );
        setFiltered(filteredCountries);
    }, [input, countries]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="mt-5 ">
            <div className="mb-5">
                <input
                    type="search"
                    className="form-control"
                    autoFocus
                    placeholder="Search a country, capital, or region..."
                    value={input}
                    onChange={handleInputChange}
                />
                {input.length > 0 && filtered.length !== 0 && (
                    <p className="text-muted mt-1">{filtered.length} countries found.</p>
                )}
            </div>
            {loading ? (
                <Spinner />
            ) : filtered.length === 0 ? (
                <p className="text-muted mt-1 text-center fs-4">No countries found.</p>
            ) : (
                <table className="table table-light border table-striped table-hover align-middle mt-1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Capital</th>
                            <th>Region</th>
                            <th>Flag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((country) => (
                            <tr key={country.name}>
                                <td>{country.name}</td>
                                <td>{country.capital ? country.capital : "-"}</td>
                                <td>{country.region}</td>
                                <td>
                                    <img
                                        src={country.flags.png}
                                        alt={country.name}
                                        style={{ width: "50px", maxHeight: "30px" }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Countries;
