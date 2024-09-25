import axios from "axios";
import { BASE_URL } from "./constants";

const getImages = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/generate_images`);
    return resp?.data;
  } catch (err) {
    console.error(err);
  }
};

const getGasFee = async (user_address: string, image_id: number) => {
  try {
    const resp = await axios.post(`${BASE_URL}/gas_fee`, null, {
      params: {
        user_address,
        image_id,
      },
    });
    return resp?.data;
  } catch (err) {
    console.error(err);
  }
};

const getUserIpAddress = async () => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    return response?.data?.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return null;
  }
};

const initiatePayment = async (
  image_id: number,
  price: number,
  ip_address: string,
) => {
  try {
    const resp = await axios.post(`${BASE_URL}/auth_card`, null, {
      params: {
        image_id,
        price,
        ip_address,
      },
    });
    return resp?.data;
  } catch (err) {
    throw err;
  }
};

const handlePayment = async (imageId: number, price: number) => {
  const userIpAddress = await getUserIpAddress();

  if (userIpAddress) {
    const paymentResponse = await initiatePayment(
      imageId,
      price,
      userIpAddress,
    );

    return paymentResponse;
  }
};

const mintNft = async (image_id: number, user_address: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/mint_image`, null, {
      params: {
        image_id,
        user_address,
      },
    });

    return response?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getImages, getGasFee, handlePayment, mintNft };
