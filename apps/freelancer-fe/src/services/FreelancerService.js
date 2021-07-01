import http from "../http-common"

class FreelancerDataService {
  getAll() {
    return http.get("/freelancer/");
  }

  get(id) {
    return http.get(`/freelancer/${id}`);
  }

  create(data) {
    return http.post("/freelancer/", data);
  }

  update(id, data) {
    return http.put(`/freelancer/${id}`, data);
  }

  delete(id) {
    return http.delete(`/freelancer/${id}`);
  }

  deleteAll() {
    return http.delete(`/freelancer`);
  }

  findByName(name) {
    return http.get(`/freelancer?name=${name}`);
  }
}

export default new FreelancerDataService();