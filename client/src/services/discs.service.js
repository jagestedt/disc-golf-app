import http from '../http-common';

class DiscsDataService {
  getAll() {
    return http.get('/discs');
  }

  get(id) {
    return http.get(`/discs/${id}`);
  }

  create(data) {
    return http.post('/discs', data);
  }

  update(id, data) {
    return http.put(`/discs/${id}`, data);
  }

  delete(id) {
    return http.delete(`/discs/${id}`);
  }

  deleteAll() {
    return http.delete(`/discs`);
  }

  findByTitle(title) {
    return http.get(`/discs?title=${title}`);
  }
}

export default new DiscsDataService();
