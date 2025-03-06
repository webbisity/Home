import "../style/Main.css"

const Main = () => {
    return (
        <div className="Main">
            <div className="mainWrapper">
                <div className="templatesWrapper">
                    <h1>Check out our templates</h1>
                    <div className="templates">
                        <div className="templateItem">
                            <a className="template" target="_blank" href="https://webbisity.github.io/lab-template/">
                                <p>Lab portfolio</p>
                            </a>
                            <p className="description">Lab portfolio</p>
                        </div>
                        <div className="templateItem">
                            <a className="template" target="_blank" href="https://webbisity.github.io/schedule-template/">
                                <p>Schedule</p>
                            </a>
                            <p className="description">Schedule</p>
                        </div>
                        <div className="templateItem">
                            <a className="template" target="_blank" href="https://webbisity.github.io/store-template/">
                                <p>Store</p>
                            </a>
                            <p className="description">Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Main;