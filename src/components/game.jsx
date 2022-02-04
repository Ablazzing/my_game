import Auction from "./auction";

import Gamers from "./gamers";

function GameTable({ gameData, round, gamers }) {
    let i = 1;
    let id = 1;
    return (
        <div>            
            <Auction />
            <table className="game-table" round={round}>
                {Object.keys(gameData[`game${round}`]).map((topic) => {
                    i = 1;
                    return <tr>
                        <td className="topic">
                            {topic}
                        </td>
                        {
                            gameData[`game${round}`][topic].map((question) => {
                                return <td onClick={rotateQuestion.bind(this)} id={id++} 
                                question={question.questionText} 
                                className="question" 
                                points={100 * round * i}
                                isauction={question.auction === undefined ? 'false' : 'true'}
                                >
                                    {100 * round * i++}
                                </td>
                            })}
                    </tr>
                })}
            </table>
            <Gamers gamers={gamers}/>
        </div>
    )
}

function rotateQuestion({ target }) {
    

    const el = document.getElementById(target.id);
    if (el.getAttribute("isauction") ==='true') {
        document.getElementById('auction').classList.toggle('hide');
        document.getElementById('auction-warning').classList.toggle('hide');
        el.innerText = "";
    } else {
        const questionBox = document.getElementById("question-box");
        const fullQuestion = document.getElementById("full-screen-question");
        el.innerText = "";
        questionBox.classList.toggle("hide");
        fullQuestion.innerText = el.getAttribute("question");
        fullQuestion.setAttribute("points", el.getAttribute("points"));
    }


}

export default GameTable;