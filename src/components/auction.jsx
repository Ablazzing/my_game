function Auction() {
    return (
    <div id='auction' className="hide">
        <label for='auctionInput'>Аукцион</label>
        <input placeholder="0" id='auctionInput'/>
        <button onClick={changePoints} className="auc-submit">Подтвердить</button>
    </div>
    )
}

function changePoints() {
    const question = document.getElementById('full-screen-question')
    const points = document.getElementById('auctionInput').value;
    question.setAttribute("points", points)
    document.getElementById('auction').classList.toggle('hide');
}

export default Auction;