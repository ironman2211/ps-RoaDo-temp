function main() {
    const userLogData = getUserLogData();
    const monthlyLoggedInUsers = new Map();
    const monthlyActiveUsers = new Map();
  
  
    for (const userData of userLogData) {
      const { userId, logged_in, logged_out, lastSeenAt } = userData;
      const month = extractMonth(logged_in);
  
      if (!monthlyLoggedInUsers.has(month)) {
        monthlyLoggedInUsers.set(month, new Set());
        monthlyActiveUsers.set(month, new Set());
      }
  
      monthlyLoggedInUsers.get(month).add(userId);
  
      if (isActive(logged_in, logged_out, lastSeenAt, month)) {
        monthlyActiveUsers.get(month).add(userId);
      }
    }
  
    for (const [month, loggedInUsers] of monthlyLoggedInUsers) {
      const activeUsers = monthlyActiveUsers.get(month) || new Set();
  
      console.log(`For month ${month}:`);
      console.log(`Monthly logged-in users: ${loggedInUsers.size}`);
      console.log(`Monthly active users: ${activeUsers.size}`);
    }
  }
  
  function getUserLogData() {
    const userLogData = [
      {
        userId: "user1",
        logged_in: "2024-01-05",
        logged_out: "2024-01-10",
        lastSeenAt: "2024-01-10",
      },
      {
        userId: "user1",
        logged_in: "2024-01-05",
        logged_out: "2024-01-11",
        lastSeenAt: "2024-01-15",
      },
      {
        userId: "user1",
        logged_in: "2024-01-05",
        logged_out: "2024-01-18",
        lastSeenAt: "2024-01-20",
      },
      {
        userId: "user2",
        logged_in: "2024-01-06",
        logged_out: "2024-01-11",
        lastSeenAt: "2024-01-12",
      },
      {
        userId: "user3",
        logged_in: "2024-01-07",
        logged_out: "2024-01-13",
        lastSeenAt: "2024-01-14",
      },
      {
        userId: "user4",
        logged_in: "2024-01-08",
        logged_out: "2024-01-15",
        lastSeenAt: "2024-01-16",
      },
      {
        userId: "user5",
        logged_in: "2024-01-09",
        logged_out: "2024-01-12",
        lastSeenAt: "2024-01-17",
      },
      {
        userId: "user1",
        logged_in: "2024-01-15",
        logged_out: "2024-01-20",
        lastSeenAt: "2024-01-25",
      },
      {
        userId: "user1",
        logged_in: "2024-02-05",
        logged_out: "2024-02-10",
        lastSeenAt: "2024-02-10",
      },
      {
        userId: "user1",
        logged_in: "2024-02-15",
        logged_out: "2024-02-20",
        lastSeenAt: "2024-02-25",
      },
      {
        userId: "user2",
        logged_in: "2024-01-06",
        logged_out: "2024-01-11",
        lastSeenAt: "2024-01-12",
      },
      {
        userId: "user2",
        logged_in: "2024-02-06",
        logged_out: "2024-02-11",
        lastSeenAt: "2024-02-12",
      },
      {
        userId: "user3",
        logged_in: "2024-01-07",
        logged_out: "2024-01-13",
        lastSeenAt: "2024-01-14",
      },
      {
        userId: "user3",
        logged_in: "2024-02-07",
        logged_out: "2024-02-13",
        lastSeenAt: "2024-02-14",
      },
      {
        userId: "user4",
        logged_in: "2024-01-08",
        logged_out: "2024-01-15",
        lastSeenAt: "2024-01-16",
      },
      {
        userId: "user4",
        logged_in: "2024-02-08",
        logged_out: "2024-02-15",
        lastSeenAt: "2024-02-16",
      },
  
      {
        userId: "user6",
        logged_in: "2024-01-10",
        logged_out: "2024-01-14",
        lastSeenAt: "2024-01-19",
      },
      {
        userId: "user7",
        logged_in: "2024-01-11",
        logged_out: "2024-01-16",
        lastSeenAt: "2024-01-21",
      },
      {
        userId: "user8",
        logged_in: "2024-01-12",
        logged_out: "2024-01-17",
        lastSeenAt: "2024-01-22",
      },
      {
        userId: "user9",
        logged_in: "2024-01-13",
        logged_out: "2024-01-18",
        lastSeenAt: "2024-01-23",
      },
      {
        userId: "user10",
        logged_in: "2024-01-14",
        logged_out: "2024-01-19",
        lastSeenAt: "2024-01-24",
      },
    ];
  
    return userLogData;
  }
  
  function extractMonth(timestamp) {
    return timestamp.substring(0, 7); 
  }
  
  function isActive(logged_in, logged_out, lastSeenAt, month) {
    return (
      extractMonth(logged_in) === month ||
      (extractMonth(lastSeenAt) === month && extractMonth(logged_out) === month)
    );
  }
  
  main();
  