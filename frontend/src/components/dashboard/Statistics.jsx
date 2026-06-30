import StatCard from "./StatCard";

function Statistics() {

    return (

        <div className="container mb-5">

            <h2
                className="text-center mb-5"
                style={{
                    color:"#38BDF8"
                }}
            >
                Platform Statistics
            </h2>

            <div
                className="row g-4 justify-content-center"
            >

                <div className="col-lg-3 col-md-6">

                    <StatCard

                        title="Text Analysis"

                        value="0"

                        color="#38BDF8"

                        icon="📝"

                    />

                </div>

                <div className="col-lg-3 col-md-6">

                    <StatCard

                        title="PDF Analysis"

                        value="0"

                        color="#22C55E"

                        icon="📄"

                    />

                </div>

                <div className="col-lg-3 col-md-6">

                    <StatCard

                        title="Image Analysis"

                        value="0"

                        color="#F59E0B"

                        icon="🖼"

                    />

                </div>

                <div className="col-lg-3 col-md-6">

                    <StatCard

                        title="URL Analysis"

                        value="0"

                        color="#EF4444"

                        icon="🌐"

                    />

                </div>

            </div>

        </div>

    );

}

export default Statistics;