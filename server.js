const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint cho Login
app.get("/auth/user/login", (req, res) => {
  return res.status(200).json({
    status: 200,
    data: {
      user: {
        id: 1,
        username: "admin1234",
        email: "admin@example.com",
        fullName: "Admin User",
      },
      token:
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEyMyIsInNjb3BlIjoiUk9MRV9BRE1JTiBQT1NUX0RBVEEgQVBQUk9WRV9QT1NUIFJFQURfREFUQSIsImlzcyI6Im51dHJpYXBwLmNvbSIsImV4cCI6MTcyOTExNDYzNywiaWF0IjoxNzI5MTExMDM3LCJqdGkiOiJhMTBkZmEzMC1lM2FhLTRmNWYtYjJiNS1lMjdlYjViNTA5YmQifQ.PSEtnDO6Zlr8OXbfZdLGYlAU1Dj1ODV896OE1js7R8SdR_poH8kBo7_evE55-S5XHoY6idtNqTY_WRY39cfhpg",
    },
    message: "Login successful",
  });
});

// Endpoint cho Login
app.post("/auth/user/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  // Kiểm tra thông tin đăng nhập ở đây (đặt mã kiểm tra thực tế)
  if (email === "a@a.com" && password === "123123") {
    // Trả về token giả lập
    return res.status(200).json({
      status: 200,
      data: {
        user: {
          id: 1,
          username: "admin1234",
          email: "admin@example.com",
          fullName: "Admin User",
        },
        token:
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEyMyIsInNjb3BlIjoiUk9MRV9BRE1JTiBQT1NUX0RBVEEgQVBQUk9WRV9QT1NUIFJFQURfREFUQSIsImlzcyI6Im51dHJpYXBwLmNvbSIsImV4cCI6MTcyOTExNDYzNywiaWF0IjoxNzI5MTExMDM3LCJqdGkiOiJhMTBkZmEzMC1lM2FhLTRmNWYtYjJiNS1lMjdlYjViNTA5YmQifQ.PSEtnDO6Zlr8OXbfZdLGYlAU1Dj1ODV896OE1js7R8SdR_poH8kBo7_evE55-S5XHoY6idtNqTY_WRY39cfhpg",
      },
      message: "Login successful",
    });
  }
  res.status(401).json({ message: "Invalid username or password" });
});

// Endpoint cho introspect
app.post("/auth/introspect", (req, res) => {
  const { token } = req.body;
  // Kiểm tra token ở đây
  if (token === "eyJhbGciOiJIUzUxMi...") {
    // Kiểm tra token hợp lệ
    return res.json({ valid: true });
  }
  res.status(401).json({ message: "Invalid token" });
});

// Endpoint cho logout
app.post("/auth/logout", (req, res) => {
  const { token } = req.body;
  // Thực hiện logout ở đây
  res.json({ message: "Logout successful" });
});

// Endpoint cho refreshToken
app.post("/auth/refresh", (req, res) => {
  const { token } = req.body;
  // Thực hiện refresh token ở đây
  res.json({ newToken: "new_token_example" });
});

// Bắt đầu server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
