function main(): void {
    const userLogData: UserLogData[] = getUserLogData();
    const monthlyLoggedInUsers: Map<string, Set<string>> = new Map();
    const monthlyActiveUsers: Map<string, Set<string>> = new Map();
  
    for (const userData of userLogData) {
      const { userId, logged_in, logged_out, lastSeenAt } = userData;
      const month: string = extractMonth(logged_in);
  
      if (!monthlyLoggedInUsers.has(month)) {
        monthlyLoggedInUsers.set(month, new Set());
        monthlyActiveUsers.set(month, new Set());
      }
  
      monthlyLoggedInUsers.get(month)!.add(userId);
  
      if (isActive(logged_in, logged_out, lastSeenAt, month)) {
        monthlyActiveUsers.get(month)!.add(userId);
      }
    }
  
    for (const [month, loggedInUsers] of monthlyLoggedInUsers) {
      const activeUsers: Set<string> = monthlyActiveUsers.get(month) || new Set();
  
      console.log(`For month ${month}:`);
      console.log(`Monthly logged-in users: ${loggedInUsers.size}`);
      console.log(`Monthly active users: ${activeUsers.size}`);
    }
  }
  
  function getUserLogData(): UserLogData[] {
    const userLogData: UserLogData[] = [
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
      // Other user log data entries...
    ];
  
    return userLogData;
  }
  
  function extractMonth(timestamp: string): string {
    return timestamp.substring(0, 7); 
  }
  
  function isActive(logged_in: string, logged_out: string, lastSeenAt: string, month: string): boolean {
    return (
      extractMonth(logged_in) === month ||
      (extractMonth(lastSeenAt) === month && extractMonth(logged_out) === month)
    );
  }

  interface UserLogData {
    userId: string;
    logged_in: string;
    logged_out: string;
    lastSeenAt: string;
  }
  
  main();
