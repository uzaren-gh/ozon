import getData from "./getData.js";
import postData from "./postData.js";

const second = () => {
    const cardBtn = document.getElementById('cart');

    getData().then((data) => console.log(data));


}

export default second