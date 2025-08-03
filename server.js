const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Dummy user data
app.get('/api/user', (req, res) => {
  res.json({
    name: 'Shrishail Patil',
    referralCode: 'shrishail2025',
    totalDonations: 3200,
    rewards: ['T-shirt', 'Certificate', 'Gift Card']
  });
});

// Dummy leaderboard data
app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: 'Shrishail Patil', referralCode: 'shrishail2025', totalDonations: 3200 },
    { name: 'Amit Kumar', referralCode: 'amit2025', totalDonations: 2500 },
    { name: 'Priya Singh', referralCode: 'priya2025', totalDonations: 1800 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});