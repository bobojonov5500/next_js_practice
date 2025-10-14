import React from "react";

const CategoryDetails = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  console.log(slug);
  return <div className="flex w-full md:flex-row flex-col">salom</div>;
};

export default CategoryDetails;
