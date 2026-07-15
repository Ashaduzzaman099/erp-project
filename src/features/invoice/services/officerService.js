import officers from "../data/officers";

const officerService = {
  getAll() {
    return officers;
  },

  getById(id) {
    return officers.find(
      (officer) => String(officer.id) === String(id)
    );
  },
};

export default officerService;