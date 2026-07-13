import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request, { params }) => {
  try {
    const { product_id } = await params;

    await connectDB();
    const property = await Property.findById(product_id);

    if (!property) return new Response("Property not found!", { status: 404 });

    return new Response(property, {
      status: 200,
    });
  } catch (error) {
    return new Response("Somthing went wrong", { status: 500 });
  }
};
