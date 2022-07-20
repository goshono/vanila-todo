import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの中身取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createDoingList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromDoingList = (target) => {
  document.getElementById("doing-list").removeChild(target);
};

// 未完了リストに追加
const createDoingList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンのdivを未完了リストから削除
    deleteFromDoingList(completeButton.parentNode);

    // 完了したToDoに追加
    const doneTarget = completeButton.parentNode;
    const text = doneTarget.firstElementChild.innerText;
    doneTarget.textContent = null; // div内の要素を初期化

    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタン生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      // 押された戻すボタンの親(div)要素から削除
      const returnTarget = returnButton.parentNode;
      document.getElementById("done-list").removeChild(returnTarget);

      const text = returnTarget.firstElementChild.innerText;
      createDoingList(text);
    });

    // divの子要素を設定
    doneTarget.appendChild(li);
    doneTarget.appendChild(returnButton);

    document.getElementById("done-list").appendChild(doneTarget);
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンのdivを未完了リストから削除
    deleteFromDoingList(deleteButton.parentNode);
  });

  // divの子要素にliを追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // ulの子要素にdivを追加
  document.getElementById("doing-list").appendChild(div);
};
document.getElementById("ActAdd").addEventListener("click", () => onClickAdd());
