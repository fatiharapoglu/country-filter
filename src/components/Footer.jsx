const Footer = () => {
    return (
        <footer className="mt-5 mb-2 text-center">
            Created by{" "}
            <a
                href="https://fatiharapoglu.dev"
                target="_blank"
                rel="noreferrer"
                className="link-dark fw-bold link-underline-opacity-0 link-underline-opacity-100-hover"
            >
                Fatih Arapoğlu
            </a>{" "}
            for{" "}
            <a
                href="https://www.fintechyazilim.com/"
                target="_blank"
                rel="noreferrer"
                className="link-dark fw-bold link-underline-opacity-0 link-underline-opacity-100-hover"
            >
                Fintech Yazılım
            </a>{" "}
            at the date of 8/7/23.
            <br />
            <a
                href="https://github.com/fatiharapoglu/country-filter"
                target="_blank"
                rel="noreferrer"
                className="link-dark fw-bold link-underline-opacity-0 link-underline-opacity-100-hover"
            >
                Source Code
            </a>{" "}
        </footer>
    );
};

export default Footer;
