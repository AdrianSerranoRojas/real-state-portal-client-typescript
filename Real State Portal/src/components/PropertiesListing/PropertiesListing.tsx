import React from "react";
import { useSelector } from "react-redux";
import { filterSelector } from "../../features/Filter/FilterSlice";

import PropertieCard from "../PropertieCard";

function PropertiesListing({ ...props }) {
  const { realProperties } = useSelector(filterSelector);
  console.log(realProperties);

  return (
    <section className="row" {...props}>
      {realProperties != undefined &&
        realProperties.map((realPropertie) => (
          <PropertieCard
            key={realPropertie.id.toString()}
            id={realPropertie.id}
            description={realPropertie.description}
            city={realPropertie.city}
            img={realPropertie.img}
          />
        ))}
    </section>
  );
}

export default PropertiesListing;
