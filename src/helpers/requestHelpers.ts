import { cookieMaster } from '@helpers/authHelpers';
import { REQUEST_URLS } from '@constants/requestsUrls';
//TODO after we understand all request models we can typed body, for time - any
export const postRequest = async (url: string, body: any): Promise<any> => {
  try {
    const answer = await fetch(`${REQUEST_URLS.baseUrl}${url}`, {
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

export const putRequest = async (url: string, body: any): Promise<any> => {
  try {
    const answer = await fetch(`${REQUEST_URLS.baseUrl}${url}`, {
      body: JSON.stringify(body), 
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${cookieMaster.getTokenFromCookie()}`,
      },
    });
    const parsedAnswer = await answer.json();
    return { status: answer.status, ...parsedAnswer };
  } catch (e) {
    return { status: 400, message: 'bad_request' };
  }
};
