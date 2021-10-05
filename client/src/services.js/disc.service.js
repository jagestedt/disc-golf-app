import http from '../http-common';

class DiscService {
  getAll() {
    return http.get('/disc');
  }

  get(id) {
    return http.get(`/disc/${id}`);
  }

  create(data) {
    return http.post('/disc', data);
  }

  update(id, data) {
    return http.put(`/disc/${id}`, data);
  }

  delete(id) {
    return http.delete(`/disc/${id}`);
  }

  deleteAll() {
    return http.delete(`/disc`);
  }

  findByName(name) {
    return http.get(`/disc?name=${name}`);
  }
}

export default new DiscService();
