function Gamers({ gamers }) {
    let i=1;
    return (
        <div className="gamers">
            {gamers.map((gamer) => {
            return <div className="gamer" id={`gamer${i}`}>
                <div onClick={minusPoints.bind(this)} className="gamer-name" gamer={`gamer${i}`}>{gamer}</div>
                <div onClick={plusPoints.bind(this)} className="gamer-point" gamer={`gamer${i++}`} points="0">0</div>
            </div>
            }) }
        </div>
    )
}

function minusPoints({ target }) {
    const gamer = document.getElementById(target.getAttribute("gamer"))
    const questionPoints = parseInt(document.getElementById("full-screen-question").getAttribute('points'));
    const gamerPoints = gamer.querySelector(".gamer-point");
    const pointsBefore = parseInt(gamerPoints.getAttribute('points'))
    const newPoints = pointsBefore - questionPoints;
    gamerPoints.textContent = newPoints
    gamerPoints.setAttribute('points', newPoints);
}

function plusPoints({ target }) {
    const gamer = document.getElementById(target.getAttribute("gamer"))
    const questionPoints = parseInt(document.getElementById("full-screen-question").getAttribute('points'));
    const gamerPoints = gamer.querySelector(".gamer-point");
    const pointsBefore = parseInt(gamerPoints.getAttribute('points'))
    const newPoints = pointsBefore + questionPoints;
    gamerPoints.textContent = newPoints
    gamerPoints.setAttribute('points', newPoints);
}

export default Gamers;