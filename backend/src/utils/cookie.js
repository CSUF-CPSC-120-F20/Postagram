const getCookie = (req) => {
  const cookies = req.headers.cookie;
  if (!cookies) return [];
  return cookies.split(';').map((cookie) => cookie.trim());
};


export default getCookie;
