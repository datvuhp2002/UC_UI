const formatDateTime = {
  formatDate: (dateString: string): string => {
    const date = new Date(dateString);
    // Kiểm tra nếu date không hợp lệ
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },

  formatDatePlusOneYear(dateString: string): string {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }
    date.setFullYear(date.getFullYear() + 1);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  },
};
export default formatDateTime;
