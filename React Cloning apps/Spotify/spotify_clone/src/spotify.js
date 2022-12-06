//authEndpoint - authenticate url in spotify.
export const authEndpoint = "https://accounts.spotify.com/authorize";
// redirectUri is the uri that we provided to spotify api (our localhost)
const redirectUri = "https://cloning-musicspotify.web.app";
//clientId - spotify provided clientId in api
const clientId = "1991a30dc6e9473a969cedcd612c0da9";

//scopes - permissions that we need to ask spotify web api;
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];

//clean Url after authentication
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}

//loginUrl - is the final url for spotify authentication
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;