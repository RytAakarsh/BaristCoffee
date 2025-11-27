// // frontend/lib/api.js
// export const BACKEND_URL = "https://baristcoffeebackend.onrender.com"; // your backend url

// // CHAT MESSAGE
// export async function sendChatMessage(message) {
//   const res = await fetch(`${BACKEND_URL}/chat`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ message }),
//   });
//   return res.json();
// }

// // FEEDBACK
// export async function sendFeedback(data) {
//   const res = await fetch(`${BACKEND_URL}/feedback`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// }

// // ADMIN LOGIN
// export async function adminLogin(email, password) {
//   const res = await fetch(`${BACKEND_URL}/admin/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   });
//   return res.json();
// }

// // ADMIN GET FEEDBACKS
// export async function getAllFeedbacks(token) {
//   const res = await fetch(`${BACKEND_URL}/admin/feedbacks`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.json();
// }


// frontend/lib/api.js

export const BACKEND_URL = "https://baristcoffeebackend.onrender.com"; // corrected URL

async function safeFetch(url, options = {}) {
  try {
    const res = await fetch(url, { ...options, cache: "no-store" });

    if (!res.ok) {
      console.error("API Error →", res.status, res.statusText);
      return { error: "server_error" };
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch failed →", err.message);
    return { error: "network_failed" };
  }
}

// CHAT

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
  return safeFetch(`${BACKEND_URL}/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

// ADMIN LOGIN
export async function adminLogin(email, password) {
  return safeFetch(`${BACKEND_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}

// ADMIN GET FEEDBACK
export async function getAllFeedbacks(token) {
  return safeFetch(`${BACKEND_URL}/admin/feedbacks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
