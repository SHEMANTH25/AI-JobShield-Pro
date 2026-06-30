function StatCard({ title, value, color, icon }) {
    return (
        <div
            className="card"
            style={{
                padding: "25px",
                minWidth: "240px",
                textAlign: "center",
                transition: ".3s"
            }}
        >
            <div
                style={{
                    fontSize: "42px"
                }}
            >
                {icon}
            </div>

            <h2
                style={{
                    color: color,
                    marginTop: "10px"
                }}
            >
                {value}
            </h2>

            <h5
                style={{
                    color: "#CBD5E1"
                }}
            >
                {title}
            </h5>
        </div>
    );
}

export default StatCard;