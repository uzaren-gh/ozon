const getData = () => {
    return fetch('https://testproject-5dde0-default-rtdb.firebaseio.com/goods.json')
        .then(response => response.json());



}

export default getData