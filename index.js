
function newImage(url, left, bottom) {
    let parameters = document.createElement('img')
    parameters.src = url
    parameters.style.position = 'fixed'
    parameters.style.left = left + 'px'
    parameters.style.bottom = bottom + 'px'
    document.body.append(parameters)
    return parameters
}

function newItem(url, left, bottom) {
    let item = newImage(url, left, bottom)

    item.addEventListener('dblclick', function () {
        item.remove()
    })

}

newImage('assets/green-character.gif',100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

