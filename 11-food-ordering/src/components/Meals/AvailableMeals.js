import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useHttp from "../../hooks/use-http";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const apiUrl =
    "https://react-http-a01bf-default-rtdb.firebaseio.com/meals.json";

  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    fetchMeals(
      {
        url: apiUrl,
        // method: "POST",
        // body: { title: movie.title },
        // headers: {
        //   "Content-Type": "application/json",
        // },
      },
      setMeals
    );
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content = <p className={classes.mealsloading}>Found no meals.</p>;
  if (!isLoading) {
    if (meals.length > 0) {
      content = (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      );
    } else if (error) {
      content = <p className={classes.mealsloading_failed}>{error}</p>;
    }
  } else {
    content = (
      <section>
        <p className={classes.mealsloading}>Loading...</p>
      </section>
    );
  }

  return <section className={classes.meals}>{content}</section>;
}
