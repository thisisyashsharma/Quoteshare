const FIREBASE_DOMAIN = 'https://s22-auth-default-rtdb.firebaseio.com//quoteApp';

// export const getAllQuotes = async()=> {
export async function getAllQuotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = await response.json();
  if (!response.ok) {throw new Error(data.message || 'Could not fetch quotes.');}

  const transformedQuotes = [];
  for (const key in data) {  const quoteObj = {  id: key,  ...data[key],  };
  transformedQuotes.push(quoteObj);
  }
 return transformedQuotes;
}

// export const getSingleQuote = async(quoteId)=> {
export async function getSingleQuote(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) { throw new Error(data.message || 'Could not fetch quote.'); }

  const loadedQuote = { id: quoteId, ...data, };
  return loadedQuote;
}

export const addQuote = async(quoteData) => {
  // export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, { method: 'POST', body: JSON.stringify(quoteData), headers: { 'Content-Type': 'application/json', }, });
  const data = await response.json();

  if (!response.ok) {throw new Error(data.message || 'Could not create quote.');}
  return null;
}

// export const addComment = async(requestData)=> {
export async function addComment(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${ requestData.quoteId}.json`, {method: 'POST',body: JSON.stringify(requestData.commentData),headers: {'Content-Type': 'application/json',},});
  const data = await response.json();

  if (!response.ok) { throw new Error(data.message || 'Could not add comment.'); }
  return { commentId: data.name };
}

export const getAllComments = async(quoteId)=> {
// export async function getAllComments(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) { throw new Error(data.message || 'Could not get comments.'); }
  const transformedComments = [];

  for (const key in data) {
    const commentObj = { id: key, ...data[key], }; 
    transformedComments.push(commentObj);
  }
  return transformedComments;
}



//you have to think that what actions we are going to do with the database , and  surprise, you know how much actions it came out , its just 5
// 1. tofetch/get -  Single Quote (one ID),  All Comments(all IDs),  All Quotes(all IDs)
// 2. toSend  -  Single Quote (one ID),  Single Comment(one ID)
 