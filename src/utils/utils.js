export const todayIs = new Date().toLocaleDateString()
const tomorrow = new Date()
tomorrow.setDate(new Date().getDate() + 1)
export const tomorrowIs = tomorrow.toLocaleDateString()