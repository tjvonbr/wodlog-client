const dev = {
  base: "http://localhost:8888",
  workouts: "http://localhost:8888/workouts"
}

const production = {
  base: "https://wodlog-server.herokuapp.com",
  workouts: "https://wodlog-server.herokuapp.com/workouts"
}

export const config = process.env.NODE_ENV === 
  "development" ? dev : production