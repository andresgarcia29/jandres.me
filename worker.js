// Serves the static build; only job is one canonical origin: https://jandres.me.
export default {
  fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.jandres.me" || url.protocol === "http:") {
      url.hostname = "jandres.me";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
