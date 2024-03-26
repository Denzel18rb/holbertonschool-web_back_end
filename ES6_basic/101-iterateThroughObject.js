export default function iterateThroughObject(reportWithIterator) {
  // Use the spread operator and join to concatenate employee names with a pipe separator.
  return [...reportWithIterator].join(' | ');
}
