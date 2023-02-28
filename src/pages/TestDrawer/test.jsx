const limitPerPage = 20;
const apiUrl = `${process.env.DOMAIN}/connect/zapier/triggers/callback`;
const headers = {
  'Accept': 'application/json',
  'X-API-KEY': bundle.authData.api_key
};
let lastCursor = null;
const getContent = async (cursor) => {
  const actualUrl = `${apiUrl}?cursor=${cursor}&limit=${limitPerPage}`;
  const rawResponse = await fetch(actualUrl, { headers });
  return rawResponse.json();
};

const getEntireContentList = async (cursor) => {
  const results = await getContent(cursor);
  console.log("Retrieving data from API for cursor : " + cursor);
  if (results.metadata.nextCursor) {
    const nextResults = await getEntireContentList(results.metadata.nextCursor);
    return [...results.items, ...nextResults];
  } else {
    return results.items;
  }
};
const results = await getEntireContentList(lastCursor);
return { result: results };

