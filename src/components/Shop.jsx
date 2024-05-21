import React from 'react';
import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./preloader";
// import { GoodsList } from "./goodsList";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);


    

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => {
                console.log(response);
                response.json();
            })
            .then((result) => console.log(result))
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
                console.log(data);
                // console.log(API_KEY);
            }).catch((error) => console.error(error));

    }, []);
    return <main className="container content">{loading ? <Preloader /> : goods}</main>;
}
export { Shop };


// import { useState, useEffect } from "react";
// import { API_KEY, API_URL } from "../config";
// import { Preloader } from "./preloader";
// import { GoodsList } from "./goodsList";

// function Shop() {
//     const [goods, setGoods] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const myHeaders = new Headers();
//     myHeaders.append("Authorization", API_KEY);


//     const requestOptions = {
//         method: "GET",
//         headers: myHeaders,
//         redirect: "follow"
//     };


//     useEffect(function getGoods() {
//         fetch(API_URL, {
//             headers: {
//                 Authorization: API_KEY,
//             },
//         })
//             .then((response) => response.text())
//             .then((result) => console.log(result))
//             .then((data) => {
//                 data.featured && setGoods(data.featured);
//                 setLoading(false);
//             })
//             .catch((error) => console.error(error));
//     }, []);
//     return <main className="container content">{loading ? <Preloader /> : goods}</main>;
// }
// export { Shop };
