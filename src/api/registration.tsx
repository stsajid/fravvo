export const registerUser = async (payload: {
  fullName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  country: string;
  city: string;
  whyAttend: string;
}) => {
  const response = await fetch("http://localhost:1337/api/registrations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: payload,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.error?.message || "Registration failed");
  }

  return response.json();
};

export const getRegistrations = async () => {
  const response = await fetch("http://localhost:1337/api/registrations");

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData?.error?.message || "Failed to fetch registrations"
    );
  }

  const data = await response.json();
  return data?.data || [];
};
