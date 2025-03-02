import "../style/Main.css"

const Main = () => {
    return (
        <div className="Main">
            <div className="mainWrapper">
                <div className="templatesWrapper">
                    <h1>Check out our templates</h1>
                    <div className="templates">
                        <div className="templateItem">
                            <div className="template">Lab portfolio</div>
                            <p className="description">Lab portfolio</p>
                        </div>
                        <div className="templateItem">
                            <div className="template">Store</div>
                            <p className="description">Store</p>
                        </div>
                        <div className="templateItem">
                            <div className="template">Que managment</div>
                            <p className="description">Que managment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Main;