const Header = () => {
    return (
        <header className="navbar">
            <div className="mb-2">
                <a href="https://www.fintechyazilim.com/" target="_blank" rel="noreferrer">
                    <img src="/fintech.svg" alt="logo" className="img-fluid" style={{ width: "150px" }} />
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
                        className="nav-link link-primary"
                    >
                        LinkedIn
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="https://github.com/fatiharapoglu"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link link-primary"
                    >
                        GitHub
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://fatiharapoglu.dev" target="_blank" rel="noreferrer" className="nav-link link-primary">
                        Portfolio
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
