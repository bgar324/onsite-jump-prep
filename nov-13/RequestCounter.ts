// Prompt B (TS)

// “Build a RequestCounter class that tracks API hits.”

// Constructor:

// endpoint: string

// State:

// totalCount

// perDayCount: Map<string, number> (key = YYYY-MM-DD)

// Methods:

// recordHit(timestamp: Date): void

// getHitsToday(): number

// getTotal(): number

// resetAll(): void

// Twist:

// Add a method getReport() returning the last 7 days of counts in a sorted array of objects.

// Optional: build Jest tests verifying day-boundary behavior.

// Checkpoints:

// Reason out data modeling choices.

// Why Map over object?

// How to avoid off-by-one in date boundaries?

interface Report {
  date : string;
  count : number;
}

class RequestCounter {
  private endpoint: string;
  private totalCount : number;
  private perDayCount : Map<string, number>
  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.totalCount = 0;
    this.perDayCount = new Map<string, number>();
  }

  private formatDate(date: Date) : string {
    const year = date.getUTCFullYear()
    const month = String(date.getUTCMonth() + 1).padStart(2, '0')
    const day = String(date.getUTCDate()).padStart(2, '0')
    let formattedDate = `${year}-${month}-${day}`
    return formattedDate;
  }

  recordHit(timestamp : Date) : void {
    const dateString = this.formatDate(timestamp);
    this.totalCount++;  
    // study this
    // .get for getting the value in a Map 
    // .set for setting the value in a Map (key, value)
    const count = this.perDayCount.get(dateString) ?? 0 
    this.perDayCount.set(dateString, count + 1)
  }

  getTotal() : number {
    return this.totalCount;
  }

  getHitsToday() : number {
    const today = this.formatDate(new Date())
    return this.perDayCount.get(today) ?? 0;
  }

  resetAll() : void{
    this.totalCount = 0;
    this.perDayCount.clear();
  }

  getReport() : Report[] {
    const report : Report[] = [];
    const today = new Date();
    today.setUTCHours(0,0,0,0);

    for (let i = 0; i < 7; i++){
      const date = new Date(today.getTime())
      date.setUTCDate(today.getUTCDate() - i);
      const dateString = this.formatDate(date);

      const count = this.perDayCount.get(dateString) ?? 0;

      report.push ({
        date : dateString,
        count : count,
      })
    }

    return report.sort((a, b) => a.date.localeCompare(b.date))
  }

  // ___ [] => Number[] <- this array will have numbers
  // Point[] <- this array will have point objects
}
