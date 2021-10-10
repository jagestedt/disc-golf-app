import http from "../http-common";

const getAll = () => {
    return http.get("/discs");
};

const get = id => {
    return http.get(`/discs/${id}`);
};

const create = data => {
    return http.post("/discs", data);
};

const update = (id, data) => {
    return http.put(`/discs/${id}`, data);
};

const remove = id => {
    return http.delete(`/discs/${id}`);
};

const DiscDataService = {
    getAll,
    get,
    create,
    update,
    remove
}

export default DiscDataService;