import React from "react";

function List({ people }) {
  return (
    <>
      {people.map((person) => {
        const { age, name, id, img } = person;
        return (
          <article className="person">
            <img src={img} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} Years</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
