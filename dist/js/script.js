const menuWrap = document.querySelector(".header__inner");
const menu = document.querySelector("[data-burger]");

if (window.innerWidth < 769) {
  showBurger();
}

function showBurger() {
  /*Процесс отрисовки кнопки бургера*/
  let burgerWrap = document.createElement("div");//Рисуем блок див
  burgerWrap.classList.value = "burger__wrap";// Блоку даем класс burger_wrap
  let burger = document.createElement("div");//Рисуем блок div
  burger.classList.value = "burger";//Даем блоку класс burger
  burgerWrap.append(burger);//Вкладывем burger в блок burger__wrap
  let burgerLine = document.createElement("span");//Создаем элемент span
  burgerLine.classList.value = "burger__line";//Добавляем класс burger__line для span
  burger.append(burgerLine);//Вкладываем span в burger
  menuWrap.prepend(burgerWrap);//полученную конструкцию вкладываем в обертку menuWrap
  /*Процесс отрисовки кнопки бургера*/

  menu.classList.value += ' hide'

  document.querySelector(".burger__wrap").addEventListener("click", () => {
    let position = document.querySelector('.header').clientHeight
    console.log(position)
    menu.style.top = `${position-2}px`

    let container = document.querySelector('.container').clientWidth
    console.log(container)
    menu.style.padding = `0 0 0 ${(window.innerWidth-container+40)/2}px`
    document.querySelector(".burger__line").classList.toggle("active");
    menu.classList.toggle('hide')
  });
}

function hideBurger() {
  document.querySelector(".burger__wrap").remove();
  menu.classList.remove('hide')
}

window.onresize = () => {
  if (window.innerWidth < 769) {
    if (!document.querySelector(".burger__wrap")) {
     showBurger();
    }
  } 
  else {
    if (document.querySelector(".burger__wrap")) {
      hideBurger();
    }
  }
};
