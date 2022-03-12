function getData(url) {
    let data;
    let error;

    fetch(url)
        .then((res) => res.json())
        .then((json) => (data = json))
        .catch((err) => (error = err))

    return { data, error }
}

export default getData