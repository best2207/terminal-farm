export interface UserState {
  gid: number
  name: string
  level: number
  gold: number
  exp: number
  openId: string
}

export interface OperationLimit {
  id: number
  dayTimes: number
  dayTimesLimit: number
  dayExpTimes: number
  dayExpTimesLimit: number
}
