import React, { useContext } from "react";
import { Context } from "../index";
import Loader from "./Loader";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";


const Products = () => {
  const { fireStore } = useContext(Context);

  const [productsList, loading] = useCollectionData(
    collection(fireStore, "products")
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {productsList.map((product) => (
        <div key={product.id}
            style={{border: '2px solid green'}}
        >
          <div>{product.name}</div>
          <div>{product.description}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Products;
