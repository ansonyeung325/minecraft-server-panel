import moment from 'moment'

export class Logger {
  constructor(title: string) {
    this.title = title
  }

  title: string

  info(message: string): void {
    console.log(`[${now(new Date())}][${this.title}/INFO] ${message}`)
  }
}

export const now = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // Adding 1 because months are zero-indexed
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
