import http from "../services/http-common";

export class musiciansServices{
  getAll() {
    return http.get("/musicians");
  }

  getById(id) {
    return http.get(`/musicians/${id}`);
  }

  create(data) {
    return http.post("/musicians", data);
  }

  update(id, data) {
    return http.put(`/musicians/${id}`, data);
  }

  delete(id) {
    return http.delete(`/musicians/${id}`);
  }

}
