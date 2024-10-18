const formatDateTime = {
  formatDate: (dateString: string): any => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return null;
    }
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },

  formatDatePlusOneYear(dateString: string): any {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return false;
    }
    date.setFullYear(date.getFullYear() + 1);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  },
};
export default formatDateTime;
