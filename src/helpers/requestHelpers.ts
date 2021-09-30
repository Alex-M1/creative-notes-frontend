//TODO after we understand all request models we can typed body, for time - any
export const postRequest = async (url: string, body: any): Promise<any> => {
  try {
    const answer = await fetch(url, {
      body: JSON.stringify(body), 
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const parsedAnswer = await answer.json();
    return { status: answer.status, ...parsedAnswer };
  } catch (e) {
    console.error(e);
  }
};
