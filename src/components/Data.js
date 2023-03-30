import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const Data = () => {
    const [datas, setDatas] = useState([]);
    const KEY = "0bae436c47f844778de52c25357e300c";

    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&apiKey=0bae436c47f844778de52c25357e300c"
        )
            .then((res) => res.json())
            .then((data) => setDatas(data.articles))
            .catch((erros) => console.log(erros));
    }, []);

    return (
        <>
            <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2">
                {datas.map((data, index) => {
                    // return <li key={index}>{data.title}</li>;
                    return <NewsCard key={index} data={data} />;
                })}
            </div>
        </>
    );
};

export default Data;
