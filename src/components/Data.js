import { Skeleton } from "@mui/material";
import React, { lazy, Suspense, useEffect, useState } from "react";
// import NewsCard from "";
const NewsCard = lazy(() => import("./NewsCard"));

const Data = () => {
    const [datas, setDatas] = useState([]);
    const KEY = "0bae436c47f844778de52c25357e300c";
    const tabSkelleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
                {
                    datas.length === 0
                        ? tabSkelleton.map((tab, index) => {
                              return (
                                  <div className="w-[350px] mx-auto mt-2  h-auto">
                                      <div className="rounded-lg news-card">
                                          <Skeleton
                                              variant="rect"
                                              width={350}
                                              height={200}
                                              animation="wave"
                                          />
                                          <div className="py-5 pl-5 rounded-lg">
                                              <Skeleton
                                                  variant="rect"
                                                  width={350}
                                                  height={30}
                                                  animation="wave"
                                              ></Skeleton>
                                          </div>
                                      </div>
                                  </div>
                              );
                          })
                        : datas.map((data, index) => {
                              return (
                                  <Suspense
                                      fallback={
                                          <div className="w-[350px] mx-auto mt-2  h-auto">
                                              <div className="rounded-lg news-card">
                                                  <Skeleton
                                                      variant="rect"
                                                      width={350}
                                                      height={200}
                                                      animation="wave"
                                                  />
                                                  <div className="py-5 pl-5 rounded-lg">
                                                      <Skeleton
                                                          variant="rect"
                                                          width={350}
                                                          height={30}
                                                          animation="wave"
                                                      ></Skeleton>
                                                  </div>
                                              </div>
                                          </div>
                                      }
                                  >
                                      <NewsCard key={index} data={data} />
                                  </Suspense>
                              );
                          })
                    // </div>
                }
            </div>
        </>
    );
};

export default Data;
