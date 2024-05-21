export function getDocumentsByCategory(docs, category) {
  return docs.filter((doc) => doc.category === category);
}

export function getDocumentsByAuthor(docs, author) {
  return docs.filter((doc) => encodeURI(doc.author) === author);
}

export function getDocumentsByTag(docs, tag) {
  return docs.filter((doc) => doc.tags.some((inputTag) => inputTag === tag));
}

// encodeURI
// function encodeURI(uri: string): string
// Encodes a text string as a valid Uniform Resource Identifier (URI)

// @param uri — A value representing an unencoded URI.

// some
// ReadonlyArray.some(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean
// A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array.

// Determines whether the specified callback function returns true for any element of an array.
