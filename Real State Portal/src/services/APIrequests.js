import axios from "axios";

export async function getPropertiesFiltered(value) {
  const valueSplit = value.slice(1);
  console.log(valueSplit);
  var config = {
    method: "get",
    url: `http://localhost:3004/properties?${valueSplit}`,
    headers: {},
  };
  const result = await axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(result);
  return result;
}