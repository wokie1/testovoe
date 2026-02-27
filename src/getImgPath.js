const getImgPath = (fullUrl) => {
    const uploadIndex = fullUrl.indexOf('/upload/');
    if (uploadIndex !== -1) {
      return fullUrl.substring(uploadIndex);
    }
    return fullUrl;
  };
  
  export default getImgPath;