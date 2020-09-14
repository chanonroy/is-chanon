/**
 * Determine whether you are spelling 'Chanon' correctly
 */
export default function isChanon(str: string): boolean {
  if (typeof str !== 'string') return false
  return str.trim().toLowerCase() === 'chanon' || str.trim().toLowerCase() === 'ชานน'
}
