import { getImageUrl } from "@/lib/supabase";
import prisma from "../../../../../lib/prisma";

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: {
            Product: true,
          },
        },
      },
    });

    return categories;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProductsByDate() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        created_at: "desc",
      },
      select: {
        id: true,
        name: true,
        images: true,
        price: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    const response = products.map((item) => {
      return {
        ...item,
        image_url: getImageUrl(item.images[0], "products"),
      };
    });

    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProductsByOrder() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        orders: {
          _count: "desc",
        },
      },
      select: {
        id: true,
        name: true,
        images: true,
        price: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    const response = products.map((item) => {
      return {
        ...item,
        image_url: getImageUrl(item.images[0], "products"),
      };
    });

    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getBrands() {
  try {
    const brands = await prisma.brand.findMany({
      select: {
        id: true,
        logo: true,
      },
    });

    const response = brands.map((item) => {
      return {
        ...item,
        logo_url: getImageUrl(item.logo, "brands"),
      };
    });

    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}
