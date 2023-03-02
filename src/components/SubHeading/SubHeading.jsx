import Image from "next/image";
import React from "react";
import { images } from "../../constants";

const SubHeading = () => (
  <div style={{ marginBottomm: "1rem" }}>
    <p className="p__cormorant">Title</p>
    <Image src={images.spoon} alt="spoon" className="spoon__img"></Image>
  </div>
);

export default SubHeading;
