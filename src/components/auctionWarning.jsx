function AuctionWarning() {
    return (
        <div onClick={offWarning.bind(this)} className="auction-warning hide" id='auction-warning'>
            <div>
                Аукцион!!!!
            </div>
        </div>
    )
}

function offWarning(obj) {
    document.getElementById('auction-warning').classList.toggle('hide');
}
export default AuctionWarning;