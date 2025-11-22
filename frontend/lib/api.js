// frontend/lib/api.js
export const BACKEND_URL = "https://baristcoffeebackend.onrender.com/"; // your backend url

// CHAT MESSAGE
export async function sendChatMessage(message) {
  const res = await fetch(`${BACKEND_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  return res.json();
}

// FEEDBACK
export async function sendFeedback(data) {
  const res = await fetch(`${BACKEND_URL}/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// ADMIN LOGIN
export async function adminLogin(email, password) {
  const res = await fetch(`${BACKEND_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

// ADMIN GET FEEDBACKS
export async function getAllFeedbacks(token) {
  const res = await fetch(`${BACKEND_URL}/admin/feedbacks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}
