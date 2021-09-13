var infTitle = document.getElementById("title")
var infText = document.getElementById("text")
var buttons = document.querySelectorAll("button")
var pop_menu = document.getElementById("pop_menu")
var news = ["Ванга предсказала это!!! Чтобы стать видеть мир своими глазами, нужно всего лишь...", "Экономика Зимбабве насчитывает уже 100 бегемотов", "Тут должно быть что-то, но я не придумал (404)"]
pop_menu.addEventListener("click", turnOffPop_Menu)
for(let i=0; i <= buttons.length;i++)
{
    
    buttons[i].value = i+1;
    buttons[i].addEventListener("click", function() {
        makeText(this.value)
    })
}

function makeText(value)
{
    infTitle.textContent = `Новость ${value}`
    infText.textContent = `Новость ${value}: ` + news[value-1]
    pop_menu.classList.toggle("pop_menu_active")
}

function turnOffPop_Menu()
{
    pop_menu.classList.toggle("pop_menu_active")
}