const fs = require('fs');


const add = (title, body) => {

    let itemList = [];

    try {
        itemList = JSON.parse(fs.readFileSync('itemList.json'));
    } catch (e) {
        // console.log(e)
    }
    let index = itemList.findIndex((x) => x.title == title);
    if (index == -1) {
        itemList.push({ title, body });
        console.log(itemList);
    } else {

        console.log("Title already taken!");
    }

    fs.writeFileSync("itemList.json", JSON.stringify(itemList));

}

const remove = (title) => {
    let itemList = [];
    try {
        itemList = JSON.parse(fs.readFileSync('itemList.json'));
    } catch (e) {
        // console.log(e)
    }

    const filteredList = itemList.filter((x) => x.title !== title);
    fs.writeFileSync("itemList.json", JSON.stringify(filteredList));


}

const list = () => {
    let itemList = [];
    try {
        itemList = JSON.parse(fs.readFileSync('itemList.json'));
    } catch (e) {
        // console.log(e)
    }
    console.log(itemList);


}


const read = (title) => {
    let itemList = [];
    try {
        itemList = JSON.parse(fs.readFileSync('itemList.json'));
    } catch (e) {
        // console.log(e)
    }
    let index = itemList.findIndex((x) => x.title == title);
    if (index !== -1) {

        console.log(`itemsOf ${title}${""} are ${""}${itemList[index].body}`)
    }



}




module.exports = {
    add,
    remove,
    list,
    read
}