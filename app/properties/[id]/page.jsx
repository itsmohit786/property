import connectDB from "@/config/database";
import Property from "@/models/Property";

const PropertyPage = async ({ params }) => {
  const { id } = await params;
  await connectDB();
  const property = await Property.findById(id).lean();
  console.log(`PROPERTY: `, property);
  return <div>Property Page: {property.name}</div>;
};

export default PropertyPage;
