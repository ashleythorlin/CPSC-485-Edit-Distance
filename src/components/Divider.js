import '../App.css';

function Divider() {
    return (
        <div className="divider" style={{
            alignItems: "center", 
            display: "flex"
            }}>
            <hr
              style={{
                background: "#67D5FF",
                height: "2px",
                border: "none",
                width: 600,
                margin: "20px 0px",
                alignSelf: "center"
              }}
            />
          </div>
    )
}

export default Divider