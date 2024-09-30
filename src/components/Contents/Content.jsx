import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { allArticles } from "../../queries/allArticles";
import s from "./Content.module.scss";

export const Content = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allArticles"],
    queryFn: async () =>
      request(
        "https://eu-west-2.cdn.hygraph.com/content/cm1omm29a04rh07uxvrzowh0r/master",
        allArticles
      ),
  });
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error {error.message}</p>;
  }

  const formatDate = (dateString) => {
    try {
      const dateParts = dateString.split(/[-T :]/);
      if (dateParts.length >= 3) {
        const day = String(dateParts[2]).padStart(2, "0");
        const month = String(dateParts[1]).padStart(2, "0");
        const year = dateParts[0];
        return `${day}/${month}-${year}`;
      }
      return "Invalid date";
    } catch {
      return "Invalid date";
    }
  };

  return (
    <>
      <div className={s.contentStyle}>
        {data?.articles.map((item) => {
          console.log("Published Date:", item.published);
          return (
            <article className={s.articleStyle} key={item.id}>
              <h2>{item.heading}</h2>
              <span className={s.articleInfo}>
                <p>{formatDate(item.published)}</p>
                <p>{item.author}</p>
              </span>
              <a href="#">Læs mere</a>
              <img src={item.image?.[0]?.url || ""} alt={item.heading} />
            </article>
          );
        })}
      </div>
    </>
  );
};
