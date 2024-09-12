export default function Header() {
    return (
        <header>

            <div className="header-content">
                <img src="src/assets/developer.jpg" alt="Me" />
                <div className="header-text">
                    <h1 className="header-name">Jan-Kristian Karlsen</h1>
                    <h3 className="header-job-title">Frontend developer</h3>
                    <a className="header-website-link">jan.krisitan.website</a>
                </div>
                <div className="header-socials">
                    <div className="button-content">
                        <button className="email button">
                            <img className="button-image" src="src/assets/Mail.png" alt="Mail icon" />
                            Email
                        </button>
                    </div>
                    <div className="button-content">
                        <button className="linkedin button">
                            <img className="button-image" src="src/assets/linkedin.png" alt="" />
                            LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}