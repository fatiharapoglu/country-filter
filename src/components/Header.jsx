const Header = () => {
    return (
        <header className="navbar">
            <div className="mb-2">
                <a href="https://fatiharapoglu.dev/" target="_blank" rel="noreferrer">
                    <img src="/logo.png" alt="logo" className="img-fluid" style={{ width: "50px" }} />
                </a>
                <span
                    className="fw-light d-inline-block"
                    style={{ letterSpacing: "2px", transform: "translate(25px, 15px)" }}
                >
                    Country Filter App
                </span>
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <a
                        href="https://www.linkedin.com/in/fatiharapoglu/"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link link-dark fw-bold"
                    >
                        LinkedIn
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="https://github.com/fatiharapoglu"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link link-dark fw-bold"
                    >
                        GitHub
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="https://fatiharapoglu.dev"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link link-dark fw-bold"
                    >
                        Portfolio
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
