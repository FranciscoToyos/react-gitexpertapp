
export const getGifs = async (category) => {
    const api_key = "PFGS2f0YJzguLBfyIfM0uUrl8k7GZv1U";
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${api_key}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    })
    
    return gifs;
  };