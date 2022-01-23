const memoForm = document.getElementById("memo-form");
const memoInput = document.querySelector("#memo-form input");
const memoList = document.getElementById("memo-list");

const MEMOS_KEY = "Memos";

let Memos = [];

function saveMemos(){
    localStorage.setItem(MEMOS_KEY, JSON.stringify(Memos));
}

function deleteMemo(event){
    const li = event.target.parentElement;
    li.remove();
    Memos = Memos.filter((Memo) => Memo.id !== parseInt(li.id));
    saveMemos();
}

function paintMemo(newMemo){
    const li = document.createElement("li");
    li.id = newMemo.id;
    const span = document.createElement("span");
    span.innerHTML = newMemo.text;
    const button = document.createElement("button");
    button.innerHTML = 'X';
    button.addEventListener("click", deleteMemo);
    li.appendChild(span);
    li.appendChild(button);
    memoList.appendChild(li);
}

function handleMemoSubmit(event){
    event.preventDefault();
    const newmemo = memoInput.value;
    memoInput.value = "";
    const newMemoObj = {
        id : Date.now(),
        text : newmemo,
    }
    Memos.push(newMemoObj);
    paintMemo(newMemoObj);
    saveMemos();
}

memoForm.addEventListener("submit", handleMemoSubmit);

const savedMemos = localStorage.getItem(MEMOS_KEY);

if(savedMemos !== null){
    const parsedMemos = JSON.parse(savedMemos);
    Memos = parsedMemos;
    parsedMemos.forEach(paintMemo);
}