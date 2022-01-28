export const getStatusColor = (status) => {
  const colors = {
    DELIVERED: "#1ac45e", // GREEN
    DELIVERED_TO_SENDER: "#ff0000", // RED
    DEFAULT: "#ff971a", // ORANGE
  };
  return colors[status] || colors["DEFAULT"];
};
