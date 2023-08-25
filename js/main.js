let inpModalName = document.querySelector(".inp-edit-name");
let inpModalJob = document.querySelector(".inp-edit-job");
let inpModalImg = document.querySelector(".inp-edit-img");
let btnModalSave = document.querySelector(".btn-save");
let imgAdd = document.querySelector("#add");
let modalDiv = document.querySelector(".main-modal");
let btnClose = document.querySelector(".btn-closer");
let modalForm = document.querySelector("#modalForm");
let cards = document.querySelector(".cards");
let cards2 = document.querySelector(".cards2");

readFunc(); //вызываем функцию отображения глобально
// Create
imgAdd.addEventListener("click", () => {
  //навесили событие на иконку добавить
  modalDiv.style.display = "block";
});
modalForm.addEventListener("submit", (event) => {
  //сохраниет данные и отправляет их в локалсторейж
  event.preventDefault(); //чтобы страница не обновлялась при нажатии на кнопку

  if (
    !inpModalName.value.trim() ||
    !inpModalJob.value.trim() ||
    !inpModalImg.value.trim()
  ) {
    alert("Заполните все данные"); //проверка на заполнение инпутов
  } else {
    let obj = {
      name: inpModalName.value,
      job: inpModalJob.value,
      image: inpModalImg.value,
    }; //добавляет обьект с данныит  ключасми

    function setItemToStorage(a) {
      //функция добавления
      let data = JSON.parse(localStorage.getItem("people")) || [];
      data.push(a);
      localStorage.setItem("people", JSON.stringify(data));
    }
    setItemToStorage(obj); // вызов функции добавления
    readFunc(); //вызов функции отображения

    inpModalImg.value = ""; // чтобы очистить инпуты
    inpModalJob.value = "";
    inpModalName.value = "";

    modalDiv.style.display = "none"; //закрытие модалки пасле сохранения
  }
});

btnClose.addEventListener("click", () => {
  //событие на кнопку X закрывает при нажатии которой модалка закрывается
  modalDiv.style.display = "none";
});

// READ;//функция отображения
function readFunc() {
  if (!localStorage.getItem("people")) {
    //есди там нет 'people' то добавь его как массив
    localStorage.setItem("people", "[]");
  }

  let data = JSON.parse(localStorage.getItem("people")); //вытаскиваем "people" ,присваиваем к переменной data
  cards2.innerHTML = ""; //присваиваем пустоту
  data.forEach((elem, index) => {
    cards2.innerHTML += `
    <div class="person">
          <div class="imgPerson">
            <div class="card-image">
            <img src="${elem.image}" alt="image">

            </div>
            <div class="card-description">
              <h3>${elem.name}</h3>
              <h3>${elem.job}</h3>
            </div>
            <button class="btn1Edit" onclick = "editFunc(${index})">Edit</button>
            <button class="btn1Delete" onclick = "deleteFunc(${index})">Delete</button>
          </div>
        </div>

    `; //присвоили данамически значения для card2(новая карточка)
  });
}

//DELETE// функция Удаления
function deleteFunc(index) {
  let data = JSON.parse(localStorage.getItem("people"));
  data.splice(index, 1);
  localStorage.setItem("people", JSON.stringify(data));
  readFunc(); //вызов функции отображения
}

// Edit//Редактирование
let modalDiv2 = document.querySelector(".main-modal2");
let inpModalName2 = document.querySelector(".inp-edit-name2");
let inpModalJob2 = document.querySelector(".inp-edit-job2");
let inpModalImg2 = document.querySelector(".inp-edit-img2");
let btnModalSave2 = document.querySelector(".btn-save2");
let btnClose2 = document.querySelector(".btn-closer2");
let modalForm2 = document.querySelector("#modalForm2");

function editFunc(index) {
  //Функция редактирования
  modalDiv.style.display = "none"; //закрывает первую модалку
  modalDiv2.style.display = "block"; //открывает вторую модалку
  let data = JSON.parse(localStorage.getItem("people")); //
  inpModalName2.value = data[index].name;
  inpModalName2.setAttribute("data-index", index);
  inpModalJob2.value = data[index].job;
  inpModalJob2.setAttribute("data-index", index);
  inpModalImg2.value = data[index].image;
  inpModalImg2.setAttribute("data-index", index);
}

btnClose2.addEventListener("click", () => {
  modalDiv2.style.display = "none"; // закрывает модалку2
});

btnModalSave2.addEventListener("click", (event) => {
  event.preventDefault(); //чтобы  страница не обновлялась
  //   modalForm.style.display = "none";
  if (
    !inpModalName2.value.trim() ||
    !inpModalJob2.value.trim() ||
    !inpModalImg2.value.trim()
  ) {
    alert("Заполните все данные"); //проверка на содержимость инпутов
  } else {
    let index = inpModalName2.getAttribute("data-index"); // получает значение "data-index" элемента с id "inpModalName2"
    let data = JSON.parse(localStorage.getItem("people")); //извлекает данные из локального хранилища браузера по ключу "people"

    //присваем измененные данные
    data[index].name = inpModalName2.value;
    data[index].job = inpModalJob2.value;
    data[index].image = inpModalImg2.value;

    localStorage.setItem("people", JSON.stringify(data)); //положили данные(преобразовали в JSON формат)

    readFunc(); //вызов функции отображения
    modalDiv2.style.display = "none"; //закрываем модалку2 принажатии на кнопку
  }
});

