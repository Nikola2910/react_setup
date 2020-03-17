class Communicators {
  static baseURL = "https://users-cb280.firebaseio.com/people";

  static Fetch = () => {
    return fetch(Communicators.baseURL + ".json").then(response =>
      response.json()
    );
  };

  static Post = user => {
    return fetch(Communicators.baseURL + ".json", {
      method: "POST",
      body: JSON.stringify(user)
    });
  };

  static Delete = id => {
    return fetch(`${Communicators.baseURL}/${id}.json`, {
      method: "DELETE"
    });
  };

  static Put = (id, data) => {
    return fetch(`${Communicators.baseURL}/${id}.json`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  };
}

export { Communicators };
