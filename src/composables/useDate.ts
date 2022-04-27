import { format } from 'date-fns'

export function formatDate(date: Date): string {
    let formattedDate = format(new Date(date), 'do MMM yyyy')

    return formattedDate
}