// Create 2//то же самое заклинание делаем тут
let inpModalTitle = document.querySelector(".inp-edit-title");
let inpModalText = document.querySelector(".inp-edit-text");
let btnModalSave3 = document.querySelector(".btn-save3");
let modalDiv3 = document.querySelector(".main-modal3");
let btnClose3 = document.querySelector(".btn-closer3");
let modalForm3 = document.querySelector("#modalForm3");
let imgAdd2 = document.querySelector("#add-p");
let blockInfo2 = document.querySelector(".block-info2");

readFunc2(); // вызываем функцию отображения глобально
imgAdd2.addEventListener("click", () => {
  // навесили событие на иконку добавления выпускника
  modalDiv3.style.display = "block"; // при нажатии display модального окна меняется с none на block
});
modalForm3.addEventListener("submit", (event) => {
  // Кнопка сохраняет данные и отправляет и отправляет их в local storage
  event.preventDefault(); // Это нужно, чтобы страница не обновлялась при нажатии на кнопку
  if (!inpModalTitle.value.trim() || !inpModalText.value.trim()) {
    // Это идет проверка, на заполнении инпутов
    alert("Заполните все данные");
  } else {
    let obj = {
      title: inpModalTitle.value,
      text: inpModalText.value,
    }; // добавляет объект со значениями введенными в инпуты

    function setItemToStorage2(a) {
      // создаем функцию отправки значений на localStorage
      let data = JSON.parse(localStorage.getItem("paragraph")) || []; // мы берем данные с localStorage в виде массива
      data.push(a); // Пушим эти данные в наш объект
      localStorage.setItem("paragraph", JSON.stringify(data)); // мы отправляем введенные данные обратно в localStorage, преобразовывая их
    }
    setItemToStorage2(obj); //вот отправление
    readFunc2();

    inpModalTitle.value = ""; //чтобы подефолту они были пустыми
    inpModalText.value = "";

    modalDiv3.style.display = "none"; //закрытие модального ока после преобразовывания
  }
});

btnClose3.addEventListener("click", () => {
  modalDiv3.style.display = "none"; // Чтобы закрыть модалку
});

// READ 2
function readFunc2() {
  // Создаем функцию отображения
  if (!localStorage.getItem("paragraph")) {
    // Если там нет ключа people
    localStorage.setItem("paragraph", "[]"); //то добавь ключ people
  }

  let data = JSON.parse(localStorage.getItem("paragraph")); //После добавления мы его вытаскиваем и присваиваем к переменной data
  blockInfo2.innerHTML = ""; // По дефолту делаем его пустым
  data.forEach((elem, index) => {
    //Мы его перебираем
    blockInfo2.innerHTML += `
    <h4>${elem.title}</h4>
    <p>
              ${elem.text}
    </p>
    <br>
    <button class="btn1Edit" onclick = "editFunc2(${index})">Edit</button>
    <button class="btn1Delete" onclick = "deleteFunc2(${index})">Delete</button>
    <hr />

    `;
    //Присвоили динамически значения для card2(новая карточка)
  });
}

//DELETE 2
function deleteFunc2(index) {
  //функция удаления
  let data = JSON.parse(localStorage.getItem("paragraph"));
  data.splice(index, 1);
  localStorage.setItem("paragraph", JSON.stringify(data));
  readFunc2(); //Вызов функции отображения
}

//Edit 2
let inpModalTitle2 = document.querySelector(".inp-edit-title2");
let inpModalText2 = document.querySelector(".inp-edit-text2");
let btnModalSave4 = document.querySelector(".btn-save4");
let modalDiv4 = document.querySelector(".main-modal4");
let btnClose4 = document.querySelector(".btn-closer4");
let modalForm4 = document.querySelector("#modalForm4");

function editFunc2(index) {
  modalDiv2.style.display = "none";
  modalDiv3.style.display = "none"; // Close the paragraphs edit modal
  modalDiv4.style.display = "block"; // Open the paragraphs edit modal
  let data = JSON.parse(localStorage.getItem("paragraph"));
  inpModalTitle2.value = data[index].title;
  inpModalTitle2.setAttribute("data-index", index);
  inpModalText2.value = data[index].text;
  inpModalText2.setAttribute("data-index", index);
}

btnClose4.addEventListener("click", () => {
  modalDiv4.style.display = "none"; //
});

btnModalSave4.addEventListener("click", (event) => {
  event.preventDefault();
  //   modalForm.style.display = "none"; //
  if (!inpModalTitle2.value.trim() || !inpModalText2.value.trim()) {
    alert("Заполните все данные");
  } else {
    let index = inpModalTitle2.getAttribute("data-index"); // Use a single index variable
    let data = JSON.parse(localStorage.getItem("paragraph"));

    // Update the data array directly
    data[index].title = inpModalTitle2.value;
    data[index].text = inpModalText2.value;

    localStorage.setItem("paragraph", JSON.stringify(data));

    readFunc2();
    modalDiv4.style.display = "none";
  }
});
