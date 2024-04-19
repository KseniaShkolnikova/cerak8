alert("Крутой калькулятор ура ")
while (true){
    let vibor = prompt(" Выберите, что хотите сделать:\n  1. Сложить \n  2. Вычитание \n  3. Умножение \n  4. Разделить \n  5. Возыести в квадрат \n  6. Найти корень \n  7. Выйти ")
    switch (vibor){
        case "1":
            let pervoe = prompt(" Введите первое число")
            let vtoroe = prompt(" Введите второе число")
            alert(" Ответ: "+ (parseFloat(pervoe)+ parseFloat(vtoroe)))
            break
        case "2":
            let pervoe1 = prompt(" Введите первое число")
            let vtoroe1 = prompt(" Введите второе число")
            alert(" Ответ: "+(parseFloat(pervoe1)- parseFloat(vtoroe1)))
            break
        case "3":
            let pervoe2 = prompt(" Введите первое число")
            let vtoroe2 = prompt(" Введите второе число")
            alert(" Ответ: "+(parseFloat(pervoe2)* parseFloat(vtoroe2)))
            break
        case "4":
            let pervoe3 = prompt(" Введите первое число")
            let vtoroe3 = prompt(" Введите второе число")
            if (vtoroe3 === "0"){
                alert(" нельзя на 0\n кринж 😎😎😎😎😎😎😎😎😎😎😎😎😎")
            }
            else {
                alert(" Ответ: "+(parseFloat(pervoe3)/ parseFloat(vtoroe3)))
            }
            break
        case "5":
            let chiclo = prompt(" Введите число")
            alert(" Ответ: "+(parseFloat(chiclo)* parseFloat(chiclo)))
            break
        case "6":
            let chiclo1 = prompt(" Введите целое число")
            alert(" Ответ: "+(Math.sqrt(parseFloat(chiclo1))))
            break
        case "7":
            process.exit(0)
            break
        default:
            alert(" Нужно вводить вариант ответа 🙄")
            break

    }
}