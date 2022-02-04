function Question() {
    return (
        <div onClick={hideQuestion} className="question-box hide flex" id="question-box">
            <div id="full-screen-question" points="0">
                This is a question
            </div>
            
        </div>
    )
}

function hideQuestion() {
    const el = document.getElementById("question-box");
    el.classList.toggle("hide");
}

export default Question;