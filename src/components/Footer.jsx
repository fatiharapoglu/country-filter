const Footer = () => {
    return (
        <footer className="mt-5 mb-2 text-center lead">
            Created by{" "}
            <a
                href="https://fatiharapoglu.dev"
                target="_blank"
                rel="noreferrer"
                className="link-primary link-underline-opacity-0"
            >
                Fatih Arapoğlu
            </a>{" "}
            for{" "}
            <a
                href="https://www.fintechyazilim.com/"
                target="_blank"
                rel="noreferrer"
                className="link-primary link-underline-opacity-0"
            >
                Fintech Yazılım
            </a>{" "}
            at the date of 8/7/23.
            <br />
            <a
                href="https://github.com/fatiharapoglu/fintech"
                target="_blank"
                rel="noreferrer"
                className="link-primary link-underline-opacity-0"
            >
                Source Code
            </a>{" "}
        </footer>
    );
};

export default Footer;
