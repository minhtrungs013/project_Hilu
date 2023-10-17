/**
 * Get the current date as a timestamp.
 *
 * @returns {number} The current date as a timestamp.
 */
export const CURRENT_DATE = () => {
    const today = new Date()
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return new Date(`${year}-${month}-${day}`).getTime();
}