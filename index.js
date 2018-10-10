const menuArea = document.querySelector("#menu-area")
const entrees = document.querySelector("#entrees")
const desserts = document.querySelector("#desserts")
const menuEnd = document.querySelector("#menu-end")

dishes.forEach(dish => {
    const newItemDiv = document.createElement('div')
    const newItemImage = document.createElement('div')
    const newItemTextArea = document.createElement('div')
    const newItemTitle = document.createElement('h3')
    const newItemDesc = document.createElement('p')
    const newItemPrice = document.createElement('p')
    
    newItemDiv.classList.add('item')
    newItemImage.classList.add('item-image')
    newItemTextArea.classList.add('item-text')
    newItemDesc.classList.add('item-description')
    newItemPrice.classList.add('price')

    newItemImage.style.backgroundImage = `url('${dish.imageURL}')`
    newItemTitle.innerHTML = dish.title
    newItemPrice.innerHTML = dish.price
    newItemDesc.innerHTML = dish.description

    newItemDiv.appendChild(newItemImage)
    newItemTextArea.appendChild(newItemTitle)
    newItemTextArea.appendChild(newItemDesc)
    newItemDiv.appendChild(newItemTextArea)
    newItemDiv.appendChild(newItemPrice)
    
    if(dish.course == "Starters"){
        menuArea.insertBefore(newItemDiv,entrees)
    }
    else if(dish.course == "Entrees"){
        menuArea.insertBefore(newItemDiv,desserts)
    }
    else{
        menuArea.insertBefore(newItemDiv,menuEnd)
    }
})